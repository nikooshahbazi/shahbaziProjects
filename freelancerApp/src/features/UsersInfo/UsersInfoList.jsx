import React, { useState } from "react";
import Table from "../../ui/Table";

import Loading from "../../ui/Loading";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { useGetUsers } from "../Hooks/useGetUsers";
import Pagination from "../../component/Pagination";

function UsersInfoList() {
    const { data, isLoading } = useGetUsers();
    const [currentPage, setCurrentPage] = useState(1);
    if (isLoading) return <Loading />;
    if (!data.length) return <span>There is no Users</span>;
    const rowsPerPage = 15;
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRow = data.slice(indexOfFirstRow, indexOfLastRow);
    // console.log(data);
    return (
        <>
            <Table>
                <Table.Header>
                    <th>ID</th>
                    <th>Username</th>
                    <th>FullName</th>
                    <th>Role</th>
                    <th>Gender</th>
                    <th>PhoneNumber</th>
                    <th>Email</th>
                    <th>Card Info</th>
                </Table.Header>
                <Table.Body>
                    {currentRow.map((user, index) => (
                        <Table.Row key={user.id}>
                            <td>{index + 1}</td>
                            <td>{user.username}</td>
                            <td>
                                {user.firstName} {user.lastName}
                            </td>
                            <td>{user.role}</td>
                            <td>{user.gender}</td>
                            <td>{user.phone}</td>
                            <td>{user.email}</td>
                            <td>
                                <NavLink to={`/owner/users/${user.id}`}>
                                    <HiOutlineDotsHorizontal className="flex items-center gap-x-4 text-primary-800 size-5 cursor-pointer" />
                                </NavLink>
                            </td>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
            <Pagination
                dataLength={data.length}
                rowsPerPage={rowsPerPage}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
            />
        </>
    );
}

export default UsersInfoList;
