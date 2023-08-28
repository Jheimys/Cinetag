import { useFavoritosContext } from '../../context/Favoritos'
import styles from './Card.module.css'
import iconeFavotitar from './favoritar.png'
import iconeDesFavoritar from './desvaforitar.png'


function Card({id, titulo, capa}) {
    const {favorito, adicionarFavoritos} = useFavoritosContext()
    const ehFavorito = favorito.some((fav) => fav.id === id)
    const icone = !ehFavorito ? iconeFavotitar : iconeDesFavoritar
    return(
        <div className={styles.container}>
            <img src={capa} alt={titulo} className={styles.capa} />
            <h2>{titulo}</h2>
            <img src={icone} 
                alt='Favoritar Filme' 
                className={styles.favoritar}
                onClick={() => adicionarFavoritos({id, titulo, capa})}
            />
        </div>
    )
}

export default Card