import React, { Component } from 'react';
import logo from './logo.svg';




class AddPlate extends Component {
constructor(props)
{
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
}
onSubmit(event){
    event.preventDefault();
   this.props.onAdd(this.plateInput.value,
    this.ownerInput.value);

    this.plateInput.value = "";
    this.ownerInput.value = "";
}

  render() {
  
    return (
   <form onSubmit={this.onSubmit}>
       <h2>Add Plate</h2>
           <input placeholder="Plate" ref={plateInput => 
            this.plateInput=plateInput}/>
           <input placeholder="Owner" ref={ownerInput => 
            this.ownerInput = ownerInput} />
           <button> Add</button>
         <hr/>
            </form>
              
                );
  }
}

export default AddPlate;
