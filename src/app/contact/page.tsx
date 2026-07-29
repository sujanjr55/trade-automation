import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { config } from "@/lib/config";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <section className="py-24 bg-background flex-1">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-extrabold text-foreground mb-8 text-center">Contact Us</h1>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-card p-8 rounded-2xl border border-border shadow-lg text-center flex flex-col items-center gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-bold text-lg">Phone</h3>
              <p className="text-muted-foreground">{config.phone}</p>
            </div>
            
            <div className="bg-card p-8 rounded-2xl border border-border shadow-lg text-center flex flex-col items-center gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-bold text-lg">Email</h3>
              <p className="text-muted-foreground">support@tradeautomation.ai</p>
            </div>
            
            <div className="bg-card p-8 rounded-2xl border border-border shadow-lg text-center flex flex-col items-center gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-bold text-lg">Office</h3>
              <p className="text-muted-foreground">100 Innovation Drive<br/>Austin, TX 78701</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
