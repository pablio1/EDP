import React,{Component} from 'react';
import Topbar from 'components/Topbar';
import StudentNavbar from 'components/StudentNavbar';
import 'assets/css/style.css';
import Assessment from 'components/Assessment';
import Footer from 'components/Footer';

export class TeacherEvaluation extends Component {


    



    render(){

        
        return (
            <>
            <StudentNavbar />

            <main id="main">
                <section id="breadcrumbs" class="breadcrumbs">
                    <div class="container">
                        <ol>
                        <li><a href="index.html">Home</a></li>
                        </ol>
                        <h2>Online Student Portal</h2>
                    </div>
                </section>
                <section id="team" className="team">
                <div class="container">
                <div class="section-title">
                <h2>Teacher's Evaluation</h2>
                </div>
                    <div id="accordion">
                    <div class="card">
                        <div class="card-header" id="headingOne">
                        <h5 class="mb-0" >
                            <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Janette Tanquis | UCLM-FREEL 41-01291
                            </button>
                        </h5>
                        </div>

                        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                        <div class="card-body">
                            
                        <div class="table-responsive-sm">
                        <table class="table">
                                <thead class="thead-dark">
                                    <tr>
                                    <th colspan="9">
                                        <label>Evaluation Form</label><br></br>
                                        <label>Please indicate your level of agreement with the statements listed below in #1‐11.</label>
                                        </th>
                                    
                                    </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th colspan="4"></th>
                                    <td>Strongly Agree</td>
                                    <td>Agree</td>
                                    <td>Neutral</td>
                                    <td>Disagree</td>
                                    <td>Strongly Disagree</td>
                                    
                                    
                                    </tr>
                                    <tr>
                                    <th colspan="4">1. The objectives of the training were clearly defined.</th>
                                    <td><input type="radio" id="other" name="gender" value="other"/></td>
                                    <td><input type="radio" id="other" name="gender" value="other"/></td>
                                    <td><input type="radio" id="other" name="gender" value="other"/></td>
                                    <td><input type="radio" id="other" name="gender" value="other"/></td>
                                    <td><input type="radio" id="other" name="gender" value="other"/></td>
                                    
                                    
                                    </tr>
                                    <tr>
                                    <th colspan="4">2. Participation and interaction were encouraged.</th>
                                    <td><input type="radio" id="other" name="gender" value="other"/></td>
                                    <td><input type="radio" id="other" name="gender" value="other"/></td>
                                    <td><input type="radio" id="other" name="gender" value="other"/></td>
                                    <td><input type="radio" id="other" name="gender" value="other"/></td>
                                    <td><input type="radio" id="other" name="gender" value="other"/></td>
                                    
                                    
                                    </tr>
                                    <tr>
                                    <th colspan="4">3. The topics covered were relevant to me .</th>
                                    <td><input type="radio" id="other" name="gender" value="other"/></td>
                                    <td><input type="radio" id="other" name="gender" value="other"/></td>
                                    <td><input type="radio" id="other" name="gender" value="other"/></td>
                                    <td><input type="radio" id="other" name="gender" value="other"/></td>
                                    <td><input type="radio" id="other" name="gender" value="other"/></td>
                                    
                                    
                                    </tr>
                                </tbody>
                                </table>

                        </div>
                            

                                

                      
                        </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingTwo">
                        <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Jesieca Reyes | UCLM-ITELEC 41-14816
                            </button>
                        </h5>
                        </div>
                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                        <div class="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                        </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingThree">
                        <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Miro Aurora | UCLM-PRACT41 L-01281
                            </button>
                        </h5>
                        </div>
                        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                        <div class="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                        </div>
                        </div>
                    </div>
                    </div>
                
                    
                    
                </div>
                

                </section>
            </main>
            <Footer/>
        </>
        )
    }
}

export default TeacherEvaluation
