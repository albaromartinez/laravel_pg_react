import { FC } from "react";


type Props={
    movie: any
}

const MovieItem:FC<Props>=({movie})=>{
    return(
        <tr key={movie.id}>
            <td>{movie.title}</td>
            <td>{movie.description}</td>
            <td></td>
            <td></td>
        </tr>
    );
};
export default MovieItem;