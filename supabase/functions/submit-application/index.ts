import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, phone, email, city, age, occupation } = await req.json();

    // Validate
    if (!name || !phone || !email || !city || !age || !occupation) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Save to database
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const { error: dbError } = await supabase.from("applications").insert({
      name,
      phone,
      email,
      city,
      age: parseInt(age),
      occupation,
    });

    if (dbError) {
      console.error("DB error:", dbError);
      return new Response(
        JSON.stringify({ error: "Failed to save application" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Send WhatsApp via Twilio
    const accountSid = Deno.env.get("TWILIO_ACCOUNT_SID");
    const authToken = Deno.env.get("TWILIO_AUTH_TOKEN");
    const twilioFrom = Deno.env.get("TWILIO_WHATSAPP_NUMBER");
    const advisorTo = Deno.env.get("ADVISOR_WHATSAPP_NUMBER");

    if (accountSid && authToken && twilioFrom && advisorTo) {
      const message = `New Consultant Application\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nCity: ${city}\nAge: ${age}\nOccupation: ${occupation}`;

      const twilioUrl = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`;
      const body = new URLSearchParams({
        From: `whatsapp:${twilioFrom}`,
        To: `whatsapp:${advisorTo}`,
        Body: message,
      });

      const twilioRes = await fetch(twilioUrl, {
        method: "POST",
        headers: {
          Authorization: `Basic ${btoa(`${accountSid}:${authToken}`)}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: body.toString(),
      });

      const twilioData = await twilioRes.text();
      if (!twilioRes.ok) {
        console.error("Twilio error:", twilioData);
      } else {
        console.log("WhatsApp message sent successfully");
      }
    } else {
      console.warn("Twilio credentials not fully configured, skipping WhatsApp");
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Application submitted successfully. Our advisor will contact you shortly.",
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
