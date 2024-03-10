import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

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
function Accordion() {
  const [open, setOpen] = useState(null);
  const handleOpen =() =

  // console.log(data)
  return (
    <div className="accordion">
      {data.map((item) => {
        return (
          <AccordionItem
            key={item.id}
            item={item}
            setOpen={setOpen}
            open={open}
          />
        );
      })}
    </div>
  );
}

export default Accordion;

function AccordionItem({ item, setOpen, open }) {
  // const style = {
  //   width: "1.2rem",
  //   transition: "all 0.2s ease-out",
  //   // rotate: isOpen ? "180deg" : "0deg"
  // };
  const isOpen = item.id === open;

  return (
    <div className={`accordion-item ${isOpen ? "accordion__expanded" : ""}`}>
      <div className="accordion-item__header" onClick={() => setOpen(item.id)}>
        <div>{item?.title}</div>
        <div>
          <ChevronDownIcon
            className=" accordion-item__chevron"
            // style={style}
            // style={{
            //   width: "1.2rem",
            //   transition: "all 0.2s ease-out",
            // }}
          />
        </div>
      </div>
      <div className="accordion-item__content">{item?.text}</div>
    </div>
  );
}
