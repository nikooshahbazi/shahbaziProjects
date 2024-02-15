function CourseCard({ course }) {
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

function CourseCardBody({ title, description, rate }) {
  return (
    <div className="course-item__body">
      <div>
        <p className="title">{title}</p>
        <p className="desc">{description}</p>
      </div>
      <span className="rate">{rate}</span>
    </div>
  );
}

function CourseFooter({ course }) {
  return (
    <div className="course-item__footer">
      <div className="tags">
        {course.tags.map((tag) => (
          <span key={tag} className="badge badge--secondary">
            {tag}
          </span>
        ))}
      </div>
      <div className="cation">
        <div className="date">{}</div>
      </div>
    </div>
  );
}
