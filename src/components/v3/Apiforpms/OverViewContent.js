import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const OverViewContent = ({ content, index, course }) => {
  const [isOpen, setIsOpen] = useState(index === 0);

  // Function to get sorted submodules based on title parts
  const getSortedSubmodules = () => {
    return content?.subModules
      .map((subModule) => {
        const [firstPart, secondPart] = subModule?.title
          .split(".")[1]
          .split(" ");

        return {
          ...subModule,
          firstPart: parseInt(firstPart, 10),
          secondPart,
        };
      })
      .sort((a, b) => {
        if (a.firstPart === b.firstPart) {
          return a?.secondPart?.localeCompare(b.secondPart);
        }
        return a?.firstPart - b?.firstPart;
      });
  };

  const toggleView = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className="mb-6">
      {/* Module Header */}
      <button
        className={`w-full flex items-center justify-between p-4 bg-white border rounded-lg shadow-sm hover:bg-gray-50 transition-colors`}
        onClick={toggleView}
      >
        <div className="flex items-center space-x-3">
          <div className="flex-shrink-0">
            <div className={`p-2 rounded-full ${isOpen ? 'bg-blue-100' : 'bg-gray-100'}`}>
              {isOpen ? (
                <FaChevronUp className="w-4 h-4 text-blue-600" />
              ) : (
                <FaChevronDown className="w-4 h-4 text-gray-600" />
              )}
            </div>
          </div>
          <h3 className="text-lg font-medium text-gray-900">
            {content?.title
              .split("-")
              .map((word) => word?.charAt(0)?.toUpperCase() + word.slice(1))
              .join(" ")}
          </h3>
        </div>
        <span className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full">
          {getSortedSubmodules()?.length} lessons
        </span>
      </button>

      {/* Submodules List */}
      {isOpen && (
        <div className="mt-2 space-y-2">
          {getSortedSubmodules().map((sortedSubModule, index) => (
            <div
              key={index}
              className="pl-12 pr-4 py-3 bg-white border rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <div className="flex items-center space-x-3">
                <Image
                  src="/images/mock/Docicon.svg"
                  width={20}
                  height={20}
                  alt="doc icon"
                  className="flex-shrink-0"
                />
                <span className="text-sm text-gray-700">
                  {sortedSubModule.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OverViewContent;
