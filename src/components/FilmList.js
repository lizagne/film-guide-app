import React from 'react';
import { FlatList, Text, FilmListSeparator } from 'react-native';
import FilmListItem from './FilmListItem';

// If you need state in a component it has to be a class, also:
// life cycle methods are ComponentDidMount etc - life cycle method, 

// But this one is going to use a stateless functional component, because it doesn't need to get any state, this is a presentation component

const noop = () => null;

//create a simple function //item refers to one object in the array made in films.json

const extractFilmItemKey = item => { //this is a simple item argument instead of a object that contains item
	return item.id //this will know to use the ID for the key and can identify each object in this way.
};


const FilmList = ({ films, onFilmSelected }) => { //onFilmSelected allows us to navigate.

	const renderFilmItem = ({ item }) => {

		const onSelected = () => {
			onFilmSelected(item); 
		}


		return (
			<FilmListItem item={ item } onFilmSelected={ onSelected }/>
		);
	};

//FlatList always accepts 2 props, data and renderItem
	return(
	<FlatList 
		data={ films }
		renderItem={ renderFilmItem }
		keyExtractor={ extractFilmItemKey }
		ItemSeparatorComponent={ FilmListSeparator }
	/> //this depends on how many things you have 
)};



export default FilmList;