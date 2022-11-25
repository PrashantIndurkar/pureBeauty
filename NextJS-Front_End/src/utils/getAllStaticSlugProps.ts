export const getAllStaticSlugProps = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getAllStaticSlugProps`
  );
  const data = await response.json();
  return data.allStaticSlugProps.map((index: any) => ({
    params: { productSlug: index.slug.current },
  }));

  //   console.log(data.allStaticIdProps);
  //   return paramsArray;
};
