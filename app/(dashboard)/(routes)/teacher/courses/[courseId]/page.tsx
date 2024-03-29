import { IconBadge } from "@/components/icon-badge"
import { db } from "@/lib/db"
import { auth } from "@clerk/nextjs"
import { LayoutDashboard } from "lucide-react"
import { redirect } from "next/navigation"
import TitleForm from "./_components/TitleForm"
const CoursePage = async ({ params }: { params: { courseId: string } }) => {
	const { userId } = auth()

	if (!userId) {
		return redirect("/")
	}

	const course = await db.course.findUnique({
		where: {
			id: params.courseId,
		},
	})

	if (!course) {
		return redirect("/")
	}

	// array of required fields
	const requiredFields = [
		course.title,
		course.description,
		course.price,
		course.imageUrl,
		course.categoryId,
	]

	// example: completed fields: 3/5
	const totalFields = requiredFields.length
	const completedFields = requiredFields.filter(Boolean).length

	const completionText = `(${completedFields}/${totalFields})`

	return (
		<div className="p-6">
			<div className="flex items-center justify-between">
				<div className="flex flex-col gap-y-2">
					<h1 className="text-2xl font-medium">Course Setup</h1>
					<span className="text-sm text-slate-700">
						Complete all fields {completionText}
					</span>
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
				<div>
					<div className="flex items-center gap-x-2">
						<IconBadge icon={LayoutDashboard} />
						<h2>Customize your course</h2>
					</div>
					<TitleForm initialData={course} courseId={course.id} />
				</div>
			</div>
		</div>
	)
}

export default CoursePage
