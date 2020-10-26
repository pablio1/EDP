import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import TermsAndConditions from '../TermsAndConditions'

export default class TermsAndAgreement extends Component {
    iAgree = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    render() {
        return (
            <>
                <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <div className="row bg-light shadow">
                                <div className="col-3">
                                    <img src={require('assets/img/uc.png')} className="img-fluid" />
                                </div>
                                <div className="col-9">
                                    <h1 class="text-primary font-weight-bold mt-2">University of Cebu</h1>
                                    <h5>Lapu-Lapu and Mandaue</h5>
                                </div>
                            </div>
                            <TermsAndConditions />
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center flex-column-reverse flex-md-row">
                    <div className="col-md-8">
                        <div className="card-header">
                            <label className="card-title font-weight-bold">Steps For Online Enrollment</label>
                        </div>
                        <div className="card">
                            <div className="card-body m-3">
                                <div className="row justify-content-center">
                                    <div className="col-md-10">
                                        <ol className="item-steps list-group">
                                            <li>Select a Semester to enroll</li>
                                            <li className="mt-2">Select your course and year level, Changing your course to another course from your last enrollment will make a Shiftee.</li>
                                            <li className="mt-2">Add Subjects by searching by subject or by Section.</li>
                                            <li className="mt-2">Mark the subjects you like to add and select.</li>
                                            <li className="mt-2">You can remove subject from your load by pressing</li>
                                            <li className="mt-2">just click, (Under Construct) when done</li>
                                        </ol>
                                    </div>
                                </div>
                                <form onSubmit={this.iAgree}>
                                    <div className="row mt-3">
                                        <div className="col-md-12">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="defaultUnchecked" name="termsAndConditions" required onChange={this.isChecked}/>
                                                <label className="custom-control-label" htmlFor="defaultUnchecked">I agree and read the terms and agreement.</label><Link data-toggle="modal" data-target=".bd-example-modal-lg">View</Link>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="row">
                                        <div className="col-md-12">
                                            <small className="text-success">By clicking on the “I ACCEPT“ on the button below, you hereby agree to, consent to, and accept in full the School’s Terms and Conditions, in lieu of your physical or actual signature.</small>
                                        </div>  
                                    </div>
                                    
                                    <div className="row mt-3">
                                        <div className="col-md-12">
                                            <button type="submit" className="btn btn-primary" >I Accept</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
