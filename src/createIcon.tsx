import {
  createElement,
  forwardRef,
  type ForwardRefExoticComponent,
  type RefAttributes,
  type SVGProps,
} from "react";

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, "ref"> {
  /** Sets both width and height. Defaults to "1em" so icons scale with font-size. */
  size?: number | string;
}

export type Icon = ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;

/**
 * Shared icon factory — every generated icon is `createIcon("<path d>")`. Renders an
 * `<svg fill="currentColor">` (inherits `text-*` color) with a `size` prop, forwardRef, and all
 * SVGProps passed through. This is the single source of truth all 7k+ icons share.
 */
export function createIcon(d: string): Icon {
  return forwardRef<SVGSVGElement, IconProps>(function Icon({ size = "1em", ...props }, ref) {
    return createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: size,
        height: size,
        fill: "currentColor",
        ...props,
        ref,
      },
      createElement("path", { d }),
    );
  });
}
