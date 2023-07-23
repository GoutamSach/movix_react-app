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
    <div className="    ">
      <div className=" relative bg-white flex  items-center    w-min  rounded-full  font-semibold  cursor-pointer ">
        <div className=" flex  flex-row          justify-between">
          <p
            onClick={() => searchFunction1()}
            className="md:px-6 px-[24px] text-xs md:text-lg  md:text-base   md:py-2  py-1  "
          >
            {props.left}
          </p>
          <p
            onClick={() => searchFunction2()}
            className="md:px-6 px-5 px-[22px] md:py-2  text-xs md:text-base    py-1  whitespace-nowrap  "
          >
            {props.right}
          </p>
        </div>
        <button
          className={`forAnimation text-white bg-gradient-to-r from-[#f79a04] overflow-hidden to-[#dc395e] hover:bg-gradient-to-br text-xs  md:text-base   cursor-pointer rounded-full px-[21px] md:py-2    py-1  absolute  translate-x-0     duration-300    whitespace-nowrap ${
            shiftRight && "     translate-x-full    duration-300 "
          } `}
        >
          {shiftRight ? props.right : props.left}
        </button>
      </div>
    </div>
  );
}

export default Toggle;
