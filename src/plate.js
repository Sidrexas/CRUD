import React, { Component } from 'react';
import logo from './logo.svg';




class AutoPlate extends Component {

    constructor(props){
        super(props);
        this.state = {
            isEdit: false
        };




        this.onDelete = this.onDelete.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onEditSubmit = this.onEditSubmit.bind(this);
    }
    onDelete(){
        const{onDelete , plate} = this.props;
        onDelete(plate)
    }

    onEdit(){
        this.setState({isEdit:true});
    }

    
    onEditSubmit(event){
        event.preventDefault();
        this.props.onEditSubmit(this.plateInput.value,
            this.ownerInput.value, this.props.plate);
            this.setState({isEdit:false});
    }

  render() {
    const{plate,owner} =this.props;



    return (
   <div >
       {
           this.state.isEdit
           ?(
<form onSubmit={this.onEditSubmit}>

<input placeholder="Plate" ref={plateInput => 
            this.plateInput=plateInput} defaultValue={plate}/>
           <input placeholder="Owner" ref={ownerInput => 
            this.ownerInput = ownerInput}defaultValue={owner}/>
<button> Save</button>
</form>
           )
            :(
<div>
                <span>{plate}</span>
                {` | `}
               <span>{owner} </span>
                {` | `}
                <button onClick={this.onEdit}>Edit</button>
                {` | `}
               <button onClick={this.onDelete}>Delete</button>
         </div>     
                )
       }


</div>
              
    );        
  }
}

export default AutoPlate;
