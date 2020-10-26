import React, { Component } from 'react';
import ReactFileReader from 'react-file-reader';

export default class UploadGrade extends Component{
    constructor(props) {
        super(props);      
        this.handleUploadedFiles = this.handleUploadedFiles.bind(this);
    }
 
    /** 
     * Function to upload file
    */
    handleUploadedFiles = files => {
        var reader = new FileReader();
        reader.onload = (e) => {
            //Split csv file data by new line so that we can skip first row which is header
            let jsonData = reader.result.split('\n');    
            let data = [];
            jsonData.forEach((element, index) => {
                if(index) {
                     //Split csv file data by comma so that we will have column data
                    const elementRaw = element.split(',');
                    console.log(element, index);
                    if(element) {
                        let param = {
                            'id' : elementRaw[0],
                            'name' : elementRaw[1],
                            'age' : elementRaw[2],
                            'address' : elementRaw[3]
                        }
                        data.push(param);
                    }
                }
            });
        }
        console.log("TCL: Dashboard -> reader.readyState", reader.readyState)          
        reader.readAsText(files[0]);
    }
    
    render(){       
      return(
          <div>
            <div className="row">Header</div>            
            <div className="row">
                <div className="col-md-12">
                    <h4>Upload File</h4>
                    <div className="m-b-10">Accepted File format: csv</div>
                </div>
                <div className="col-md-12">
                    <p>
                        <ReactFileReader handleUploadedFiles={this.handleUploadedFiles} fileTypes={'.csv'}>
                            <button className='btn btn-primary btn-file'>Upload</button>
                        </ReactFileReader>
                    </p>
                </div>
            </div>
          </div>
      );
   }
}
