import React from 'react';
import PropTypes from 'prop-types';
import './Dish.scss';
import DishImg from '../../components/DishImg';
import DishText from '../../components/DishText';
import DishOrder from '../../components/DishOrder';
import DishList from '../../components/DishList';

Dish.propTypes = {};

function Dish(props) {
    return (
        <div className="dish">
            <div className="dish-left-col">
                <DishText />
                <DishOrder />
            </div>

            <DishImg />

            <DishList />
        </div>
    );
}

export default Dish;
