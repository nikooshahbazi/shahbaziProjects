function Accordion() {
  const data = [
    {
      id: 1,
      title: "Accordion one",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quis. Eum minus ipsa voluptatem repudiandae blanditiis, ea iste consequatur, sapiente cupiditate nemo numquam vel dolorum laboriosam culpa architecto? Culpa, aperiam.",
    },
    {
      id: 2,
      title: "Accordion two",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quis. Eum minus ipsa voluptatem repudiandae blanditiis, ea iste consequatur, sapiente cupiditate nemo numquam vel dolorum laboriosam culpa architecto? Culpa, aperiam.",
    },
    {
      id: 3,
      title: "Accordion three",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quis. Eum minus ipsa voluptatem repudiandae blanditiis, ea iste consequatur, sapiente cupiditate nemo numquam vel dolorum laboriosam culpa architecto? Culpa, aperiam.",
    },
  ];
  // console.log(data)
  return (
    <div className="accordion">
      {data.map((item) => {
        
      })}
    </div>
  );
}

export default Accordion;

function AccordionItem () {
  return(
    <div className="accordion-item" key={item.id}>
    <div className="accordion-item__header">{item?.title}</div>
    <div className="accordion-item__content">{item?.text}</div>
  </div>
  )
}
