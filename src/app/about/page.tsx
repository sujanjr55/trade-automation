import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Zap } from "lucide-react";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <section className="py-24 bg-background flex-1">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center shadow-lg">
              <Zap className="w-6 h-6 text-accent-foreground" />
            </div>
            <h1 className="text-4xl font-extrabold text-foreground">About TradeAutomation AI</h1>
          </div>
          <div className="prose prose-lg dark:prose-invert">
            <p className="text-xl text-muted-foreground mb-8 font-medium">
              We are on a mission to ensure no US trade contractor ever loses a job to a missed call again.
            </p>
            <p className="text-muted-foreground mb-4">
              For years, HVAC technicians, plumbers, roofers, and electricians have struggled with the same problem: you can&apos;t answer the phone when you&apos;re under a house, on a roof, or talking to a customer.
            </p>
            <p className="text-muted-foreground mb-4">
              But in today&apos;s fast-paced world, if you don&apos;t answer, the customer immediately calls the next person on Google.
            </p>
            <p className="text-muted-foreground mb-4">
              TradeAutomation AI was built specifically to solve this. Our Speed-to-Lead engine instantly texts back missed callers in under 3 seconds, engages them in a natural conversation, and books them directly onto your calendar.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
