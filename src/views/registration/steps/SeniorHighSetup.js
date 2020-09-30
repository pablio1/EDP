import React, { Component } from 'react'

export class SeniorHighSetup extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const { values, inputChange } = this.props;

        return (
            <>
                <div className="container-lg">
                    <h3 className="text-left">New Registration For Senior High
                        <br /><br />
                        <small>1st Semester S.Y. 2020-2021</small>
                    </h3>
                    <div class="row">  
                                     
                        <div class="col-md-6 mb-3">
                        <label>Strand to enroll</label>
                            <select className="form-control">
                                <option>ACADEMICS - ABM</option>
                                <option>test</option>
                                <option>test</option>
                            </select>
                        
                            
                        </div>
                        <div class="col-md-3 mb-3">
                        <label>Year Level</label>
                            <select className="form-control">
                                
                                <option>11</option>
                                <option>12</option>
                            </select>
                        
                            
                        </div>
                        
                    </div>
                    <div class="row">
                    <div class="col-md-3 mb-3">
                        <label>Session</label>
                            <select className="form-control">
                                
                                <option>Morning</option>
                                <option>Afternoon</option>
                            </select>
                        
                            
                        </div>
                    </div>
                    <div class="row">
                    
                        <div class="col-md-3 mb-3">
                        <label>LRN Number</label>
                            <input type="text" class="form-control" id="LRNnumber" required />
                        </div>
                        <div class="col-md-3 mb-3">
                        <label>ESC School ID</label>
                            <input type="text" class="form-control" id="ESCschoolID"  required />
                        </div>
                        <div class="col-md-3 mb-3">
                        <label>ESC Student ID</label>
                            <input type="text" class="form-control" id="ESCstudentID" required />
                        </div>
                    </div>
                    <div class="row">
                    <div class="col-md-3 mb-3">
                        <label>First Name</label>
                            <input type="text" class="form-control" id="FirstName" required />
                        </div>
                        <div class="col-md-3 mb-3">
                        <label>Middle Name</label>
                            <input type="text" class="form-control" id="MiddleName" required />
                        </div>
                        <div class="col-md-3 mb-3">
                        <label>Last Name</label>
                            <input type="text" class="form-control" id="LastName" required />
                        </div>
                        <div class="col-md-3 mb-3">
                        <label>Suffix</label>
                            <input type="text" class="form-control" id="Suffix" required />
                        </div>
                        <div class="col-md-3 mb-3">
                        <label>Gender</label>
                            <select className="form-control">
                                <option>Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
                        <div class="col-md-3 mb-3">
                        <label>Status</label>
                            <select className="form-control">
                                <option>Single</option>
                               
                            </select>
                        </div>
                        <div class="col-md-3 mb-3">
                        <label>Citizenship</label>
                        <input type="text" class="form-control" id="Citizenship" required />
                        </div>
                        <div class="col-md-3 mb-3">
                        <label>Birth Date</label>
                        <input type="date" class="form-control" id="BirthDate" required />
                        </div>
                        <br /><br />
                        
                        
                        
                        
                    </div>
                    <div className="row">
                    <div class="col-md-6 mb-3">
                    <label>Birth Place</label>
                    <input type="text" class="form-control" id="Citizenship" required />
                        </div>
                       
                        </div>
                    <div className="row">
                    <div class="col-md-8 mb-3">
                    <h4>Last School Attended (N/A If Not Applicable)</h4>
                    <hr></hr>
                        </div>
                        </div>
                        <div className="row">
                    <div class="col-md-9 mb-3">
                    <label>Last Strand/Grade Attended</label>
                    <input type="text" class="form-control" id="Citizenship" required />
                        </div>
                        </div>
                        <div className="row">
                    <div class="col-md-3 mb-3">
                    <label>Type</label>
                    <select className="form-control">
                                <option>Public</option>    
                            </select>
                        </div>
                        <div class="col-md-6 mb-3">
                    <label>School</label>
                    <input type="text" class="form-control" id="School" required />
                        </div>
                        </div>
                        <div className="row">
                        <div class="col-md-6 mb-3">
                        <label>School Address</label>
                    <input type="text" class="form-control" id="School" required />
                        </div>
                        <div class="col-md-2 mb-3">
                        <label>Last Year Attended</label>
                    <input type="text" class="form-control" id="School" required />
                        </div>
                        <div class="col-md-4 mb-3">
                        <label>Honors Received (if any)</label>
                        <select className="form-control">
                                <option>With highest Honors</option>    
                            </select>
                        </div>
                        
                        </div>
                        <div className="row">
                        <div class="col-md-4 mb-3">
                        <h4>Current Address</h4>
                        <hr></hr>
                        </div>
                        
                        </div>
                        <div className="row">
                        <div class="col-md-3 mb-3">
                        <label>House #</label>
                            <input type="text" class="form-control" id="School" required />
                        </div>
                        <div class="col-md-3 mb-3">
                        <label>Street</label>
                            <input type="text" class="form-control" id="School" required />
                        </div>
                        <div class="col-md-3 mb-3">
                        <label>Barangay</label>
                            <input type="text" class="form-control" id="School" required />
                        </div>
                        
                        </div>
                        <div className="row">
                        <div class="col-md-3 mb-3">
                        <label>City</label>
                            <input type="text" class="form-control" id="School" required />
                        </div>
                        <div class="col-md-3 mb-3">
                        <label>Province</label>
                            <input type="text" class="form-control" id="School" required />
                        </div>
                        </div>
                        <div className="row">
                        <div class="col-md-3 mb-3">
                        <label>Zip Code</label>
                            <input type="text" class="form-control" id="School" required />
                        </div>
                        </div>
                   
                </div>
                
                <div className="row justify-content-center mt-3">
                    <div className="col-3 text-right">
                        <button className="btn btn-lg btn-primary btn-block " onClick={this.continue}>Submit Form</button>
                    </div>
                </div>
                
            </>
        )
    }
}

export default SeniorHighSetup
