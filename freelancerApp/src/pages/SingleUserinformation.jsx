import useSingleUserInfo from "../features/Hooks/useSingleUserInfo";
import CardHeader from "../features/UsersInfo/CardHeader";
import CardUserInfo from "../features/UsersInfo/CardUserInfo";
import Loading from "../ui/Loading";

function SingleUserinformation() {
    const { data, isLoading } = useSingleUserInfo();
    console.log(data);
    if (isLoading) return <Loading />;
    return (
        <div>
            <CardHeader user={data} />
            <CardUserInfo cardInfo={data} />
        </div>
    );
}

export default SingleUserinformation;
