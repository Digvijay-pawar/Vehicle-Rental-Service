import React from "react";
import PropTypes from "prop-types";

const serviceList = [
  {
    image: "images/car-11.jpg", // Replace with vehicle image
    title: "Affordable Car Rentals",
    description:
      "Explore our wide range of affordable car rental options for your city and long-distance journeys, ensuring comfort and convenience.",
  },
  {
    image: "images/car-3.jpg", // Replace with vehicle image
    title: "Luxury Vehicle Rentals",
    description:
      "Ride in style with our premium luxury cars, perfect for weddings, corporate events, and special occasions.",
  },
  {
    image: "images/image_2.jpg", // Replace with vehicle image
    title: "Bike Rentals",
    description:
      "Discover the joy of riding with our economical and performance bikes for daily commutes or weekend getaways.",
  },
  {
    image: "images/car-8.jpg", // Replace with vehicle image
    title: "Van and SUV Rentals",
    description:
      "Travel together with our spacious vans and SUVs, ideal for family trips and group adventures.",
  },
  {
    image: "images/image_1.jpg", // Replace with vehicle image
    title: "Self-Drive Rentals",
    description:
      "Enjoy the freedom of driving yourself with our self-drive options, available for cars and bikes.",
  },
  {
    image: "images/car-2.jpg", // Replace with vehicle image
    title: "Corporate Rentals",
    description:
      "Flexible and reliable corporate vehicle rental services to cater to your business travel needs.",
  },
];

const ServiceItem = ({ service }) => (
  <div
    className="bg-center bg-no-repeat bg-cover rounded-[20px] flex flex-col justify-center items-center h-full transition duration-150"
    style={{ backgroundImage: `url(${service.image})` }}
  >
    <div className="rounded-[20px] bg-blue-600 bg-opacity-50 text-white backdrop-blur scale-90 hover:scale-100 opacity-0 transition duration-500 hover:opacity-100 p-4 lg:p-16 xl:p-20">
      <h4 className="text-2xl font-medium mb-4">{service.title}</h4>
      <p className="opacity-80">{service.description}</p>
    </div>
  </div>
);

ServiceItem.propTypes = {
  service: PropTypes.object.isRequired,
};

const Service14 = () => {
  return (
    <section className="ezy__service14 py-14 px-16 md:py-24 bg-base-200  text-zinc-900">
      <div className="container px-4">
        <div className="grid grid-cols-12 mb-6 md:mb-12">
          <div className="col-span-12 lg:col-span-6 lg:col-start-4 text-center">
            <h2 className="text-3xl leading-none md:text-[45px] font-bold mb-6">
              Our Vehicle Rental Services
            </h2>
            <p className="text-lg opacity-80">
              Experience the freedom and convenience of renting the perfect vehicle for your needs. We make every journey smooth and memorable.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-6 text-center">
          {serviceList.map((service, i) => (
            <div className="col-span-12 sm:col-span-6 md:col-span-4" key={i}>
              <ServiceItem service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service14;
