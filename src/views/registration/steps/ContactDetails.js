import React, { Component } from 'react'

export default class ContactDetails extends Component {
    render() {

        const { values, inputChange } = this.props;

        return (
            <div>
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <h4>Current Address</h4>
                        <hr></hr>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 mb-3">
                        <label>House #</label>
                        <input type="text" className="form-control" required name="houseNumber" value={values.houseNumber} onChange={inputChange('houseNumber')}/>
                    </div>
                    <div className="col-md-3 mb-3">
                        <label>Street</label>
                        <input type="text" className="form-control" required name="street" value={values.street} onChange={inputChange('street')} />
                    </div>
                    <div className="col-md-3 mb-3">
                        <label>Barangay</label>
                        <input type="text" className="form-control" required name="barangay" value={values.barangay} onChange={inputChange('barangay')} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 mb-3">
                        <label>City</label>
                        <input type="text" className="form-control" required name="city" value={values.city} onChange={inputChange('city')} />
                    </div>
                    <div className="col-md-3 mb-3">
                        <label>Province</label>
                        <input type="text" className="form-control" required name="province" value={values.province} onChange={inputChange('province')} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 mb-3">
                        <label>Zip Code</label>
                        <input type="text" className="form-control" required name="zipCode" value={values.zipCode} onChange={inputChange('zipCode')} />
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
                        <input type="text" className="form-control" required name="homeNumber" value={values.homeNumber} onChange={inputChange('homeNumber')}/>
                    </div>
                    <div className="col-md-3 mb-3">
                        <label>Mobile #</label>
                        <input type="text" className="form-control" required name="mobileNumber" value={values.mobileNumber} onChange={inputChange('mobileNumber')}/>
                    </div>
                    <div className="col-md-3 mb-3">
                        <label>E-Mail</label>
                        <input type="text" className="form-control" required name="emailAddress" value={values.emailAddress} onChange={inputChange('emailAddress')} />
                    </div>
                    <div className="col-md-3 mb-3">
                        <label>Facebook</label>
                        <input type="text" className="form-control" required name="facebookAccount" value={values.facebookAccount} onChange={inputChange('facebookAccount')} />
                    </div>
                </div>
            </div>
        )
    }
}