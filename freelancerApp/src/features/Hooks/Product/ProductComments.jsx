import Table from "../../../ui/Table";

function ProductComments({ comments }) {
    console.log(comments.reviews.comment);
    if (!comments.reviews.length) return <p>No Idea</p>;

    return (
        <Table>
            <Table.Header>
                <th>Id</th>
                <th>Comment</th>
                <th>Date</th>
                <th>Rating</th>
                <th>ReviewerEmail</th>
                <th>ReviewerName</th>
            </Table.Header>
            <Table.Body>
                {comments.reviews.map((cm, index) => {
                    return (
                        <Table.Row key={cm.id}>
                            <td>{index + 1}</td>
                            <td>{cm.comment}</td>
                            <td>
                                {new Date(cm.date).toLocaleDateString("en-US")}
                            </td>
                            <td>
                                <StarRating rating={cm.rating} />
                            </td>
                            <td>{cm.reviewerEmail}</td>
                            <td>{cm.reviewerName}</td>
                        </Table.Row>
                    );
                })}
            </Table.Body>
        </Table>
    );
}

export default ProductComments;

export function StarRating({ rating }) {
    const totalStars = 5;
    return (
        <div>
            {Array.from({ length: totalStars }, (_, index) => (
                <span
                    key={index}
                    style={{
                        color: index < rating ? "#ffc107" : "#e4e5e9",
                        fontSize: "15px",
                    }}
                >
                    ★
                </span>
            ))}
        </div>
    );
}
