import { useSelector } from "react-redux";
import { urlFor } from "../../sanity";
import { basketItems } from "../redux/features/basketSlice";
import Products from "./products";
import { motion } from "framer-motion";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { MdOutlinePayment, MdVerified } from "react-icons/md";
import emptyCart from "/public/undraw_Gift_box_re_vau4.png";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Stripe } from "stripe";
import { fetchPostJSON } from "../utils/api-helpers";
import getStripe from "../utils/getStripe";
import Head from "next/head";
import { useDispatch } from "react-redux";
import { closeBasket } from "../redux/features/modalSlice";

const Checkout = () => {
  //close the backset when the checkout page is loaded
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeBasket());
  }, []);

  const cartItems = useSelector(basketItems);
  const [loading, setLoading] = useState(false);
  console.log(cartItems);
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState(
    {} as { [key: string]: Product[] }
  );
  // Use state Loading
  // Use Effect
  useEffect(() => {
    const groupedItems = cartItems.reduce((results, cartItems) => {
      (results[cartItems._id] = results[cartItems._id] || []).push(cartItems);
      // console.log("item ------->", item);
      // console.log("results ======>", results);
      return results;
      // console.log("results =====>", results._id);
      // console.log("item =====>:", item);
    }, {} as { [key: string]: Product[] });
    setGroupedItemsInBasket(groupedItems);
    // console.log("groupedItems", groupedItems);
    // console.log("--------------------------------------");
  }, [cartItems]);

  // Strip Checkout Session
  const createCheckoutSession = async () => {
    console.log("createCheckoutSession");
    setLoading(true);
    const checkoutSession: Stripe.Checkout.Session = await fetchPostJSON(
      "/api/create-checkout-session",
      {
        cartItems: cartItems,
      }
    );
    if ((checkoutSession as any).statusCode === 500) {
      console.error((checkoutSession as any).message);
      return;
    }
    // redirect to Stripe Checkout
    const stripe = await getStripe();
    const { error } = await stripe!.redirectToCheckout({
      sessionId: checkoutSession.id,
    });

    // waring to console if error
    console.warn(error.message);
    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>Checkout - pureBeauty</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="font-inter ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="max-w-4xl mx-auto pt-16">
            <h1 className="mt-5 text-3xl font-extrabold  tracking-tight text-gray-900">
              Shopping Cart
            </h1>

            <div className="mt-12">
              <section aria-labelledby="cart-heading">
                {cartItems.length > 0 ? (
                  <h2 className="text-PB_black mb-10 ">
                    Items in your shopping cart
                  </h2>
                ) : (
                  <div className="mb-6 flex flex-col justify-center items-center">
                    <img src={emptyCart.src} className="h-72 w-fit" alt="" />
                    <h1 className="text-center font-semibold font-inter mt-4 text-2xl text-PB_black">
                      Your Cart is Empty 😢
                    </h1>
                    <Link href={`/products`}>
                      <a className="text-sm mt-4 text-PB_blue underline">
                        Buy Products &#8594;
                      </a>
                    </Link>
                  </div>
                )}

                {/* {Object.entries(groupedItemsInBasket).map(([key, items]) => (
              <BasketItemCard key={key} items={items} id={key} />
            ))} */}

                {Object.entries(groupedItemsInBasket).map(([key, items]) => {
                  return (
                    <ul
                      role="list"
                      className="border-t border-PB_green divide-y divide-PB_gray"
                      key={key}
                    >
                      <li className="flex py-6 sm:py-10 items-center">
                        <div className="flex-shrink-0">
                          <img
                            src={urlFor(items[0]?.image[0]).url()}
                            alt="Insulated bottle with white base and black snap lid."
                            className="w-24 h-24 rounded-lg object-center object-cover sm:w-32 sm:h-32"
                          />
                        </div>

                        <div className="relative ml-4 flex-1 flex flex-col justify-between sm:ml-16">
                          <div className="flex justify-between items-center w-full">
                            <h3 className="text-xs sm:text-sm w-36 md:w-56 leading-relaxed ">
                              <Link
                                href={`/products/${items[0]?.slug.current}`}
                              >
                                <a className="font-medium text-PB_black hover:text-PB_blue">
                                  {items[0]?.title}
                                </a>
                              </Link>
                            </h3>

                            <div className="flex justify-center mt-1 items-center space-x-1.5">
                              <motion.p whileTap={{ scale: 0.85 }}>
                                <AiFillMinusCircle className="text-lg cursor-pointer text-PB_darkGreen hover:text-[#556b4c] transition duration-100" />
                              </motion.p>

                              <h1 className="font-bold text-sm font-inter">
                                1
                              </h1>
                              <motion.p whileTap={{ scale: 0.85 }}>
                                <AiFillPlusCircle className="text-lg cursor-pointer text-PB_darkGreen transition duration-100 hover:text-[#556b4c]" />
                              </motion.p>
                            </div>

                            <p className="text-xs sm:text-sm  md:text-xl font-bold">
                              &#8377;{items[0]?.price}
                            </p>
                          </div>

                          <p className="mt-4 flex items-center  text-[#7e7f85] space-x-2">
                            <MdVerified className=" text-PB_blue " />
                            <span className="text-xs">
                              Verified Product Seller
                            </span>
                          </p>
                        </div>
                      </li>
                    </ul>
                  );
                })}
              </section>

              {cartItems.length > 0 && (
                <section className="mt-10">
                  <div className="bg-[#f7f7f7] shadow-sm rounded-lg px-4 py-6 sm:p-6 lg:p-8">
                    <h2 id="summary-heading" className="sr-only">
                      Order summary
                    </h2>

                    <div className="flow-root">
                      <dl className="-my-4 text-sm divide-y divide-PB_gray">
                        <div className="py-4 flex items-center justify-between">
                          <dt className="text-gray-600">Subtotal</dt>
                          <dd className="font-medium text-gray-900">
                            &#8377;{cartItems[0]?.price}
                          </dd>
                        </div>
                        <div className="py-4 flex items-center justify-between">
                          <dt className="text-gray-600">Delivery Charges</dt>
                          <dd className="font-medium text-gray-900">
                            &#8377;5.00
                          </dd>
                        </div>
                        <div className="py-4 flex items-center justify-between">
                          <dt className="text-gray-600">GST</dt>
                          <dd className="font-medium text-gray-900">
                            &#8377;8.32
                          </dd>
                        </div>
                        <div className="py-4 flex items-center justify-between">
                          <dt className="text-base font-medium text-gray-900">
                            Order total
                          </dt>
                          <dd className="text-base font-medium text-gray-900">
                            &#8377;112.32
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                  <div className="mt-10">
                    <button
                      onClick={createCheckoutSession}
                      className="w-full bg-PB_darkGreen text-PB_white rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-[#58714e] transition-all duration-150 tracking-wide"
                    >
                      Go to Payment
                      <MdOutlinePayment className="ml-2 inline text-xl" />
                    </button>
                  </div>

                  <div className="flex items-center flex-col text-xs mt-8">
                    <h1 className="text-lg font-bold text-PB_darkBlue">
                      Checkout TIP
                    </h1>
                    <div className="text-center space-y-3 mt-4">
                      <p>
                        Hey! when you checkout you can use Stripe Test card
                        credentials
                      </p>
                      <p>Email: test@gmail.com</p>
                      <p>Card number 4242 4242 4242 4242</p>
                      <p>Valid date: 12/34</p>
                      <p>CVC: 567</p>
                    </div>
                  </div>
                  <div className="mt-6 text-sm text-center text-gray-500 font-inter">
                    <p>
                      or{" "}
                      <Link href={`/products`}>
                        <a className="text-PB_blue font-medium hover:text-indigo-500">
                          Continue Shopping
                          <span aria-hidden="true"> &rarr;</span>
                        </a>
                      </Link>
                    </p>
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>

        {/* <!-- Policy grid --> */}
        {/* <section className="mt-16  md:tab_mx mobile_mx lg:desktop_mx border-t border-PB_green divide-PB_gray">
        <h2 id="policies-heading" className="text-PB_black mt-4">
          Our policies
        </h2>

        <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 sm:py-32 lg:px-8">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0">
            <div className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
              <div className="md:flex-shrink-0">
                <div className="flow-root">
                  <img
                    className="-my-1 h-24 w-auto mx-auto"
                    src="https://tailwindui.com/img/ecommerce/icons/icon-returns-light.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="mt-6 md:mt-0 md:ml-4 lg:mt-6 lg:ml-0">
                <h3 className="text-sm font-semibold tracking-wide uppercase text-gray-900">
                  Free returns
                </h3>
                <p className="mt-3 text-sm text-gray-500">
                  Not what you expected? Place it back in the parcel and attach
                  the pre-paid postage stamp.
                </p>
              </div>
            </div>

            <div className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
              <div className="md:flex-shrink-0">
                <div className="flow-root">
                  <img
                    className="-my-1 h-24 w-auto mx-auto"
                    src="https://tailwindui.com/img/ecommerce/icons/icon-calendar-light.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="mt-6 md:mt-0 md:ml-4 lg:mt-6 lg:ml-0">
                <h3 className="text-sm font-semibold tracking-wide uppercase text-gray-900">
                  Same day delivery
                </h3>
                <p className="mt-3 text-sm text-gray-500">
                  We offer a delivery service that has never been done before.
                  Checkout today and receive your itemss within hours.
                </p>
              </div>
            </div>

            <div className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
              <div className="md:flex-shrink-0">
                <div className="flow-root">
                  <img
                    className="-my-1 h-24 w-auto mx-auto"
                    src="https://tailwindui.com/img/ecommerce/icons/icon-gift-card-light.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="mt-6 md:mt-0 md:ml-4 lg:mt-6 lg:ml-0">
                <h3 className="text-sm font-semibold tracking-wide uppercase text-gray-900">
                  All year discount
                </h3>
                <p className="mt-3 text-sm text-gray-500">
                  Looking for a deal? You can use the code &quot;ALLYEAR&quot;
                  at checkout and get money off all year round.
                </p>
              </div>
            </div>

            <div className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
              <div className="md:flex-shrink-0">
                <div className="flow-root">
                  <img
                    className="-my-1 h-24 w-auto mx-auto"
                    src="https://tailwindui.com/img/ecommerce/icons/icon-planet-light.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="mt-6 md:mt-0 md:ml-4 lg:mt-6 lg:ml-0">
                <h3 className="text-sm font-semibold tracking-wide uppercase text-gray-900">
                  For the planet
                </h3>
                <p className="mt-3 text-sm text-gray-500">
                  We’ve pledged 1% of sales to the preservation and restoration
                  of the natural environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      </div>
    </>
  );
};
export default Checkout;
