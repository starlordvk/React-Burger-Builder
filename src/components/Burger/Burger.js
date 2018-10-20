import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'


const burger = (props) => {

    //get ingredinets based on the ingredient key and values in the js object in burger builder
    let transformedIngredients = Object.keys(props.ingredients).map( igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i ) => {
            return <BurgerIngredient key={igKey + i} type= {igKey}></BurgerIngredient>
        });
    })
    .reduce((arr, el) => {
        return arr.concat(el)
    }, []);

    console.log(transformedIngredients);

    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Please add ingredients</p>
    }

    return (
        <div className= {classes.Burger}>
            <BurgerIngredient type='bread-top'></BurgerIngredient>
            {transformedIngredients}
            <BurgerIngredient type='bread-bottom'></BurgerIngredient>
        </div>
    );
}
export default burger;