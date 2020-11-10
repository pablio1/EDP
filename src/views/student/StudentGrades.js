import React,{Component} from 'react';
import StudentNavbar from 'components/StudentNavbar';
import 'assets/css/style.css';
import Footer from 'components/Footer';

export class StudentGrades extends Component {

    render(){
        return (
            <>
            <StudentNavbar />

            <main id="main">
                <section id="breadcrumbs" class="breadcrumbs">
                    <div class="container">
                        <ol>
                            <li><a href="index.html">Home</a></li>
                            <li>Grade Evaluation</li>
                        </ol>
                        <h2>Grade Evaluation</h2>
                    </div>
                </section>
                <section id="team" className="team">
                    <div class="container">
                        <div id="accordion">
                            <div class="card">
                                <div class="card-header" id="headingOne"  data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <h5 class="mb-0" >
                                        1st Sem S.Y. 2020-2021 | BSIT - 4 
                                    </h5>
                                </div>
                                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                    <div class="card-body">
                                        <div class="table-responsive-sm">
                                            <table class="table table-bordered ">
                                                <thead class="thead-dark">
                                                    <tr>
                                                        <th >Subject</th>
                                                        <th colspan="8" >Description</th>
                                                        <th>Units</th>
                                                        <th>Final Grade</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <th scope="row">SOCIO 1</th>
                                                    <td colspan="8">SOCIETY AND CULTURE</td>
                                                    <td>3</td>
                                                    <td>1.7</td>
                                                </tr> 
                                                <tr>
                                                    <th scope="row">AIS32</th>
                                                    <td colspan="8">ACCOUNTING INFORMATION SYSTEMS</td>
                                                    <td>3</td>
                                                    <td>1.7</td>
                                                </tr>  
                                                <tr>
                                                    <th scope="row">AIS32</th>
                                                    <td colspan="8">ACCOUNTING INFORMATION SYSTEMS</td>
                                                    <td>3</td>
                                                    <td>1.7</td>
                                                </tr>    
                                                <tr>
                                                    <th scope="row">ITELEC 32</th>
                                                    <td colspan="8">IT ELECTIVE 2</td>
                                                    <td>3</td>
                                                    <td>1.7</td>
                                                </tr>  
                                                <tr>
                                                    <th scope="row">ITELEC 32 L</th>
                                                    <td colspan="8">IT ELECTIVE 2</td>
                                                    <td>3</td>
                                                    <td>1.7</td>
                                                </tr>  
                                                <tr >
                                                    <th className="table-info" colspan="12" >GPA</th>
                                                </tr> 
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="headingTwo" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <h5 class="mb-0">
                                    2st Sem S.Y. 2020-2021 | BSIT - 4 
                                </h5>
                            </div>
                            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
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

export default StudentGrades
