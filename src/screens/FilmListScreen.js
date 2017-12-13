//screens denote containers to hold the components...these are the parents, this is not the presentation, this is the data and state place! These are needed for data logic/business logic and the components are used for presentation.

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
    navigateToDetailScreen() {
      this.props.navigation.navigate
      ('Detail'); 
    }
 
  render() {
    return (
      <View style={ styles.container }>

        <Text>This is going to be a film guide app</Text>
        
        <FilmList films={ films } />

      </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});





