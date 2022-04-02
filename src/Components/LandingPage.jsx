import {MoviesGrid} from "../Components/MoviesGrid"
import { Search } from "./Search"
import { useQuery } from "../Hook/useQuery";
import { useDebounce } from "../Hook/useDebounce";


export function LandingPage(){
    //esta es una manera de destruir la clave y se receten los estados del componente Movies grid porque al pasar como clave el {search} lo destruye y lo crea nuevamente y todos los estados en el componenete moviesGrid regresa a cero junto con el numero de pagina
  const query = useQuery();//query tendra los cuatro parametros del hooks
  const search = query.get('search'); //search es uno delos 4 parametro que paso por query

  //Ahora aplicaremos el Hooks useDebounce para controlar el tiempo que el usario dejade teclear y se realice la busqueda 
  const debounceSearch = useDebounce(search, 500);
    return (
    <div>

        <Search />
        <MoviesGrid key={debounceSearch} search= {debounceSearch}/>
    </div>
    )
}