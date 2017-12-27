//screens denote containers to hold the components,

//logic, navigation, delegating presentation 

import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import FilmDetail from '../components/FilmDetail';

// const countImage = require('./count.jpg');

export default class FilmDetailScreen extends Component {

		static navigationOptions = ({ navigation }) => {
			const name = navigation.state.params.name;
				return {
					title: name
				};
		 }; 

		render() {
			const film = this.props.navigation.state.params;
			// const description = this.props.navigation.state.params.description;	

			//prop name needs to be the same as what you set up in the 
			return (
				<View style={ styles.container }>
					<FilmDetail 
						item={ film }/> 
				</View>	
			);
		}
	}

//this is how to create a stylesheet for React Native
const styles = StyleSheet.create({

	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
})
