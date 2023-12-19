import { useState, useEffect } from "react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { fetchLineItems } from "../utils/fetchLineItems";
import pureBeautyLogo from "/public/pureBeautyLogo.png";

interface Props {
  products: StripeProduct[];
}

const Success = ({ products }: Props) => {
  const [groupedItemsFromStripe, setGroupedItemsFromStripe] = useState(
    {} as { [key: string]: StripeProduct[] }
  );

  // combining the products with the same id
  useEffect(() => {
    const groupedItems = products.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);

      return results;
    }, {} as { [key: string]: StripeProduct[] });
    setGroupedItemsFromStripe(groupedItems);
  }, [products]);

  //END combining the products with the same id

  const router = useRouter();
  const { session_id } = router.query;

  const subtotal = products.reduce(
    (acc, product) => acc + product.price.unit_amount / 100,
    0
  );

  return (
    <>
      <Head>
        <title>Order History - pureBeauty</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="bg-PB_white font-inter">
        <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 sm:py-24">
          <div className="max-w-xl space-y-6">
            <h1 className="text-3xl font-extrabold tracking-tight text-PB_black">
              Thanks you for your order! 🙏
            </h1>
            <h1 className="text-2xl font-bold tracking-tight text-[#3e3c3c]">
              Orders History
            </h1>
            <p className="mt-2 text-sm text-PB_darkGray">
              Check your order history below. You can also view your orders and
              you can track your products using order ID
            </p>
          </div>

          <div className="mt-12 space-y-16 sm:mt-16">
            <section>
              <div className="space-y-1 md:flex md:items-baseline md:space-y-0 md:space-x-4">
                <h2 className="text-lg font-lite text-PB_black md:flex-shrink-0">
                  <span className="font-bold">Order</span> #
                  {session_id?.slice(-8)}
                </h2>
                <div className="space-y-5 md:flex-1 md:min-w-0 sm:flex sm:items-baseline sm:justify-between sm:space-y-0">
                  <p className="text-sm font-medium text-PB_darkGray">
                    Todays Orders
                  </p>
                  <div className="flex text-sm font-medium">
                    <Link
                      href="/"
                      className="text-PB_darkBlue hover:text-PB_blue"
                    >
                      Back to Home
                    </Link>
                    {/* <div className="border-l border-gray-200 ml-4 pl-4 sm:ml-6 sm:pl-6">
                  <a href="#" className="text-PB_darkBlue hover:text-PB_blue">
                    View Invoice
                  </a>
                </div> */}
                  </div>
                </div>
              </div>

              <div className="mt-6 -mb-6 flow-root border-t border-PB_green divide-y divide-gray-200">
                {Object.entries(groupedItemsFromStripe).map(([key, items]) => (
                  <div key={key}>
                    <div className="py-6 sm:flex">
                      <div className="flex space-x-4 sm:min-w-0 sm:flex-1 sm:space-x-6 lg:space-x-8">
                        <img
                          src={pureBeautyLogo.src}
                          alt="pure beauty logo"
                          className="flex-none w-20 h-20 rounded-md object-center object-cover sm:w-48 sm:h-48"
                        />
                        <div className="pt-1.5 min-w-0 flex flex-col gap-y-4 flex-1 sm:pt-0">
                          <h3 className="text-sm font-medium text-gray-900">
                            <a href="#">{items[0]?.description}</a>
                          </h3>
                          <p className="text-sm text-PB_darkGray truncate">
                            <span>Quantity: {items[0]?.quantity}</span>
                          </p>
                          <p className="mt-1 font-semibold text-lg text-PB_black">
                            &#8377;{items[0]?.price.unit_amount! / 100}
                          </p>
                        </div>
                      </div>
                      <div className="mt-6 space-y-4 sm:mt-0 sm:ml-6 sm:flex-none sm:w-40">
                        <Link
                          //   href={`/products/${slug}`}
                          href={`/products/matte-as-hell-crayon-lipstick`}
                          legacyBehavior
                        >
                          <button
                            type="button"
                            className="w-full flex items-center justify-center bg-PB_darkGreen py-2 px-2.5 transition-all duration-150  rounded-md shadow-sm text-sm font-medium text-PB_white hover:bg-[#576f4d] sm:w-full sm:flex-grow-0 border border-PB_darkGreen"
                          >
                            Buy again
                          </button>
                        </Link>
                        <Link href={`/products`} legacyBehavior>
                          <button
                            type="button"
                            className="w-full flex items-center justify-center bg-PB_white py-2 px-2.5 border border-PB_darkGray rounded-md shadow-sm text-sm font-medium text-PB_black hover:text-PB_darkGreen hover:border-PB_darkGreen transition-all duration-150  sm:w-full sm:flex-grow-0"
                          >
                            See all Products
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}

                {/* <!-- More products... --> */}
              </div>
            </section>

            {/* <!-- More orders... --> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Success;

export const getServerSideProps: GetServerSideProps<Props> = async ({
  query,
}) => {
  const sessionId = query.session_id as string;
  const products = await fetchLineItems(sessionId);
  return {
    props: {
      products,
    },
  };
};
