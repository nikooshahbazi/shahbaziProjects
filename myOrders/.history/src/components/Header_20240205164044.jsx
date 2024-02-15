

//const courseStatus = ["All", "Active", "Uncoming", "Completed"];
const activeTab = 1;
function Header() {
  return (
    <div>
      <h1>My Courses (3)</h1>
      <div className="tab">
        <div className="tab__header">
          {tabData.map((tab) => {
            return (
              <button
                key={tab.id}
                className={activeTab === tab.id ? "active" : ""}
              >
                <span>{tab.title}</span>
                <span className="tab-indicator">
                  {tabData[activeTab - 1].content}
                </span>
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
