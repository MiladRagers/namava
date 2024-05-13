import React from "react";

function Label({ title }: { title: string }) {
  return <label className="text-xs md:text-sm font-IranMedium">{title}</label>;
}

export default Label;
