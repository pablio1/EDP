import React, { Component } from 'react'

export class LastSchool extends Component {
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
            <div style={{height: '400px', backgroundColor: ''}}>
                <h3 className="text-left">New Registration For College
                    <br /><br />
                    <small>Last School Attended</small>
                </h3>
                <div class="row">                   
                    <div class="col-md-6 mb-3">
                        <input type="text" class="form-control" id="firstName" placeholder="Last Course/Strand Attended" required />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 mb-3">
                        <input type="text" class="form-control" id="firstName" placeholder="School" required />
                    </div>
                    <div class="col-md-3 mb-3">
                        <select className="form-control">
                            <option>Honors received (if any)</option>
                            <option>With Highest Honors</option>
                            <option>With High Honors</option>
                            <option>With Honors</option>
                        </select>
                    </div>
                </div>
                <div class="row">
                    
                    <div class="col-md-6 mb-3">
                        <input type="text" class="form-control" id="firstName" placeholder="Address" required />
                    </div>
                    <div class="col-md-2 mb-3">
                        <input type="text" class="form-control" id="lastName" placeholder="Last Year Attended" required />
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

export default LastSchool
