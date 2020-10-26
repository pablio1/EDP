import React, {Component} from 'react';
import CollegeInfo from './steps/CollegeInfo';
import ContactDetails from './steps/ContactDetails';
import SchoolDetails from './steps/SchoolDetails';
import Attachments from './steps/Attachments';
import SeniorHighInfo from './steps/SeniorHighInfo';
import JuniorHighInfo from './steps/JuniorHighInfo';
import ElementaryInfo from './steps/ElementaryInfo';
import Review from './steps/Review';

export class Registration extends Component{

    state = {
        gradeLevel: '',
        step: 1,
        //College - Personal Information
        course: '',
        firstName: '',
        middleName: '',
        lastName: '',
        suffix: '',
        gender: '',
        status: '',
        citizenship: '',
        birthDate: '',

        motherLastName: '',
        motherFirstName: '',
        motherOccupation: '',
        motherContactNumber: '',

        fatherLastName: '',
        fatherFirstName: '',
        fatherOccupation: '',
        fatherContactNumber: '',

        guardianLastName: '',
        guardianFirstName: '',
        guardianOccupation: '',
        guardianContactNumber: '',

        preferredISP: '',
        rateInternetSpeed: '',

        //Contact Details
        houseNumber: '',
        street: '',
        barangay: '',
        city: '',
        province: '',
        zipCode: '',
        homeNumber: '',
        mobileNumber: '',
        emailAddress: '',
        facebookAccount: '',

        //SchoolDetails
        lastStrand: '',
        type: '',
        school: '',
        schoolAddress: '',
        lastYearAttended: '',
        honorsReceived: '',
        //certificate
        attachment: [],
        //SeniorHigh
        strandToEnroll: '',
        yearLevel: '',
        session: '',
        lrn_Number: '',
        esc_SchoolID: '',
        esc_StudentID: '',
        birthPlace: ''
    };

