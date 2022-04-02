import { FaSpinner } from 'react-icons/fa';//importa el icono de la lib que instalaste react  OJO FaSpinner es el nombre del icono y ahora es un componente
import style from './Spinner.module.css'

export function Spinner() {
    return (
        <div  className={style.spinner}>
           <FaSpinner className={style.spinning} size={60}  />
        </div>
    )
}
