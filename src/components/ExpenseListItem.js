import React from "react";
import { Link } from "react-router-dom";

const ExpenseListItem = ({description, amount, createdAt, id, dispatch}) => {
   return  (
        <>
            <Link to={`/edit/${id}`}>
             <h3>{description}</h3>
            </Link> <br/>
            <p>{amount} - {createdAt}</p>
        </>
    );
}


export default ExpenseListItem;