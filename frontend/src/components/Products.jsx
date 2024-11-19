import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHeart,
	faShoppingCart,
	faStar,
	faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";

// Vehicle Data
const vehicles = [
	{
		img: "https://example.com/images/vehicle1.jpg",
		new: "New",
		title: "Tesla Model S",
		subTitle: "Electric Sedan",
		dailyRate: "199.00",
		real: "250.00",
		location: "California",
		availibility: "Available",
		rating: 4.7,
		count: "120",
	},
	{
		img: "https://example.com/images/vehicle2.jpg",
		new: "New",
		title: "Ford Mustang",
		subTitle: "Sport Coupe",
		dailyRate: "159.00",
		real: "220.00",
		location: "Nevada",
		availibility: "Available",
		rating: 4.5,
		count: "80",
	},
	{
		img: "https://example.com/images/vehicle3.jpg",
		new: "New",
		title: "BMW X5",
		subTitle: "Luxury SUV",
		dailyRate: "289.00",
		real: "350.00",
		location: "New York",
		availibility: "Available",
		rating: 4.9,
		count: "150",
	},
	{
		img: "https://example.com/images/vehicle4.jpg",
		new: "New",
		title: "Chevrolet Silverado",
		subTitle: "Pickup Truck",
		dailyRate: "129.00",
		real: "170.00",
		location: "Texas",
		availibility: "Available",
		rating: 4.2,
		count: "45",
	},
	{
		img: "https://example.com/images/vehicle4.jpg",
		new: "New",
		title: "Chevrolet Silverado",
		subTitle: "Pickup Truck",
		dailyRate: "129.00",
		real: "170.00",
		location: "Texas",
		availibility: "Available",
		rating: 4.2,
		count: "45",
	},,
	{
		img: "https://example.com/images/vehicle4.jpg",
		new: "New",
		title: "Chevrolet Silverado",
		subTitle: "Pickup Truck",
		dailyRate: "129.00",
		real: "170.00",
		location: "Texas",
		availibility: "Available",
		rating: 4.2,
		count: "45",
	}   
	// Add more vehicles as needed
];

const Rating = ({ rating }) => (
	<span className="flex items-center text-yellow-500">
		{[...Array(5)].map((_, i) => {
			const index = i + 1;
			let content = "";
			if (index <= Math.floor(rating))
				content = <FontAwesomeIcon icon={faStar} className="mr-1" />;
			else if (rating > i && rating < index + 1)
				content = <FontAwesomeIcon icon={faStarHalfAlt} className="mr-1" />;
			else if (index > rating)
				content = <FontAwesomeIcon icon={farStar} className="mr-1" />;

			return <Fragment key={i}>{content}</Fragment>;
		})}
	</span>
);

Rating.propTypes = {
	rating: PropTypes.number,
};

const VehicleItem = ({ vehicle, i }) => {
	return (
		<div className="rounded border dark:border-slate-700 h-full">
			<div className="relative">
				<h6 className="absolute top-3 right-5 bg-green-500 text-white py-1 px-3 rounded-2xl">
					{vehicle.new}
				</h6>
				<a href="#!">
					<img src={`images/car-${i+1}.jpg`} alt="vehicle" className="w-full rounded-t" />
				</a>
			</div>
			<div className="p-4 lg:p-6 text-start">
				<a href="#!">
					<h5 className="text-[17px] font-medium hover:underline mb-1">
						{vehicle.title}
					</h5>
				</a>
				<a href="#!">
					<h5 className="text-sm leading-none opacity-60 hover:underline font-medium">
						{vehicle.subTitle}
					</h5>
				</a>
				<div className="py-2 flex items-center">
					<h5 className="text-2xl font-medium text-blue-600">
						${vehicle.dailyRate} / day
					</h5>
					<h5 className="text-[15px] opacity-70 line-through ml-2">
						${vehicle.real} / day
					</h5>
				</div>
				<div className="opacity-80">
					<h6 className="font-medium text-sm mb-1">
						Location: {vehicle.location}
					</h6>
					<h6 className="text-sm font-medium">
						Availability:
						<span className="text-emerald-500">{vehicle.availibility}</span>
					</h6>
				</div>
				<div className="flex justify-between items-center mt-6">
					<div className="flex items-center text-yellow-500">
						<Rating rating={vehicle.rating} />
						<span className="text-black dark:text-white opacity-75">
							({vehicle.count} reviews)
						</span>
					</div>
					<div className="flex">
						<button className="text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white rounded py-1 px-3 text-sm mr-2">
							<FontAwesomeIcon icon={faHeart} />
						</button>
						<button className="bg-blue-600 border border-blue-600 text-white hover:bg-opacity-90 py-1 px-3 rounded text-sm">
							<FontAwesomeIcon icon={faShoppingCart} />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

VehicleItem.propTypes = {
	vehicle: PropTypes.object.isRequired,
};

const VehicleRental = () => {
	return (
		<section className="ezy__epgrid8 light py-14 px-16 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden z-10">
			<div className="container px-4 mx-auto">
				<div className="grid grid-cols-12 gap-6 text-center">
					{vehicles.map((vehicle, i) => (
						<div className="col-span-12 md:col-span-6 xl:col-span-4" key={i}>
							<VehicleItem vehicle={vehicle} i={i}/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default VehicleRental;
