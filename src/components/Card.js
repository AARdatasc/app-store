import React, { Component } from 'react';

import styles from "./Card.module.css";
import up from "../images/up.svg";
import down from "../images/down.svg";

class Card extends Component {

    constructor(){
        super()
        this.state = {
            counter : 0
        }
    }
    downHandler = () => {
     if(this.state
        
        .counter>0){    
        this.setState(prevState => ({
            counter : prevState.counter - 1 , 
        }))
        }}

    upHandler = () =>{
        this.setState(prevState =>({
            counter : prevState.counter + 1
        }))
    }

    render() {
        const {image, name, cost} = this.props;
        const {counter} = this.state;
            
        
        return (
            <div className={styles.container}>
                <img src={image} alt="smart phone" />
                <h3>{name}</h3>
                <p>{cost} {counter?`*${cost} = ${counter*Number(cost.split(" ")[0])}$` : ""}</p>

            <div className={styles.counter}>
                <img src={down} alt="arrow" onClick={this.downHandler} className={!counter && styles.deactive}/>
                <span>{counter}</span>
                <img src={up} alt="arrow" onClick={this.upHandler} />
            </div>
            </div>
        );
    }
}

export default Card;