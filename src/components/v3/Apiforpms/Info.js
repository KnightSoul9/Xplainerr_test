import React from "react";
import { SlCalender } from "react-icons/sl";
import { RiLiveLine } from "react-icons/ri";
import { IoMdTime } from "react-icons/io";
import { MdCurrencyRupee } from "react-icons/md";

const Info = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto max-w-7xl px-4 py-10 md:px-8">
        <div className="grid grid-cols-1 gap-8 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Course Date Card */}
          <div className="h-[120px] rounded-2xl bg-white p-6 shadow-[0_2px_20px_rgba(0,0,0,0.08)]">
            <div className="flex h-full items-center space-x-4">
              <div className="rounded-full bg-blue-50 p-3">
                <SlCalender className="text-xl text-blue-500" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900">15th - 16th Feb</h4>
                <p className="mt-1 text-gray-600">Classes on weekends</p>
              </div>
            </div>
          </div>

          {/* Live Sessions Card */}
          <div className="h-[120px] rounded-2xl bg-white p-6 shadow-[0_2px_20px_rgba(0,0,0,0.08)]">
            <div className="flex h-full items-center space-x-4">
              <div className="rounded-full bg-purple-50 p-3">
                <RiLiveLine className="text-xl text-purple-500" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900">2-live sessions</h4>
                <p className="mt-1 text-gray-600">By Venkatesh Gupta</p>
              </div>
            </div>
          </div>

          {/* Time Card */}
          <div className="h-[120px] rounded-2xl bg-white p-6 shadow-[0_2px_20px_rgba(0,0,0,0.08)]">
            <div className="flex h-full items-center space-x-4">
              <div className="rounded-full bg-gray-50 p-3">
                <IoMdTime className="text-xl text-gray-600" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900">12 PM - 2:30PM</h4>
                <p className="mt-1 text-gray-600">Saturday and Sunday</p>
              </div>
            </div>
          </div>

          {/* Price Card */}
          <div className="h-[120px] rounded-2xl bg-white p-6 shadow-[0_2px_20px_rgba(0,0,0,0.08)]">
            <div className="flex h-full items-center space-x-4">
              <div className="rounded-full bg-orange-50 p-3">
                <MdCurrencyRupee className="text-xl text-orange-500" />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-xl font-semibold text-gray-900">₹4,000</span>
                  <span className="text-sm text-gray-400 line-through">₹6,000</span>
                </div>
                <div className="mt-1">
                  <span className="inline-block rounded-full bg-green-100 px-2 py-0.5 text-sm text-green-600">
                    Save ₹2,000
                  </span>
                </div>
                <p className="mt-1 text-gray-600">Course Fee</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
