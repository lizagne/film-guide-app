import React from 'react';
import { FlatList, Text } from 'react-native';
import FilmListItem from './FilmListItem';

// If you need state in a component it has to be a class, also:
// life cycle methods are ComponentDidMount etc - life cycle method, 

// But this one is going to use a stateless functional component, because it doesn't need to get any state, this is a presentation component

//create a simple function //item refers to one object in the array made in films.json
const renderFilmItem = ({ item }) => {
	return (
		<FilmListItem item={ item }/>
	);
};

const extractFilmItemKey = item => { //this is a simple item argument instead of a object that contains item

	return item.id //this will know to use the ID for the key and can identify each object in this way.

};


const FilmList = ({ films }) => {

//FlatList always accepts 2 props, data and renderItem
	return(
	<FlatList 
		data={ films }
		renderItem={ renderFilmItem }
		keyExtractor={ extractFilmItemKey }
	/> //this depends on how many things you have 
)};



export default FilmList;