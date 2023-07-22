import React, { useEffect, useState } from "react";

function Toggle(props) {
  const [shiftRight, setShiftRight] = useState(false);

  useEffect(() => {
    props.xyz(shiftRight);
  }, [shiftRight]);

  useEffect(() => {
    props.xyz(shiftRight);
  }, [shiftRight]);

  function searchFunction1(props) {
    setShiftRight(false);
  }
  function searchFunction2(props) {
    setShiftRight(true);
  }

  return (
    <div className=" flex   ">
      <div className=" relative bg-white flex  items-center    w-min  rounded-full  font-semibold  cursor-pointer ">
        <div className="  flex  items-center    justify-between">
          <p
            onClick={() => searchFunction1()}
            className="px-6 md:py-3 md:px-10 py-1  "
          >
            Day
          </p>
          <p
            onClick={() => searchFunction2()}
            className="px-6 md:py-3 md:px-10 py-1  "
          >
            Week
          </p>
        </div>
        <button
          className={`text-white bg-gradient-to-r from-[#f79a04] to-[#dc395e] hover:bg-gradient-to-br px-6 md:py-3  cursor-pointer rounded-full  md:px-10   py-1 left-0 text-center absolute duration-300 ${
            shiftRight && " left-[79px] md:left-[114px]  duration-300 "
          } `}
        >
          {shiftRight ? "Week " : "Day \xA0  "}
        </button>
      </div>
    </div>
  );
}

export default Toggle;
