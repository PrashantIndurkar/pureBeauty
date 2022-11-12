// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../../sanity";

const query = groq`*[_type == "category"] {
_id,
image[]{
  asset->
},
title
}`;

// type Data = {
//   categories: Category[];
// };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const categories = await sanityClient.fetch(query);
  console.log("GET categories");
  res.status(200).json({ categories });
}
