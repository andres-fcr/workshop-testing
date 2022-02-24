import { addDoc, collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"
import { typesMovies } from "../types/types"

///////Nueva Pelicula //////////////

export const registerMovieAsync = (newMvoie) => {
    return (dispatch) => {
        addDoc(collection(db, "movies"), newMvoie)
            .then(resp => {
                console.log(resp);
                dispatch(registerMovieSync(newMvoie))
            })
            .catch(error => {
                console.log(error);
            })
    }
}

export const registerMovieSync = (movie) => {
    return {
        type: typesMovies.nueva,
        payload: movie
    }
}

///////////////Listar Peliculas/////////////

export const listMoviesAsync = () => {
    return async (dispatch) => {

        const querySnapshot = await getDocs(collection(db, "movies"));
        const movie = [];
        querySnapshot.forEach((doc) => {
            movie.push({
                ...doc.data()
            })
        });
        dispatch(listMoviesSync(movie));
    }
}

export const listMoviesSync = (movies) => {
    return {
        type: typesMovies.listar,
        payload: movies
    }
}


/////////////Borrar///////////////

export const deleteMovieAsync = (title) => {
    return async (dispatch) => {

        const estCollection = collection(db, "movies");
        const q = query(estCollection, where("title", "==", title))

        const datos = await getDocs(q);
        datos.forEach((docu) => {
            deleteDoc(doc(db, "movies", docu.id));
        })
        dispatch(deleteSync(title));
    }
}

export const deleteSync = (title) => {
    return {
        type: typesMovies.delete,
        payload: title
    }
}
