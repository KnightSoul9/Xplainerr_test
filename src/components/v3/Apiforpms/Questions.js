import React from 'react';
import { GrView } from "react-icons/gr";
import { LuLandmark } from "react-icons/lu";
import { FiFilter } from "react-icons/fi";
import { BsBookmarkPlus, BsArrowRight } from "react-icons/bs";
import { SiGoogle, SiMeta } from "react-icons/si"; // Importing Google and Meta icons
import { AvatarGroupsData } from "@/src/config/fakeData";

const Questions = () => {
  return (
    <div className="bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-16 md:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Learn to answer PM tech interview questions
          </h2>
          <p className="text-gray-600">
            Practice with real questions from top tech companies
          </p>
        </div>

        {/* Questions Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Question Card 1 */}
          <div className="group relative rounded-2xl bg-white p-6 shadow-md transition-all hover:shadow-lg">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <LuLandmark className="text-blue-600" />
                </div>
                <span className="text-sm font-medium text-gray-600">Stripe</span>
              </div>
              <BsBookmarkPlus className="text-gray-400 hover:text-blue-600 cursor-pointer" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 group-hover:text-blue-600">
              Design a RESTful API for Stripe with at least two entities
            </h3>
            <div className="flex items-center justify-between">
              <div className="flex space-x-2">
                <span className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-600">API Design</span>
                <span className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-600">Tech</span>
              </div>
              <BsArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>

          {/* Question Card 2 */}
          <div className="group relative rounded-2xl bg-white p-6 shadow-md transition-all hover:shadow-lg">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                  <SiGoogle className="text-green-600" /> {/* Google icon */}
                </div>
                <span className="text-sm font-medium text-gray-600">Google</span>
              </div>
              <BsBookmarkPlus className="text-gray-400 hover:text-blue-600 cursor-pointer" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 group-hover:text-blue-600">
              How would you build authorization for Google Maps end customers?
            </h3>
            <div className="flex items-center justify-between">
              <div className="flex space-x-2">
                <span className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-600">Security</span>
                <span className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-600">Maps</span>
              </div>
              <BsArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>

          {/* Question Card 3 */}
          <div className="group relative rounded-2xl bg-white p-6 shadow-md transition-all hover:shadow-lg">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                  <SiMeta className="text-purple-600" /> {/* Meta icon */}
                </div>
                <span className="text-sm font-medium text-gray-600">Meta</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-gray-500">Asked last week</span>
                <BsBookmarkPlus className="text-gray-400 hover:text-blue-600 cursor-pointer" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 group-hover:text-blue-600">
              Mention three endpoints Spotify has
            </h3>
            <div className="flex items-center justify-between">
              <div className="flex space-x-2">
                <span className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-600">API</span>
                <span className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-600">Tech</span>
              </div>
              <div className="flex -space-x-2">
                {AvatarGroupsData.slice(0, 3).map((el, index) => (
                  <img
                    key={index}
                    src={el.image}
                    alt="User avatar"
                    className="w-7 h-7 rounded-full border-2 border-white"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
