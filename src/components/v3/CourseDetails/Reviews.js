import { BACKEND_API } from "@/src/config/backend";
import { courseReviews } from "@/src/config/courseReview";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BsFillStarFill } from "react-icons/bs";

const Reviews = ({ courseSlug }) => {
  const router = useRouter();
  // console.log(router,'em')
  // const [singleCourseReview, setSingleCourseReview] = useState([]);

  // useEffect(() => {
  //   const getReviewData = async () => {
  //     try {
  //       if (!courseSlug) return;
  //       const response = await axios.get(
  //         `${BACKEND_API}/reviews/${courseSlug}`
  //       );
  //       setSingleCourseReview(response.data.result, "res");
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   getReviewData();
  // }, [courseSlug]);
  // console.log(singleCourseReview);

  const courseReviewData = courseReviews.find(
    (course) => course.courseSlug === courseSlug
  );

  const singleCourseReview = courseReviewData
    ? courseReviewData.result.reviews
    : [];

  return (
    <div className="relative bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {router.pathname == "/cohorts/tech-for-product-managers" ? (
          <h2 className="text-center">
            <span className="block text-sm font-semibold uppercase tracking-wide text-indigo-600">Testimonials</span>
            <span className="mt-2 block text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {`Don't`} just take our word for it!
            </span>
            <span className="mt-4 block text-lg text-gray-600">
              Listen to what learners are saying ❤️
            </span>
          </h2>
        ) : (
          <h2 className="text-center">
            <span className="block text-sm font-semibold uppercase tracking-wide text-indigo-600">Testimonials</span>
            <span className="mt-2 block text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Not just testimonials!
            </span>
            <span className="mt-4 block text-lg text-gray-600">
              Find love letters from our learners ❤️
            </span>
          </h2>
        )}

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {singleCourseReview.map((reviewer, index) => (
            <div 
              key={index} 
              className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg"
            >
              <div className="absolute -top-4 right-6 flex h-8 items-center gap-1 rounded-full bg-yellow-100 px-3 text-yellow-700">
                <BsFillStarFill className="text-yellow-400" size={16} />
                <span className="text-sm font-medium">5.0</span>
              </div>

              <div className="flex items-center gap-4">
                <Image
                  src={reviewer?.profile}
                  alt={reviewer.name}
                  width={56}
                  height={56}
                  className="rounded-full border-2 border-gray-100 object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{reviewer?.name}</h4>
                  <p className="text-sm text-gray-600">{reviewer?.company}</p>
                </div>
              </div>

              <blockquote className="mt-6">
                <p className="text-base leading-relaxed text-gray-700">
                  {reviewer?.review}
                </p>
              </blockquote>

              <p className="mt-6 text-sm text-gray-500">{reviewer?.reviewDate}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
