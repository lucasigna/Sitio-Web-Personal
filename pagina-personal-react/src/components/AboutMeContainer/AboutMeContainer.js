import React from 'react'
import './AboutMeContainer.scss';
import {Animated} from "react-animated-css";

export const AboutMeContainer = () => {
  return (
    <Animated animationIn="fadeIn" isVisible={true}>
      <div className="divAboutMeContainer">
          <img src={require('../../assets/foto_cv.png')} className="aboutMe_img"/>
          <h2 className="aboutMe_h2">Lucas González</h2>
          <p className="aboutMe_p">Tengo 22 años, estudio Ingeniería Electrónica pero también me interesa la programación en general. Estoy cursando la carrera de Desarrollo Full Stack en Coderhouse. Tengo buenas bases de programación gracias al haber programado en varios lenguajes (C, Java, JS, etc.). Tengo espíritu emprendedor, ya intenté desarrollar un negocio en 2019 y aprendí muchísimo. Aspiro a desarrollar emprendimientos tecnológicos que aporten valor a la sociedad. Por el momento busco un empleo como desarrollador Front-End Junior.</p>
          <div className="divAboutMeTags">
              <p>Python</p>
              <p>Python</p>
              <p>Python</p>
          </div>
      </div>
    </Animated>
  )
}
