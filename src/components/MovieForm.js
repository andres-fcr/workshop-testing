
import { useFormik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'
import { fileUpload } from '../helpers/fileUpload'
import { registerMovieAsync } from '../redux/actions/actionMovies'
import { Car } from '../styles/CardsStyles'
// import { Container } from '../styles/DetailStyles'
// import { Env } from '../styles/LoginStyles'
import MovieList from './MovieList'

const MovieForm = () => {

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            title: '',
            overview: '',
            release_date: '',
            vote_average: '',
            poster_path: '',
            video: ''
        },
        onSubmit: (data) => {
            dispatch(registerMovieAsync(data))
            console.log(data);
        }
    })

    const handleFile = (e) => {
        const file = e.target.files[0]
        fileUpload(file)
            .then(response => {
                formik.setFieldValue.poster_path = response
                formik.initialValues.poster_path = response
                console.log(response);
            })
            .catch(error => {
                console.log(error.message);
            })
    }


    return (
        <Car className='mx-auto ' >
            <h3 className="text-center col mt-4 mb-3"> Manejo Peliculas </h3>
            <div id='contenedor2' className='mx-auto ps-3 row'>
                <div id='contenedor1' className='mx-auto ps-3 col'>

                    <form onSubmit={formik.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput">Imagen poster</label>
                            <input
                                required
                                name='poster_path'
                                // value={poster_path}
                                onChange={handleFile}
                                type="file"
                                className="form-control"
                                id="formGroupExampleInput"
                                placeholder="Url del poster"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput">Nombre Pelicula</label>
                            <input
                                required
                                name='title'
                                // value={title}
                                onChange={formik.handleChange}
                                type="text"
                                className="form-control"
                                id="formGroupExampleInput"
                                placeholder="Nombre Pelicula"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput">Descripcion</label>
                            <input
                                required
                                name='overview'
                                // value={overview}
                                onChange={formik.handleChange}
                                type="text"
                                className="form-control"
                                id="formGroupExampleInput"
                                placeholder="Descripcion"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput">fecha de lanzamiento</label>
                            <input
                                required
                                name='release_date'
                                // value={release_date}
                                onChange={formik.handleChange}
                                type="date"
                                className="form-control"
                                id="formGroupExampleInput"
                                placeholder="aaaa-mm-dd"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput">Puntuacion de la pelicula</label>
                            <input
                                required
                                name='vote_average'
                                // value={vote_average}
                                onChange={formik.handleChange}
                                type="text"
                                className="form-control"
                                id="formGroupExampleInput"
                                placeholder="Puntuación"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput">Trailer Pelicula</label>
                            <input
                                required
                                name='video'
                                // value={video}
                                onChange={formik.handleChange}
                                type="text"
                                className="form-control"
                                id="formGroupExampleInput"
                                placeholder='ID despues de "https://www.youtube.com/watch?v="'
                            />
                        </div>
                        <button
                            className="btn btn-warning ps-3 my-3"
                            type='submit'
                        // onClick={() => agregarDatos()}
                        >Guardar</button>
                    </form>
                </div>
                <h2 className='text-center  mt-4 mb-3'>Lista Completa</h2>
                <div className=' mx-auto my-4'>
                    <MovieList />
                </div>
            </div>
        </Car>
    )
}

export default MovieForm