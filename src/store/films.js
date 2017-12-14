// This is the reducer and the store //put everything that is connected with the store in one place

// import films from '../data/films.json'; 

//set up an actionCreator, always has a type whcih is always a string, and a payload
//they are just functions which accept an object.

const types = {
	FETCH_FILM: '[Films] Fetch',//this has to be uniqe and has to be a string.
	FETCH_FILM_SUCCESS: '[Films] Fetch Success'
};

//create an actionCreators object
const actionCreators = {
	fetchFilms: () => {
		return (dispatch) => {
			const promise = getAllFilms();
			promise.then((data) => {
				//we have our films data
				//therefore we want to Dispatch our FETCH_FILMS_SUCCESS action
				//this is where the thunk middleware kicks in, provides us with a dispatch argument
				dispatch(actionCreators.fetchFilmsSuccess(data));
			});
		};	
	},

	fetchFilmsSuccess: (data) => {
		return {
			types: types.FETCH_FILM_SUCCESS,
			payload: data
		}
	}
};

const initialState = {
	collection: [] //set to an empty array
};


const reducer = (state = initialState, action) => {
	if(action.type === types.FETCH_FILM_SUCCESS) {
		//handle the film data response

		return {
			...state,//spread syntax prevents you from mutating the state
			collection: action.payload //this is where the payload should be 
		};
	}
	//otherwise just return the state that was passed into the reducer
	return state;
}

const getFilmsSelector = (state) => state.films.collection; //whatever comes after the fat arrow is what is going to be returned, so no need for curly braces or a return statement.

export default reducer;

//this is called a barrelled export
export {
	getFilmsSelector,
	actionCreators
};

//selectors: if nothing has changed I'm going to return the same result
//advanced topic Selectors, get into the habit of putting it into the store and reducer file, reSelector...look it up.

//all an action is, is a simple object

//thunks is the way of setting asynchronous functions
//thunks controls when and how it will set the data in the store etc.
