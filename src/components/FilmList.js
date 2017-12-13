import React from 'react';
import { FlatList, Text } from 'react-native';

// If you need state in a component it has to be a class, also:
// life cycle methods are ComponentDidMount etc - life cycle method, 

// But this one is going to use a stateless functional component, because it doesn't need to get any state, this is a presentation component

//create a simple function //item refers to one object in the array made in films.json
const renderFilmItem = ({ item }) => {
	return (
		<Text>{ item.name }</Text>
	);
};


const FilmList = ({ films }) => {

//FlatList always accepts 2 props, data and renderItem
	return(
	<FlatList 
		data={ films }
		renderItem={ renderFilmItem }/> //this depends on how many things you have 
)};



export default FilmList;