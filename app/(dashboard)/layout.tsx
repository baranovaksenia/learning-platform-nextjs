import Sidebar from "./_components/Sidebar"

interface DashboardLayoutProps {
	children: React.ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
	return (
		<div className="h-full">
			{/* container for sidebar: hidden on small screens */}
			<div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
				<Sidebar />
			</div>
			{children}
		</div>
	)
}

export default DashboardLayout
