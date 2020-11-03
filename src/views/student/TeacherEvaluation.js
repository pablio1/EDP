import React,{Component} from 'react';
import StudentNavbar from 'components/StudentNavbar';
import 'assets/css/style.css';
import Footer from 'components/Footer';

export class TeacherEvaluation extends Component {
    render(){  
        return (
            <>
                <StudentNavbar />

                <main id="main">
                    <section id="breadcrumbs" className="breadcrumbs">
                        <div className="container">
                            <ol>
                                <li><a href="index.html">Home</a></li>
                                <li>Teacher's Evaluation</li>
                            </ol>
                            <h2>Teacher's Evaluation</h2>
                        </div>
                    </section>
                    <section id="team" className="team">
                        <div className="container">
                            <div id="accordion">
                                <div className="card">
                                    <div className="card-header" id="headingOne"  data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <h5 className="mb-0" >
                                            Janette Tanquis | UCLM-FREEL 41-01291
                                        </h5>
                                    </div>

                                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                        <div className="card-body">
                                            <div className="table-responsive-sm">
                                                <table className="table">
                                                    <thead className="thead-dark">
                                                        <tr>
                                                            <th colSpan="9">
                                                                <label>Evaluation Form</label><br></br>
                                                                <label>Please indicate your level of agreement with the statements listed below in #1‐11.</label>
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th colSpan="4"></th>
                                                            <td>Strongly Agree</td>
                                                            <td>Agree</td>
                                                            <td>Neutral</td>
                                                            <td>Disagree</td>
                                                            <td>Strongly Disagree</td>
                                                        </tr>
                                                        <tr>
                                                            <th colSpan="4">1. The objectives of the training were clearly defined.</th>
                                                            <td><input type="radio" id="other" name="gender" value="other"/></td>
                                                            <td><input type="radio" id="other" name="gender" value="other"/></td>
                                                            <td><input type="radio" id="other" name="gender" value="other"/></td>
                                                            <td><input type="radio" id="other" name="gender" value="other"/></td>
                                                            <td><input type="radio" id="other" name="gender" value="other"/></td>
                                                        </tr>
                                                        <tr>
                                                            <th colSpan="4">2. Participation and interaction were encouraged.</th>
                                                            <td><input type="radio" id="other" name="gender" value="other"/></td>
                                                            <td><input type="radio" id="other" name="gender" value="other"/></td>
                                                            <td><input type="radio" id="other" name="gender" value="other"/></td>
                                                            <td><input type="radio" id="other" name="gender" value="other"/></td>
                                                            <td><input type="radio" id="other" name="gender" value="other"/></td>
                                                        </tr>
                                                        <tr>
                                                            <th colSpan="4">3. The topics covered were relevant to me .</th>
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
