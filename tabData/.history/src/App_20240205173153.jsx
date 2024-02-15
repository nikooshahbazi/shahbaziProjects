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
  const activeTab = 1;
  return (
    <div className="tab">
      <div className="tab__header">
        {tabData.map((tab) => {
          return (
            <button key={tab.id} className={activeTab == tab.id ? "active" : ""}>
            <span>{tab.title}</span>
            <span className="tab-indicator"></span>
            
            </button>
          );
        })}
      </div>
      <div className="ab__content">{tab}</div>
    </div>
  );
}

export default App;
