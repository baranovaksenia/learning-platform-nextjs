import { cva, type VariantProps } from "class-variance-authority"
import { LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"

// Define background variants using the cva function
const backgroundVariants = cva(
	"rounded-full flex items-center justify-center",
	{
		variants: {
			variant: {
				default: "bg-sky-100",
				success: "bg-emerald-100",
			},
			size: {
				default: "p-2",
				sm: "p-1",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
)

// Define icon variants using the cva function
const iconVariants = cva("", {
	variants: {
		variant: {
			default: "text-sky-700",
			success: "text-emerald-700",
		},
		size: {
			default: "h-8 w-8",
			sm: "h-4 w-4",
		},
	},
	defaultVariants: {
		variant: "default",
		size: "default",
	},
})

// Define the type for props related to background variants
type BackgroundVariantsProps = VariantProps<typeof backgroundVariants>
// Define the type for props related to icon variants
type IconVariantsProps = VariantProps<typeof iconVariants>

// Define the interface for IconBadge component props
interface IconBadgeProps extends BackgroundVariantsProps, IconVariantsProps {
	icon: LucideIcon
}

export const IconBadge = ({ icon: Icon, variant, size }: IconBadgeProps) => {
	/**
	 * Renders an icon badge with the specified icon, variant, and size
	 * @param icon - The icon to be rendered
	 * @param variant - The variant of the badge
	 * @param size - The size of the badge
	 * @returns JSX element representing the icon badge
	 */
	return (
		<div className={cn(backgroundVariants({ variant, size }))}>
			<Icon className={cn(iconVariants({ variant, size }))} />
		</div>
	)
}
