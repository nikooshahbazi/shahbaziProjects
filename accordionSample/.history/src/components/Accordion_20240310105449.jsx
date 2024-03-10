import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

function Accordion() {
  const [isOpen, setIsOpen] = useState(false);
 
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
  // const style = {
  //   width: "1.2rem",
  //   transition: "all 0.2s ease-out",
  //   // rotate: isOpen ? "180deg" : "0deg"
  // };

  return (
    <div className={`accordion-item ${isOpen ? "accordion__expanded" : ""}`}>
      <div
        className="accordion-item__header"
        onClick={() => setIsOpen(!isOpen)}
      >
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
