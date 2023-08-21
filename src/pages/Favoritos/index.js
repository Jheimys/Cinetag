import styles from "./Favoritos.module.css"
import Banner from "../../componentes/Banner"
import Titulo from "../../componentes/Titulo"
import Card from "../../componentes/Card"

function Favorito() {
    return(
        <>
            <Banner imagem='favoritos'/>

            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>

            <section className={styles.container}>
                <Card id = '1' titulo = 'aghaghag' capa = "https://caelum-online-public.s3.amazonaws.com/2802-react-praticando/img2.png" />
            </section>

        </>
    )
}

export default Favorito