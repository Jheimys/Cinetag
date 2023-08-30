import { useFavoritosContext } from '../../context/Favoritos'
import styles from './Card.module.css'
import iconeFavotitar from './favoritar.png'
import iconeDesFavoritar from './desvaforitar.png'
import { Link } from 'react-router-dom'


function Card({id, titulo, capa}) {
    const {favorito, adicionarFavoritos} = useFavoritosContext()
    const ehFavorito = favorito.some((fav) => fav.id === id)
    const icone = !ehFavorito ? iconeFavotitar : iconeDesFavoritar
    return(
        <div className={styles.container}>
            <Link className={styles.link} to={`/${id}`}>
                <img src={capa} alt={titulo} className={styles.capa} />
                <h2>{titulo}</h2>
            </Link>
            <img src={icone} 
                alt='Favoritar Filme' 
                className={styles.favoritar}
                onClick={() => adicionarFavoritos({id, titulo, capa})}
            />
        </div>
    )
}

export default Card