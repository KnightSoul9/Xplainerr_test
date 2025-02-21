const MasterclassSection = ({ handleApplyNowClick }) => {
    return (
        <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              FREE MASTERCLASS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Free Pass to a Live Session Awaits
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join a FREE 1-hour session on API for Product Managers! 🚀
            </p>
          </div>
  
          <div className="relative max-w-3xl mx-auto">
            {/* Fixed Video Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}> {/* 16:9 Aspect Ratio */}
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/RgkW4T2aRSg?si=B9crm1LAsEiVkl6_&amp;controls=0"
                  title="API for Product Managers Masterclass"
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
                  <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span>Duration: 30 minutes</span>
                </div>
                <button 
                  className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 ease-in-out shadow-lg hover:shadow-xl "
                  onClick={() => {
                    handleApplyNowClick();
                    window.location.href = "#applicationForm";
                  }}
                >
                  Reserve Your Spot
                  <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
  
            {/* Key Points */}
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Live Q&A",
                  description: "Get your questions answered in real-time",
                  icon: "🎯"
                },
                {
                  title: "Real Examples",
                  description: "Learn from actual industry case studies",
                  icon: "💡"
                },
                {
                  title: "Take-Home Resources",
                  description: "Get exclusive materials and templates",
                  icon: "📚"
                }
              ].map((point, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
                >
                  <div className="text-3xl mb-3">{point.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default MasterclassSection;
  