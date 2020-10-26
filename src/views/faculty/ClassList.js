import React,{Component} from 'react';
import 'assets/css/style.css';
import Footer from 'components/Footer';
import TeacherNavbar from 'components/TeacherNavbar';


export class ClassList extends Component {


    



    render(){

        
        return (
            <>
            <TeacherNavbar />

            <main id="main">
                <section id="breadcrumbs" class="breadcrumbs">
                    <div class="container">
                        <ol>
                        <li><a href="index.html">Home</a></li>
                        </ol>
                        <h2>Online Faculty Portal</h2>
                    </div>
                </section>
                <section class="portfolio-details">
      <div class="container">

        

        <div class="portfolio-description">
          <h2>1st Semester S.Y. 2020-2021</h2>
            <label>Class List for Subject: BSIT-4OA : 01298 ITELEC 42 Units 2</label>
          <div class="table-responsive-sm">
                        <table class="table table-bordered table-sm">
                            <thead  class="thead-dark">
                                <tr>
                                <th ></th>
                                <th >ID Number</th>
                                <th >Last Name</th>
                                <th >First Name</th>
                                <th >Course/Year</th>
                                <th >Mobile Number</th>
                                <th >Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">1</th>
                                <td>19101666</td>
                                <td>Mandal</td>
                                <td>Jaman</td>
                                <td>BSIT-4</td>
                                <td>12312412515</td>
                                <td>jamqwe20@gmail.com</td> 
                                
                                </tr> 
                                <tr>
                                <th scope="row">2</th>
                                <td>19101666</td>
                                <td>Alegres</td>
                                <td>Glendyl</td>
                                <td>BSIT-4</td>
                                <td>12312412515</td>
                                <td>jamqwe20@gmail.com</td> 
                                
                                </tr> 
                                <tr>
                                <th scope="row">3</th>
                                <td>19101666</td>
                                <td>ARROGANTE</td>
                                <td>LOUISE DAVID</td>
                                <td>BSIT-4</td>
                                <td>12312412515</td>
                                <td>jamqwe20@gmail.com</td> 
                                
                                </tr>
                                <tr>
                                <th scope="row">4</th>
                                <td>19101666</td>
                                <td>AVELLANA</td>
                                <td>KEMPY</td>
                                <td>BSIT-4</td>
                                <td>12312412515</td>
                                <td>jamqwe20@gmail.com</td> 
                                
                                </tr>
                                <tr>
                                <th scope="row">5</th>
                                <td>19101666</td>
                                <td>BAAY</td>
                                <td>SHANIA</td>
                                <td>BSIT-4</td>
                                <td>12312412515</td>
                                <td>jamqwe20@gmail.com</td> 
                                
                                </tr>
                                <tr>
                                <th scope="row">6</th>
                                <td>19101666</td>
                                <td>BARGAMENTO</td>
                                <td>GIAN CARLO</td>
                                <td>BSIT-4</td>
                                <td>12312412515</td>
                                <td>jamqwe20@gmail.com</td> 
                                
                                </tr>
                                <tr>
                                <th scope="row">7</th>
                                <td>19101666</td>
                                <td>BILAGANTOL</td>
                                <td>JAY</td>
                                <td>BSIT-4</td>
                                <td>12312412515</td>
                                <td>jamqwe20@gmail.com</td> 
                                
                                </tr>
                                <tr>
                                <th scope="row">8</th>
                                <td>19101666</td>
                                <td>CABRERA IV</td>
                                <td>VICENTE</td>
                                <td>BSIT-4</td>
                                <td>12312412515</td>
                                <td>jamqwe20@gmail.com</td> 
                                
                                </tr>
                                <tr>
                                <th scope="row">9</th>
                                <td>19101666</td>
                                <td>CABUAL</td>
                                <td>MARK KEVIN</td>
                                <td>BSIT-4</td>
                                <td>12312412515</td>
                                <td>jamqwe20@gmail.com</td> 
                                
                                </tr>
                                <tr>
                                <th scope="row">10</th>
                                <td>19101666</td>
                                <td>CAINONG</td>
                                <td>ANNA STEPHANIE</td>
                                <td>BSIT-4</td>
                                <td>12312412515</td>
                                <td>jamqwe20@gmail.com</td> 
                                
                                </tr>
                                
                                
                                  
                                   
                                
                                
                            </tbody>
                            </table>
                            <button type="button" class="btn btn-primary pull-right " data-toggle="button" aria-pressed="false" autocomplete="off">
                            Download PDF
                            </button>
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

export default ClassList
