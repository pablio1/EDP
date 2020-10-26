import React, { Component } from 'react'

export default class CollegeInfo extends Component {
    render() {

        const { values, inputChange,} = this.props;

        return (
            <div>
                <h3 className="text-left">Registration For College
                    <br /><br />
                    <small>1st Semester S.Y. 2020-2021</small>
                </h3>
                <div class="row">                   
                    <div class="col-md-6 mb-3">
                        <label className="ml-1 text-danger" >(Note: You can still change course when you enroll)</label>
                        <select className="form-control" name="course" onChange={inputChange('course')} value={values.course}>
                            <option>Course</option>
                            <option>test</option>
                            <option>test</option>
                        </select>
                    </div>
                        
                </div>
                <div className="row">
                    <div className="col-md-3 mb-3">
                        <label>First Name</label>
                        <input type="text" className="form-control" id="FirstName" required onChange={inputChange('firstName')} name="firstName" value={values.firstName}/>
                    </div>
                    <div className="col-md-3 mb-3">
                        <label>Middle Name</label>
                        <input type="text" className="form-control" id="MiddleName" required onChange={inputChange('middleName')} name="middleName" value={values.middleName}/>
                    </div>
                        <div className="col-md-3 mb-3">
                        <label>Last Name</label>
                        <input type="text" className="form-control" id="LastName" required onChange={inputChange('lastName')} name="lastName" value={values.lastName}/>
                    </div>
                    <div className="col-md-3 mb-3">
                        <label>Suffix</label>
                        <input type="text" className="form-control" id="Suffix" required onChange={inputChange('suffix')} name="suffix" value={values.suffix}/>
                    </div>
                    <div className="col-md-3 mb-3">
                        <label>Gender</label>
                        <select className="form-control" onChange={inputChange('gender')} name="gender" value={values.gender}>
                            <option>Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </div>
                    <div className="col-md-3 mb-3">
                        <label>Status</label>
                        <select className="form-control" onChange={inputChange('status')} name="status" value={values.status}>
                            <option>Single</option>
                            
                        </select>
                    </div>
                    <div className="col-md-3 mb-3">
                        <label>Citizenship</label>
                        <input type="text" className="form-control" required onChange={inputChange('citizenship')} name="citizenship" value={values.citizenship}/>
                    </div>
                    <div className="col-md-3 mb-3">
                        <label>Birth Date</label>
                        <input type="date" className="form-control" required onChange={inputChange('birthDate')} name="birthDate" value={values.birthDate} />
                    </div>
                    <br /><br /> 
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
                        <input type="text" className="form-control" required onChange={inputChange('motherLastName')} name="motherLastName" value={values.motherLastName}/>
                    </div>
                    <div className="col-md-3 mb-3">
                        <label>Mother First Name</label>
                        <input type="text" className="form-control" required onChange={inputChange('motherFirstName')} name="motherFirstName" value={values.motherFirstName}/>
                    </div>
                    <div className="col-md-3 mb-3">
                        <label>Occupation</label>
                        <input type="text" className="form-control" required onChange={inputChange('motherOccupation')} name="motherOccupation" value={values.motherOccupation}/>
                    </div>
                    <div className="col-md-3 mb-3">
                        <label>Contact #</label>
                        <input type="text" className="form-control" required onChange={inputChange('motherContactNumber')} name="motherContactNumber" value={values.motherContactNumber}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 mb-3">
                        <label>Father Last Name</label>
                        <input type="text" className="form-control" required onChange={inputChange('fatherLastName')} name="fatherLastName" value={values.fatherLastName}/>
                    </div>
                    <div className="col-md-3 mb-3">
                        <label>Father First Name</label>
                        <input type="text" className="form-control" required onChange={inputChange('fatherFirstName')} name="fatherFirstName" value={values.fatherFirstName}/>
                    </div>
                    <div className="col-md-3 mb-3">
                        <label>Occupation</label>
                        <input type="text" className="form-control" required onChange={inputChange('fatherOccupation')} name="fatherOccupation" value={values.fatherOccupation}/>
                    </div>
                    <div className="col-md-3 mb-3">
                        <label>Contact #</label>
                        <input type="text" className="form-control" required onChange={inputChange('fatherContactNumber')} name="fatherContactNumber" value={values.fatherContactNumber}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 mb-3">
                        <label>Guardian Last Name</label>
                        <input type="text" className="form-control" required onChange={inputChange('guardianLastName')} name="guardianLastName" value={values.guardianLastName}/>
                    </div>
                    <div className="col-md-3 mb-3">
                        <label>Guardian First Name</label>
                        <input type="text" className="form-control" required onChange={inputChange('guardianFirstName')} name="guardianFirstName" value={values.guardianFirstName}/>
                    </div>
                    <div className="col-md-3 mb-3">
                        <label>Occupation</label>
                        <input type="text" className="form-control" required onChange={inputChange('guardianOccupation')} name="guardianOccupation" value={values.guardianOccupation}/>
                    </div>
                    <div className="col-md-3 mb-3">
                        <label>Contact #</label>
                        <input type="text" className="form-control"  required onChange={inputChange('guardianContactNumber')} name="guardianContactNumber" value={values.guardianCpntactNumber}/>
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
                        <select className="form-control" onChange={inputChange('preferredISP')} name="preferredISP" value={values.preferredISP}>
                            <option value="Smart">Smart</option>
                            <option value="Globe">Globe</option>
                            <option value="PLDT">PLDT</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                    <div className="col-md-3 mb-3">
                        <label>Rate your Internet Speed</label>
                        <select className="form-control" onChange={inputChange('rateInternetSpeed')} name="rateInternetSpeed" value={values.rateInternetSpeed}>
                            <option value="Smart">No Internet Connection</option>
                            <option value="Slow">Slow</option>
                            <option value="Fast">Fast</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}


