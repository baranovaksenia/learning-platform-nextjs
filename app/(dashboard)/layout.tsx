import Navbar from './_components/Navbar'
import Sidebar from "./_components/Sidebar"

interface DashboardLayoutProps {
	children: React.ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
	return (
		<div className="h-full">
			{/* navigation container */}
			<div className="w-full fixed h-[80px] md:pl-56  inset-y-0  z-50">
				<Navbar/>
			</div>
			{/* container for sidebar: hidden on small screens */}
			<div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
				<Sidebar />
			</div>
			{/* main content */}
			<main className="md:pl-56 h-full">{children}</main>
		</div>
	)
}

export default DashboardLayout
