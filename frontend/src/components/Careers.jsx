import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const contents = [
	{
		title: "Front-End Developer",
		location: "REMOTE",
		type: "FULL TIME",
	},
	{
		title: "Back-End Developer",
		location: "REMOTE",
		type: "FULL TIME",
	},
	{
		title: "UI/UX Designer",
		location: "REMOTE",
		type: "FULL TIME",
	},
	{
		title: "Product Designer",
		location: "REMOTE",
		type: "FULL TIME",
	},
	{
		title: "Project Manager",
		location: "REMOTE",
		type: "FULL TIME",
	},
];

const CareerCard = ({ content }) => {
	const { title, location, type } = content;
	return (
		<div className="border border-gray-600 dark:border-gray-800 rounded mt-6">
			<div className="flex items-center justify-between p-3 md:p-6">
				<div>
					<h4 className="text-2xl font-medium mb-2 sm:mb-0">{title}</h4>
					<div className="flex mt-2">
						<p className="text-sm opacity-50">{location}</p>
						<p className="text-sm opacity-50 ml-3">{type}</p>
					</div>
				</div>
				<button className="text-blue-600 bg-transparent text-3xl font-medium hover:bg-opacity-90 transition">
					<FontAwesomeIcon icon={faArrowAltCircleRight} className="ml-2" />
				</button>
			</div>
		</div>
	);
};

CareerCard.propTypes = {
	content: PropTypes.object.isRequired,
};

const Careers = () => {
	return (
		<section className="ezy__careers5 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
			<div className="container px-4">
				<div className="grid grid-cols-12 justify-center">
					<div className="col-span-12 md:col-span-6 md:col-start-4 text-center">
						<h1 className="text-3xl leading-none font-bold md:text-5xl mb-6">
							Let's work together
						</h1>
						<p className="leading-6 font-medium opacity-80">
							Our philosophy is simple - hire a team of diverse, passionate
							people and faster a culture that empowers you to do the best work.
						</p>
					</div>

					<div className="col-span-12 md:col-span-8 md:col-start-3 mt-12">
						{contents.map((content, i) => (
							<CareerCard content={content} key={i} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Careers;
