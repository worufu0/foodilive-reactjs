import React from 'react';
import PropTypes from 'prop-types';
import './Dish.scss';
import DishImg from '../../components/DishImg';

Dish.propTypes = {};

function Dish(props) {
    return (
        <div className="dish">
            <DishImg />
        </div>
    );
}

export default Dish;
