import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

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
        <div>{item?.title}</div>
        <div>
          <ChevronDownIcon style={{width: "1.2rem"}}/>
        </div>
      </div>
      <div className="accordion-item__content">{item?.text}</div>
    </div>
  );
}
