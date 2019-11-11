import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.module.css';

const checkOutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>hope it tastes good</h1>
            <div style={{width: '300px', maxWidth: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
                <h1>the price is {props.price}</h1>
            </div>
            <Button 
                btnType="Danger"
                clicked={props.checkoutCancelled}>Cancel</Button>
            <Button 
                btnType="Success"
                clicked={props.checkoutContinued}>Continue</Button>

        </div>
    );
}

export default checkOutSummary;