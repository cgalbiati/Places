import React from 'react';
import * as actionCreators from '../redux/actions';

//shows info
export const CardFront = React.createClass({
  render: function(){

    return (
      <div class='cardBox'>
        <h3>Card</h3>
        <div> text...</div>
      </div>
    )
  }
})

//shows image
export const CardBack = React.createClass({
  render: function(){

    return (
      <div class='cardBox'>
        <h3>CardBack</h3>
        <div>image</div>
      </div>
    )
  }
})


export const CardsBundle = React.createClass({
  render: function(){
    const cards = this.props.cards.map(cardObj=>hi)
    return (
      <div class='card'>
        <h3>hooooooo</h3>
        <div> boo</div>
      </div>
    )
  }
})