    clickTest = () => {
        console.log(this.state)
    }
    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    };

    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    };
   
    inputChange = input => e => {
        this.setState({
            [input]: e.target.value
        });

    };


    chooseCollege = () => {
        this.setState({gradeLevel: 'college'});
    };  
    chooseSeniorHigh = () => {
        this.setState({gradeLevel: 'senior'});
    };  
    chooseJuniorHigh = () => {
        this.setState({gradeLevel: 'junior'});
    };
    chooseElementary = () => {
        this.setState({gradeLevel: 'elementary'});
    };

    render(){
     
        const {step,gradeLevel, course, firstName, middleName, lastName, suffix, gender, status, citizenship,birthDate, 
                motherLastName, motherFirstName, motherOccupation, motherContactNumber, fatherLastName, fatherOccupation, fatherContactNumber,
                guardianLastName,guardianFirstName,guardianOccupation,guardianContactNumber,preferredISP,rateInternetSpeed, houseNumber,
                street,barangay,city,province,zipCode,homeNumber,mobileNumber,emailAddress,facebookAccount,lastStrand,type,school,schoolAddress,lastYearAttended,honorsReceived,attachment
        } = this.state;

        const values = {step,gradeLevel, course, firstName, middleName, lastName, suffix, gender, status, citizenship,birthDate, 
            motherLastName, motherFirstName, motherOccupation, motherContactNumber, fatherLastName, fatherOccupation, fatherContactNumber,
            guardianLastName,guardianFirstName,guardianOccupation,guardianContactNumber,preferredISP,rateInternetSpeed, houseNumber,
            street,barangay,city,province,zipCode,homeNumber,mobileNumber,emailAddress,facebookAccount,lastStrand,type,school,schoolAddress,lastYearAttended,honorsReceived, attachment
        };
        
        if (this.state.gradeLevel === 'college') {
            if(this.state.step === 1){
                return(
                    <>
                        <CollegeInfo
                            inputChange={this.inputChange}
                            values={values}
                        />
                        <div className="step-nav">
                            <a className="btn btn-primary" href={'#services'} onClick={this.nextStep}>Continue</a>   
                        </div>
                    </>
                )
            }
            if(this.state.step === 2){
                return(
                    <>
                        <ContactDetails 
                            inputChange={this.inputChange}
                            values={values}
                        />
                        <div className="step-nav">
                            <a className="btn btn-secondary" href={'#services'} onClick={this.prevStep}>Previous</a> 
                            <a className="btn btn-primary ml-5" href={'#services'} onClick={this.nextStep}>Continue</a>   
                        </div>
                    </>
                )
            }
            if(this.state.step === 3){
                return(
                    <>
                        <SchoolDetails 
                            inputChange={this.inputChange}
                            values={values}
                        />
                        <div className="step-nav">
                            <a className="btn btn-secondary" href={'#services'} onClick={this.prevStep}>Previous</a> 
                            <a className="btn btn-primary ml-5" href={'#services'} onClick={this.nextStep}>Continue</a>   
                        </div>
                    </>
                )
            }
            if(this.state.step === 4){
                return(
                    <>
                        <Attachments 
                            inputChange={this.inputChange}
                            values={values}
                        />
                        <div className="step-nav mt-5">
                            <a className="btn btn-secondary" href={'#services'} onClick={this.prevStep}>Previous</a> 
                            <a className="btn btn-info ml-5" href={'#services'} onClick={this.nextStep}>Review</a>   
                        </div>
                    </>
                )
            }
            if(this.state.step === 5){
                return(
                    <>
                        <Review 
                            inputChange={this.inputChange}
                            values={values}
                        />
                    </>
                )
            }
        }
       else if(this.state.gradeLevel === 'senior'){
            if(this.state.step === 1){
                return(
                    <>
                        <SeniorHighInfo
                            inputChange={this.inputChange}
                            values={values}
                        />
                        <div className="step-nav">
                            <a className="btn btn-primary" href={'#services'} onClick={this.nextStep}>Continue</a>   
                        </div>
                    </>
                )
            }
            if(this.state.step === 2){
                return(
                    <>
                        <ContactDetails 
                            inputChange={this.inputChange}
                            values={values}
                        />
                        <div className="step-nav">
                            <a className="btn btn-secondary" href={'#services'} onClick={this.prevStep}>Previous</a> 
                            <a className="btn btn-primary ml-5" href={'#services'} onClick={this.nextStep}>Continue</a>   
                        </div>
                    </>
                )
            }
            if(this.state.step === 3){
                return(
                    <>
                        <SchoolDetails 
                            inputChange={this.inputChange}
                            values={values}
                        />
                        <div className="step-nav">
                            <a className="btn btn-secondary" href={'#services'} onClick={this.prevStep}>Previous</a> 
                            <a className="btn btn-primary ml-5" href={'#services'} onClick={this.nextStep}>Continue</a>   
                        </div>
                    </>
                )
            }
            if(this.state.step === 4){
                return(
                    <>
                        <Attachments 
                            inputChange={this.inputChange}
                            values={values}
                        />
                        <div className="step-nav mt-5">
                            <a className="btn btn-secondary" href={'#services'} onClick={this.prevStep}>Previous</a> 
                            <a className="btn btn-info ml-5" href={'#services'} onClick={this.nextStep}>Review</a>   
                        </div>
                    </>
                )
            }
            if(this.state.step === 5){
                return(
                    <>
                        <Review 
                            inputChange={this.inputChange}
                            values={values}
                        />
                    </>
                )
            }
        }
        else if(this.state.gradeLevel === 'junior'){
            if(this.state.step === 1){
                return(
                    <>
                        <JuniorHighInfo
                            inputChange={this.inputChange}
                            values={values}
                        />
                        <div className="step-nav">
                            <a className="btn btn-primary" href={'#services'} onClick={this.nextStep}>Continue</a>   
                        </div>
                    </>
                )
            }
            if(this.state.step === 2){
                return(
                    <>
                        <ContactDetails 
                            inputChange={this.inputChange}
                            values={values}
                        />
                        <div className="step-nav">
                            <a className="btn btn-secondary" href={'#services'} onClick={this.prevStep}>Previous</a> 
                            <a className="btn btn-primary ml-5" href={'#services'} onClick={this.nextStep}>Continue</a>   
                        </div>
                    </>
                )
            }
            if(this.state.step === 3){
                return(
                    <>
                        <SchoolDetails 
                            inputChange={this.inputChange}
                            values={values}
                        />
                        <div className="step-nav">
                            <a className="btn btn-secondary" href={'#services'} onClick={this.prevStep}>Previous</a> 
                            <a className="btn btn-primary ml-5" href={'#services'} onClick={this.nextStep}>Continue</a>   
                        </div>
                    </>
                )
            }
            if(this.state.step === 4){
                return(
                    <>
                        <Attachments 
                            inputChange={this.inputChange}
                            values={values}
                        />
                        <div className="step-nav mt-5">
                            <a className="btn btn-secondary" href={'#services'} onClick={this.prevStep}>Previous</a> 
                            <a className="btn btn-info ml-5" href={'#services'} onClick={this.nextStep}>Review</a>   
                        </div>
                    </>
                )
            }
            if(this.state.step === 5){
                return(
                    <>
                        <Review 
                            inputChange={this.inputChange}
                            values={values}
                        />
                    </>
                )
            }
        }
        else if(this.state.gradeLevel === 'elementary'){
            if(this.state.step === 1){
                return(
                    <>
                        <ElementaryInfo
                            inputChange={this.inputChange}
                            values={values}
                        />
                        <div className="step-nav">
                            <a className="btn btn-primary" href={'#services'} onClick={this.nextStep}>Continue</a>   
                        </div>
                    </>
                )
            }
            if(this.state.step === 2){
                return(
                    <>
                        <ContactDetails 
                            inputChange={this.inputChange}
                            values={values}
                        />
                        <div className="step-nav">
                            <a className="btn btn-secondary" href={'#services'} onClick={this.prevStep}>Previous</a> 
                            <a className="btn btn-primary ml-5" href={'#services'} onClick={this.nextStep}>Continue</a>   
                        </div>
                    </>
                )
            }
            if(this.state.step === 3){
                return(
                    <>
                        <SchoolDetails 
                            inputChange={this.inputChange}
                            values={values}
                        />
                        <div className="step-nav">
                            <a className="btn btn-secondary" href={'#services'} onClick={this.prevStep}>Previous</a> 
                            <a className="btn btn-primary ml-5" href={'#services'} onClick={this.nextStep}>Continue</a>   
                        </div>
                    </>
                )
            }
            if(this.state.step === 4){
                return(
                    <>
                        <Attachments 
                            inputChange={this.inputChange}
                            values={values}
                        />
                        <div className="step-nav mt-5">
                            <a className="btn btn-secondary" href={'#services'} onClick={this.prevStep}>Previous</a> 
                            <a className="btn btn-info ml-5" href={'#services'} onClick={this.nextStep}>Review</a>   
                        </div>
                    </>
                )
            }
            if(this.state.step === 5){
                return(
                    <>
                        <Review 
                            inputChange={this.inputChange}
                            values={values}
                        />
                    </>
                )
            }
        }
        
        else {
            return(
            <div className="row">
                <div id="college" onClick={this.chooseCollege} className="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay="200">
                    <div className=" box">
                        <div className="icon" style={{background: '#e1eeff'}}><i className="" style={{color: '#2282ff'}}><img src={require("assets/img/college.png")} alt="" style={{height: '65px', width: '65px'}} /></i></div>
                        <h4 className="title"><a href={'/#college'}>College</a></h4>
                    </div>
                </div>

                <div id="senior"  onClick={this.chooseSeniorHigh}  className="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay="300">
                    <div className="box">
                        <div className="icon" style={{background: '#ecebff'}}><i className="" style={{color: '#8660fe'}}><img src={require("assets/img/senior.png")} alt="" style={{height: '65px', width: '65px'}} /></i></div>
                        <h4 className="title"><a href={'/#senior'}>Senior High</a></h4>
                        
                    </div>
                </div>
                <div id="junior" onClick={this.chooseJuniorHigh} className="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay="300">
                    <div className="box">
                        <div className="icon" style={{background: '#ecebff'}}><i className="" style={{color: '#8660fe'}}><img src={require("assets/img/junior.png")} alt="" style={{height: '65px', width: '65px'}} /></i></div>
                        <h4 className="title"><a href={'/#junior'}>Junior High</a></h4>
                        
                    </div>
                </div>
                <div id="elementary" onClick={this.chooseElementary} className="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay="300">
                    <div className="box">
                        <div className="icon" style={{background: '#ecebff'}}><i className="i\" style={{color: '#8660fe'}}><img src={require("assets/img/elementary.png")} alt="" style={{height: '65px', width: '65px'}} /></i></div>
                        <h4 className="title"><a href={'/#elementary'}>Elementary</a></h4>
                    </div>
                </div>
            </div>
            )
        }
    }
}
export default Registration;