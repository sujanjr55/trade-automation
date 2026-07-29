import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

export default function PrivacyPolicy() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <section className="py-24 bg-background flex-1">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-extrabold text-foreground mb-8">Privacy Policy</h1>
          <div className="prose prose-lg dark:prose-invert">
            <p className="text-muted-foreground mb-4">Last Updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">1. Information We Collect</h2>
            <p className="text-muted-foreground mb-4">
              We collect information you provide directly to us when you fill out forms, request support, or communicate with us. This includes your name, email address, phone number, business name, and any other information you choose to provide.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. SMS Communication (TCPA & 10DLC)</h2>
            <p className="text-muted-foreground mb-4">
              By providing your phone number and opting in, you consent to receive SMS messages from TradeAutomation AI for transactional, informational, and marketing purposes. 
              <strong> You can opt-out at any time by replying STOP to any message.</strong> We do not sell or share your phone number with third parties for their own marketing purposes.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">
              We use the information we collect to provide, maintain, and improve our services, communicate with you, and send you technical notices and support messages.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
