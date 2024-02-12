import { db } from "@/lib/db"
import { auth } from "@clerk/nextjs"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
	try {
		const { userId } = auth()
		const { title } = await req.json()

		if (!userId) {
			return new NextResponse("Unauthorized", { status: 401 })
		}

		// create new course (require only userId and title, another - optional)
		const course = await db.course.create({
			data: {
				userId,
				title,
			},
		})
		return NextResponse.json(course)
	} catch (error) {
		console.log("[COURSES", error)
		return new NextResponse("Internal Error", { status: 500 })
	}
}
