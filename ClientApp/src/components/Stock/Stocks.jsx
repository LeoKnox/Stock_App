import React, {Component} from 'react';

export class Stocks extends Component
{
    constructor(props){
        super(props);

        this.state = {
            stocks: [],
            loading: false
        }
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
                    <tr>
                        <td>a</td>
                        <td>a</td>
                        <td>a</td>
                        <td>a</td>
                        <td>=</td>
                    </tr>
                    <tr>
                        <td>a</td>
                        <td>a</td>
                        <td>a</td>
                        <td>a</td>
                        <td>=</td>
                    </tr>
                </tbody>
            </table>
        )
    }

    render(){
        let content = this.state.loading ? (
            <p>
                <em>Loading ...</em>
            </p>
        ) : (
            this.renderAllStocksTable(this.state.trips)
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