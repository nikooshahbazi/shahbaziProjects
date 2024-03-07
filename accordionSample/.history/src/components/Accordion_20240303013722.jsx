function Accordion() {
    const data = [
        {
            id:1,
            title:"Accordion one" ,
            text: "lorem",
             
        }
    ]




  return <div className="accordion">
    <div className="accordion-item">
        <div className="accordion-item__header">Accordion one</div>
        <div className="accordion-item__content">Accordion Content</div>
    </div>
  </div>;
}

export default Accordion;
