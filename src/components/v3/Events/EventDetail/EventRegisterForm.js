// pages\events\[eventsSlug]\index.js
import useAuthService from "@/src/hooks/auth/useAuthService";
import Link from "next/link";
import { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const EventRegisterForm = ({ event }) => {
  const { currentUser } = useAuthService();
  const initialName = currentUser?.displayName || "";
  const initialEmail = currentUser?.email || "";
  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);
  const [phone, setPhone] = useState("");
  const [isFlipped, setIsFlipped] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("stripe");

  const [nameErr, setNameErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [phoneErr, setPhoneErr] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!isFlipped) return;

    const paypalScript = document.createElement("script");
    paypalScript.src =
      "https://www.paypal.com/sdk/js?client-id=BAAxuZalqzBqpXf8JNh3AbCHQPv3BJIcoyxyyUZD-zkq-nw3R1FXYObyWZ7S1zGssaYQntFKrYiqiP6yjU&components=hosted-buttons&disable-funding=venmo&currency=USD";
    paypalScript.async = true;
    document.head.appendChild(paypalScript);

    paypalScript.onload = () => {
      if (window.paypal && paypal.HostedButtons) {
        paypal
          .HostedButtons({
            hostedButtonId: "YXEBBK773AYE8",
          })
          .render("#paypal-container-YXEBBK773AYE8");
      } else {
        console.error("PayPal SDK or HostedButtons is not loaded correctly.");
      }
    };

    const stripeScript = document.createElement("script");
    stripeScript.src = "https://js.stripe.com/v3/buy-button.js";
    stripeScript.async = true;
    document.head.appendChild(stripeScript);

    return () => {
      document.head.removeChild(paypalScript);
      document.head.removeChild(stripeScript);
    };
  }, [isFlipped]);

  const submitLead = async (payload) => {
    const response = await fetch('https://script.google.com/macros/s/AKfycbyOi9pOqHOHAoz9RW1MS4DSJYOsMQ74X6e7UHhQRO0vnbhhTX_B-XnRuvhvpNFP_Cll/exec', {
      method: 'POST',
      mode: 'no-cors', // Important to prevent CORS issues
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(payload),
    });
    console.log('Form Submitted');
    return response;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    // Basic form validation
    let hasError = false;

    if (!name.trim()) {
      setNameErr("Name is required");
      hasError = true;
    } else {
      setNameErr("");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setEmailErr("Email is required");
      hasError = true;
    } else if (!emailRegex.test(email)) {
      setEmailErr("This doesn't seem like the right email");
      hasError = true;
    } else if (email.slice(-1) === ".") {
      setEmailErr("Email should not end with a full stop");
      hasError = true;
    } else {
      setEmailErr("");
    }

    if (!phone.trim()) {
      setPhoneErr("Phone is required");
      hasError = true;
    } else {
      setPhoneErr("");
    }

    if (hasError) {
      setIsSubmitting(false);
      return;
    }

    const payload = {
      event: event?.title || 'Event Registration',
      name: name,
      email: email,
      phone: phone,
    };

    try {
      await submitLead(payload);
      setIsFlipped(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-lg border bg-gray-50 p-5 lg:p-6 perspective-1000">
      <div 
        className={`transition-all duration-700 transform-style-preserve-3d ${
          isFlipped ? "rotate-y-180 hidden" : "rotate-y-0 block"
        }`}
      >
        <h2 className="text-xl font-semibold lg:text-2xl">
          Claim Your Seat Now
        </h2>
        <form onSubmit={handleSubmit} className="mx-auto max-w-lg">
          <div className="mb-4 mt-6">
            <input
              type="text"
              name="text"
              id="name"
              value={name}
              placeholder="Your name"
              onChange={(e) => {
                setName(e.target.value);
                setNameErr("");
              }}
              className="w-full rounded-lg border bg-white px-4 py-3 shadow-sm"
            />
            {nameErr && <p className="mt-1 text-sm text-red-500">{nameErr}</p>}
          </div>

          <div className="mb-4">
            <input
              type="text"
              name="email"
              id="email"
              value={email}
              placeholder="Your email"
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailErr("");
              }}
              className="w-full rounded-lg border bg-white px-4 py-3 shadow-sm"
            />
            {emailErr && <p className="mt-1 text-sm text-red-500">{emailErr}</p>}
          </div>

          <div className="mb-4">
            <PhoneInput country={"in"} value={phone} onChange={setPhone} />
            {phoneErr && <p className="mt-1 text-sm text-red-500">{phoneErr}</p>}
          </div>
          <button
            type="submit"
            className="mt-2 w-full rounded-3xl bg-primary px-2 py-3 font-semibold text-white hover:bg-primary_bold"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Continue"}
          </button>
        </form>
      </div>

      <div 
        className={`transition-all duration-700 transform-style-preserve-3d ${
          isFlipped ? "rotate-y-0 block" : "rotate-y-180 hidden"
        }`}
      >
        <p className="text-center text-gray-700 mb-8 text-sm md:text-base px-4">
          We’ve noticed significant non-attendance at free events, so we’ve introduced a small, nominal fee (₹199/$5) to ensure genuine interest and commitment.
        </p>
        
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
            className={`w-full rounded-xl border-2 p-2 text-lg font-medium transition-all duration-300 ${
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

        <div className="mt-8 flex flex-col items-center">
          <div className={`${paymentMethod === "stripe" ? "block" : "hidden"} flex justify-center`}>
            <stripe-buy-button
              buy-button-id="buy_btn_1QudLSSHcC4n6fvXJcoDu80n"
              publishable-key="pk_live_51J1XSYSHcC4n6fvXzPVbeGNlXIUvt3OG10so5eJG0WqCf9v0GUnQxQnOEKc3EcqycXwsgOVZouvRalvzKp9zwnqu00oqyhImcC"
            ></stripe-buy-button>
          </div>

          <div
            id="paypal-container-YXEBBK773AYE8"
            className={paymentMethod === "paypal" ? "block" : "hidden"}
          ></div>
        </div>
      </div>

      <p className="mt-2 text-xs text-[#4e4e4e] md:text-sm">
        By continuing, you agree to Xplainerr{" "}
        <Link
          className="font-semibold text-indigo-500"
          href="/terms-of-service"
        >
          Terms of Service
        </Link>{" "}
        and
        <Link className="font-semibold text-indigo-500" href="/privacy-policy">
          {" "}
          Privacy Policy
        </Link>
      </p>
    </div>
  );
};

export default EventRegisterForm;