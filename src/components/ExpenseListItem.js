import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import numeral from "numeral";

const ExpenseListItem = ({description, amount, createdAt, id}) => {
   return  (
        <>
            <Link to={`/edit/${id}`}>
             <h3>{description}</h3>
            </Link> <br/>
            <p>
                {numeral(amount/100).format('$0,0.00')} 
                -
                {format(new Date(createdAt), "MMMM do, yyyy")}
            </p>
        </>
    );
}


export default ExpenseListItem;