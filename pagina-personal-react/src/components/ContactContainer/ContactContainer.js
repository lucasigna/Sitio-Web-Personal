import React from 'react'
import './ContactContainer.scss';
import {Animated} from "react-animated-css";

export const ContactContainer = () => {
    return (
      <Animated animationIn="fadeIn" isVisible={true}>
        <div>ContactContainer</div>
      </Animated>
    )
}
