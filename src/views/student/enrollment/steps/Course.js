import React, { Component } from 'react'

export default class componentName extends Component {
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        return (
            <div className="row justify-content-center flex-column-reverse flex-md-row">
                <div className="col-md-8">
                    <div className="card-header">
                        <label className="card-title font-weight-bold">Enrollment For 1st Sem S.Y. 2020-2021</label>
                    </div>
                    <div className="card">
                        <div className="card-body m-3">
                            <h3>Welcome back!</h3>
                            <div className="alert alert-warning">
                                <ul>
                                    <li>Selecting other course from your previous records changes you to a Shiftee
                                        Semester Attended 2nd Sem S.Y. 2019-2020 BSIT-3</li>
                                </ul>
                            </div>
                            <label>You are classified as <b>OLD STUDENT</b></label>
                            <div className="mt-3 row">
                                <div className="col-8">
                                    <label>Course</label>
                                    <select className="form-control">
                                        <option>test1</option>
                                        <option>test2</option>
                                        <option>test3</option>
                                        <option>test4</option>
                                        <option>test5</option>
                                        <option>test1</option>
                                        <option>test2</option>
                                        <option>test3</option>
                                        <option>test4</option>
                                        <option>test5</option>
                                        <option>test1</option>
                                        <option>test2</option>
                                        <option>test3</option>
                                        <option>test4</option>
                                        <option>test5</option>
                                        <option>test1</option>
                                        <option>test2</option>
                                        <option>test3</option>
                                        <option>test4</option>
                                        <option>test5</option>
                                    </select>
                                </div>
                                <div className="col-4">
                                    <label>Year Level</label>
                                    <select className="form-control">
                                        <option>3 (Current)</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mt-3">
                                <button className="btn btn-primary" onClick={this.continue}>Continue</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
