import React,{Component} from 'react';
import StudentNavbar from 'components/StudentNavbar';
import 'assets/css/style.css';
import TermsAndAggrement from './steps/TermsAndAgreement'
import ContactInformation from './steps/ContactInformation'
import Course from './steps/Course'
import Schedule from './steps/Schedule'
export class OnlineEnrollment extends Component {
    state = {
        enrollmentStep: 1,
        isContactUpdated: false
    }
    inputChange = input => e =>{
        this.setState({
            [input] : e.target.value
        });
    }
    contactUpdate = () => {
        this.setState({
            isContactUpdated: true
        });
    }
    nextStep = () => {
        const {enrollmentStep} = this.state;
        this.setState({
            enrollmentStep: enrollmentStep + 1
        });
    }
    render(){
        const {isContactUpdated} = this.state;
        return (
            <>
            <StudentNavbar />
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
                            {
                                this.state.enrollmentStep === 1 &&
                                <TermsAndAggrement
                                    nextStep = {this.nextStep}
                                />
                            }
                            {
                                this.state.enrollmentStep ===2 && !(isContactUpdated) &&
                                <ContactInformation
                                    nextStep = {this.nextStep} 
                                    contactUpdate = {this.contactUpdate}
                                />
                                
                            }
                            {
                                this.state.enrollmentStep === 2 && (isContactUpdated) &&
                                <Course 
                                    nextStep = {this.nextStep}
                                />
                            }
                            {
                                this.state.enrollmentStep === 3 && (isContactUpdated) &&
                                    <Schedule
                                    nextStep = {this.nextStep}
                                />
                            }
                        
                    </div>
                </section>
            </main>
        </>
        )
    }
}

export default OnlineEnrollment
