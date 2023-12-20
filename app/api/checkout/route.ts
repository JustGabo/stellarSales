import { NextResponse, NextRequest } from "next/server";
import { Stripe } from "stripe";

export function GET() {
  return NextResponse.json({
    message: "hello world",
  });
}


export async function POST(req: NextRequest, res: NextResponse) {
  const { card, expdate, cvv, name } = await req.json();

  if (card.length < 14 || card.length > 17) {
    console.log("invalid card");
    return NextResponse.json(
      { message: "Invalid card number", status: 400 },
      { status: 400 }
    );
  } else if (expdate.length < 4 || expdate.length > 4) {
    console.log("invalid exp date");
    return NextResponse.json({ message: "Invalid exp date", status: 400 }, { status: 400 });
  } else if (cvv.length < 3 || cvv.length > 3) {
    console.log("invalid cvv");
    return NextResponse.json({ message: "Invalid cvv", status: 400 }, { status: 400 });
  } else if (name == "") {
    console.log("invalid name");
    return NextResponse.json({ message: "Invalid name", status: 400 }, { status: 400 });
  } else {
    console.log("all right");
    return NextResponse.json(
      { message: "Everything is ok", status: 200 },
      { status: 200 }
    );
  }
  //   return NextResponse.json({messasge: "please enter a title"},{status: 400});
}

// if(card && expdate && cvv && name){
//     console.log('all right')
//     return NextResponse.json({message: 'payment revieved', card, expdate, cvv, name}, {status: 200})}
