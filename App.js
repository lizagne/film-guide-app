import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux'; //call the create store etc from redux
import filmsReducer from './src/store/films';
import thunk from 'redux-thunk'; //this is known as middleware - middleware sits inbetween the dispatch and the reducers when an action has been dispatched and when a reducer has received a function middleware operates

import Navigator from './src/navigator';

//this is to combine all the reducers to then just pass one into the createStore below..currently it's just got the one reducer that we've made on the previous page. //this is good practice to get into the habit of using it.
const reducers = combineReducers({
	films: filmsReducer,
})

const middleware = applyMiddleware(thunk);

const store = createStore(reducers, middleware); //passing in the reducer as an argument

const App = () => 

	<Provider store={ store }>
		<Navigator />
	</Provider>	

export default App;
