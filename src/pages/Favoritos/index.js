import styles from "./Favoritos.module.css"
import Banner from "../../componentes/Banner"
import Titulo from "../../componentes/Titulo"
import Card from "../../componentes/Card"
import { useFavoritosContext } from "../../context/Favoritos"

function Favorito() {
    const { favorito } = useFavoritosContext()
    return(
        <>
            <Banner imagem='favoritos'/>

            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>

            <section className={styles.container}>
               {favorito.map((fav) => {
                return <Card {...fav} key={fav.id} />
               })}
            </section>

        </>
    )
}

export default Favorito