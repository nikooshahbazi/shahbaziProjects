import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";

function Pagination({ dataLength, rowsPerPage, currentPage, onPageChange }) {
    const totalPages = Math.ceil(dataLength / rowsPerPage);

    return (
        <div>
            <div
                style={{
                    marginTop: "10px",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <button
                    // className="cursor-not-allowed"
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={
                        currentPage === 1 ? "btn-Pagination-notActive" : null
                    }
                >
                    <VscChevronRight />
                </button>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => onPageChange(index + 1)}
                        style={{
                            margin: "0 5px",
                            backgroundColor:
                                currentPage === index + 1
                                    ? "lightblue"
                                    : "white",
                        }}
                    >
                        {index + 1}
                    </button>
                ))}

                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    <VscChevronLeft />
                </button>
            </div>
        </div>
    );
}

export default Pagination;
