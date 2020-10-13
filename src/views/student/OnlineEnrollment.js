import React,{Component} from 'react';
import StudentNavbar from 'components/StudentNavbar';
import 'assets/css/style.css';
export class OnlineEnrollment extends Component {
   state = {
       isUpdatedContactInformation: false
   }
    render(){
     
        return (
            <>
            <StudentNavbar />

            <div id="myModal" className="modal fade">
                <div className="modal-dialog">
                    <div class="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Contact Information</h5>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div class="modal-body">
                            <p className="text-danger text-center">It seems you haven't updated your contact information.</p>
                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Mobile #" />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Email Address"/>
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Facebook Account"/>
                                </div>
                                <button type="submit" className="btn-primary">Update</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <main id="main">
                <section id="breadcrumbs" className="breadcrumbs">
                    <div className="container">
                        <ol>
                            <li><a href="index.html">Home</a></li>
                            <li>Online Enrollment</li>
                        </ol>
                        <h2>Online Enrollment</h2>
                    </div>
                </section>  
                <section id="portfolio-details" className="portfolio-details">
                    <div className="container" data-aos="fade-up">
                        <div className="row justify-content-center flex-column-reverse flex-md-row">
                            <div className="col-md-8">
                                <div className="card-header">
                                    <label className="card-title">Steps For Online Enrollment</label>
                                </div>
                                <div className="card">
                                    <div className="card-body m-3">
                                       
                                        <div className="row justify-content-center">
                                            <div className="col-md-10">
                                                <small>
                                                    <ol className="item-steps list-group">
                                                        <li>Select a Semester to enroll</li>
                                                        <li className="mt-2">Select your course and year level, Changing your course to another course from your last enrollment will make a Shiftee.</li>
                                                        <li className="mt-2">Add Subjects by searching by subject or by Section.</li>
                                                        <li className="mt-2">Mark the subjects you like to add and select.</li>
                                                        <li className="mt-2">You can remove subject from your load by pressing</li>
                                                        <li className="mt-2">just click, (Under Construct) when done</li>
                                                    </ol>
                                                </small>
                                            </div>
                                        </div>
                                        <form>
                                            <div className="row mt-3">
                                                <div className="col-md-12">
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="defaultUnchecked" name="termsAndConditions" required onChange={this.isChecked}/>
                                                        <label className="custom-control-label" htmlFor="defaultUnchecked">I agree and read the terms and agreement.</label>
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
                                                    <button type={(!(this.state.isUpdatedContactInformation) ? "button": "submit")} className="btn-primary" data-toggle="modal" data-target={(!(this.state.isUpdatedContactInformation) ? "#myModal" : "")}>I Accept</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
        )
    }
}

export default OnlineEnrollment
