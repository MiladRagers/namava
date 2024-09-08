import React from "react";

function Label({ title , className }: { title: string; className ?: string }) {
  return <label className={`text-xs md:text-sm font-IranMedium ${className}`}>{title}</label>;
}

export default Label;
