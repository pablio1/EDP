import React, { Component } from 'react'

export default class Schedule extends Component {
    
    render() {
        return (
            <div className="row justify-content-center flex-column-reverse flex-md-row">
                <div className="col-md-12">
                    <div className="card-header">
                        <label className="card-title font-weight-bold">Enrollment For 1st Sem S.Y. 2020-2021</label>
                    </div>
                    <div className="card">
                        <div className="card-body m-3">
                            <h3>Welcome back!</h3>
                            <label>You are classified as <b>OLD STUDENT</b></label>
                            
                            <div className="row mt-3">
                                <div className="col-6">
                                    <div class="input-group">
                                        <input type="text" class="form-control" placeholder="Search Subject" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                        <div class="input-group-append">
                                            <button class="btn btn-outline-secondary" type="button">Search</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-6">
                                    <div class="input-group">
                                        <select className="form-control">
                                            <option>Select section</option>
                                        </select>
                                        <div class="input-group-append">
                                            <button class="btn btn-outline-secondary" type="button">Section</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-12">
                                    <label className="font-weight-bold">Subjects will display here.</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <table className="text-center table table-border">
                                        <thead className="text-white thead-dark">
                                            <tr>
                                                <th></th>
                                                <th>EDP CODE</th>
                                                <th>Subject</th>
                                                <th>Course</th>
                                                <th>Units</th>
                                                <th>Time</th>
                                                <th>Days</th>
                                                <th>Room</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <input type="checkbox" />
                                                </td>
                                                <td>21746</td>
                                                <td><i className="fa fa-info text-info mr-1" title="METHODS OF RESEARCH IN COMPUTING"></i> CC-RESCOM31</td>
                                                <td>BSIT-3B</td>
                                                <td>3</td>
                                                <td>7:30-9:00 AM</td>
                                                <td>TUE</td>
                                                <td>207</td>
                                                <td className="text-success font-weight-bold">Open</td>
                                            </tr>
                                            
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
