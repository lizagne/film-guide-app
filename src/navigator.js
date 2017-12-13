import FilmListScreen from './screens/FilmListScreen';
import FilmDetailScreen from './screens/FilmDetailScreen';
import { Constants } from 'expo';
import { StackNavigator } from 'react-navigation';



//this StackNavigator function takes an object
export default StackNavigator({ 
	List: { screen: FilmListScreen },
	Detail: { screen: FilmDetailScreen },
}, { 	
	navigationOptions: {
		headerStyle: {
			paddingTop: Constants.statusBarHeight //device independent pixels DIPS
		}
	}

});


