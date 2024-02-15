import { useState } from "react";
import "./App.css";

const tabData = [
  {
    id: 1,
    title: "ITEM 1",
    content: "Authorize the user data ✅",
  },
  {
    id: 2,
    title: "ITEM 2",
    content: "Redirect user to cart page 🛒",
  },
  {
    id: 3,
    title: "ITEM 3",
    content: "Create new payment for the user 💰",
  },
];
//console.log(tabData);

function App() {
  const [activeTab, setActiveTab] = useState(1);
  const [isShow, setIsShow] = useState(true);

  const handleActiveTab = (id) => {
    setActiveTab(id);
  };
  // const handleOpen = () => {
  //   setIsShow(!isShow);
  // };
  return (
    <>
    {isShow ? }
     
      <button className="button" onClick={() => setIsShow(!isShow)}>
        Click Me!
      </button>
    </>
  );
}

export default App;
