import { XCircleIcon } from "@heroicons/react/24/outline";

function Modal({ title , children }) {
  return (
    <div>
      <div className="backdrop" onClick={()=> }></div>
      <div className="modal">
        <div className="modal__header">
          <h2 className="title">{title}</h2>
          <button onClick={()=> onclose(false)}>
            <XCircleIcon className="icon close" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal;
