import { XCircleIcon } from "@heroicons/react/24/outline"

function Modal({title}) {
  return (
    <div>
        <div className="backdrop"></div>
        <div className="modal">
            <div className="modal__header">
                <h2 className="title">{title}</h2>
                <button>
                    <XCircleIcon />
                </button>
            </div>
        </div>
    </div>
  )
}

export default Modal
