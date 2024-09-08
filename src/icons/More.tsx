import React from "react";

function More({ fill }: { fill: string }) {
  return (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none">
      <circle
        cx="16.5"
        cy="12.5"
        r="1.5"
        transform="rotate(90 16.5 12.5)"
        fill={fill}
      ></circle>
      <circle
        cx="12"
        cy="12.5"
        r="1.5"
        transform="rotate(90 12 12.5)"
        fill={fill}
      ></circle>
      <circle
        cx="7.5"
        cy="12.5"
        r="1.5"
        transform="rotate(90 7.5 12.5)"
        fill={fill}
      ></circle>
    </svg>
  );
}

export default More;
