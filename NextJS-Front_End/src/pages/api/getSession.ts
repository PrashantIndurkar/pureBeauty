import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(`${process.env.STRIPE_SECRET_KEY}`, {
  apiVersion: "2022-11-15",
});

// Stripe Secret Key
// const stripe: Stripe = require("stripe")();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const sessionId = req.query.session_id as string;
  const session = await stripe.checkout.sessions.listLineItems(sessionId);
  res.status(200).json({ session });
}
