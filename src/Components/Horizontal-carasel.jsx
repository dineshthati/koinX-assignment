import React from "react";

const Horizontal_caracel = () => {
  const data = [
    "overview",
    "fundamentals",
    "news insights",
    "sentimentals",
    "team",

    "technicals",
    "tokenomics",
  ];

  return (
    <div className="flex gap-5 mt-6 border-b-[1px] border-gray-300 pb-3">
      {data.map((item, index) => {
        return (
          <p
            style={{
              color: index == 0 ? "blue" : "",
              textDecoration: index == 0 && "underline",
              textUnderlineOffset: index == 0 && "15px",
              textDecorationThickness: "2px",
            }}
            className="capitalize font-[550] text-sm text-black/[0.6] text-nowrap focus:text-blue-600 focus:underline "
            key={index}
          >
            {item}
          </p>
        );
      })}
    </div>
  );
};

export default Horizontal_caracel;
