import React, {Component} from 'react';
import axios from 'axios';

export class Stocks extends Component
{
    constructor(props){
        super(props);

        this.onStockUpdate = this.onStockUpdate.bind(this);

        this.state = {
            stocks: [],
            loading: true
        }
    }

    componentDidMount(){
        this.populateStocksData();
    }

    onStockUpdate(id){
        const {history} = this.props;
        history.push('/update/'+id);
    }

    populateStocksData(){
        axios.get("api/Stocks/GetStocks").then(result => {
            const response = result.data;
            this.setState({stocks: response, loading: false});
        })
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
                                <td>{stock.stockPurchased}</td>
                                <td>{stock.stockSold}</td>
                                <td>
                                    <div className="form-group">
                                        <button onClick={() => this.onStockUpdate(stock.id)} className="btn btn-success">Update</button>
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
        let content = this.state.loading ? (
            <p>
                <em>Loading ...</em>
            </p>
        ) : (
            this.renderAllStocksTable(this.state.stocks)
        )

        return (
            <div>
                <h1>All stocks</h1>
                <p>You can see all stocks</p>
                {content}
            </div>
        );
    }
}