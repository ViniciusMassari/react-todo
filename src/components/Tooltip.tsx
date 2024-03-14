import {
	Tooltip as ExternalTooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip"
import type { PropsWithChildren } from "react"

interface TooltipProps extends PropsWithChildren {
	label: string
}

const Tooltip = ({ children, label }: TooltipProps) => {
	return (
		<TooltipProvider>
			<ExternalTooltip>
				<TooltipTrigger>{children}</TooltipTrigger>
				<TooltipContent>{label}</TooltipContent>
			</ExternalTooltip>
		</TooltipProvider>
	)
}

export default Tooltip
