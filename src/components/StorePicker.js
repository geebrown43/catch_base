import React from 'react'



export default class StorePicker extends React.Component {

    gotoStore(e){
        e.preventDefault()
        console.log(this.storeInput.value)
        console.log(this.storeLocation.value)
    }
    render(){
        return (
           <form  className="store-selector" onSubmit = { e => this.gotoStore(e)}>
               { /* This is how to right a comment in JSX*/}
               <h2>Please Enter a Store</h2>
               <input type="text" required placeholder="Store Name" ref = {input => this.storeInput = input}/>
               <input type="text" placeholder = 'Location' ref={input => this.storeLocation = input}/>
               <button type="submit">Visit Store</button>
           </form>
        )
    }
}