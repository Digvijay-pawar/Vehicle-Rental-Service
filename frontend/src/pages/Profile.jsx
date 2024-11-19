import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCar,
	faCalendarCheck,
	faChevronRight,
	faClock,
	faDollarSign,
	faGift,
	faHeart,
	faIdCard,
	faReceipt,
	faShippingFast,
	faUsers,
	faWallet,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const sidebarData = [
	{
		type: "link",
		title: "Overview",
	},
	{
		type: "link",
		title: "Bookings",
	},
	{
		type: "link",
		title: "Payment",
	},
	{
		type: "link",
		title: "Invoices",
	},
	{
		type: "link",
		title: "Vehicle History",
	},
	{
		type: "link",
		title: "Account Settings",
	},
	{
		type: "divider",
	},
	{
		type: "link",
		title: "Invite Friends",
	},
	{
		type: "divider",
	},
	{
		type: "link",
		title: "Help Center",
	},
	{
		type: "link",
		title: "Manage Reports",
	},
];

const profileList = [
	{
		icon: faHeart,
		text: "Saved Vehicles",
	},
	{
		icon: faUsers,
		text: "Rented Vehicles",
	},
	{
		icon: faClock,
		text: "Booking History",
	},
	{
		icon: faIdCard,
		text: "Discount Coupons",
	},
];

const ordersList = [
	{
		icon: faWallet,
		text: "Unpaid",
	},
	{
		icon: faGift,
		text: "Pending Approval",
	},
	{
		icon: faShippingFast,
		text: "Shipped",
	},
	{
		icon: faCalendarCheck,
		text: "Completed",
	},
];

const links = [
	{
		icon: faReceipt,
		text: "My Appeals",
	},
	{
		icon: faDollarSign,
		text: "Disputed Payments",
	},
];

const SideBar = () => {
	const [value, setValue] = useState(0);

	return (
		<div className="bg-white dark:bg-slate-800 shadow-xl py-6">
			<h5 className="text-xl font-bold mx-4 mb-4">Account</h5>

			<ul className="flex flex-wrap flex-col">
				{sidebarData.map((item, i) => {
					if (item.type === "divider") {
						return <hr className="my-2 mx-4 opacity-60 dark:opacity-10" key={i} />;
					}

					return (
						<li
							className={`px-4 py-2 opacity-80 hover:text-blue-600 hover:bg-gray-200 dark:hover:bg-slate-900 duration-500 cursor-pointer ${
								i === value && "bg-gray-200 dark:bg-slate-900 border-l-4 border-blue-600"
							}`}
							key={i}
							onClick={() => setValue(i)}
						>
							<a href="#">{item.title}</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

const Profile = ({ list }) => {
	return (
		<a href="#!" className="group">
			<div className="mb-2 text-3xl opacity-25 group-hover:text-blue-600 group-hover:opacity-100 duration-500">
				<FontAwesomeIcon icon={list.icon} />
			</div>
			<p className="text-[17px]">{list.text}</p>
		</a>
	);
};

Profile.propTypes = {
	list: PropTypes.object.isRequired,
};

const Orders = ({ list }) => {
	return (
		<>
			<div className="text-4xl text-blue-600 mb-4">
				<FontAwesomeIcon icon={list.icon} />
			</div>
			<p className="text-[17px]">{list.text}</p>
		</>
	);
};

Orders.propTypes = {
	list: PropTypes.object.isRequired,
};

const Links = ({ link }) => {
	return (
		<>
			<hr className="my-5 mx-4 opacity-60 dark:opacity-10" />

			<a href="#!" className="flex items-center justify-between hover:text-blue-600 w-full">
				<div className="flex items-center justify-between px-4 w-full">
					<div className="flex items-center opacity-75">
						<FontAwesomeIcon icon={link.icon} />
						<p className="mb-0 ml-2">{link.text}</p>
					</div>
					<FontAwesomeIcon icon={faChevronRight} className="text-xl" />
				</div>
			</a>
		</>
	);
};

Links.propTypes = {
	link: PropTypes.object.isRequired,
};

const VehicleProfile = () => {
	return (
		<section className="py-14 px-10 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden z-10">
			<div className="container px-4 mx-auto">
				<div className="flex flex-col md:flex-row gap-6">
					{/* Sidebar  */}
					<div className="w-full md:w-1/3">
						<SideBar />

						<div className="bg-white dark:bg-slate-800 shadow-xl d-flex flex-column text-center p-6 px-4 md:px-6 mt-6">
							<h6 className="text-lg leading-none mb-1">RentHub Mobile App</h6>
							<p className="text-sm opacity-50 mb-0">Rent Vehicles Anytime, Anywhere!</p>
							<a href="#!">
								<img
									src="https://cdn.easyfrontend.com/pictures/qr-code.png"
									alt="QR Code"
									className="max-w-full h-auto mx-auto"
								/>
							</a>
							<a href="#!" className="text-sm hover:text-blue-600 opacity-75">
								Search or click to download
							</a>
						</div>
					</div>

					{/* Profile  */}
					<div className="w-full md:w-2/3">
						<div className="bg-white dark:bg-slate-800 shadow-xl p-6">
							<div className="flex items-center">
								<img
									src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
									alt="Profile"
									width="70"
									height="70"
									className="rounded-full"
								/>
								<h6 className="text-[22px] font-bold ml-4">John Doe</h6>
							</div>

							<div className="grid grid-cols-4 gap-6 mt-6">
								{profileList.map((list, i) => (
									<div className="col-span-2 sm:col-span-1 text-center" key={i}>
										<Profile list={list} />
									</div>
								))}
							</div>
						</div>

						<div className="bg-white dark:bg-slate-800 shadow-xl p-6 mt-4">
							<div className="flex items-center justify-between">
								<h6 className="text-[22px] font-bold ml-4">My Vehicle Orders</h6>
								<a
									href="#!"
									className="opacity-50 ml-2 small hover:text-blue-600 hover:opacity-100"
								>
									View All
									<FontAwesomeIcon icon={faChevronRight} />
								</a>
							</div>

							<hr className="my-5 mx-4 opacity-60 dark:opacity-10" />

							<div className="grid grid-cols-4 gap-6 my-6">
								{ordersList.map((list, i) => (
									<div className="col-span-2 sm:col-span-1 text-center" key={i}>
										<Orders list={list} />
									</div>
								))}
							</div>

							{links.map((link, i) => (
								<Links link={link} key={i} />
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default VehicleProfile;
