import { useState } from "react";

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
        return <AccordionItem key={item.id} item={item} />;
      })}
    </div>
  );
}

export default Accordion;

function AccordionItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`accordion-item ${isOpen ? "accordion__expanded" : ""}`}>
      <div
        className="accordion-item__header"
        onClick={() => setIsOpen(!isOpen)}
      >
        {item?.title}
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
</svg>

      <div className="accordion-item__content">{item?.text}</div>
    </div>
  );
}
