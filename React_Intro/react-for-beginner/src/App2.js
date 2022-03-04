// import Button from "./Button";
// import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((pre) => pre + 1);
  const onChange = (e) => setKeyword(e.target.value);
  useEffect(() => {
    console.log("Call the API..");
  }, []);
  // keyword가 변화될 때 마다 실행
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("search", keyword);
    }
  }, [keyword]);
  useEffect(() => {
    console.log("counter");
  }, [counter]);
  return (
    <div>
      <input
        value={keyword}
        type="text"
        placeholder="Search here..."
        onChange={onChange}
      ></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>클릭</button>
    </div>
  );
}

export default App;
