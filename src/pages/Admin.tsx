import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";
import { ArrowLeft, Users, RefreshCw } from "lucide-react";

interface Application {
  id: string;
  name: string;
  phone: string;
  email: string;
  city: string;
  age: number;
  occupation: string;
  created_at: string;
}

const Admin = () => {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchApplications = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("applications")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setApplications(data as Application[]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="section-container py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft size={24} />
            </Link>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground font-display">Admin Dashboard</h1>
          </div>
          <button onClick={fetchApplications} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <RefreshCw size={16} /> Refresh
          </button>
        </div>

        {/* Stats */}
        <div className="mb-8">
          <div className="bg-card card-elevated rounded-xl p-6 inline-flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center">
              <Users size={24} className="text-primary-foreground" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Applications</p>
              <p className="text-3xl font-bold text-foreground">{applications.length}</p>
            </div>
          </div>
        </div>

        {/* Table */}
        {loading ? (
          <p className="text-muted-foreground text-center py-12">Loading...</p>
        ) : applications.length === 0 ? (
          <p className="text-muted-foreground text-center py-12">No applications yet.</p>
        ) : (
          <div className="bg-card card-elevated rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted">
                    <th className="text-left p-4 font-semibold text-foreground">Name</th>
                    <th className="text-left p-4 font-semibold text-foreground">Phone</th>
                    <th className="text-left p-4 font-semibold text-foreground">Email</th>
                    <th className="text-left p-4 font-semibold text-foreground">City</th>
                    <th className="text-left p-4 font-semibold text-foreground">Age</th>
                    <th className="text-left p-4 font-semibold text-foreground">Occupation</th>
                    <th className="text-left p-4 font-semibold text-foreground">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {applications.map((app) => (
                    <tr key={app.id} className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors">
                      <td className="p-4 text-foreground font-medium">{app.name}</td>
                      <td className="p-4 text-muted-foreground">{app.phone}</td>
                      <td className="p-4 text-muted-foreground">{app.email}</td>
                      <td className="p-4 text-muted-foreground">{app.city}</td>
                      <td className="p-4 text-muted-foreground">{app.age}</td>
                      <td className="p-4 text-muted-foreground">{app.occupation}</td>
                      <td className="p-4 text-muted-foreground whitespace-nowrap">
                        {new Date(app.created_at).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
