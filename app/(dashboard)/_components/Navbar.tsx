import NavbarRoutes from '@/components/NavbarRoutes'
import MobileSidebar from "./MobileSidebar"

const Navbar = () => {
	return (
		<div className="p-4 h-full border-b flex items-center bg-white shadow-sm">
			{/* hide on md devices */}
			<MobileSidebar />
			<NavbarRoutes />
		</div>
	)
}

export default Navbar
