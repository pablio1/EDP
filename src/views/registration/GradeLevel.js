import React, {Component} from 'react';
import CollegeSetup from './steps/CollegeSetup';
import LastSchool from './steps/LastSchool';
import CurrentAddress from './steps/CurrentAddress';
import PermanentAddress from './steps/PermanentAddress';
import Contact from './steps/Contact';

export class GradeLevel extends Component{

    state = {
        gradeLevel: '',
        step: 1,
    };

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


    render(){
        const { step } = this.state;
        const { name, email, phone, password, facebook, twitter, github } = this.state;
        const values = { name, email, phone, password, facebook, twitter, github };

        if (this.state.gradeLevel === 'college') {
            if(this.state.step === 1){
                return(
                    <>
                        <CollegeSetup 
                            nextStep={this.nextStep}
                            inputChange={this.inputChange}
                            values={values}
                        />
                    </>
                )
            }
            else if(this.state.step === 2){
                return(
                    <>
                        <LastSchool 
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            inputChange={this.inputChange}
                            values={values}
                        />
                    </>
                )
            }
            else if(this.state.step === 3){
                return(
                    <>
                        <CurrentAddress 
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            inputChange={this.inputChange}
                            values={values}
                        />
                    </>
                )
            }
            else if(this.state.step === 4){
                return(
                    <>
                        <PermanentAddress 
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            inputChange={this.inputChange}
                            values={values}
                        />
                    </>
                )
            }
            else if(this.state.step === 5){
                return(
                    <>
                        <Contact 
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            inputChange={this.inputChange}
                            values={values}
                        />
                    </>
                )
            }
        } else {
            return(
            <div className="row">
                <div id="college" onClick={this.chooseCollege} className="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay="200">
                    <div className=" box">
                        <div className="icon" style={{background: '#e1eeff'}}><i className="" style={{color: '#2282ff'}}><img src={require("assets/img/college.png")} alt="" style={{height: '65px', width: '65px'}} /></i></div>
                        <h4 className="title"><a href={'/college'}>College</a></h4>
                    </div>
                </div>

                <div id="senior" className="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay="300">
                    <div className="box">
                        <div className="icon" style={{background: '#ecebff'}}><i className="" style={{color: '#8660fe'}}><img src={require("assets/img/senior.png")} alt="" style={{height: '65px', width: '65px'}} /></i></div>
                        <h4 className="title"><a href={'#senior'}>Senior High</a></h4>
                        
                    </div>
                </div>
                <div id="junior" className="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay="300">
                    <div className="box">
                        <div className="icon" style={{background: '#ecebff'}}><i className="" style={{color: '#8660fe'}}><img src={require("assets/img/junior.png")} alt="" style={{height: '65px', width: '65px'}} /></i></div>
                        <h4 className="title"><a href={'#junior'}>Junior High</a></h4>
                        
                    </div>
                </div>
                <div id="elementary" className="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay="300">
                    <div className="box">
                        <div className="icon" style={{background: '#ecebff'}}><i className="i\" style={{color: '#8660fe'}}><img src={require("assets/img/elementary.png")} alt="" style={{height: '65px', width: '65px'}} /></i></div>
                        <h4 className="title"><a href={'#elementary'}>Elementary</a></h4>
                    </div>
                </div>
            </div>
            )
        }

    }
}
export default GradeLevel;