import React from "react";
import { Link } from "react-router-dom";
import requisito from "./img/adop.jpg";
import "./ReqAdopcion.css";

function ReqAdopcion() {

  const modo = localStorage.getItem('modo');

  return (
    <div>
      <div className={`conteinerRequisitos ${modo}`}>
        <div className={`tituloReq ${modo}`}>
          <h3>Requisitos de adopción</h3>
        </div>
        <div className="img">
          <img
            className="img1"
            src={requisito}
            alt="requisito"
            width="650px"
            height="auto"
          />
        </div>

        <div className={`texto1 ${modo}`}>
          <p>
            Adoptar es un acto de responsabilidad y compromiso por lo que es
            importante que estes capacitado para hacerlo. Un perro puede vivir
            entre 14 y 18 años y durante todo ese tiempo dependerá de vos.
          </p>
          <p>
            Algunas cuestiones para tener en cuenta son el espacio disponible de
            tu casa, el tiempo que tengas para brindarle compañía, actividad
            física y cuidado. También los costos asociados a su alimentación,
            atención veterinaria y estadía durante tus vacaciones.
          </p>

          <p>
            Aquí te damos algunos tips pero recordá que lo más importante es
            adoptar con conciencia y con el corazón.
          </p>

          <p>
            Un cachorro (45 días-12 meses): es precioso pero, requiere de mucho
            tiempo y esfuerzo. Come 4 veces al día, puede llorar por las noches
            y en las ausencias de los dueños. Mastica objetos, hace pis y caca
            en cualquier lado, requiere educación y paciencia, es un bebe
            durante un año. No hay garantías con respecto al tamaño definitivo.
            En caso de haber niños chicos en el hogar, hay que marcar la
            diferencia entre mascota y juguete. Sin embargo es muy satisfactorio
            ir viendo el crecimiento y desarrollo de un cachorrito hasta
            convertirse en adulto.
          </p>

          <p>
            Un joven (1 año-5 años): es juguetón pero más adulto. Son más
            hábiles para centrarse en la educación. Generalmente ya está con la
            vacunación completa, lo que no hay riesgo de contraer alguna
            enfermedad. Están esterilizados. Ya se puede sacarlo a pasear y
            bañarlo. Come dos veces al día. Ya tiene el tamaño definitivo, no
            cambiara de aspecto.
          </p>

          <p>
            Un adulto(5 años-9años): no genera problemas por quedarse algunas
            horas solo. Es probable que duerma toda lo noche. Se habitúa
            fácilmente a su nueva familia. Aceptan su sitio dentro de la
            jerarquía del hogar, se adaptan a órdenes básicas, si es que no las
            tienen adquiridas de antes. Se muestran gratificantes y toman mucho
            cariño a su nueva familia y casa.
          </p>

          <p>
            Un abuelo (10 años-día de su muerte): nos dejan muchísimo tiempo
            para nosotros. No requieren tanto trabajo. Son muy calmos y
            sedentarios. Aunque el tiempo de compañía es seguramente menor,
            también se merecen un hogar. Podemos darle durante los años que le
            quedan una vida digna y agradable. Estarán súper agradecidos,
            esperaron su hogar mucho tiempo.
          </p>

          <p>
            Si ya lo decidiste y te sentís capacitado es momento de comenzar con
            el proceso de adopción.
          </p>
          <p>
            1- Los animales se entregan luego de una charla telefónica orientada
            a corroborar que se cumplen con las normas básicas de tenencia
            responsable.<br></br>2- Los adoptantes deberán firmar un contrato de
            adopción donde consten sus datos personales y donde se comprometen a
            brindar los cuidados necesarios.<br></br> 3- Los animales mayores a
            7 meses serán dados en adopción ya castrados. El adoptante de un
            cachorro de menor edad asumirá la responsabilidad y el compromiso de
            castrarlo entre los 7 meses y el año de edad. La castración es un
            requisito prioritario para concretar la adopción como parte de la
            tenencia responsable de un animal de compañia.<br></br> 4- Nos
            reservamos el derecho de dar o no un animal en adopción de acuerdo a
            si se cumplen o no los requerimientos.<br></br>5- Los datos
            suministrados por el solicitante son confidenciales y de acceso
            restringido, para el uso exclusivo de los procesos de adopción y no
            serán transferidos a terceros bajo ninguna circunstancia
          </p>
          <div className="linksRequisitos">
            <Link className="l1" to="/mascotas">
              <button className="boton1" type="submit">
                BUSCA TU NUEVA MASCOTA!
              </button>
            </Link>
            <Link className="l2" to="/">
              <button className="boton2" type="submit">
                VOLVER AL INICIO
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReqAdopcion;
