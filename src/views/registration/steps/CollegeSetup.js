import React, { Component } from 'react'

export class CollegeSetup extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const { values, inputChange } = this.props;

        return (
            <>
                <div style={{height: '400px', backgroundColor: ''}}>
                    <h3 className="text-left">New Registration For College
                        <br /><br />
                        <small>1st Semester S.Y. 2020-2021</small>
                    </h3>
                    <div class="row">                   
                        <div class="col-md-6 mb-3">
                            <select className="form-control">
                                <option>Course</option>
                                <option>test</option>
                                <option>test</option>
                            </select>
                        
                            <label className="ml-1 text-danger" for="firstName">(Note: You can still change course when you enroll)</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-3 mb-3">
                            <input type="text" class="form-control" id="firstName" placeholder="First Name" required />
                        </div>
                        <div class="col-md-3 mb-3">
                            <input type="text" class="form-control" id="lastName" placeholder="Middle Name" required />
                        </div>
                        <div class="col-md-3 mb-3">
                            <input type="text" class="form-control" id="firstName" placeholder="Last Name" required />
                        </div>
                        <div class="col-md-3 mb-3">
                            <input type="text" class="form-control" id="lastName" placeholder="Suffix" required />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-3 mb-3">
                            <select className="form-control">
                                <option>Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
                        <div class="col-md-3 mb-3">
                            <select className="form-control">
                                <option>Status</option>
                                <option>Single</option>
                                <option>Married</option>
                                <option>Widowed</option>
                            </select>
                        </div>
                        <div class="col-md-3 mb-3">
                            <input type="text" class="form-control" id="firstName" placeholder="Citizenship" required />
                        </div>
                        <div class="col-md-3 mb-3">
                            <input type="date" class="form-control" id="lastName" placeholder="Birth Date" required />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <input type="text" class="form-control" id="firstName" placeholder="Address" required />
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center mt-3">
                    <div className="col-3 text-right">
                        <button className="btn btn-lg btn-primary btn-block text-uppercase" onClick={this.continue}>Continue</button>
                    </div>
                </div>
            </>
        )
    }
}

export default CollegeSetup
