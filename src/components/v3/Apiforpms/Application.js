import Image from "next/image";
import ApplicationForm from "./ApplicationForm";

const Application = () => {
  return (
    <section
      id="applicationForm"
      className="bg-gradient-to-b from-white to-gray-50 py-16"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <h2 className="mb-16 text-center text-4xl font-bold text-gray-900">
          Accelerate Your Product Management Career
        </h2>

        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          {/* Left Column - Course Info */}
          <div className="rounded-2xl bg-gradient-to-br from-[#030a21] to-[#0f1631] p-8 text-white lg:p-12">
            {/* Main Pitch */}
            <div className="mb-12 space-y-6">
              <h3 className="text-3xl font-bold leading-tight lg:text-4xl">
                Master API Product Management in
                <span className="bg-gradient-to-r from-[#00b85f] to-[#005f91] bg-clip-text text-transparent">
                  {" "}
                  2 Power-Packed Sessions
                </span>
              </h3>

              <p className="text-lg text-gray-300">
                Hands-on learning with real-world assignments, live
                demonstrations, and industry case studies to make you
                interview-ready.
              </p>
            </div>

            {/* Topics Section */}
            <div className="mb-12">
              <div className="inline-block rounded-full bg-gradient-to-r from-[#00b85f] to-[#005f91] px-6 py-2 text-sm font-semibold">
                What You&apos;ll Learn
              </div>

              <ul className="mt-6 space-y-3 text-gray-200">
                {[
                  "Why & what of APIs",
                  "Understand requests, response, endpoints etc.",
                  "Postman live demo & hands-on exercise",
                  "APIs & Webhooks",
                  "API security - Oauth, rate limiting & more",
                  "Designing APIs like a Stripe PM",
                  "Working with engineering team",
                ].map((topic, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <svg
                      className="h-5 w-5 text-[#00b85f]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {topic}
                  </li>
                ))}
              </ul>
            </div>

            {/* Instructor Card */}
            <div className="relative pt-6">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 transform whitespace-nowrap rounded-full bg-gradient-to-r from-[#00b85f] to-[#005f91] px-4 py-1 text-sm font-medium">
                Your Mentor
              </span>

              <div className="rounded-xl bg-[#ffffff0f] p-6 backdrop-blur-sm">
                <div className="flex flex-col items-center gap-2 text-center sm:flex-row sm:text-left">
                  <Image
                    src="/images/mentors/venky.svg"
                    alt="Venkatesh Gupta"
                    width={120}
                    height={120}
                    className="rounded-full ring-4 ring-[#00b85f]/20"
                  />
                  <div>
                    <h4 className="mb-2 text-2xl font-bold">Venkatesh Gupta</h4>
                    <p className="text-gray-300">
                      Product Manager at{" "}
                      <span className="font-semibold text-white">Razorpay</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Application Form */}
          <div className="rounded-2xl bg-white p-8 shadow-xl">
            <ApplicationForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Application;
