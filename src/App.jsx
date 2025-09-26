import Cronometro from "./componentes/Cronometro";
import {Numeropar} from "./componentes/Numeropar";
import { WindowSize } from './componentes/windowsize';
import { Pokemones } from './componentes/Pokemones';
import UsuarioList from "./componentes/UsuarioList";

function App() {
  return (
    <div>
      <h1>usando useEffect</h1>
      <Numeropar />
      <Cronometro />
      <Pokemones />
      <WindowSize />
      <h1>Mi App</h1>
      <UsuarioList />
    </div>
  );
}

export default App;