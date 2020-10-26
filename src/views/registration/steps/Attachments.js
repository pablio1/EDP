import React, { useState } from "react";
 
function Attachments() {
  const [inputList, setInputList] = useState([{ certificate: "", attachment: "" }]);
 
  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };
 
  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };
 
  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { certificate: "", attachment: "" }]);
  };
 
  return (
    <div className="">
        <div className="row">
            <div className="col-md-6 mb-3">
                <h4>Certificates</h4>
                <hr></hr>
            </div>
        </div>
        
        {inputList.map((x, i) => {
            return (
                <>
                
                <div className="row mb-2">
                    <div className="col-md-4">
                        <select name="firstName" className="form-control"  value={x.firstName} onChange={e => handleInputChange(e, i)} >
                            <option value="I.D.">I.D.</option>
                            <option value="Certificate of Good Moral Character">Certificate of Good Moral Character</option>
                            <option value="NSA / PSA Birth Certificat">NSA / PSA Birth Certificate</option>
                            <option value="Form 138 / Report Card">Form 138 / Report Card</option>
                        </select>
                    </div>
                    <div className="cold-md-3">
                        <div class="custom-file">
                            <input type="file" class="custom-file-input"/>
                            <label class="custom-file-label">Choose file</label>
                        </div>
                    </div>    
                    <div className="col-md-1">
                        {
                            inputList.length !== 1 && 
                                <button className="btn-danger" onClick={() => handleRemoveClick(i)}>Remove</button>
                        }
                    </div>  
                </div>
                <div className="btn-box">
                    {
                        inputList.length - 1 === i && 
                            <button className="btn-primary" onClick={handleAddClick}>Add Certificate</button>
                    }
                </div>
                </>
            );
        })}
    </div>
  );
}
 
export default Attachments;