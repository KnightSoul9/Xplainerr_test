const MasterclassSection = ({ handleApplyNowClick }) => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            FREE MASTERCLASS
          </span>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Your Free Pass to a Live Session Awaits
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Join a FREE 1-hour session on Tech for Product Managers! 🚀
          </p>
        </div>

        <div className="relative mx-auto max-w-3xl">
          {/* Fixed Video Container */}
          <div className="relative overflow-hidden rounded-2xl bg-gray-900 shadow-2xl">
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              {" "}
              {/* 16:9 Aspect Ratio */}
              <iframe
                className="absolute left-0 top-0 h-full w-full"
                src="https://www.youtube.com/embed/zfDcaFAIyCM?si=L1HI1hMRPT3iNomq&amp;controls=0"
                title="Tech for Product Managers Masterclass"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture web-share"
                allowFullScreen
              ></iframe>
              
            </div>
          </div>

          {/* Updated Call to Action Below Video */}
          <div className="mt-8 text-center">
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-2 text-gray-600">
                <svg
                  className="h-5 w-5 text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Duration: 60 minutes</span>
              </div>
              <button
                className="inline-flex items-center rounded-lg border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white shadow-lg transition-colors duration-200 ease-in-out hover:bg-blue-700 hover:shadow-xl "
                onClick={() => {
                  handleApplyNowClick();
                  window.location.href = "#applicationForm";
                }}
              >
                Reserve Your Spot
                <svg
                  className="-mr-1 ml-2 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Key Points */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Live Q&A",
                description: "Get your questions answered in real-time",
                icon: "🎯",
              },
              {
                title: "Real Examples",
                description: "Learn from actual industry case studies",
                icon: "💡",
              },
              {
                title: "Take-Home Resources",
                description: "Get exclusive materials and templates",
                icon: "📚",
              },
            ].map((point, index) => (
              <div
                key={index}
                className="rounded-xl bg-white p-6 shadow-md transition-shadow duration-200 hover:shadow-lg"
              >
                <div className="mb-3 text-3xl">{point.icon}</div>
                <h3 className="mb-2 font-semibold text-gray-900">
                  {point.title}
                </h3>
                <p className="text-sm text-gray-600">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MasterclassSection;
