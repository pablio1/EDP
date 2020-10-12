import React, { Component } from 'react'

export class ElementarySetup extends Component {
    
    render() {
        return (
            <>
                <div className="container-lg">
                    <h3 className="text-left">New Registration For Pre School And Elementary
                        <br /><br />
                        <small>School Year 2020-2021</small>
                    </h3>
                    <div class="row">                   
                        <div class="col-md-3 mb-3">
                        <label>Grade Level</label>
                            <select className="form-control">
                                <option>Nursery</option>
                                <option>Kinder</option>
                                <option>Grade 1</option>
                                <option>Grade 2</option>
                                <option>Grade 3</option>
                                <option>Grade 4</option>
                                <option>Grade 5</option>
                                <option>Grade 6</option>
                                
                            </select> 
                        </div>
                        <div class="col-md-3 mb-3">
                        <label>LRN Number</label>
                            <input type="text" className="form-control" id="LRNnumber" required />
                        </div>
                            
                    </div>
                    <div className="row">
                    <div className="col-md-3 mb-3">
                        <label>First Name</label>
                            <input type="text" className="form-control" id="FirstName" required />
                        </div>
                        <div className="col-md-3 mb-3">
                        <label>Middle Name</label>
                            <input type="text" className="form-control" id="MiddleName" required />
                        </div>
                        <div className="col-md-3 mb-3">
                        <label>Last Name</label>
                            <input type="text" className="form-control" id="LastName" required />
                        </div>
                        <div className="col-md-3 mb-3">
                        <label>Suffix</label>
                            <input type="text" className="form-control" id="Suffix" required />
                        </div>
                        <div className="col-md-3 mb-3">
                        <label>Gender</label>
                            <select className="form-control">
                                <option>Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
                        <div className="col-md-3 mb-3">
                        <label>Status</label>
                            <select className="form-control">
                                <option>Single</option>
                               
                            </select>
                        </div>
                        <div className="col-md-3 mb-3">
                        <label>Citizenship</label>
                        <input type="text" className="form-control" id="Citizenship" required />
                        </div>
                        <div className="col-md-3 mb-3">
                        <label>Birth Date</label>
                        <input type="date" className="form-control" id="BirthDate" required />
                        </div>
                        <br /><br />
                        
                        
                        
                        
                    </div>
                    <div className="row">
                    <div className="col-md-8 mb-3">
                    <h4>Last School Attended (N/A If Not Applicable)</h4>
                    <hr></hr>
                        </div>
                        </div>
                        <div className="row">
                    <div className="col-md-9 mb-3">
                    <label>Last Strand/Grade Attended</label>
                    <input type="text" className="form-control" id="Citizenship" required />
                        </div>
                        </div>
                        <div className="row">
                    <div className="col-md-3 mb-3">
                    <label>Type</label>
                    <select className="form-control">
                                <option>Public</option>    
                            </select>
                        </div>
                        <div className="col-md-6 mb-3">
                    <label>School</label>
                    <input type="text" className="form-control" id="School" required />
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-md-6 mb-3">
                        <label>School Address</label>
                    <input type="text" className="form-control" id="School" required />
                        </div>
                        <div className="col-md-2 mb-3">
                        <label>Last Year Attended</label>
                    <input type="text" className="form-control" id="School" required />
                        </div>
                        <div className="col-md-4 mb-3">
                        <label>Honors Received (if any)</label>
                        <select className="form-control">
                                <option>With highest Honors</option>    
                            </select>
                        </div>
                        
                        </div>
                        <div className="row">
                        <div className="col-md-4 mb-3">
                        <h4>Current Address</h4>
                        <hr></hr>
                        </div>
                        
                        </div>
                        <div className="row">
                        <div className="col-md-3 mb-3">
                        <label>House #</label>
                            <input type="text" className="form-control" id="School" required />
                        </div>
                        <div className="col-md-3 mb-3">
                        <label>Street</label>
                            <input type="text" className="form-control" id="School" required />
                        </div>
                        <div className="col-md-3 mb-3">
                        <label>Barangay</label>
                            <input type="text" className="form-control" id="School" required />
                        </div>
                        
                        </div>
                        <div className="row">
                        <div className="col-md-3 mb-3">
                        <label>City</label>
                            <input type="text" className="form-control" id="School" required />
                        </div>
                        <div className="col-md-3 mb-3">
                        <label>Province</label>
                            <input type="text" className="form-control" id="School" required />
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-md-3 mb-3">
                        <label>Zip Code</label>
                            <input type="text" className="form-control" id="School" required />
                        </div>
                        
                        </div>
                        <div className="row">
                        <div className="col-md-7 mb-3">
                        <h4>Contract Information</h4>
                        <hr></hr>
                        </div>
                        
                        </div>
                        <div className="row">
                        <div className="col-md-3 mb-3">
                        <label>Home #</label>
                            <input type="text" className="form-control" id="School" required />
                        </div>
                        <div className="col-md-3 mb-3">
                        <label>Mobile #</label>
                            <input type="text" className="form-control" id="School" required />
                        </div>
                        <div className="col-md-3 mb-3">
                        <label>E-Mail</label>
                            <input type="text" className="form-control" id="School" required />
                        </div>
                        <div className="col-md-3 mb-3">
                        <label>Facebook</label>
                            <input type="text" className="form-control" id="School" required />
                        </div>
                        
                        </div>
                        <div className="row">
                        <div className="col-md-7 mb-3">
                        <h4>Internet Connection</h4>
                        <hr></hr>
                        </div>  
                        </div>
                        <div className="row">
                        <div className="col-md-4 mb-3">
                        <label>Preferred ISP (Internet Service Provider)</label>
                        <select className="form-control" >
                            <option value="Smart">Smart</option>
                            <option value="Globe">Globe</option>
                            <option value="PLDT">PLDT</option>
                            <option value="Others">Others</option>
                            </select>
                        </div>
                        <div className="col-md-3 mb-3">
                        <label>Rate your Internet Speed</label>
                        <select className="form-control" >
                            <option value="Smart">No Internet Connection</option>
                            <option value="Slow">Slow</option>
                            <option value="Fast">Fast</option>
                            
                            </select>
                        </div>
                        </div>
                        
                        <div className="row">
                        <div className="col-md-7 mb-3">
                        <h4>Parent/Guardian</h4>
                        <hr></hr>
                        </div>  
                        </div>
                        <div className="row">
                        <div className="col-md-3 mb-3">
                        <label>Mother Last Name</label>
                        <input type="text" className="form-control" id="School" required />
                        </div>
                        <div className="col-md-3 mb-3">
                        <label>Mother First Name</label>
                        <input type="text" className="form-control" id="School" required />
                        </div>
                        <div className="col-md-3 mb-3">
                        <label>Occupation</label>
                        <input type="text" className="form-control" id="School" required />
                        </div>
                        <div className="col-md-3 mb-3">
                        <label>Contact #</label>
                        <input type="text" className="form-control" id="School" required />
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-md-3 mb-3">
                        <label>Father Last Name</label>
                        <input type="text" className="form-control" id="School" required />
                        </div>
                        <div className="col-md-3 mb-3">
                        <label>Father First Name</label>
                        <input type="text" className="form-control" id="School" required />
                        </div>
                        <div className="col-md-3 mb-3">
                        <label>Occupation</label>
                        <input type="text" className="form-control" id="School" required />
                        </div>
                        <div className="col-md-3 mb-3">
                        <label>Contact #</label>
                        <input type="text" className="form-control" id="School" required />
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-md-3 mb-3">
                        <label>Guardian Last Name</label>
                        <input type="text" className="form-control" id="School" required />
                        </div>
                        <div className="col-md-3 mb-3">
                        <label>Guardian First Name</label>
                        <input type="text" className="form-control" id="School" required />
                        </div>
                        <div className="col-md-3 mb-3">
                        <label>Occupation</label>
                        <input type="text" className="form-control" id="School" required />
                        </div>
                        <div className="col-md-3 mb-3">
                        <label>Contact #</label>
                        <input type="text" className="form-control" id="School" required />
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-md-7 mb-3">
                        <h4>Attachments</h4>
                        <hr></hr>
                        </div>  
                        </div>
                        <div className="row">
                        <div className="col-md-3 mb-3">
                        <select className="form-control" >
                            <option value="I.D.">I.D.</option>
                            <option value="Certificate of Good Moral Character">Certificate of Good Moral Character</option>
                            <option value="NSA / PSA Birth Certificat">NSA / PSA Birth Certificate</option>
                            <option value="Form 138 / Report Card">Form 138 / Report Card</option>

                            
                            </select>
                        
                        </div>
                        <div className="col-md-3 mb-3">
                        <div class="custom-file">
                            <input type="file" class="custom-file-input" id="customFile" name="myImage"/>
                            <label class="custom-file-label" for="customFile">Choose file</label>
                        </div>
                        </div>
                        
                        </div>
                        <div className="row">
                        <div className="col-md-3 mb-3">
                        <select className="form-control" >
                            <option value="I.D.">I.D.</option>
                            <option value="Certificate of Good Moral Character">Certificate of Good Moral Character</option>
                            <option value="NSA / PSA Birth Certificat">NSA / PSA Birth Certificate</option>
                            <option value="Form 138 / Report Card">Form 138 / Report Card</option>

                            
                            </select>
                        
                        </div>
                        <div className="col-md-3 mb-3">
                        <div class="custom-file">
                            <input type="file" class="custom-file-input" id="customFile" name="myImage"/>
                            <label class="custom-file-label" for="customFile">Choose file</label>
                        </div>
                        </div>
                        
                        </div>
                        <div className="row">
                        <div className="col-md-3 mb-3">
                        <select className="form-control" >
                            <option value="I.D.">I.D.</option>
                            <option value="Certificate of Good Moral Character">Certificate of Good Moral Character</option>
                            <option value="NSA / PSA Birth Certificat">NSA / PSA Birth Certificate</option>
                            <option value="Form 138 / Report Card">Form 138 / Report Card</option>

                            
                            </select>
                        
                        </div>
                        <div className="col-md-3 mb-3">
                        <div class="custom-file">
                            <input type="file" class="custom-file-input" id="customFile" name="myImage"/>
                            <label class="custom-file-label" for="customFile">Choose file</label>
                        </div>
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

export default ElementarySetup
