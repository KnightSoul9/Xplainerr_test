import { getCourseData } from "@/src/api/courses";
import CommonHead from "@/src/components/v1/Shared/CommonHead";
import { Authors } from "@/src/components/v1/course";
import { Reviews } from "@/src/components/v3/CourseDetails";
import {
  Application,
  Banner,
  CourseOverview,
  Info,
  Questions,
} from "@/src/components/v3/Apiforpms";
import FaqsForPms from "@/src/components/v3/Apiforpms/FaqsForPms";
import { CohortData } from "@/src/config/cohort2";
import useScrollHandler from "@/src/hooks/useScrollHandler";
import PageLayout from "@/src/layout/PageLayout";
import styles from "@/styles/PersistentCta.module.css";
import { useEffect, useState } from "react";
import MasterclassSection from "@/src/components/v3/Apiforpms/MasterclassSection";

const LiveSession = () => {
  const handleApplyNowClick = () => {
    localStorage.setItem("source", "CTA");
    localStorage.setItem("application", true);

    // Add safety check before scrolling
    const applicationSection = document.getElementById("applicationForm");
    if (applicationSection) {
      applicationSection.scrollIntoView({ behavior: "smooth" });
    } else {
      // Fallback if element is not found
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    }
  };
};

const Apiforpms = ({ course }) => {
  const { showCTA, showPersistentCta } = useScrollHandler("banner");

  const [scrolledToApplication, setScrolledToApplication] = useState(false);

  const transitionDelay = 2000;

  const handleApplyNowClick = () => {
    localStorage.setItem("source", "CTA");
    localStorage.setItem("application", true);
  };

  const clicked = localStorage.getItem("application");

  useEffect(() => {
    const handleScroll = () => {
      const applicationSection = document.getElementById("applicationForm");

      // Check if the element exists
      if (applicationSection) {
        const scrolled =
          window.scrollY >= applicationSection.offsetTop - window.innerHeight / 2;
        setScrolledToApplication(scrolled);
      } else {
        // If the element is not found, set scrolled to false
        setScrolledToApplication(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <CommonHead
        title={"Xplainerr | APIs For Product Managers"}
        description={"APIs For Product Managers"}
        favIcon={"/favicon.ico"}
      />
      <PageLayout>
        <Banner />
        <Info />
        <CourseOverview courseData={CohortData} slug={"api-for-pms"} />
        <Questions />
        <Reviews courseSlug={"api-for-pm"} />
        <MasterclassSection handleApplyNowClick={handleApplyNowClick}/>
        {/* Replace the old section with the new LiveSession component */}
        <LiveSession />

        <Authors
          data={course?.instructors}
          courseSlug={"/cohorts/api-for-pms"}
        />
        <FaqsForPms />
        <Application />

        {/* Mobile CTA (when scrolled above application section) */}
        {!scrolledToApplication && showCTA && (
          <div className={`md:hidden `}>
            <div className="fixed bottom-0 w-full px-2 pb-1.5">
              <button
                className="w-full rounded-xl bg-blue-600 py-5 text-center font-bold text-white shadow-lg"
                onClick={() => {
                  handleApplyNowClick();
                  window.location.href = "#applicationFormMobile";
                }}
              >
                Apply Now
              </button>
            </div>
          </div>
        )}

        {/* Persistent CTA (only for larger screens) */}
        {!scrolledToApplication && showPersistentCta && (
          <div className={`hidden lg:block`}>
            <div>
              <div
                className={`${styles.persistent_ctA}`}
                style={{ transition: `opacity 0.5s ease ${transitionDelay}ms` }}
              >
                <div className=" text-white">
                  <div>
                    <strong>
                      Crack tech rounds of Uber, Razorpay, Google PM Interviews with ease
                    </strong>{" "}
                    <br />
                    <p>Start 2025 with a learning commitment. Enroll now</p>
                  </div>
                </div>
                <div className="mr-8 flex justify-between space-x-5">
                  <div>
                    <a
                      href="#applicationForm"
                      className="w-[100%] rounded-md bg-primary px-12 py-4 text-xl font-medium text-white hover:bg-primary_bold lg:mt-0"
                      onClick={handleApplyNowClick}
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </PageLayout>
    </>
  );
};

export default Apiforpms;

export const getStaticProps = async () => {
  const res = await getCourseData("pricing-for-pm");
  const courseData = res.result;

  return { props: { course: courseData } };
};
