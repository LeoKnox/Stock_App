import React, {Component} from 'react';

export class Create extends Component{
    constructor(props){
        super(props);

        this.state = {
            name: '',
            description: '',
            stockPurchased: null,
            stockSold: null
        }
    }

    render(){
        return (
            <div className="stock-form" >
                <h3>Add new Stock</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Stock name: </label>
                        <input
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label>Stock description: </label>
                        <input
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label>Stock Purchased: </label>
                        <input
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label>Stock sold: </label>
                        <input
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div>
                        <input 
                            type="submit"
                        />
                    </div>
                </form>
            </div>
        )
    }
}