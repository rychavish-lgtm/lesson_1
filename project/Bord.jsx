import { useState } from "react";
import { Form } from "./Form"
export const Bord = ({Item,detail}) => {
    const{textColor,borderColor,name}=Item
    return <>
    <h1>{'לוח תשפ"ז'}</h1>
       <h2>{name}</h2>
    {detail.months.map((x,i) =>
            <div key={i}className="card" style={{color:textColor, borderColor:borderColor}}>
                <h3 >{x.name}</h3>  
                {
                    Array.from({length:x.days[0].dayOfWeek-1},()=>{
      {
         return<div className="c" ></div>}
    })
   }
                {x.days.map((y,j) =>
                    <div  key={j} className={`c ${y.dayOfWeek===7? 'sh': 's'}`} >
                        <p  >{y.name}</p>
                        {y.events.map((z,k) =>
                            <p key={k} className="d">{z.type} {z.text}</p>
                        )}
                    </div>)}
                    {
    Array.from({length:7-x.days[x.days.length-1].dayOfWeek},()=>{
      {
         return<div className="dayEmpty" ></div>
      }
    })
   }
            </div>)
            }         
    </>
}