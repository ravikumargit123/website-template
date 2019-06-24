import React from 'react';
import './style.scss';

import Image from '../Image';

const HeroImage = props => {
    return (
        <div className="HeroImage">
            <Image image={props.image} className="HeroImage--img" />
            <div className="HeroImage--content">{props.children}</div>
        </div>
    );
};

export default HeroImage;