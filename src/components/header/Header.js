
import './Header.css'
import foto from './camila.jpeg'
function Header(){
   return(
  <header>
       <div className="foto">
           <img src={foto} alt="foto Maria Camila" />
       </div>
       <div className="texto">
       <h1 className="ah1">MARIA  CAMILA VERGAÑO</h1>
       <h3 className="ah1">DESARROLLADORA WEB</h3>
       </div>
  </header>
    );
}

export default Header;