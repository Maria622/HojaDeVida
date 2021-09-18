
import './Contact.css';
import github from './github.png';
function Contact(){
    return(
  <div className="contacto">
      <h2>ACERCA DE MI</h2>
      <hr/>
      <p>
          Tecnologa en Analisis y Desarrollo de Sistemas de informacion,con experiencia en proyectos academicos sobre aplicativos
          y sistemas, buen manejo de datos, hábil en el Desarrollo
          de información y lenguajes.Con destreza en el aprendizaje asi como fotalezas de comunicación,
          relación y disposición para el trabajo orientado al logro 
          y cumplimiento de metas propuestas.
      </p>
  <h2>CONTACTO</h2>
  <hr/>

<div className="info"><i class="fas fa-envelope"></i>Mariacamilaangarita.20@gmail.com</div>
<div className="info"><i class="fas fa-phone"></i>3014805316</div>
<div className="info"><i class="fas fa-map-marker-alt"></i>Calle 67c # 105 a 28</div>

<h2>ENLACES</h2>
<div className="enlaces">
<a href="https://github.com/Maria622">
  <img src={github} alt="github"/>

</a>
</div>

  </div>

    );
}
export default Contact;