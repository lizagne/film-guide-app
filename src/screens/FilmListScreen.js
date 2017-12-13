//screens denote containers to hold the components
import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';


export default class FilmListScreen extends
  React.Component {
    static navigationOptions = {
      title: 'Films on Freeview'
    };

    constructor() {
      super();

      this.navigateToDetailScreen = this.navigateToDetailScreen.bind(this);
    }

    //add the navigate method
    navigateToDetailScreen() {
      this.props.navigation.navigate('Detail'); //we need to bind this to the value of this below
    }
 
  render() {
    return (
      <View style={ styles.container }>
        <Text>This is going to be a film guide app</Text>

        <TouchableHighlight   
          style={ styles.button }
          onPress={ this.navigateToDetailScreen }>

          <Text> Go to Detail screen </Text>

        </TouchableHighlight>

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
    button: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#aaa'
  }
});





