import React from 'react';

export default function Card(props) {
  // acá va tu código
  let {img,max,min,name,onClose} = props // haciendo esto, nos evitamos andar poniendo en cada uno ---  props.  ---

  return (
    <div>
      <button onClick={onClose}>X</button>
      <h1>{props.name}</h1>
      <div>
        <p>MIN</p>
        <p>{min}</p>
      </div>
      <div>
        <p>MAX</p>
        <p>{max}</p>
      </div>
      <img 
          src={`http://openweathermap.org/img/wn/${img}@2x.png`} 
          alt = "Img not found"></img>
    </div>)
};  
 /* con class component seria asi:
  class Card extends React.component {
    render(){
      return(
        <div>
      <button onClick={this.props.onClose}>X</button>
      <h1>{this.props.name}</h1>
      <div>
        <p>MIN</p>
        <p>{this.props.min}</p>
      </div>
      <div>
        <p>MAX</p>
        <p>{this.props.max}</p>
      </div>
      <img src={`http://openweathermap.org/img/wn/${this.props.img}@2x.png`} alt = "Img not found"></img>
    </div>)
      )
    }
  }
 */