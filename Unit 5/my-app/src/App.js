import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("Peter");

  useEffect(() => {
    console.log("mounted");
    // setName("Joe");
    // console.log(name);
    // return () => {
    //   console.log("unmounted");
    // };
  }, []);

  useEffect(() => {
    console.log("update");
    console.log(name, "Updated name");
  }, [name]);

  function setNameTest(nameToSet) {
    setName(nameToSet);
    console.log(name, "Setting name");
  }

  // let name2 = "Peter2";

  // function setName2(nameToSet) {
  //   name2 = nameToSet;
  //   console.log(name2);
  // }

  return (
    <div className="App">
      <button
        onClick={() => {
          setNameTest("Joe");
        }}
      >
        Set Name
      </button>
      <br />
      {/* <button
        onClick={() => {
          setName2("Joe2");
        }}
      >
        Set Name2
      </button> */}
      Name 1:{name}
      <br />
      {/* Name 2:{name2} */}
    </div>
  );
}

export default App;
