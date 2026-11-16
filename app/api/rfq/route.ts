import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { companyName, buyerName, email, phone, product, volumeDrums, incoterms, notes } = body;

    // Basic validation
    if (!companyName || !email || !product) {
      return NextResponse.json(
        { success: false, message: 'Please provide company name, email, and product selection.' },
        { status: 400 }
      );
    }

    // Generate unique RFQ tracking identifier
    const rfqId = `RFQ-RB-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;

    // NOTE: Database storage (Prisma, PostgreSQL, MongoDB, etc.) will be connected here in the next phase.
    console.log('[RFQ Received]', {
      rfqId,
      timestamp: new Date().toISOString(),
      companyName,
      buyerName,
      email,
      phone,
      product,
      volumeDrums,
      incoterms,
      notes
    });

    return NextResponse.json({
      success: true,
      rfqId,
      message: `Quotation request registered under Reference ${rfqId}. Our Export Desk will issue formal CIF/FOB proforma within 4 business hours.`,
      details: {
        company: companyName,
        rfqId,
        date: new Date().toLocaleDateString('en-GB')
      }
    });
  } catch (error) {
    console.error('RFQ Error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error while registering inquiry.' },
      { status: 500 }
    );
  }
}
