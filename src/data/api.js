//this is the api state file

//using axios library, allows us to post 
import axios from 'axios';

const getAllFilms = () => {
	const url = "https://filmsonfreeview.herokuapp.com/api/films";
	const promise = axios.get(url);
	// promise.then((response) => {
	// 	debugger;

	// })
		return promise;
	
}

//export as an object so that you can add in more properties if needs be
export {
	getAllFilms,
}