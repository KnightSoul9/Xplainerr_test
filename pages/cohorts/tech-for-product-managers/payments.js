import { useEffect, useState } from "react";
import CommonHead from "@/src/components/v1/Shared/CommonHead";
import PageLayout from "@/src/layout/PageLayout";
import { IoMdCheckmarkCircle } from "react-icons/io";
import Image from "next/image";

const TechBuyPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("stripe"); // default to "stripe"
  const applicantName = localStorage.getItem("applicantName");

  useEffect(() => {
    // Load PayPal script
    const paypalScript = document.createElement("script");
    paypalScript.src =
      "https://www.paypal.com/sdk/js?client-id=BAAxuZalqzBqpXf8JNh3AbCHQPv3BJIcoyxyyUZD-zkq-nw3R1FXYObyWZ7S1zGssaYQntFKrYiqiP6yjU&components=hosted-buttons&disable-funding=venmo&currency=USD";
    paypalScript.async = true;
    document.head.appendChild(paypalScript);

    paypalScript.onload = () => {
      if (window.paypal && paypal.HostedButtons) {
        paypal
          .HostedButtons({
            hostedButtonId: "XQS6K5529U8YQ",
          })
          .render("#paypal-container-XQS6K5529U8YQ");
      } else {
        console.error("PayPal SDK or HostedButtons is not loaded correctly.");
      }
    };

    // Load Stripe script
    const stripeScript = document.createElement("script");
    stripeScript.src = "https://js.stripe.com/v3/buy-button.js";
    stripeScript.async = true;
    document.head.appendChild(stripeScript);

    // Clean up scripts on component unmount
    return () => {
      document.head.removeChild(paypalScript);
      document.head.removeChild(stripeScript);
    };
  }, []);

  return (
    <>
      <CommonHead
        title={"Xplainerr | Buy Tech Product Managers"}
        description={"Tech For Product Managers"}
        favIcon={"/favicon.ico"}
      />
      <PageLayout>
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="relative mx-auto max-w-3xl px-4 text-center">
            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="rounded-full bg-green-100 p-2">
                <IoMdCheckmarkCircle className="text-4xl text-green-600" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900">
                Congratulations {applicantName}!
              </h1>
              <p className="text-2xl font-medium text-gray-800">
                {`You're`} shortlisted for Tech For PM cohort
              </p>
              <div className="mt-4 rounded-full bg-blue-100 px-6 py-2 text-blue-800">
                Only 61% acceptance rate - Well done! 🎉
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-6 lg:py-1">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
            {/* Right Section - Payment */}
            <div className="lg:w-5/12">
              <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
                <h2 className="text-center text-2xl font-bold text-gray-900">
                  Complete Your Enrollment
                </h2>

                <div className="mt-8 space-y-4">
                  <button
                    onClick={() => setPaymentMethod("stripe")}
                    className={`w-full rounded-xl border-2 p-4 text-lg font-medium transition-all duration-300 ${
                      paymentMethod === "stripe"
                        ? "border-blue-500 bg-blue-500 text-white"
                        : "border-gray-200 bg-white text-gray-700 hover:border-blue-200 hover:bg-blue-50"
                    }`}
                  >
                    Pay with Stripe
                    <span className="block text-sm opacity-75">
                      Recommended for Indian Users
                    </span>
                  </button>

                  <button
                    onClick={() => setPaymentMethod("paypal")}
                    className={`w-full rounded-xl border-2 p-4 text-lg font-medium transition-all duration-300 ${
                      paymentMethod === "paypal"
                        ? "border-yellow-500 bg-yellow-500 text-white"
                        : "border-gray-200 bg-white text-gray-700 hover:border-yellow-200 hover:bg-yellow-50"
                    }`}
                  >
                    Pay with PayPal
                    <span className="block text-sm opacity-75">
                      Recommended for International Users
                    </span>
                  </button>
                </div>

                <div className="mt-8">
                  <div className={`${paymentMethod === "stripe" ? "block" : "hidden"} flex justify-center`}>
                    <stripe-buy-button
                      buy-button-id="buy_btn_1OShAZSHcC4n6fvXZytJsnUY"
                      publishable-key="pk_live_51J1XSYSHcC4n6fvXzPVbeGNlXIUvt3OG10so5eJG0WqCf9v0GUnQxQnOEKc3EcqycXwsgOVZouvRalvzKp9zwnqu00oqyhImcC"
                    ></stripe-buy-button>
                  </div>

                  <div
                    id="paypal-container-XQS6K5529U8YQ"
                    className={paymentMethod === "paypal" ? "block" : "hidden"}
                  ></div>
                </div>
              </div>
            </div>

            {/* Left Section */}
            <div className="lg:w-1/2">
              <div className="rounded-2xl bg-gradient-to-br from-[#1a1f35] to-[#030a21] p-8 text-white shadow-xl">
                <h2 className="text-3xl font-bold leading-tight text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
                  Top Tech Companies That Value Technical PMs
                </h2>

                <div className="mt-6 flex flex-wrap gap-3">
                  {['Google', 'Microsoft', 'Razorpay', 'Coinbase', 'Uber', 'Booking', 'Stripe'].map((company) => (
                    <span key={company} className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium">
                      {company}
                    </span>
                  ))}
                </div>

                <div className="mt-8">
                  <div className="inline-block rounded-lg bg-gradient-to-r from-[#00b85f] to-[#005f91] px-6 py-3 font-semibold">
                    Why Technical PMs Are In Demand
                  </div>

                  <ul className="mt-6 space-y-4">
                    {[
                      'Technical knowledge is a must-have for Fintech & Platform Product Managers',
                      'PMs with technical knowledge are 37% more likely to transition into leadership roles',
                      'New emerging fields like Generative AI have a huge demand for technical PMs',
                      'Sundar Pichai, the CEO of Google, was a tech PM who built Google Chrome'
                    ].map((point, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <span className="mt-1 text-teal-400">•</span>
                        <span className="text-gray-300">{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="relative mt-12">
                    <p className="absolute -top-[22px] left-[5%] rounded-md border bg-gradient-to-r from-[#00b85f] to-[#005f91] px-4 py-2 text-white">
                      Instructor
                    </p>
                    <div className="flex items-center space-x-4 rounded-xl border-2 px-3 pb-5 pt-8 shadow-lg lg:space-x-16 lg:px-6">
                      <Image
                        src="/images/mentors/venky.svg"
                        alt="Venkatesh Gupta"
                        width={100}
                        height={100}
                        className="rounded-[100%]"
                      />
                      <div className="flex flex-col space-y-2">
                        <h4 className="text-lg font-bold leading-[1.4] sm:text-[20px]">
                          Venkatesh Gupta
                        </h4>
                        <p>
                          Product Manager <span className="text-lg font-semibold">Razorpay</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default TechBuyPage;
