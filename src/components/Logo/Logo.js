import React from 'react';

import burgerLogo from '../../assets/images/burger-logo.png';
// do this way so that when compiled by webpack you get optimized version
import classes from './Logo.module.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={burgerLogo} alt="MyBurger" />
    </div>
);

export default logo;
