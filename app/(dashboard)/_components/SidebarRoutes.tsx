"use client";
import { Compass, Layout } from "lucide-react";
import SidebarItem from "./SidebarItem";

// Routes that will be displayed for non-authenticated users (guests)
const guestRoutes = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: Compass,
    label: "Browse",
    href: "/search",
  },
];


const SidebarRoutes = () => {
	const routes = guestRoutes;

	return (
		<div className='w-full flex flex-col'>
			  {routes.map(route => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
		</div>
	)
}

export default SidebarRoutes