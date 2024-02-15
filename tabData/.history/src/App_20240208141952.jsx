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
  const [user , setUser]
  const handleActiveTab = (id) => {
    setActiveTab(id);
  };
  return (
    <div className="tab">
      <div className="tab__header">
        {tabData.map((tab) => {
          return (
            <button
              onClick={() => handleActiveTab(tab.id)}
              key={tab.id}
              className={activeTab == tab.id ? "active" : ""}
            >
              <span>{tab.title}</span>
              <span className="tab-indicator"></span>
            </button>
          );
        })}
      </div>
      <div className="ab__content">{tabData[activeTab - 1].content}</div>
    </div>
  );
}

export default App;
