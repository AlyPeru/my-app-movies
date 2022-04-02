import style from "./MovieCard.module.css";
import {Link} from 'react-router-dom';
import { getMoviesImg } from "../Utils/getMoviesImg";

export function MovieCard({movie}){
    const imageUrl = getMoviesImg(movie.poster_path, 300);
    return( 
        <li className={style.movieCard} > 
        <Link to = {"/movies/" + movie.id}>
            <img 
            width={230}
            height={345}
            className={style.movieImage} 
            src={imageUrl} 
            alt={movie.title} 
            />
        </Link>
            <div>{movie.title}</div>
        </li>);
    
}