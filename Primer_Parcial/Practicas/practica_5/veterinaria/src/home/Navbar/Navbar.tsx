import { useState } from "react";
import { NavLink } from "react-router-dom";

import { Menus } from "../../constants/menu";
import { routes } from "../../constants/routes";

export const Navbar = () => {
	const [open, setOpen] = useState(true);

	return (
		<div
			className={` ${
				open ? "w-56" : "w-20 "
			} bg-dark-purple h-screen p-5  pt-8 relative duration-300 h-screen`}
		>
			<img
				src="./src/assets/control.png"
				className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
					 border-2 rounded-full  ${!open && "rotate-180"}`}
				onClick={() => setOpen(!open)}
			/>
			<div className="flex gap-x-4 items-center">
				<NavLink to={routes.home}>
					<img
						src="./src/assets/logo.png"
						className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
					/>
				</NavLink>
			</div>
			<ul className="pt-6 w-44 overflow-y-auto h-4/5">
				{Menus.map((Menu, index) => (
					<li key={index}>
						<NavLink
							className={({ isActive, isPending }) =>
								isActive
									? `flex  rounded-md p-2 w-full cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
									${Menu.gap ? "mt-9" : "mt-2"} ${
											!open && "hidden"
									  } origin-left duration-200 text-decoration-none bg-light-white`
									: `flex  rounded-md p-2 w-full cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
									${Menu.gap ? "mt-9" : "mt-2"} ${!open && "hidden"} origin-left duration-200 text-decoration-none`
							}
							to={Menu.link}
						>
							{Menu.title}
						</NavLink>
					</li>
				))}
			</ul>
		</div>
	);
};
