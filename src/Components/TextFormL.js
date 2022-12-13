import React,{useState} from 'react'

export default function TextFormL() {

    const onClick = ()=>{

        console.log("onclickedpush")
        let newText = Text.toLowerCase();
        setText(newText)
    }
    const onChange = (event)=>{
         setText(event.target.value)
    }
   const [Text , setText ]= useState("enter text here")

  return (
    
    <div className="mb-3">
        <h1>Enter the Text for Lowecase</h1>
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <textarea className="form-control" value={Text} onChange={onChange} id="exampleFormControlTextarea1" rows="8"></textarea>
  <button className="btn btn-primary" onClick={onClick}>Enter here</button>
</div>
  )
}
