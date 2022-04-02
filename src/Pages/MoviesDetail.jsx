import { get } from '../Utils/httpClient';
import { useEffect,useState } from 'react';
import { useParams } from 'react-router';
import styles from './MoviesDetail.module.css';
import { Spinner } from '../Components/Spinner';
import { getMoviesImg } from '../Utils/getMoviesImg';

export function MoviesDetail(){

    const {idMovie} = useParams();
    const [isLoading , setIsLoading] = useState(true)
    const [movie, setMovie] = useState(null);
  

    useEffect(()=>{

        setIsLoading(true);
        get("/movie/"+ idMovie).then((data)=>{
            setMovie(data);
            setIsLoading(false);
        })
    },[idMovie]);

    if(isLoading){
       return  <Spinner />;
    }

    if(!movie){
        return null;
    }

    const imageUrl = getMoviesImg(movie.poster_path, 300);

    return (
        <div className ={styles.detailsContainer}>
           <img className={`${styles.col} ${styles.movieImage}`} src={imageUrl} alt={movie.title} />
           <div className={`${styles.col} ${styles.movieDetail}`}>
               <p className = {styles.firstItem}><strong>Title: </strong> {movie.title}</p>
               <p><strong>Description: </strong> {movie.overview}</p>
               <p><strong>Genres: </strong> {movie.genres.map((genre)=> genre.name).join(", ")}</p>
           </div>
        </div>
    );
}