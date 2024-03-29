import { FC, useEffect } from "react";
import { getAllMovies, selectMoviesState } from "../../features/movies";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
// import { fetchModule } from "vite";
import MovieItem from "../../components/Movieltem";

const Home: FC=()=>{
    const dispatch = useAppDispatch();
    const {movies, isSuccess} = useAppSelector(selectMoviesState);
    let data: any = []

    useEffect(()=>{
        fetchMovies();
    },[]);

    const fetchMovies=():void =>{
        dispatch(getAllMovies(''))
    }

    
    if(isSuccess){
        data = movies
    }

    return(
        <div>
            <table>
            <caption>Movies List</caption>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((movie:any)=>
                    <MovieItem
                        key = {movie.id}
                        movie = {movie}
                    />
                    )}
                </tbody>
                <tfoot>
                    <tr>
                        <td>Add Movies</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}

export default Home;