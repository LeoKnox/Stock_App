import React, {Component} from 'react';
import axios from 'axios';

export class Create extends Component{
    constructor(props){
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeStockPurchased = this.onChangeStockPurchased.bind(this);
        this.onChangeStockSold = this.onChangeStockSold.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            name: '',
            description: '',
            stockPurchased: null,
            stockSold: null
        }
    }

    onChangeName(e){
        this.setState({
            name: e.target.value
        });
    }

    onChangeDescription(e){
        this.setState({
            description: e.target.value
        });
    }

    onChangeStockPurchased(e){
        this.setState({
            stockPurchased: e.target.value
        });
    }

    onChangeStockSold(e){
        this.setState({
            stockSold: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
        const {history} = this.props;

        let stockObject = {
            Id: Math.floor(Math.random()*1000),
            name: this.state.name,
            description: this.state.description,
            stockPurchased: this.state.stockPurchased,
            stockSold: this.state.stockSold
        }

        axios.post("api/Stocks/AddStock", stockObject).then(rest => {
            history.push('/stocks');
        })
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
                            value={this.state.name}
                            onChange={this.onChangeName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Stock description: </label>
                        <textarea
                            type="text"
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                        />
                    </div>
                    <div className="row">
                        <div className="col col-md-6 col-sm-6 col-xs12">
                            <div className="form-group">
                                <label>Stock Purchased: </label>
                                <input
                                    type="date"
                                    className="form-control"
                                    value={this.state.stockPurchased}
                                    onChange={this.onChangeStockPurchased}
                                />
                            </div>
                        </div>
                        <div className="col col-md-6 col-sm-6 col-xs12">
                            <div className="form-group">
                                <label>Stock Sold: </label>
                                <input
                                    type="date"
                                    className="form-control"
                                    value={this.state.stockSold}
                                    onChange={this.onChangeStockSold}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <input
                            type="submit"
                            value="Add Stock"
                            className="btn btn-primary"
                        />
                    </div>
                </form>
            </div>
        )
    }
}