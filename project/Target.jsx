import { useState } from "react";
export const Target = ({ bordDetails,setbordDetails, types,detail}) => {
    // let arr = JSON.parse(localStorage.getItem('calander'))

      let arr = JSON.parse(localStorage.getItem('calander'))
  console.log(arr.months)
  return <>
    <div>
        <label htmlFor="T">סוג האירוע:</label><br></br>
         
        <select onChange={(e) => setbordDetails({ ...bordDetails, type: e.target.value })}>
              <option value="" >בחר אירוע</option>
            {types.map((x, i) => <option key={i} value={x.name}>{x.text}</option>)}
        </select>
        <br></br><br></br>
        <label htmlFor="AD">במידה ובחרת אחר  השלימי כאן איזה אירוע</label><br></br>
        <input id="AD" placeholder="סוג האירוע"
            onChange={(e) => setbordDetails({ ...bordDetails, anther: e.target.value })}>
        </input><br></br><br></br>
        <label htmlFor="ST">טקסט נוסף:</label><br></br>
        <input id="ST" placeholder="הכנס טקסט נוסף - לא חובה"
            onChange={(e) => setbordDetails({...bordDetails, text: e.target.value })}>
        </input><br></br><br></br>
     <label>בחר תאריך:</label>
        <select onChange={e => setbordDetails({...bordDetails, month: e.target.value })}>
          <option value="" >בחר חודש</option>
            {detail.months.map((c, i) =>  <option  key={i}  value={i}   >{c.name} </option >)}
        </select>  
    {/* <select onChange={e => setbordDetails({ ...bordDetails, day: e.target.value
     })}>
     <option value="" >בחר יום</option>
    {month !== undefined && month !== "" && detail.months[month].days.map((y, m) => 
        <option key={m} value={m}>{y.name}</option>
    )}
   

</select> */}
</div>
  
  <button>הוספת האירוע</button>  
   {/* onClick={more(bordDetails)} */}
 
   
   </>
}