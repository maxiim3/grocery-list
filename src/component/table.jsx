import React, {Component} from 'react';
import GroceryList from "./groceryList";

class Table extends Component {
    render() {
        return (
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">Done</th>
                    <th scope="col">Name</th>
                    <th scope="col">Category</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total Price</th>
                    <th scope="col">Pictures</th>
                </tr>
                </thead>
                <tbody>
                    <GroceryList/>
                </tbody>
            </table>
        );
    }
}

export default Table;