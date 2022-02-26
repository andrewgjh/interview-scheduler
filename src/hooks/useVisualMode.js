import {useState} from 'react';

const useVisualMode = (initial) => {

  const [ mode , setMode ] = useState(initial);
  const [history, setHistory] = useState([initial]);
  const [bool, setBool] = useState(false);

  const transition = (mode, bool=false) => {
    setMode((prev)=>{
      setHistory([...history, prev]);
      setBool(bool);
      return mode});
  };
  const back =()=>{
    if (bool){
      setMode(initial);
      setHistory([initial]);
      return;
    }
    setMode(history[history.length-1]);
    setHistory((prev)=>{
      if (prev.length > 1){
        return prev.slice(0, prev.length - 1)
        }
      return prev;
      }
    )
  }
  return {mode, transition, back};
};


export default useVisualMode;
