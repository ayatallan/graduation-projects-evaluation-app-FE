import { Link } from 'react-router-dom';
import Buttons from '../../components/common/buttons/buttons';
import { useState } from 'react';
import './Major.css';

const MajorPage = (props: any) => {
  const [checked, setChecked] = useState<any>([]);
  const checkList = ["Information Technolgy", "Computer science ", "Comuter Engneering "];
  const HandleCheck = (e :any)=>{
    let UpDatedList = [...checked];
    if(e.target.checked){
      UpDatedList =[...checked, e.target.value];

    }
    else{
      UpDatedList.splice(checked.indexOf(e.target.checked),1)
    }
    setChecked(UpDatedList);
  }
    let isChecked = (item:any) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";
    console.log(checked);
  return (
   <div>
    <div className="container">
        <div className="row"><div className="col-sm-4 col-md-7"> <p>Select Majors that the team members belong to  : </p> </div></div>
        <div className="list-container">{checkList.map((item, index) => (
             <div key={index}>
              
              gggggg
              <input value ={item} type='checkbox' onChange={HandleCheck}/>
              <span className={isChecked(item)}>{item}</span>
            </div>

          ))}
        </div>
      </div>
   </div>
  
  
  )

}
  

export default MajorPage;
