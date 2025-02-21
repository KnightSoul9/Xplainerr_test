import PageLayout from "@/src/layout/PageLayout";
import { UpcomingEvents } from "@/src/components/v3/Events";
import { UPCOMING_EVENTS } from "@/src/constants/event";

const UpcomingEventsPage = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-3 pb-16 lg:max-w-7xl lg:py-[15px]">
        {/* Upcoming Events Section */}
        <h3 className="my-[32px] mt-8 text-2xl font-bold text-[#333] lg:text-4xl">
          Upcoming Events
        </h3>
        <div className="grid grid-cols-1 gap-5">
          {UPCOMING_EVENTS.map((event, index) => (
            <UpcomingEvents key={index} event={event} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default UpcomingEventsPage;
