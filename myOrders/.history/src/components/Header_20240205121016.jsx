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

//const courseStatus = ["All", "Active", "Uncoming", "Completed"];
function Header() {
  return (
    <div>
      <h1>My Courses (3)</h1>
      <div className="tab">
        <div className="tab__header">
          {tabData.map((tab) => {
            return (
              <button key={tab.id} className="">
                <span>{tab.title}</span>
                <span className="tab-indicator"></span>
              </button>
            );
          })}
        </div>
      </div>
      <div className="tab__content">dummy text ... </div>
    </div>
  );
}

export default Header;
