import Image from "next/image";
import TypeWriter from "./TypeWriter";
import Link from "next/link";
import TechForPmsImage from "./assets/Banner2.png";

const Names = [
  {
    name: "Aspiring Product Managers",
  },
  {
    name: "Associate Product Managers",
  },
  {
    name: "Sales & Marketing Teams",
  },
  { 
    name: "Freshers & MBA Graduates" 
  },
  { 
    name: "Product Leaders" 
  },
];

const Banner = () => {
  const companyNames = Names.map((item) => item.name);

  const handleApplyNowClick = () => {
    localStorage.setItem("source", "CTA");
    localStorage.setItem("application", true);
  };

  return (
    <section className="bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto max-w-7xl px-4 py-16 md:px-8 lg:py-10">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-start">
          {/* Left Column */}
          <div className="lg:basis-1/2">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 rounded-full border-2 border-primary bg-white px-6 py-2 shadow-lg">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500"></span>
                </span>
                <p className="text-sm font-bold tracking-wider text-primary">2-DAY LIVE SESSIONS</p>
              </div>
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 lg:text-5xl">
              Master APIs as a <span className="text-primary">Product Manager</span>
            </h1>

            <p className="mb-8 text-xl text-gray-700">
              Gain confidence in technical discussions and excel in requirement definition. Perfect for{" "}
              <TypeWriter line={companyNames} className="font-semibold text-primary" />
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#applicationForm"
                onClick={handleApplyNowClick}
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-primary p-4 px-8 font-medium text-white transition duration-300 ease-out hover:scale-105"
              >
                <span className="absolute inset-0 h-full w-full bg-gradient-to-br from-primary_bold to-primary opacity-0 transition duration-300 ease-out group-hover:opacity-100"></span>
                <span className="relative text-xl">Apply Now</span>
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:basis-1/2">
            <div className="relative rounded-2xl bg-white p-6 shadow-2xl">
              <Image
                src={TechForPmsImage}
                alt="api-for-pms"
                width={500}
                height={500}
                className="w-full rounded-xl"
              />

              {/* Instructor Card */}
              <div className="relative mt-8">
                <div className="absolute -top-4 left-6 rounded-full bg-gradient-to-r from-[#00b85f] to-[#005f91] px-6 py-2">
                  <span className="text-sm font-medium text-white">Instructor</span>
                </div>
                <div className="flex items-center gap-6 rounded-xl border bg-white p-6 shadow-lg">
                  <Image
                    src="/images/mentors/venky.svg"
                    alt="Venkatesh Gupta"
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">Venkatesh Gupta</h4>
                    <p className="text-gray-600">
                      Product Manager at <span className="font-semibold text-primary">Razorpay</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
