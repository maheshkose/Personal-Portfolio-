import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Props = {
  children?: React.ReactNode;
  text?: string;
};
export function TooltipSides({ children, text }: Props) {
  return (
    <Tooltip >
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent className="bg-gray-800 text-gray-100 dark:bg-gray-50 dark:text-gray-800 border-none shadow-lg rounded-md p-2">
        <p>{text}</p>
      </TooltipContent>
    </Tooltip>
  );
}
