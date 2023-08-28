import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Favoritos from "./pages/Favoritos";
import Rodape from "./componentes/Rodape";
import Cabecalho from "./componentes/cabecalho";
import Container from "./componentes/Container";
import FavoritosProvaider from "./context/Favoritos";

function AppRoutes() {
    return(
        <BrowserRouter>
            <Cabecalho />
            <Container>
                <FavoritosProvaider>
                    <Routes>
                        <Route path="/" element={<Inicio />}></Route>
                        <Route path="/favoritos" element={<Favoritos />}></Route>
                    </Routes>
                </FavoritosProvaider>
            </Container>
            <Rodape />
        </BrowserRouter>
    )
}

export default AppRoutes