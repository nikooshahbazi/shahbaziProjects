function Accordion() {
  const data = [
    {
      id: 1,
      title: "Accordion one",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quis. Eum minus ipsa voluptatem repudiandae blanditiis, ea iste consequatur, sapiente cupiditate nemo numquam vel dolorum laboriosam culpa architecto? Culpa, aperiam.",
      
    },
  ];

  return (
    <div className="accordion">
      <div className="accordion-item">
        <div className="accordion-item__header">Accordion one</div>
        <div className="accordion-item__content">Accordion Content</div>
      </div>
    </div>
  );
}

export default Accordion;
