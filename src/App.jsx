import React from "react";
import "./App.css";
import Button from "./components/Elements/Button";

function App() {
  return (
    <>
      <div className="flex gap-x-3" >
      <Button color="bg-red-700">submit</Button>
      <Button color="bg-slate-700">login</Button>
      <Button color="bg-slate-700">logout</Button>
      <Button/> 
      </div>
    </>
  );
}

export default App;
