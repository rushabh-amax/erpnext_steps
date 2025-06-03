import { useState } from "react"
import { Clipboard, ThumbsUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"

export default function CopyCommand({ step_name, command, below_text ,sub_step_name}) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(command).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="p-4 border rounded-lg mb-6 bg-white dark:bg-gray-900 shadow-sm">
      <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
        {step_name}
      </h3>

      <p>{sub_step_name}</p>
      <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-md text-sm font-mono text-gray-700 dark:text-gray-200">
        <span className="truncate" style={{ whiteSpace: 'pre-wrap' }}>{command}</span>

        <HoverCard open={copied}>
          <HoverCardTrigger asChild>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={handleCopy}
                  className="ml-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  {copied ? (
                    <ThumbsUp className="w-4 h-4 text-green-500" />
                  ) : (
                    <Clipboard className="w-4 h-4" />
                  )}
                </Button>
              </TooltipTrigger>
              <TooltipContent side="top">
                {copied ? "Copied!" : "Copy to clipboard"}
              </TooltipContent>
            </Tooltip>
          </HoverCardTrigger>
          <HoverCardContent className="text-xs text-center">
            Copied this {step_name}
          </HoverCardContent>
        </HoverCard>
      </div>

      {below_text && (
        <p style={{ whiteSpace: 'pre-wrap' }} className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          {below_text}
        </p>
      )}
    </div>
  )
}
