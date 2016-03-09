import React from 'react'
import Main from './main.jsx'
import { Provider, connect } from 'react-redux'
import { render } from 'react-dom';
// All store creation specific code is located in ./create-store.js
import createStore from '../redux/create-store';


function mapStateToProps(state){
  console.log('connecting state to props',state)
  return {
    players: state.players,
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

const store = createStore();

export default function(){
  return render(
    //store is passed to the root el, and provider/connect will give access to other els
    <Application store={store} />,
    document.getElementById('react-app')
  );
}




