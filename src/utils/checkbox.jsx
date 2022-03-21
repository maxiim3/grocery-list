import React, {Component} from 'react';

class Checkbox extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <input type="checkbox" aria-label="Checkbox for following text input"/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Checkbox;