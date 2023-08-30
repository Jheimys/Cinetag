import { Outlet } from "react-router-dom";
import Container from "../../componentes/Container";
import Cabecalho from "../../componentes/cabecalho";
import FavoritosProvaider from "../../context/Favoritos";


function PaginaBase() {
    return(
        <main>
            <Cabecalho />
            <FavoritosProvaider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritosProvaider>
        </main>
    )
}

export default PaginaBase