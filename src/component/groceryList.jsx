import Checkbox from "../utils/checkbox";
import React, {Component} from 'react';
import dataList from "../datas/dataList";
import Increment from "../utils/increment";

class GroceryList extends Component {
    state = {
        quantity : 0,
    }

    handleIncrement = (quantity) => {
        quantity ++;
        this.setState({quantity});
    }
    handleDecrement = (quantity) => {
        if (quantity >= 0) quantity --
        else quantity = 0
        this.setState({quantity});
    }

    totalPrice = (price, quantity) => {
        return price * quantity
    }
    render() {
        const {quantity} = this.state
        return (
            dataList.map( item => (
                <tr key = {item.id}>
                    <th scope="row">
                        <Checkbox/>
                    </th>
                    <td>{item.name}</td>
                    <td>{item.category}</td>
                    <td>
                        <Increment
                            number = {quantity}
                            onIncrement = {() => this.handleIncrement(quantity)}
                            onDecrement = {() => this.handleDecrement(quantity)}
                        />
                    </td>
                    <td>{this.totalPrice(item.price, quantity) + " €"}</td>
                    <td><img src={item.picture} alt={item.name} className="img-thumbnail"/></td>
                </tr>
                    )
                )
        );
    }
}

export default GroceryList;