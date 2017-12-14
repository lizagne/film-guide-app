//screens denote containers to hold the components...this is the parent, this is not the presentation, this is the data and state place! These are needed for data logic/business logic and the components are used for presentation.

//fetching data, logic, changing screens...this is where you set up the MapStateToProps

//this is the container component

import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, FlatList } from 'react-native';
import FilmList from '../components/FilmList';
import films from '../data/films.json'; //this is the local version of the api, instead we want to fetch from a server
import { connect } from 'react-redux'; //importing the connect function from redux

import { getFilmsSelector, actionCreators } from '../store/films';

//mapStateToProps accepts state as the only argument
const mapStateToProps = (state) => {
  // console.log(state.films.collection.length);
  return {
    films: getFilmsSelector(state) //this is a function which accepts the state above
  };
}

const mapDispatchToProps =  dispatch => {
  return {
    fetchFilms: () => dispatch(actionCreators.fetchFilms()) //this is a prop
  };
}

class FilmListScreen extends React.Component {
    static navigationOptions = { //this is the header bar
      title: 'Films on Freeview'
    };

    constructor() {
      super();

      this.navigateToDetailScreen = this.navigateToDetailScreen.bind(this); //binding 'this' method to the class
    }

    //life cycle method
    componentDidMount() {
      //Dispatch our action
      this.props.fetchFilms();
    }

    //add the navigate method
    navigateToDetailScreen(film) {
      this.props.navigation.navigate
      ('Detail', film);
    }
 
  render() {
    return (
      <View style={ styles.container }>
        <FilmList 
          films={ this.props.films } //when the props inside was films it was just getting the local version of the data, with this.props.films it's getting set up to get the outside api data.
          onFilmSelected={ this.navigateToDetailScreen }/>
      </View>
    );
  }
}

const FilmListScreenWithState = connect(mapStateToProps, mapDispatchToProps)(FilmListScreen);

export default FilmListScreenWithState

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  
});


//life cycle method didComponentMount
// Component life cycle method...called by react in a certain order depending on what happened
//Life cycle methods are: componentWillMount, then render, then componentDidMount afterwards...in that order



