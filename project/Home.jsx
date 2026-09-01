import { Form } from "./Form"
import { Bord } from "./Bord"
import { useState } from "react";
export const Home = ({User,setUser,detail,setShow,Item,setItem ,stutus,setStutus}) => {  
 
    const [ab, setAb] = useState(1)
  let list = JSON.parse(localStorage.getItem('list'))
  const a=(even)=>{
setUser(list[even]),
console.log(User)
 
 setStutus(false)
   }  

  return <>
   {/* onChange={(e) => setItem({ ...Item, borderColor: e.target.value })}> */}

{ ab===1 ?  <button onClick={(e) => setAb(2)}>ליצירת לוח חדש</button>:ab===2?<Form setAb={setAb} Item={Item} setItem={setItem} ></Form>:<Bord Item={Item} detail={detail}></Bord>}
  
  {/* <button onClick={() => {
    
  return <Form  setShow={setShow}Item={Item}setItem={setItem}></Form>}>

}}>
בחירת לוח שנה לעצב לבד
 </button>  
  
  
 <button onClick={() => {
    llist(Item);
    setShow(false);
    
}}>
    </button> */}

 {stutus?
  <select onChange={(e)=>a(e.target.value)}>
              <option >בחר משתמשים</option>
            {list.map((x, i) => <option key={i} value={i}>{x.name}</option>  
)}
           
        </select>
        :
  <Bord Item={User} detail={detail}></Bord>

  
} 

    </>
}