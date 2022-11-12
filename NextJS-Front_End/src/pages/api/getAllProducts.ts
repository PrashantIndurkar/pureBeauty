import { groq } from "next-sanity";
import { NextApiRequest, NextApiResponse } from "next";
import { sanityClient } from "../../../sanity";

const query = groq`*[_type == "product"]{
    _id,
    category,
    image,
    price,
    title,
    slug
  }
  `;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const allProducts = await sanityClient.fetch(query);
  console.log("get All Products");
  res.status(200).json({ allProducts });
}
