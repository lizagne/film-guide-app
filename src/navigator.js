import FilmListScreen from './screens/FilmListScreen';
import FilmDetailScreen from './screens/FilmDetailScreen';
import { Constants } from 'expo';
import { Platform, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';

const isAndroid = (Platform.OS === 'android'); //this is saying if the Operating system is android then choose the settings below.

//this is better because it covers all bases, ios, macos, web, windows, android...
const extraStyles = Platform.select({
	android: {
		marginTop: Constants.statusBarHeight
	}
});


StatusBar.setBarStyle('light-content'); //sets up all the text on the navigation/header bar to white/light

// console.log(extraStyles); //have a look on the on the terminal - it set it as undefined!

//this StackNavigator function takes an object
export default StackNavigator({ 
	List: { screen: FilmListScreen },
	Detail: { screen: FilmDetailScreen },
}, { 

	//this object is for the global styles of the whole app:

	cardStyle: { //this means the screen
		backgroundColor: '#000',
	},

	navigationOptions: {
		headerTintColor: '#fff',
		headerStyle: {
			backgroundColor: '#68aa63',
			...extraStyles //spread syntax so as to copy the object to then include the original as well as the style above
		}
	}
});


