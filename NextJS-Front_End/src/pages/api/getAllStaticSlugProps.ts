import { groq } from "next-sanity";
import { NextApiRequest, NextApiResponse } from "next";
import { sanityClient } from "../../../sanity";

const query = groq`*[_type == "product"]{
  slug,
}
`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const allStaticSlugProps = await sanityClient.fetch(query);
  res.status(200).json({ allStaticSlugProps });
}
