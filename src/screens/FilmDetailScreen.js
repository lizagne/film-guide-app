//screens denote containers to hold the components

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class FilmDetailScreen extends
	Component {
		render() {
			return (

				<View style={ styles.container }>
					<Text>Welcome to the details screen</Text>
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
