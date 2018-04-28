import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AutoPlate from './plate.js';
import AddItem from './addPlate.js';

const plate_numbers = [
  {
    plate: '000-BBB',
    owner: 'John Doe'
  },
  {  
    plate: '111-CCC',
    owner: 'Susan Doe'
}



]



localStorage.setItem('plate_numbers', JSON.stringify(plate_numbers));



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      plate_numbers: JSON.parse(localStorage.getItem('plate_numbers'))
    };
    this.onAdd=this.onAdd.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);

  }

componentWillMount(){
  const plate_number = this.getPlate();

  this.setState({plate_numbers})
}

getPlate(){
  return this.state.plate_numbers;
 
}

onAdd(plate,owner){
  const plate_numbers = this.getPlate();
  
  plate_numbers.push(
    {
      plate,
      owner
    }
  );
  this.setState({plate_numbers})
}

onDelete(plate){
const plate_numbers = this.getPlate();
const filteredPlates = plate_numbers.filter(plate_numbers =>{
  return plate_numbers.plate !== plate;
});
  this.setState({plate_numbers:filteredPlates});
 
}
onEditSubmit(plate,owner,originalPlate){
  let plate_numbers = this.getPlate();
  plate_numbers = plate_numbers.map(plate_numbers=>
  {
    if (plate_numbers.plate === originalPlate ){
      plate_numbers.plate =plate;
      plate_numbers.owner = owner;
    }
    return plate_numbers;
  });
  this.setState({plate_numbers});
}


  render() {
    return (
      <div className="App">
        <h1>CRUD</h1>

        <AddItem 
          onAdd = {this.onAdd}
        />

          {
              this.state.plate_numbers.map(plate_numbers =>{
                return(

                <AutoPlate
                  
                  key={plate_numbers.plate}
                 {...plate_numbers}
                  onDelete={this.onDelete}
                  onEditSubmit={this.onEditSubmit}
                
                />
              
                )



              })



          }


      </div>
    );
  }
}

export default App;
