import React,{Component} from 'react';
import StudentNavbar from 'components/StudentNavbar';
import 'assets/css/style.css';
import Assessment from 'components/Assessment';
import Footer from 'components/Footer';
import Dropzone from 'components/Dropzone';

export class StudyLoad extends Component {
    render(){

        return (
            <>
            <StudentNavbar />
            <main id="main">
                <section id="breadcrumbs" className="breadcrumbs">
                    <div className="container">
                        <ol>
                            <li><a href="index.html">Home</a></li>
                            <li>Study Load</li>
                        </ol>
                        <h2>Study Load</h2>
                    </div>
                </section>
                <section id="portfolio-details" className="portfolio-details">
                    <div className="container" data-aos="fade-up">
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">
                                    <table className="table table-striped">
                                        <thead className="bg-dark text-white">
                                            <tr>
                                                <th>EDP Code</th>
                                                <th>Subject Code</th>
                                                <th>Course</th>
                                                <th>Units</th>
                                                <th>Time</th>
                                                <th>Days</th>
                                                <th>Room</th>
                                                <th>Status</th>
                                                <th>Remarks</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>14813</td>
                                                <td><i className="fa fa-info text-info mr-1" title="METHODS OF RESEARCH IN COMPUTING"></i>CAPSTONE41</td>
                                                <td>BSIT-4A</td>
                                                <td>3</td>
                                                <td>8:31-9:31 PM</td>
                                                <td>MWF</td>
                                                <td>FLD</td>
                                                <td>Open</td>
                                            </tr>
                                        </tbody>
                                    </table>
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

export default StudyLoad
