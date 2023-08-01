// import React, { useEffect, useRef, useState } from "react";
// import ContentWrapper from "../../components/ContentWrapper";

// import UseFetch from "../../hook/UseFetch";
// import Carasoul from "./Carasoul";
// import { stateForgetApiConfigForHomeSlice } from "../../utils/homeSlice";
// import { useSelector } from "react-redux";

// import { useNavigate } from "react-router-dom";

// function MovieCardforsearchres() {
//   const [stateFromToggle, setStateFromToggle] = useState("movie");
//   const selector = useSelector(stateForgetApiConfigForHomeSlice);
//   const { data } = UseFetch(`/${stateFromToggle}/popular`);
//   const scrollForPC = useRef();
//   const naviagte = useNavigate();
//   const posterPath = selector.poster;

//   return (
//     <div
//       className="
//     relative bg-[#04152d]"
//     >
//       <ContentWrapper>
//         <div
//           ref={scrollForPC}
//           className="flex flex-row    overflow-y-hidden overflow-x-scroll   scroll-smooth  "
//         >
//           {data?.results.map((item) => {
//             const posterURL = posterPath + item.poster_path;

//             const id = item.id;
//             return (
//               <div
//                 onClick={() => naviagte(mediaType + "/" + id)}
//                 key={item.id}
//                 className=""
//               >
//                 <Carasoul
//                   src={posterURL}
//                   key={item.id}
//                   value={rating}
//                   title={item.original_title}
//                   date={date}
//                   geners={geners}
//                 />
//               </div>
//             );
//           })}
//         </div>
//       </ContentWrapper>
//     </div>
//   );
// }

// export default MovieCardforsearchres;
