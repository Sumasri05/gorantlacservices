import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => (
  <button
    onClick={() => window.open("https://wa.me/919346622469?text=I%20am%20interested", "_blank")}
    className="fixed bottom-6 right-6 z-50 bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 cursor-pointer"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle size={28} />
  </button>
);

export default FloatingWhatsApp;
