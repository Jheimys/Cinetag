import { Outlet } from "react-router-dom";
import Container from "../../componentes/Container";
import Cabecalho from "../../componentes/cabecalho";
import FavoritosProvaider from "../../context/Favoritos";
import Rodape from "../../componentes/Rodape";


function PaginaBase() {
    return(
        <main>
            <Cabecalho />
            <FavoritosProvaider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritosProvaider>
            <Rodape />
        </main>
    )
}

export default PaginaBase