import React, { Component } from 'react'

export class Assessment extends Component {
    state = {
        viewDetails: false
    };

    viewDetails = () => {
        this.setState({viewDetails: true});
    };

    render(){
        if(this.state.viewDetails){
            return (
                <>
                    <img src={require('assets/img/maintenance.png')} alt="maintenance" className="img-fluid"/>
                </>
            )
            
        }else{

            return (
                <>
                    <table className="table table-striped" style={{height: '315px'}}>
                        <thead>
                            <tr>
                                <th>Amount due for:</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Prelim</td>
                                <th>Php 0.00</th>
                            </tr>
                            <tr>
                                <td>Midterm</td>
                                <th>-------------</th>
                            </tr>
                            <tr>
                                <td>Semi-Final</td>
                                <th>-------------</th>
                            </tr>
                            <tr>
                                <td>Final</td>
                                <th>-------------</th>
                            </tr>
                        </tbody>
                    </table>
                    <div className="text-center">
                        <button className="btn btn-primary" onClick={this.viewDetails}>View Details</button>
                    </div>
                    
                </>
            )
        }
    }
}

export default Assessment
