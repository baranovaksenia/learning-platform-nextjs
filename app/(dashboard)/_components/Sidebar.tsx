import Logo from "./Logo"
import SidebarRoutes from "./SidebarRoutes"

const Sidebar = () => {
	return (
		<div className="flex flex-col border-r h-full overflow-y-auto bg-white shadow-sm">
			{/* container for logo */}
			<div className="p-6">
				<Logo />
			</div>

			{/* sidebar links */}
			<div className="flex flex-col w-full">
				<SidebarRoutes />
			</div>
		</div>
	)
}

export default Sidebar
