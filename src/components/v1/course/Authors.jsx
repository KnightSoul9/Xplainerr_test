import Image from "next/image";
import { useRouter } from "next/router";
import React, { useCallback, useMemo } from "react";
import { FaLinkedin } from "react-icons/fa";

// Move this outside component to prevent recreating on each render
const LINKEDIN_PROFILES = {
  "Deepak Kumar": "https://www.linkedin.com/in/dipakkr/",
  "Venkatesh Gupta": "https://www.linkedin.com/in/venkateshgupta5/",
};

const Authors = ({ data, courseSlug }) => {
  const router = useRouter();

  const title = useMemo(() => 
    router.pathname === "/cohorts/tech-for-product-managers"
      ? "Meet the instructor"
      : "Meet the creators",
    [router.pathname]
  );

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid gap-10 md:gap-12">
          {data.map((author, index) => (
            <AuthorCard 
              key={author.name || index} 
              author={author} 
              courseSlug={courseSlug} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const AuthorCard = ({ author, courseSlug }) => {
  const router = useRouter();
  const linkedin = LINKEDIN_PROFILES[author?.name] || "";

  const renderDescription = useCallback(() => {
    if (router.pathname === "/cohorts/tech-for-product-managers") {
      return (
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p className="text-lg">
            Venkatesh is currently working as a Product Manager 2 @ Razorpay.
            He has 5+ years of experience across ed-tech, HR-tech, developer
            tooling, and platform products.
          </p>
          <p className="text-lg">
            He has also been a 2x ed-tech entrepreneur and has written a
            famous e-book - API for Product Managers.
          </p>
        </div>
      );
    }

    if (router.pathname === "/cohorts/api-for-pms") {
      return (
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p className="text-lg">
            {`When I joined Razorpay, I noticed something unusual: Product Managers
            were designing APIs. At first, it felt a bit odd. But soon, I realized
            APIs are not just tech specs—they're full-fledged products.`}
          </p>
          <p className="text-lg">
            APIs are more than just endpoints; {`they're strategic enablers.`} For
            instance, when UPI was launched in India, most payment gateways had to
            implement breaking changes, delaying adoption and GTM by months. But
            Razorpay API design was so forward-thinking that existing customers
            could integrate UPI payments on <b>day one</b> without any breaking changes. 🚀
          </p>
          <p className="text-lg">
            If you are in fintech or platform products, understanding APIs is no
            longer optional—{`it's a must-have skill.`}
          </p>
          <p className="text-lg">
            Currently, I am a <b>Product Manager II</b> at Razorpay with 6.5+ years of
            experience spanning <b>ed-tech, HR-tech, developer tooling, and platform products</b>.
            I have worn the hat of a technical PM, building products at scale like 
            <b>reconciliation platforms</b> and <b>developer consoles</b>.
          </p>
          <p className="text-lg">
           {` I'm`} also the author of a popular e-book, <b>API for Product Managers</b>, 
            which has been read by <b>6,000+ PMs</b> and was rated <b>#1 on Product Hunt</b>. 🌟
          </p>
          <p className="text-lg">
            {`APIs are the future, and as PMs, it's on us to get them right!`}
          </p>
        </div>
      );
    }

    return (
      <div className="prose prose-lg max-w-none">
        {author.description.split("\n").map((line, index) => (
          <p key={index} className="mb-4">
            {line.replace(/\[(.*?)\]\((.*?)\)/g, (match, text, url) => (
              <a 
                href={url}
                className="text-blue-600 hover:text-blue-800 underline transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {text}
              </a>
            ))}
          </p>
        ))}
      </div>
    );
  }, [router.pathname, author?.description]);

  return (
    <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out">
      <div className="p-8 lg:flex items-start gap-12">
        <div className="lg:w-1/3 relative">
          <div className="aspect-square overflow-hidden rounded-2xl bg-gray-100">
            <Image
              className="object-cover w-full h-full transform transition-transform group-hover:scale-105 duration-300"
              src={author?.image}
              width={400}
              height={400}
              alt={author?.name}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4dHRsdHR4dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR4SEhwYHBoXFxodHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
          </div>
          {linkedin && (
            <div className="absolute -bottom-4 -right-4 bg-white p-2 rounded-full shadow-lg transform transition-transform group-hover:scale-110">
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 transition-colors"
                aria-label={`LinkedIn profile of ${author?.name}`}
              >
                <FaLinkedin size={32} />
              </a>
            </div>
          )}
        </div>

        <div className="lg:w-2/3 mt-8 lg:mt-0">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            {author?.name}
          </h3>
          {renderDescription()}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Authors);
