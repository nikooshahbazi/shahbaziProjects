function CourseCard() {
  return (
    <div className="course-item">
      <div className="course-item__img">
        <img></img>
      </div>
      <div className="course-item__detail">{}</div>
    </div>
  );
}

export default CourseCard;

function CourseCardBody() {
  return (
    <div className="course-item__body">
      <div>
        <p className="title"></p>
        <p className="desc"></p>
      </div>
      <span className="rate"></span>
    </div>
  );
}


function CourseFooter (){
    return(
        <div className="course-item__footer">
            <div className="tags">

            </div>
        </div>
    )
}