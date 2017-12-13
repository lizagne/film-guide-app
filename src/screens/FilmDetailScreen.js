//screens denote containers to hold the components

import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// const countImage = require('./count.jpg');

export default class FilmDetailScreen extends Component {

		static navigationOptions = ({ navigation }) => {
			const name = navigation.state.params.name;
				return {
					title: name
				};
		 }; 

		render() {

			const description = this.props.navigation.state.params.description;	
			return (
				<View style={ styles.container }>
					<Image />
					<Text>{ description }</Text>
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
