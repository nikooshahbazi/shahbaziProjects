import { useState } from "react";
import Pagination from "../../component/Pagination";
import Loading from "../../ui/Loading";
import Table from "../../ui/Table";
import useOwnerProducts from "../Hooks/useOwnerProducts";
import { HiOutlineTrash } from "react-icons/hi";
import { TbPencilMinus } from "react-icons/tb";
import Modal from "../../component/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import useRemoveProduct from "../Hooks/useRemoveProduct";

function ProductListTable() {
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState();
    const { isLoading, data } = useOwnerProducts();
    const [currentPage, setCurrentPage] = useState(1);
    const { removeProduct, isDeleting } = useRemoveProduct();
    const [openImg, setOpenImg] = useState(false);

    if (isLoading) return <Loading />;

    if (!data.length) return <span>There is no Product</span>;

    const rowsPerPage = 15;
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRow = data.slice(indexOfFirstRow, indexOfLastRow);
    const openImage = (image) => {
        setSelectedItem(image);
        setOpenImg(true);
    };
    const selectProductListEdit = (product) => {
        setSelectedItem(product);
        setIsEditOpen(true);
    };

    const selectProductListDelete = (product) => {
        setSelectedItem(product);
        setIsDeleteOpen(true);
    };

    return (
        <>
            <Table>
                <Table.Header>
                    <th>ID</th>
                    <th>ProductName</th>
                    <th>Description </th>
                    <th>Category </th>
                    <th>Price</th>
                    <th>Image</th>
                    <th>Stock</th>
                    <th>Operation</th>
                </Table.Header>

                <Table.Body>
                    {currentRow.map((productlist, index) => (
                        <Table.Row key={productlist.id}>
                            <td>{index + 1}</td>

                            <td>{productlist.title}</td>
                            <td
                                className={
                                    productlist.description.length > 50
                                        ? "td-description"
                                        : ""
                                }
                            >
                                {productlist.description}
                            </td>
                            <td>{productlist.category}</td>
                            <td>${productlist.price}</td>
                            <td>
                                {productlist.images.length > 0 && (
                                    <img
                                        key={index}
                                        onClick={() =>
                                            openImage(productlist.images[0])
                                        }
                                        src={productlist.images[0]}
                                        alt={`product Img ${index + 1}`}
                                        style={{
                                            width: "500px",
                                            height: "auto",
                                            margin: "5px",
                                            cursor: "pointer",
                                        }}
                                    />
                                )}
                            </td>
                            <td>
                                {productlist.availabilityStatus ===
                                "Low Stock" ? (
                                    <span className="badge badge--danger">
                                        less
                                    </span>
                                ) : (
                                    <span className="badge badge--success">
                                        more
                                    </span>
                                )}
                            </td>
                            <td>
                                <div className="flex items-center gap-x-4">
                                    <button
                                        onClick={() =>
                                            selectProductListEdit(
                                                productlist && productlist
                                            )
                                        }
                                    >
                                        <TbPencilMinus className="w-5 h-5 text-primary-900" />
                                    </button>
                                    <button
                                        onClick={() => {
                                            selectProductListDelete(
                                                productlist && productlist
                                            );
                                        }}
                                    >
                                        <HiOutlineTrash className="w-5 h-5 text-error" />
                                    </button>
                                </div>
                            </td>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>

            <Modal
                open={isEditOpen}
                title={`ویرایش ${selectedItem?.title}`}
                onClose={() => setIsEditOpen(false)}
            >
                This is ...
            </Modal>
            <Modal
                open={isDeleteOpen}
                title={`${selectedItem?.title}`}
                onClose={() => setIsDeleteOpen(false)}
            >
                <ConfirmDelete
                    resourceName={`${selectedItem?.title}`}
                    onClose={() => setIsDeleteOpen(false)}
                    onConfirm={() =>
                        removeProduct(`${selectedItem?.id}`, {
                            onSuccess: () => setIsDeleteOpen(false),
                        })
                    }
                    disabled={false}
                />
            </Modal>
            <Modal open={openImg} onClose={() => setOpenImg(false)}>
                {selectedItem && (
                    <img
                        src={selectedItem}
                        alt="selected"
                        style={{
                            maxWidth: "150px",
                            height: "auto",
                            objectFit: "contain",
                            justifyContent: "center",
                            display: "flex",
                            textAlign: "center",
                            alignItems: "center",
                        }}
                    />
                )}
            </Modal>

            <Pagination
                dataLength={data.length}
                rowsPerPage={rowsPerPage}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
            />
        </>
    );
}

export default ProductListTable;
