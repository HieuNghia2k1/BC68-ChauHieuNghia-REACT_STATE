import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import Glass from "./components/Glass/Glass";
import "./index.css";
// import HomeTemplate from "./components/HomeTemplate/HomeTemplate";
import Glass from "./components/Glass/Glass";

// import DemoFormReact from "./components/DemoFormReact/DemoFormReact";
// import HomeTemplate from "./components/HomeTemplate/HomeTemplate";

function App() {
  // emq return nh
  return (
    <div>
      {/* // const [count, setCount] = useState(0); // return <DemoFormReact />; //{" "} */}
      {/* <HomeTemplate />; */}
      <Glass />
      {/* <HomeTemplate /> */}
    </div>
  );
}

export default App;
