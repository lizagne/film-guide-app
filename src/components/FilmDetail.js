//presentation page

import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import moment from 'moment';
import FilmListSeparator from './FilmListSeparator';

const FilmDetail = ({ item }) => {

	const filmTitle = item.name; //don't need this as the title comes in on the header anyway
	const filmRating = item.tmdbRating;
	const filmReleaseDate = item.year;
	// const newDate = moment(item.showtimes[0].startsAtDate, "YYYY-MM-DD").calendar();
	const newDate = item.showtimes[0].startsAtDate;
	const image = { uri: 'https://image.tmdb.org/t/p/original/' + item.tmdbImageId + '.jpg'}

	return(
		<View style={ styles.container }>
			
			<ScrollView>
				{ item.tmdbImageId ?(
					<Image 
						style={ styles.image }
						source={ image } /> ) : null
				}
			
				<View style={ styles.padding }>

					<View style={ styles.header }>

						<View style={ styles.info }>

							{ item.year !== null ? ( 
								<Text style={ styles.headerText }>{ 'Released in ' + filmReleaseDate }</Text>
								) : <Text style={ styles.headerText }>{ 'Released in ?'}</Text>}

							<View>
								<Text style={ styles.showTimeText }>{ 'Showtimes:' }</Text>
								{ item.showtimes.map((item, index) => {
									return <Text key={ index }>{ newDate + ' at ' + item.startsAtTime }</Text>
								})}
							</View>

						</View>	
						
						<View style={ styles.rating }>	
							<View >	
								{ filmRating ? ( <Text style={ styles.ratingText }>{ 'Rating: ' + filmRating }%</Text>) : null } 
							</View>
						</View>	
						
					</View>
					
					<FilmListSeparator />

					<View>
						<Text style={ styles.synopsis }>{ item.synopsis }</Text>
					</View>

				</View>
					
			</ScrollView>

		</View>
	)};


export default FilmDetail;

const styles = StyleSheet.create({

	container: {
		flex: 1,
	},

	space: {
		marginTop: 20,
		marginBottom: 20
	},

	image: {
		aspectRatio: 0.85, //this is going to sort out the height and the width together
	},

	synopsis: {
		lineHeight: 18,
		marginTop: 10
	},

	padding:{
		padding: 20
	},

	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 20,
	},

	headerText: {
		fontSize: 14,
	},

	showTimeText: {
		fontSize: 14,
		fontWeight: 'bold',
		marginTop: 10
	},

	ratingText: {
		fontSize: 14,
		fontWeight: 'bold'
	}

});	
