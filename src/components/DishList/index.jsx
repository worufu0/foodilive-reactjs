import React from 'react';
import PropTypes from 'prop-types';
import './DishList.scss';

DishList.propTypes = {};

function DishList(props) {
    return (
        <div className="dish-list">
            <div className="dish-list__thumbnail"></div>
            <div className="dish-list__thumbnail"></div>
            <div className="dish-list__thumbnail"></div>
        </div>
    );
}

export default DishList;
