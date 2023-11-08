import { useEffect, useState } from "react";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import { FaCircle } from "react-icons/fa";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const time = setInterval(() => {
      next();
    }, 3000);
    return () => {
      clearInterval(time);
    };
  }, [count]);

  const imageArr = ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg"];
  function next() {
    setFade(true);
    setTimeout(() => {
      setCount((pre) => (pre === 3 ? 0 : pre + 1));
      setFade(false);
    }, 500);
  }
  function preveios() {
    setFade(true);
    setTimeout(() => {
      setCount((pre) => (pre === 0 ? 3 : pre - 1));
      setFade(false);
    }, 500);
  }
  return (
    <>
      <div>
        <section>
          <img
            src={imageArr[count]}
            alt=""
            height="500"
            className={`fade-image ${fade ? "hide" : ""}`}
          />
        </section>
        <div>
          {imageArr.map((e, id) => {
            return (
              <button
                key={id}
                onClick={() => setCount(id)}
                style={{ color: count == id ? "red" : "" }}
              >
                {<FaCircle />}
              </button>
            );
          })}
        </div>
      </div>
      <button onClick={preveios}>{<GrLinkPrevious />}</button>

      <button onClick={next}>{<GrLinkNext />}</button>
    </>
  );
}

export default App;

// import { useEffect, useState } from "react";

// import "./App.css";

// function App() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       console.log(count);
//       if (count === 3) {
//         setCount(0);
//       } else {
//         next();
//       }
//     }, 3000);

//     // Cleanup the interval when the component unmounts
//     return () => {
//       clearInterval(interval);
//     };
//   }, [count]);

//   const imageArr = ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg"];

//   function next() {
//     if (count < imageArr.length - 1) {
//       setCount(count + 1);
//     }
//   }

//   function previous() {
//     if (count > 0) {
//       setCount(count - 1);
//     }
//   }

//   return (
//     <>
//       <div>
//         <img src={imageArr[count]} alt="" height="500" />
//         <div>
//           {imageArr.map((e, id) => (
//             <button
//               key={id}
//               onClick={() => setCount(id)}
//               style={{ color: count === id ? "red" : "" }}
//             >
//               O
//             </button>
//           ))}
//         </div>
//       </div>
//       <button onClick={previous}>{"<"}</button>
//       <button onClick={next}>{">"}</button>
//     </>
//   );
// }

// export default App;
