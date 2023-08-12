import React from 'react'
import {list} from "../Helpers/list";
import Aitem from './Aitem';
import "./attendence.css";
import att from "../Assets/att.jpg";

const Attendence = () => {
  return (
    <div className="attendence" style={{ backgroundImage: `url(${att})`}}>
    <h1 className="attendenceTitle">Mark Attendence:</h1>
<div className='inputs'>
<input type="text" placeholder='Enter Date' />
<input type="time" placeholder='Enter Date' />
</div>

    <div className="list">
      {list.map((item, key) => {
        return (
          <Aitem
            key={key}
            name={item.name}
            eno={item.eno}
          />
        );
      })}
    </div>
  </div>
  )
}

export default Attendence