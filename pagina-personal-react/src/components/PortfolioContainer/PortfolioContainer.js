import React from 'react'
import './PortfolioContainer.scss';
import {Animated} from "react-animated-css";

export const PortfolioContainer = () => {
    return (
      <Animated animationIn="fadeIn" isVisible={true}>
        <div>PortfolioContainer</div>
      </Animated>
    )
}
