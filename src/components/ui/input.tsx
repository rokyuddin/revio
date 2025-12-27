import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-slate-400 selection:bg-indigo-500 selection:text-white border-slate-200 h-11 w-full min-w-0 rounded-xl border bg-white px-4 py-3 text-base shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-200 outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-indigo-500/20 focus-visible:ring-offset-2",
        "aria-invalid:ring-rose-500/20 aria-invalid:border-rose-500",
        "hover:border-slate-300 hover:shadow-[0_2px_8px_rgba(0,0,0,0.06)]",
        className
      )}
      {...props}
    />
  )
}

export { Input }
