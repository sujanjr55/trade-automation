import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

export default function Terms() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <section className="py-24 bg-background flex-1">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-extrabold text-foreground mb-8">Terms of Service</h1>
          <div className="prose prose-lg dark:prose-invert">
            <p className="text-muted-foreground mb-4">Last Updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">1. Agreement to Terms</h2>
            <p className="text-muted-foreground mb-4">
              By accessing our website and utilizing our services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, then you may not access our service.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. Service Description</h2>
            <p className="text-muted-foreground mb-4">
              TradeAutomation AI provides automated communication and booking tools, including missed call text-back and webchat interfaces, specifically designed for US trade contractors.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. Guarantee Policy</h2>
            <p className="text-muted-foreground mb-4">
              Our 30-Day Risk-Free Guarantee states that if our system does not capture at least 3 missed jobs in your first 30 days of active service, we will refund 100% of your setup fee. To qualify, you must integrate our system as instructed and direct your missed calls to our provided number.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
