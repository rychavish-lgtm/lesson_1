 import { useState } from "react";
 export const Form = ({setAb,Item,setItem}) => {  
const llist=(Item)=>{
const currentList = JSON.parse(localStorage.getItem('list')) || [];
       currentList.push(Item);
        localStorage.setItem('list', JSON.stringify(currentList));

 const currentCounter = Number(localStorage.getItem('counter')) || 0;
        localStorage.setItem('counter', currentCounter + 1);
console.log(currentList)    
}
    return <>
        <label htmlFor="T">שם</label><br></br> 
        <input onChange={(e) => setItem({ ...Item, name: e.target.value })}>           
       </input>
        <br></br><br></br>

        <label htmlFor="TC">צבע אותיות:</label><br></br>
        <input id="TC" type="color"
            onChange={(e) => setItem({ ...Item, textColor: e.target.value })}>
        </input><br></br><br></br>
        <label htmlFor="BC">צבע מסגרת:</label><br></br>
        <input id="BC" type="color"
            onChange={(e) => setItem({ ...Item, borderColor: e.target.value })}>
        
        </input><br></br><br></br>
  <button onClick={() => {
    llist(Item);
    setAb(3);
    
}}>
    </button>
  
    </>
}
  