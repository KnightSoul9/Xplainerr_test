import PageLayout from "@/src/layout/PageLayout";
import { PastEvents } from "@/src/components/v3/Events";
import { PAST_EVENTS } from "@/src/constants/event";

const PastEventsPage = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-3 pb-16 lg:max-w-7xl lg:py-[20px]">
        {/* Past Events Section */}
        <h3 className="mb-[32px] mt-4 text-2xl font-bold text-[#333] lg:mt-2 lg:text-4xl">
          Past Events
        </h3>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PAST_EVENTS.map((event, index) => (
            <PastEvents key={index} event={event} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default PastEventsPage;
