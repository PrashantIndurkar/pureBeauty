import { FaProductHunt } from "react-icons/fa";

export default {
  name: "product",
  title: "Products",
  type: "document",
  icon: FaProductHunt,
  fields: [
    {
      name: "title",
      title: "Products Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "image",
      title: "Image",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
    {
      name: "categories",
      title: "Categories",
      type: "reference",
      to: [{ type: "categories" }],
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
  ],
};
