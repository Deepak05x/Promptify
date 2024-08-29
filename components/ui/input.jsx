import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
    return <input type={type} className={cn("flex h-10 w-full rounded-md outline-none  bg-white px-3 py-2 text-md", className)} ref={ref} {...props} />;
});
Input.displayName = "Input";

export { Input };
