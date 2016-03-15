import React from 'react';
import Main from './main.jsx';
import { Provider, connect } from 'react-redux';
import { render } from 'react-dom';
// All store creation specific code is located in ./create-store.js
import createStore from '../redux/create-store';


function mapStateToProps(state){
  console.log('connecting state to props',state);
  return {
    players: state.players,
    places: state.places,
    allData: state
  };
}

const ConnectedMain = connect(mapStateToProps)(Main);

class Application extends React.Component {
  render () {
    return (
      // As explained above, the Provider must wrap your application's Root component. This way,
      // this component and all of its children (even deeply nested ones) will have access to your
      // Redux store. Of course, to allow Provider to do that, you must give it the store
      // you built previously (via a "store" props).
      <Provider store={ this.props.store }>
        <ConnectedMain />
      </Provider>
    )
  }
}
//get cities and geo points?? http://gael-varoquaux.info/blog/wp-content/uploads/2008/12/cities.txt


const initData = {
  players: [{
    name: 'ME',
    loc: ['Istanbul', 'Istanbul', 0],
    movesRemain: 3,
    messages: []
  }],
  places: {
    Shanghai: {
      name: 'Shanghai',
      cnxns:{Mumbai: 4, Honolulu: 6},
      gps:[31.23, 121.47],
      image: 'https://www.wyomingtourism.org/industry/ai/b/7684-28734.jpg',
      details: 'stuff',
      challenges: 'lalala, yo'
    },
    Mumbai:{
      name: 'Mumbai',
      cnxns: {Shanghai: 4},
      gps: [18.96, 72.82],
      image: 'https://www.wyomingtourism.org/industry/ai/b/7684-28734.jpg',
      details: 'stuff',
      challenges: 'lalala, yo'
    },
    BuenosAires: {
      name: 'Buenos Aires',
      cnxns: {Istanbul: 8},
      gps: [-34.61, -58.37],
      image: 'https://www.wyomingtourism.org/industry/ai/b/7684-28734.jpg',
      details: 'stuff',
      challenges: 'lalala, yo'
    }, 
    Istanbul:{
      name: 'Istanbul',
      cnxns: {Mumbai: 3, Moscow: 2, BuenosAires: 8},
      gps: [41.1, 29],
      image: 'https://www.wyomingtourism.org/industry/ai/b/7684-28734.jpg',
      details: 'stuff',
      challenges: 'lalala, yo'
    },  
    Moscow:  {
      name:'Moscow',
      cnxns: {Istanbul: 2},
      gps: [55.75, 37.62],
      image: 'https://www.wyomingtourism.org/industry/ai/b/7684-28734.jpg',
      details: 'stuff',
      challenges: 'lalala, yo'
    },
    Honolulu:  {
      name:'Moscow',
      cnxns: {Shanghai: 6},
      gps: [21.31, 157.8],
      image: 'https://www.wyomingtourism.org/industry/ai/b/7684-28734.jpg',
      details: 'stuff',
      challenges: 'lalala, yo'
    },
    SanFrancisco:  {
      name:'San Francisco',
      cnxns: {BuenosAires: 5},
      gps: [37.78, -122.42],
      image: 'https://www.wyomingtourism.org/industry/ai/b/7684-28734.jpg',
      details: 'stuff',
      challenges: 'lalala, yo'
    }
  }
}

const store = createStore(initData);

export default function(){
  return render(
    //store is passed to the root el, and provider/connect will give access to other els
    <Application store={store} />,
    document.getElementById('react-app')
  );
}




