import axios from "axios";
import { useState, useEffect } from "react";
import WordInfo from "./wordinfo";

function App() {

  const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
    const [word, setWord] = useState("Hello");
    const [info, setInfo] = useState();
    const [text, setText] = useState("");
  
    const fetchInfo = async () => {
      try{
      const res = await axios(url + word);
      setInfo(res.data);
      }
      catch(error) {
        console.log(error.res);
      }
    }

    const handleChane = (e) => {
      e.preventDefault();
      setWord(text);
    }
    
  
    useEffect(() => {
      setInfo(null);
      fetchInfo();
    }, [word])
    
  return (
    <div className="main-container">
    <form onSubmit={handleChane}>
      <input
        type="text"
        required
        value={text}
        placeholder="Enter Your Word"
        className="searchbox"
        onChange={(e) => setText(e.target.value)}
      />
      <button
      className="searchbutton"
      >🔍</button>
    </form>
    <WordInfo info={info?.[0]}/>
    {/* <pre>{JSON.stringify(info, null, 4)}</pre> */}
    </div>
  )
}

export default App
