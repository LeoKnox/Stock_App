import React, {Component} from 'react';
import axios from 'axios';

export class Update extends Component{
    constructor(props){
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeStockPurchased = this.onChangeStockPurchased.bind(this);
        this.onChangeStockSold = this.onChangeStockSold.bind(this);
        this.onUpdateCancel = this.onUpdateCancel.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            name: '',
            description: '',
            stockPurchased: null,
            stockSold: null
        }
    }

    componentDidMount(){
        const {id} = this.props.match.params;
        axios.get("api/Stocks/SingleStock/"+id).then(stock => {
            const response = stock.data;

            this.setState({
                name: response.name,
                description: response.description,
                stockPurchased: new Date(response.stockPurchased).toISOString().slice(0, 10),
                stockSold: response.stockSold ? new Date(response.stockSold).toISOString().slice(0, 10) : null
            })
        })
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

    onUpdateCancel(){
        const {history} = this.props;
        history.push('/stocks');
    }

    onSubmit(e){
        e.preventDefault();
        const {history} = this.props;
        const {id} = this.props.match.params;

        let stockObject = {
            name: this.state.name,
            description: this.state.description,
            stockPurchased: new Date(this.state.stockPurchased).toISOString(),
            stockSold: this.state.stockSold ? new Date(this.state.stockSold).toISOString() : null
        }

        axios.put("api/Stocks/updateStock/"+id, stockObject).then(rest => {
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
                        <button onClick={this.onUpdateCancel} className="btn btn-default">Cancel</button>
                        <button type="submit" className="btn btn-success">Update</button>
                    </div>
                </form>
            </div>
        )
    }
}