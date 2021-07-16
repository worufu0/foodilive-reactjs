import React from 'react';
import PropTypes from 'prop-types';
import './DishList.scss';

DishList.propTypes = {};

function DishList(props) {
    return (
        <div className="dish-list">
            <img src="images/dish1.png" className="dish-list__thumbnail" />
            <img src="images/dish2.png" className="dish-list__thumbnail" />
            <img src="images/dish3.png" className="dish-list__thumbnail" />
        </div>
    );
}

export default DishList;
