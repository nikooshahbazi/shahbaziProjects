const courseStatus = ["All","Active", "Uncoming", "Completed"];
function Header() {
  return (
    <div>
      <h1>My Courses (3)</h1>
      <div className="course-status">
      {courseStatus.map((statuses) => {
        return <div></div>
      })}  
      </div>
    </div>
  );
}

export default Header;
