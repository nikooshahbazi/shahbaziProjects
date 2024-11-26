import Loading from "../../../ui/Loading";
import useOwnerToDoList from "./useOwnerTodoList";

function ToDoListTable() {
    const { isLoading, data } = useOwnerToDoList();
    console.log(data + "ssss");
    console.log(JSON.stringify(data) + "ssss");
    if (isLoading) return <Loading />;
    if (data.length < 0) return <span>تسکی یافت نشد</span>;

    return <div>ToDoListTabel</div>;
}

export default ToDoListTable;
