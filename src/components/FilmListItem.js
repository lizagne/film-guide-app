//look up code snippets and how to set them up, saves a lot of time

//this is a custom component 


import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import moment from 'moment';



const FilmListItem = ({ item }) => {

	// const dateAndTime = { item

	const filmRating = item.tmdbRating;

	const nextShowTime = item.showtimes[0];

	const newDate = moment(item.showtimes[0].startsAtDate, "YYYY-MM-DD").calendar();

	return(
		<View style={ styles.container } >

			<View style={ styles.filmInfo }>
				<Text style={ styles.text }>{ item.name }</Text> 
				<Text style={ styles.showtime }>{ newDate 
					+ ' at ' 
					+ nextShowTime.startsAtTime + ' on ' 
					+ nextShowTime.channel }</Text>
			</View>

			{ filmRating > 0 ? (
				<View style={ styles.ratingBox }>
					<Text style={ styles.rating }>{ filmRating }%</Text>
				</View>
			) : null }

		</View>	
	);
};

export default FilmListItem;


const styles = StyleSheet.create({

	container: {
		padding: 12,
		flexDirection: 'row',
		borderBottomWidth: 1,
		borderBottomColor: '#999',
		alignItems: 'center'
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
  	}
  
});
