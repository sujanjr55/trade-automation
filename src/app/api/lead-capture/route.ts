import { NextResponse } from "next/server";
import { config } from "@/lib/config";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const {
      fullName,
      businessName,
      phone,
      email,
      tradeType,
      estimatedLostRevenue
    } = data;

    // Validate minimal required fields
    if (!fullName || !phone) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Payload Dispatcher: Posts structured JSON directly to a GoHighLevel (GHL) Webhook URL
    const webhookUrl = config.ghlWebhookUrl;

    // If it's the placeholder URL, skip the actual fetch to avoid errors in dev/demo mode
    if (!webhookUrl || webhookUrl.includes("services.leadconnectorhq.com/hooks/.../...")) {
      console.log("Mock Webhook Dispatch:", data);
      return NextResponse.json(
        { success: true, message: "Lead captured successfully (Mock Mode)" },
        { status: 200 }
      );
    }

    // Actual Webhook Dispatch
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName,
        businessName,
        phone,
        email,
        tradeType,
        estimatedLostRevenue,
        source: "TradeAutomation Website",
        timestamp: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error(`GHL Webhook failed with status: ${response.status}`);
    }

    return NextResponse.json(
      { success: true, message: "Lead captured successfully" },
      { status: 200 }
    );
    
  } catch (error) {
    console.error("Lead Capture Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error processing lead" },
      { status: 500 }
    );
  }
}
