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
  const startAt = new Date(course.start).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
    day: "numeric",
  });
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
        <div className="date">{startAt}</div>
        <span
          className={`badge ${
            course.status === "Completed"
              ? "badge--secondary"
              : course.status === "Upcoming"
              ? "badge--danger"
              : "badge--primary"
          }`}
        >
            {course.status}
        </span>
      </div>
    </div>
  );
}
