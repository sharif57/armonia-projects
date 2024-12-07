import React from "react";

export default function ProfileCategory({
  category,
  withName = false,
  className,
}: {
  category: "Classic" | "Elite" | "Celebrity";
  className?: string;
  withName?: boolean;
}) {
  if (!withName) {
    return (
      <span
        className={`w-[60px] h-[60px] flex items-center justify-center text-white rounded-full text-2xl font-medium uppercase ${
          category === "Classic"
            ? "bg-yellow-500"
            : category === "Elite"
            ? "bg-blue-500"
            : "bg-black"
        } ${className}`}
      >
        {category[0]}
      </span>
    );
  }

  return (
    <p
      className={`flex items-center gap-5 font-medium text-2xl ${
        category === "Classic"
          ? "text-yellow-500"
          : category === "Elite"
          ? "text-blue-500"
          : "text-black"
      } ${className}`}
    >
      <span
        className={`w-[60px] h-[60px] flex items-center justify-center text-white rounded-full uppercase ${
          category === "Classic"
            ? "bg-yellow-500"
            : category === "Elite"
            ? "bg-blue-500"
            : "bg-black"
        }`}
      >
        {category[0]}
      </span>
      {category}
    </p>
  );
}
