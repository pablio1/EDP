
import React, { Component } from 'react'

export default class SchoolDetails extends Component {
    render() {

        const { values, inputChange } = this.props;

        return (
            <div>
                <div className="row">
                    <div className="col-md-8 mb-3">
                        <h4>Last School Attended (N/A If Not Applicable)</h4>
                        <hr></hr>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-9 mb-3">
                        <label>Last Strand/Grade Attended</label>
                        <input type="text" className="form-control" required name="lastStrand" value={values.lastStrand} onChange={inputChange('lastStrand')}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 mb-3">
                        <label>Type</label>
                        <select className="form-control" name="type" value={values.type} onChange={inputChange('type')}>
                            <option>Public</option>    
                        </select>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label>School</label>
                        <input type="text" className="form-control" required name="school" value={values.school} onChange={inputChange('school')}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label>School Address</label>
                        <input type="text" className="form-control" required name="schoolAddress" value={values.schoolAddress} onChange={inputChange('schoolAddres')}/>
                    </div>
                    <div className="col-md-2 mb-3">
                        <label>Last Year Attended</label>
                        <input type="text" className="form-control" required name="lastYearAttended" value={values.lastYearAttended} onChange={inputChange('lastYearAttended')} />
                    </div>
                    <div className="col-md-4 mb-3">
                        <label>Honors Received (if any)</label>
                        <select className="form-control" name="honorsReceived" value={values.honorsReceived} onChange={inputChange('honorsReceived')}>
                            <option>With highest Honors</option>    
                        </select>
                    </div>
                </div>
                
            </div>
        )
    }
}
