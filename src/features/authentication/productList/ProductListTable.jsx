import { useState } from "react";
import Pagination from "../../../component/Pagination";
import Loading from "../../../ui/Loading";
import Table from "../../../ui/Table";
import useOwnerProducts from "../Hooks/useOwnerProducts";
import { HiOutlineTrash } from "react-icons/hi";
import { TbPencilMinus } from "react-icons/tb";
import Modal from "../../../component/Modal";
import ConfirmDelete from "../../../ui/ConfirmDelete";
import useRemoveProduct from "../Hooks/useRemoveProduct";

function ProductListTable() {
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState();
    // console.log(selectedItem.title + "selected");
    const { isLoading, data } = useOwnerProducts();
    const [currentPage, setCurrentPage] = useState(1);
    const { removeProduct, isDeleting } = useRemoveProduct();
   
    if (isLoading) return <Loading />;

    if (!data.length) return <span>تسکی یافت نشد</span>;
    const userName = {
        1: "نیکو",
        2: "مهسا",
        3: "سجاد",
        4: "تست1",
        5: "تست2",
        default: "ناشناس",
    };

    const rowsPerPage = 15;
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRow = data.slice(indexOfFirstRow, indexOfLastRow);

    const selectProductListEdit = (product) => {
        setSelectedItem(product);
        setIsEditOpen(true);
    };

    const selectProductListDelete = (product) => {
        setSelectedItem(product);
        console.log(product.id);
        setIsDeleteOpen(true);
    };

    return (
        <>
            <Table>
                <Table.Header>
                    <th>شماره</th>
                    <th>نام کاربری</th>
                    <th>عنوان </th>
                    <th>وضعیت </th>
                    <th>عملیات</th>
                </Table.Header>

                <Table.Body>
                    {currentRow.map((productlist, index) => (
                        <Table.Row key={productlist.id}>
                            <td>{index + 1}</td>

                            <td>
                                {userName[productlist.userId] ||
                                    userName.default}
                            </td>
                            <td>{productlist.title}</td>
                            <td>
                                {productlist.completed === true ? (
                                    <span className="badge badge--success">
                                        بسته
                                    </span>
                                ) : (
                                    // <span>انجام شد</span>
                                    <span className="badge badge--danger">
                                        باز
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
                // data={data}
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
