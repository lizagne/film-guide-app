//look up code snippets and how to set them up, saves a lot of time

//this is a custom component 

//put debugger anywhere in the code and in Google dev tools it'll stop in that place - handy!


import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight, Platform } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import moment from 'moment';

const isIOS = (Platform.OS === 'ios');

const FilmListItem = ({ item, onFilmSelected }) => {
	// const dateAndTime = { item
	const filmRating = item.tmdbRating; //setting a constant for the rating
	const nextShowTime = item.showtimes[0]; //setting a constant for the showTime
	const newDate = moment(item.showtimes[0].startsAtDate, "YYYY-MM-DD").calendar();

	return(
		<TouchableHighlight onPress={ onFilmSelected } underlayColor="#ddd" >
			<View style={ styles.container } >
				<View style={ styles.filmInfo }>
					<Text style={ styles.text } numberOfLines={ 1 } ellipsizeMode={ 'middle' }>{ item.name }</Text> 
					<Text style={ styles.showtime } numberOfLines={ 1 }>{ newDate 
						+ ' at ' 
						+ nextShowTime.startsAtTime + ' on ' 
						+ nextShowTime.channel }</Text>
				</View>

				{ filmRating > 0 ? (
					<View style={ styles.ratingBox }>
						<Text style={ styles.rating }>{ filmRating }%</Text>
					</View>
				) : null }

				{ isIOS ? ( //this is adding in the javascript so we can use a ternary statement to ask whether it's ios.
				<Text style={ styles.chevron }>
				<Icon name={ 'ios-arrow-forward' } /></Text>
				 ) : null }

			</View>

		</TouchableHighlight>
	);
};

export default FilmListItem;


const styles = StyleSheet.create({

	container: {
		padding: 12,
		flexDirection: 'row',
		alignItems: 'center',
		// borderBottomWidth: 1,
		// borderBottomColor: '#999',
	},

  	text: {
		fontWeight: 'bold',
		fontSize: 16,
  	},

  	showtime: {
  		color: '#666',
  		paddingTop: 3,
  		fontSize: 12
  	},

  	filmInfo: {
  		flex: 1,

  	},

  	ratingBox: {
  		width: 40,
  		marginLeft: 5,

  	},

  	rating: {
  		fontWeight: 'bold',
  		fontSize: 16,
  	},

  	chevron: {
  		color: '#999',
  		marginLeft: 12,
  		fontSize: 30,
  	}
  


});
