import React, { Component } from 'react'

export class PermanentAddress extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values, inputChange } = this.props;

        return (
            <>
            <div style={{height: '400px'}}>
                <h3 className="text-left">New Registration For College
                    <br /><br />
                    <small>Permanent Address</small>
                </h3>
                
                <div class="row">                
                    <div class="col-md-3 mb-3">
                        <input type="text" class="form-control" id="firstName" placeholder="House number" required />
                    </div>
                    <div class="col-md-3 mb-3">
                        <input type="text" class="form-control" id="firstName" placeholder="Street" required />
                    </div>
                    <div class="col-md-3 mb-3">
                        <input type="text" class="form-control" id="firstName" placeholder="Barangay" required />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3 mb-3">
                        <input type="text" class="form-control" id="firstName" placeholder="City" required />
                    </div>
                    <div class="col-md-3 mb-3">
                        <input type="text" class="form-control" id="firstName" placeholder="Province    " required />
                    </div>
                   
                </div>
                <div class="row">
                    
                    <div class="col-md-3 mb-3">
                        <input type="text" class="form-control" id="firstName" placeholder="Zip Code" required />
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-3 text-left">
                    <button className="btn btn-lg btn-danger btn-block text-uppercase" onClick={this.back}>Back</button>
                </div>
                <div className="col-3 text-right">
                    <button className="btn btn-lg btn-primary btn-block text-uppercase" onClick={this.continue}>Continue</button>
                </div>
            </div>
            </>
        )
    }
}

export default PermanentAddress
