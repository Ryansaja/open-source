import React from "react";

type Props = {
  width?: number;
  height?: number;
  className?: string;
};

export default function LogoSVG({ width = 50, height = 50, className }: Props) {
  return (
    <div className={`font-serif text-2xl font-semibold text-neutral-900 dark:text-neutral-100 ${className}`}>
      Sixteen 8
    </div>
  );
}
