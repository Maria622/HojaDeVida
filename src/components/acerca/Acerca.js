

import './Acerca.css';
function Acerca(){
return(

   <div className="acerca">
    <div className="infolab">
        <h2 className="titlab"><i class="fas fa-user-graduate">EDUCACION</i></h2>

       <div className="estudio">
           <h4>Bachiller Academico-Antonio Nariño I.E.D </h4>
           <p>Conclui mi periodo de Bachiller donde obtuve excelentes notas  
               y un excelente comportamiento aptitudinal</p>
       </div>
       <div className="estudio">
           <h4>Tecnico en Programacion de Software </h4>
           <p>En el sena desempeñe Mi tecnico en Programacion de Software
               dando paso a este proceso de formaciòn orientado a las tecnologias
           </p>
       </div>
       <div className="estudio">
           <h4>Tecnologo en Analisis y Desarrollo de Sistemas de Informacion </h4>
           <h7>-En proceso</h7>
           <p>Sigo en proceso de formacion del Tecnologo del SENA.
               Donde me desempeño bien en la formacion de mitecnologo.
           </p>
       </div>

    </div>
    
    <h2 className="titlab"><i class="fas fa-user-graduate">HABILIDADES</i></h2>

<div className="habilidades"> Fron-ent <progress max="100" value="80"></progress></div>
<div className="habilidades"> Back-end <progress max="100" value="90"></progress></div>
<div className="habilidades">  Php <progress max="100" value="90"></progress></div>
<div className="habilidades">  Java <progress max="100" value="70"></progress></div>
<div className="habilidades"> Sql <progress max="100" value="70"></progress></div>

   </div>

)
;


}
 
export default Acerca;