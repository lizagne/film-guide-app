// This is going to hook up navigation to our app
/*

//basic boilerplate of the mainscreen navigation setup

class MainScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigate('Profile', { name: 'Jane' })
        }
      />
    );
  }
}

import {
  StackNavigator,
} from 'react-navigation';

const BasicApp = StackNavigator({
  Main: {screen: MainScreen},
  Profile: {screen: ProfileScreen},
});

//ProfileScreen.js , is the second screen, should have a button called Go Back, calling the goback function goBack() takes you back to the previous screen. 

class ProfileScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.name, //this is equal to the name: Jane object from the MainScreen component above
  });
  render() {
    const { goBack } = this.props.navigation;
    return (
      <Button
        title="Go back"
        onPress={() => goBack()}
      />
    );
  }
}



*/