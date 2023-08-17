import Banner from "../../componentes/Banner"
import Card from "../../componentes/Card"
import Rodape from "../../componentes/Rodape"
import Titulo from "../../componentes/Titulo"
import Cabecalho from "../../componentes/cabecalho"

function Inicio() {
    return(
        <>
            <Cabecalho />
            <Banner imagem='home'/>
            <Titulo>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Titulo>
            <Card id = '1' titulo='bjabja' capa ='https://conteudo.imguol.com.br/c/entretenimento/36/2022/05/22/gata-tricolor-gato-gatos-1653265224214_v2_1x1.jpg' />
            <Rodape />
        </>
    )
}

export default Inicio