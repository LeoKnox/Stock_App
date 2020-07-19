import React, {Component} from 'react';
import axios from 'axios';

export class Delete extends Component{
    constructor(props){
        super(props);

        this.onCancel = this.onCancel.bind(this);
        this.onConfirmation = this.onConfirmation.bind(this);

        this.state = {
            name: "",
            description: "",
            stockPurchased: null,
            stockSold: null
        }
    }

    componentDidMount(){
        const{id} = this.props.match.params;

        axios.get("api/Stocks/SingleStock/"+id).then(stock => {
            const response = stock.data;

            this.setState({
                name: response.name,
                description: response.description,
                stockPurchased: new Date(response.stockPurchased).toISOString(),
                stockSold: response.stockSold ? new Date(response.stockSold).toISOString() : null
            })
        })
    }

    onCancel(e){
        const {history} = this.props;
        history.push('/stocks');
    }

    onConfirmation(e){
        const {id} = this.props.match.params;
        const {history} = this.props;

        axios.delete("api/Stocks/DeleteStock/"+id).then(result => {
            history.push('/stocks')
        })
    }

    render(){
        return(
            <div style={{ marginTop: 10}}>
            <h2>Delete stock confirmation</h2>
                <div class="card-body">
                    <h4 className="card-title"> {this.state.name} </h4>
                    <p class="card-text"> {this.state.description} </p>
                    <button onClick={this.onCancel} class="btn btn-default">
                        Cancel
                    </button>
                    <button onClick={this.onConfirmation} class="btn btn-danger">
                        Delete
                    </button>
                </div>
            </div>
        )
    }
}