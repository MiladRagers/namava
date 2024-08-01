import React from "react";

function EmptyBox({ title }: { title: string }) {
  return (
    <p className="bg-red-700 text-white flex-center text-base md:text-lg h-20 font-IranMedium">
      {title}
    </p>
  );
}

export default EmptyBox;
