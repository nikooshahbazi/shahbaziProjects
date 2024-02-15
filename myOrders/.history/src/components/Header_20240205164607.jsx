
const courseStatus = ["All", "Active", "Uncoming", "Completed"];
//const activeTab = 1;
function Header() {
  return (
      <h1>My Courses (3)</h1>
      <div>
        <div className="course-status">
         {courseStatus.map((course) => {
          return <div key={course.id}>{course}</div>
         })}
        </div>
           
    </div>
  );
}

export default Header;
