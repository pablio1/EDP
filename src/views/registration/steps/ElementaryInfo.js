import React, { Component } from 'react'

export class ElementaryInfo extends Component {
    

    render() {
        const{values, inputChange} = this.props;
        return (
            <>
                <div>
                    <h3 className="text-left">New Registration For Pre School and Elementary
                        <br /><br />
                        <small>School Year 2020-2021</small>
                    </h3>
                    <div class="row">                   
                        <div class="col-md-3 mb-3">
                            <label>Grade Level</label>
                            <select className="form-control" name="gradeLevel" value={values.gradeLevel} onChange={inputChange('gradeLevel')}>
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
                            <input type="text" className="form-control" id="LRNnumber" required name="lrn_Number" value={values.lrn_Number} onChange={inputChange('lrn_Number')}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 mb-3">
                            <label>First Name</label>
                            <input type="text" className="form-control" id="FirstName" required name="firstName" value={values.firstName} onChange={inputChange('firstName')} />
                        </div>
                        <div className="col-md-3 mb-3">
                            <label>Middle Name</label>
                            <input type="text" className="form-control" id="MiddleName" required name="middleName" value={values.middleName} onChange={inputChange('middleName')}/>
                        </div>
                        <div className="col-md-3 mb-3">
                            <label>Last Name</label>
                            <input type="text" className="form-control" id="LastName" required name="lastName" value={values.lastName} onChange={inputChange('lastName')}/>
                        </div>
                        <div className="col-md-3 mb-3">
                            <label>Suffix</label>
                            <input type="text" className="form-control" id="Suffix" required name="suffix" value={values.suffix} onChange={inputChange('suffix')}/>
                        </div>
                        <div className="col-md-3 mb-3">
                            <label>Gender</label>
                            <select className="form-control" name="gender" value={values.gender} onChange={inputChange('gender')}>
                                <option>Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
                        <div className="col-md-3 mb-3">
                        <label>Status</label>
                            <select className="form-control" name="status" value={values.status} onChange={inputChange('status')}>
                                <option>Single</option>
                            </select>
                        </div>
                        <div className="col-md-3 mb-3">
                            <label>Citizenship</label>
                            <input type="text" className="form-control" id="Citizenship" required name="citizenship" value={values.citizenship} onChange={inputChange('citizenship')}/>
                        </div>
                        <div className="col-md-3 mb-3">
                            <label>Birth Date</label>
                            <input type="date" className="form-control" id="BirthDate" required name="birthDate" value={values.birthDate} onChange={inputChange('birthDate')}/>
                        </div>
                        <br /><br />
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label>Birth Place</label>
                            <input type="text" className="form-control" id="Citizenship" required name="birthPlace" value={values.birthPlace} onChange={inputChange('birthPlace')}/>
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
                            <input type="text" className="form-control" required name="motherLastName" value={values.motherLastName} onChange={inputChange('motherLastName')}/>
                        </div>
                        <div className="col-md-3 mb-3">
                            <label>Mother First Name</label>
                            <input type="text" className="form-control" required name="motherFirstName" value={values.motherFirstName} onChange={inputChange('motherFirstName')}/>
                        </div>
                        <div className="col-md-3 mb-3">
                            <label>Occupation</label>
                            <input type="text" className="form-control" required name="motherOccupation" value={values.motherOccupation} onChange={inputChange('motherOccupation')}/>
                        </div>
                        <div className="col-md-3 mb-3">
                            <label>Contact #</label>
                            <input type="text" className="form-control" required name="motherContactNumber" value={values.motherContactNumber} onChange={inputChange('motherContactNumber')}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 mb-3">
                            <label>Father Last Name</label>
                            <input type="text" className="form-control" required name="fatherLastName" value={values.fatherLastName} onChange={inputChange('fatherLastName')}/>
                        </div>
                        <div className="col-md-3 mb-3">
                            <label>Father First Name</label>
                            <input type="text" className="form-control" required name="fatherFirstName" value={values.fatherLastName} onChange={inputChange('fatherLastName')} />
                        </div>
                        <div className="col-md-3 mb-3">
                            <label>Occupation</label>
                            <input type="text" className="form-control" required name="fatherOccupation" value={values.fatherOccupation} onChange={inputChange('fatherOccupation')}/>
                        </div>
                        <div className="col-md-3 mb-3">
                            <label>Contact #</label>
                            <input type="text" className="form-control" required name="fatherContactNumber" value={values.fatherContactNumber} onChange={inputChange('fatherContactNumber')}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 mb-3">
                            <label>Guardian Last Name</label>
                            <input type="text" className="form-control" required name="guardianLastName" value={values.guardianLastName} onChange={inputChange('guardianLastName')}/>
                        </div>
                        <div className="col-md-3 mb-3">
                            <label>Guardian First Name</label>
                            <input type="text" className="form-control" required name="guardianFirstName" value={values.guardianFirstName} onChange={inputChange('guardianFirstName')}/>
                        </div>
                        <div className="col-md-3 mb-3">
                            <label>Occupation</label>
                            <input type="text" className="form-control" required name="guardianOccupation" value={values.guardianOccupation} onChange={inputChange('guardianOccupation')}/>
                        </div>
                        <div className="col-md-3 mb-3">
                            <label>Contact #</label>
                            <input type="text" className="form-control" required name="guardianContactNumber" value={values.guardianContactNumber} onChange={inputChange('guardianContactNumber')}/>
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
                            <select className="form-control" name="preferredISP" value={values.preferredISP} onChange={inputChange('preferredISP')}>
                                <option value="Smart">Smart</option>
                                <option value="Globe">Globe</option>
                                <option value="PLDT">PLDT</option>
                                <option value="Others">Others</option>
                            </select>
                        </div>
                        <div className="col-md-3 mb-3">
                            <label>Rate your Internet Speed</label>
                            <select className="form-control" name="rateInternetSpeed" value={values.rateInternetSpeed} onChange={inputChange('rateInternetSpeed')}>
                                <option value="Smart">No Internet Connection</option>
                                <option value="Slow">Slow</option>
                                <option value="Fast">Fast</option>
                            </select>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ElementaryInfo
