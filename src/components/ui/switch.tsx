import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer border-2 border-black inline-flex p-0 h-5 w-9 shrink-0 cursor-pointer items-center rounded-full   transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-autoTapSwitchContainerBackgroundChecked data-[state=unchecked]:bg-autoTapSwitchContainerBackgroundUnChecked data-[state=unchecked]:shadow-autoTapSwitchContainerShadowUnChecked data-[state=checked]:shadow-autoTapSwitchContainerShadowChecked",
      className
    )}
    
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none flex items-center justify-center h-5 w-12 rounded-full bg-autoTapSwitchThumbBackground shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-8 data-[state=unchecked]:translate-x-0 data-[state=unchecked]:pr-0.5 data-[state=checked]:pr-0"
      )}
      style={{
        boxShadow:"inset -0.957645px -0.44199px 0.515655px rgba(0, 0, 0, 0.47)"
      }}
    >
      <span className="text-white relative h-4 w-11 rounded-full"
        style={{
          backgroundColor:"#141618",
          boxShadow:" -0.73665px 1.10497px 1.76796px 1.54696px rgba(0, 0, 0, 0.46), 1.91529px 2.06262px 4.27257px 2.65194px rgba(0, 0, 0, 0.25), 0.14733px 1.4733px 0.883979px rgba(0, 0, 0, 0.68), 0.14733px 1.84162px 0.883979px rgba(0, 0, 0, 0.48), inset 0.29466px 0px 0px rgba(31, 58, 211, 0.92), inset 0.515655px 0px 0.883979px rgba(31, 58, 211, 0.44), inset -0.14733px 0.810315px 0.662985px 0.29466px rgba(255, 255, 255, 0.12), inset -0.220995px -0.662985px 0.73665px rgba(0, 0, 0, 0.75), inset 0px -2.20995px 1.91529px rgba(0, 0, 0, 0.37), inset -0.957645px 1.03131px 1.76796px rgba(255, 255, 255, 0.25)",

        }}
      >
        <span className="text-[10px] font-light absolute left-1/4 ">Auto</span>
      </span>
    </SwitchPrimitives.Thumb>
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
/* Rectangle 3 */

// position: absolute;
// width: 58.5px;
// height: 14.48px;
// left: calc(50% - 58.5px/2);
// top: calc(50% - 14.48px/2 - 0px);

// background: linear-gradient(94.4deg, #000000 2.66%, rgba(0, 0, 0, 0) 53.57%), linear-gradient(214.96deg, #000000 -9.35%, #131517 79.43%);
// box-shadow: inset -0.635856px -0.293472px 0.342384px rgba(0, 0, 0, 0.47);
// border-radius: 9.7824px;


