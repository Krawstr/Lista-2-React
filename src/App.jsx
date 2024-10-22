import './App.css'
import SimpleComponent from './components/SimpleComponent.jsx'
import FraseMyEscolha from './components/FraseMyEscolha.jsx'
import Lista from './components/Lista.jsx'
import Imagem from './components/Imagem.jsx'
import CliqueAqui from './components/CliqueAqui.jsx'
import Link from './components/Link.jsx'
import Titletle from './components/Titlteee.jsx'
import IsDia from './components/IsDia.jsx'
import DivPersonalizada from './components/DivPersonalizada.jsx'
import Frame from './components/Fragmentacacao.jsx'

function App() {

  return (
    <>
      <SimpleComponent />
      <FraseMyEscolha />
      <Lista />
      <Imagem />
      <CliqueAqui />
      <Link />
      <Titletle />
      <IsDia boleanogames={false} />
      <DivPersonalizada />
      <Frame />
    </>
  )
}

export default App
