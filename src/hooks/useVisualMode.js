import { useState } from "react";

const useVisualMode = initial => {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);
  const [stepsBack, setStepsBack] = useState(1);

  const transition = (mode, stepsBack = 1) => {
    setMode(mode);
    setStepsBack(stepsBack);
    setHistory(prev => {
      return [...prev, mode];
    });
  };
  const back = () => {
    if (stepsBack > 1) {
      setHistory(prev => {
        for (var i = 0; i < stepsBack; i++) {
          prev.pop();
        }
        setMode(prev[prev.length - 1]);
        setStepsBack(1);
        return prev;
      });
    }
    if (history.length > 1) {
      setMode(history[history.length - 2]);
      setHistory(prev => {
        prev.pop();
        return prev;
      });
    }
  };

  return { mode, transition, back };
};

export default useVisualMode;

// const back = () => {
//   if (bool) {
//     setMode(history[history.length - 2]);
//     setHistory(prev => {
//       if (prev.length > 1) {
//         return prev.slice(0, prev.length - 2);
//       }
//       return prev;
//     });
//     setBool(false);
//     return;
//   }
//   setMode(history[history.length - 1]);
//   setHistory(prev => {
//     if (prev.length > 1) {
//       return prev.slice(0, prev.length - 1);
//     }
//     return prev;
//   });
// };
