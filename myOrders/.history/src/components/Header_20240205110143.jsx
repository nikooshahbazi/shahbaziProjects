const courseStatus = ["Active", "Uncoming", "Complete"];
function Header() {
  return (
    <div>
      <h1>My Courses (3)</h1>
      <div className="">{courseStatus}</div>
    </div>
  );
}

export default Header;
