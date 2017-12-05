import React from 'react';


export default class AddFishForm extends React.Component {

    createFish(e){
        e.preventDefault()
        const fish = {
            name: this.name.value,
            price: this.price.value,
            status: this.status.value,
            desc: this.desc.value,
            image: this.image.value
        }
        console.log(fish)
        this.props.addFish(fish)
        this.fishInput.reset()
    }
  
    render() {
        return (
            <form ref={input => this.fishInput = input}className="fish-edit" onSubmit={e => this.createFish(e)}>
                <input ref = {input => this.name = input} type="text" placeholder="Fish Name"/>
                <input ref = {input => this.price = input} type="text" placeholder="Fish Price"/>
                <select ref={input => this.status = input}>
                    <option value="available">fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                
                <textarea ref = {input => this.desc = input} type="text" placeholder="Fish Desc"/>
                <input ref = {input => this.image = input} type="text" placeholder="Fish Image"/>
                <button type="submit">+ Add Item</button>
            </form>
        );
    }
}