import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";

const testimonialList = [
    {
      author: {
        fullName: "Akshay Kumar",
        picture: "https://cdn.easyfrontend.com/pictures/users/user20.jpg",
        designation: "Frequent Traveler",
      },
      rating: 4.5,
      description:
        "The service was excellent! The vehicle was clean, well-maintained, and the pickup process was seamless. Will definitely use this service again.",
    },
    {
      author: {
        fullName: "Raima Sen",
        picture: "https://cdn.easyfrontend.com/pictures/users/user15.jpg",
        designation: "Vacation Planner",
      },
      rating: 4.8,
      description:
        "Booking a rental car for our family trip was super easy. The rates were reasonable, and the vehicle ran perfectly throughout the trip.",
    },
    {
      author: {
        fullName: "Arjun Kapur",
        picture: "https://cdn.easyfrontend.com/pictures/users/user22.jpg",
        designation: "Business Consultant",
      },
      rating: 5,
      description:
        "Great experience! The customer support team was responsive, and the rental process was hassle-free. Highly recommended for business trips.",
    },
    {
      author: {
        fullName: "Deepika Padukone",
        picture: "https://cdn.easyfrontend.com/pictures/users/user1.jpg",
        designation: "Road Trip Enthusiast",
      },
      rating: 5,
      description:
        "I rented an SUV for a week-long road trip. The vehicle was in excellent condition, and the return process was quick and easy. Fantastic service!",
    },
  ];
  

const Rating = ({ rating, showLabel, className }) => (
  <p className={classNames("mb-6", className)}>
    <span>
      {[...Array(5)].map((_, i) => {
        const index = i + 1;
        let content = null;
        if (index <= Math.floor(rating)) {
          content = <FontAwesomeIcon icon={faStar} className="text-yellow-500" />;
        } else if (rating > i && rating < index + 1) {
          content = (
            <FontAwesomeIcon icon={faStarHalfAlt} className="text-yellow-500" />
          );
        } else if (index > rating) {
          content = (
            <FontAwesomeIcon
              icon={faStar}
              className="text-yellow-200 dark:text-opacity-20"
            />
          );
        }
        return <Fragment key={i}>{content}</Fragment>;
      })}
    </span>
    {showLabel && <span>{rating.toFixed(1)}</span>}
  </p>
);

const TestimonialItem = ({ testimonial }) => (
  <div className="bg-white dark:bg-slate-800 rounded-lg shadow-xl flex items-center h-full p-6 py-12">
    <div className="mr-4">
      <img
        src={testimonial.author.picture}
        alt={testimonial.author.fullName}
        className="max-w-[100px] min-w-[100px] h-auto rounded-full border border-red-600"
      />
    </div>
    <div>
      <h4 className="text-2xl font-medium mb-2">{testimonial.author.fullName}</h4>
      <Rating rating={testimonial.rating} showLabel={false} />
      <p className="opacity-80">{testimonial.description}</p>
    </div>
  </div>
);

const Testimonial10 = () => {
  return (
    <section className="ezy__testimonial10 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white px-16">
      <div className="container relative px-4 mx-auto">
        <div className="flex mb-6 md:mb-12">
          <div className="sm:max-w-xl">
            <h2 className="text-3xl leading-none md:text-[45px] font-bold mb-4">
              Customers Reviews
            </h2>
            <p className="text-lg opacity-80">
  "Experience the freedom of the open road with our reliable and affordable vehicle rental services, designed to make every journey unforgettable."
</p>

          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-12">
          {testimonialList.map((testimonial, i) => (
            <div className="col-span-2 md:col-span-1" key={i}>
              <TestimonialItem testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial10;
