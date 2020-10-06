import React, {Component} from 'react';
import CollegeSetup from './steps/CollegeSetup';
import SeniorHighSetup from './steps/SeniorHighSetup';
import JuniorHighSetup from './steps/JuniorHighSetup';
import ElementarySetup from './steps/ElementarySetup';


export class GradeLevel extends Component{

    state = {
        gradeLevel: '',
        step: 1,
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
        if (this.state.gradeLevel === 'college') {
            return(
                <></>
            )
        }
       else if(this.state.gradeLevel === 'senior'){
            return(
                <>
                    <SeniorHighSetup />
                </>
            )
        }
        else if(this.state.gradeLevel === 'junior'){
            return(
                <>
                    <JuniorHighSetup />
                </>
            )
        }
        else if(this.state.gradeLevel === 'elementary'){
            return(
                <>
                    <ElementarySetup />
                </>
            )
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
export default GradeLevel;