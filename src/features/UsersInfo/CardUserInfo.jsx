import React from "react";
import Table from "../../ui/Table";

function CardUserInfo({ cardInfo }) {
    console.log(cardInfo.bank);
    const cardDetail = cardInfo.bank;

    return (
        <>
            <Table>
                <Table.Header>
                    <th>Card Number</th>
                    <th>Currency</th>
                    <th>Iban</th>
                    <th>cardType</th>
                </Table.Header>
                <Table.Body>
                    <Table.Row key={cardDetail.id}>
                        <td>{cardDetail.cardNumber}</td>
                        <td>{cardDetail.currency}</td>
                        <td>{cardDetail.iban}</td>
                        <td>{cardDetail.cardType}</td>
                    </Table.Row>
                </Table.Body>
            </Table>
        </>
    );
}

export default CardUserInfo;
