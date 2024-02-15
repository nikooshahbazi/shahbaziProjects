
const courseStatus = ["All", "Active", "Uncoming", "Completed"];
//const activeTab = 1;
function Header() {
  return (
    <div>
      <h1>My Courses (3)</h1>
      <div className="tab">
        <div className="tab__header">
         {courseStatus.map((course) => {
          return <div></div>
         })}
        </div>
      </div>
     
    </div>
  );
}

export default Header;
