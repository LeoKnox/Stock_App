import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {getAllStocks} from '../../actions/stockActions';

export class Stocks extends Component
{
    constructor(props){
        super(props);

        this.onStockUpdate = this.onStockUpdate.bind(this);
        this.onStockDelete = this.onStockDelete.bind(this);

        this.state = {
            stocks: [],
            loading: true
        }
    }

    componentDidMount(){
        this.props.getAllStocks();
    }

    componentDidUpdate(prevProps){
        if(prevProps.stocks.data != this.props.stocks.data){
            this.setState({stocks: this.props.stocks.data});
        }
    }

    onStockUpdate(id){
        const {history} = this.props;
        history.push('/update/'+id);
    }

    onStockDelete(id){
        const {history} = this.props;
        history.push('/delete/'+id);
    }

    renderAllStocksTable(stocks){
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Date Purchased</th>
                        <th>Date Sold</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        stocks.map(stock => (
                            <tr key={stock.id}>
                                <td>{stock.name}</td>
                                <td>{stock.description}</td>
                                <td>{new Date(stock.stockPurchased).toISOString().slice(0,10)}</td>
                                <td>{stock.stockSold ? new Date(stock.stockSold).toISOString().slice(0,10) : null}</td>
                                <td>
                                    <div className="form-group">
                                        <button onClick={() => this.onStockUpdate(stock.id)} className="btn btn-success">Update</button>
                                    </div>
                                    <div className="form-group">
                                        <button onClick={() => this.onStockDelete(stock.id)} className="btn btn-danger">Delete</button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        );
    }

    render(){
        /*let content = this.state.loading ? (
            <p>
                <em>Loading ...</em>
            </p>
        ) : (
            this.renderAllStocksTable(this.state.stocks)
        ) */
        let content = this.props.stocks.loading ?
        (
            <p>
                <em>Loading ...</em>
            </p>
        ) : (
            this.state.stocks.length && this.renderAllStocksTable(this.state.stocks)
        );

        return (
            <div>
                <h1>All stocks</h1>
                <p>You can see all stocks</p>
                {content}
            </div>
        );
    }
}

const mapStateToProps = ({stocks}) => ({
    stocks
});

export default connect(mapStateToProps, {getAllStocks})(Stocks);