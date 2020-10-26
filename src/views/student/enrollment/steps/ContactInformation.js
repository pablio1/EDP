import React, { Component } from 'react'

export default class ContactInformation extends Component {
    contactUpdate = e =>{
        e.preventDefault();
        this.props.contactUpdate();
    }
    render() {
        return (
            <div className="row justify-content-center flex-column-reverse flex-md-row">
                <div className="col-md-5">
                    <div className="card-header">
                        <label className="card-title font-weight-bold">Contact Information</label>
                    </div>
                    <div className="card">
                        <div className="card-body m-3">
                            <div className="alert alert-danger">
                                <ul>
                                    <li>It seems you haven't update your contact information.</li>
                                    <li>Please verify your email address.</li>
                                </ul>
                            </div>
                            <form onSubmit={this.contactUpdate}>
                                <div className="form-group">
                                    <label>Contact #</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Email Address</label> <button className="btn btn-link">(Verify)</button>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Facebook</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-primary">Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
