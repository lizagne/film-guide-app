//screens denote containers to hold the components...this is the parent, this is not the presentation, this is the data and state place! These are needed for data logic/business logic and the components are used for presentation.

//fetching data, logic, changing screens

import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, FlatList } from 'react-native';
import FilmList from '../components/FilmList';
import films from '../data/films.json'; 

export default class FilmListScreen extends React.Component {
    static navigationOptions = { //this is the header bar
      title: 'Films on Freeview'
    };

    constructor() {
      super();

      this.navigateToDetailScreen = this.navigateToDetailScreen.bind(this); //binding 'this' method to the class
    }

    //add the navigate method
    navigateToDetailScreen(film) {
      this.props.navigation.navigate
      ('Detail', film);
    }
 
  render() {
    return (
      <View style={ styles.container }>
        <FilmList films={ films } onFilmSelected={ this.navigateToDetailScreen }/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  
});





