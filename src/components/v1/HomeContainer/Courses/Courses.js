import CardLayout from "@/src/layout/CardLayout";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { BiCategory } from "react-icons/bi";
import SectionHeading from "../../Shared/sectionHeading";

const Courses = ({ heading, ctaText, courses, description }) => {
  const publishedCourses = courses?.filter(
    (course) => course.isPublished === true
  );

  return (
    <div className='container mx-auto px-4 lg:max-w-7xl'>
      <div className='flex flex-col items-center justify-center'>
        <SectionHeading
          heading={heading || "Our Courses"}
          description={description || "Get better at your job every single day!"}
        />

        <div className='mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {publishedCourses?.map((el, index) => {
            return (
              <CardLayout
                key={index}
                imageUrl={el?.cover_image}
                title={el?.title}
                description={el?.courseDescription}
                shortDescription={el?.courseDescription?.slice(0, 200)}
                altText={el?.title}
                ctaText={ctaText}
                destination={`/courses/${el?.slug}`}
                width='w-full'
                height='h-[230px]'
                className="transform transition-all hover:scale-105"
              >
                <div className='my-1 mb-4 flex items-center space-x-5 text-sm text-gray-500'>
                  <div className='flex items-center justify-center space-x-2'>
                    <BiCategory className="text-blue-500" />
                    <p className="font-medium"> {el?.category}</p>
                  </div>
                </div>
              </CardLayout>
            );
          })}
        </div>

        <Link href='/courses'>
          <button className='mt-12 flex items-center gap-2 rounded-full bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700'>
            Browse all courses
            <FiArrowRight className='ml-2' />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Courses;
