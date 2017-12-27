import React from 'react';
import { View, StyleSheet } from 'react-native';

const FilmListSeparator = () => {
	
	return(
		<View style={ styles.container }></View>
)};


export default FilmListSeparator;

const styles = StyleSheet.create({

	container: {
		borderBottomWidth: 1,
		borderBottomColor: '#999',
		marginLeft: 12,
		marginRight: 12
	}	
});