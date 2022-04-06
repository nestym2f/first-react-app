import Componente  from './Components/Componente';
import './App.css';

const NavBar = () => {
    return ( 
        <div className = "App" >
          <Componente newword = {"my word"} />          
        </div>
    );
}

export default NavBar;