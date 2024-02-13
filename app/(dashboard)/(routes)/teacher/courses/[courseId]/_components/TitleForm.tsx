"use client"

import { Button } from "@/components/ui/button"
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { Pencil } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import * as z from "zod"

// Interface for props
interface TitleFormProps {
	initialData: {
		title: string
	}
	courseId: string
}

// Define form schema using zod
const formSchema = z.object({
	title: z.string().min(1, {
		message: "Title is required",
	}),
})

// Define the TitleForm component
const TitleForm = ({ initialData, courseId }: TitleFormProps) => {
	// State for editing mode
	const [isEditing, setIsEditing] = useState(false)

	// Function to toggle edit mode
	const toggleEdit = () => setIsEditing(current => !current)

	// Get the next.js router
	const router = useRouter()

	// Initialize the form using react-hook-form
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: initialData,
	})

	// Destructure form state properties
	const { isSubmitting, isValid } = form.formState

	// Handle form submission
	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		try {
			await axios.patch(`/api/courses/${courseId}`, values)
			toast.success("Course updated")
			toggleEdit()
			router.refresh()
		} catch {
			toast.error("Something went wrong")
		}
	}

	// Render the TitleForm component
	return (
		<div className="mt-6 border bg-slate-100 rounded-md p-4">
			{/* Title and edit button */}
			<div className="font-medium flex items-center justify-between">
				Course Title
				<Button onClick={toggleEdit} variant="ghost">
					{isEditing ? (
						<>Cancel</>
					) : (
						<>
							<Pencil className="h-4 w-4 mr-2" />
							Edit title
						</>
					)}
				</Button>
			</div>
			{/* Display the current title when editing */}
			{isEditing && (
				<p className="line-clamp-3 text-sm mt-2 ">{initialData.title}</p>
			)}
			{/* Display the form when editing */}
			{isEditing && (
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-4 mt-4 "
					>
						<FormField
							control={form.control}
							name="title"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input
											disabled={isSubmitting}
											placeholder="Your course title"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div className="flex items-center gap-x-2">
							<Button disabled={!isValid || isSubmitting} type="submit">
								Save
							</Button>
						</div>
					</form>
				</Form>
			)}
		</div>
	)
}

export default TitleForm
