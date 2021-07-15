import React from 'react';
import PropTypes from 'prop-types';
import './DishText.scss';

DishText.propTypes = {};

function DishText(props) {
    return (
        <div className="dish-text">
            <div className="dish-text__name"></div>
            <div className="dish-text__title"></div>
            <div className="dish-text__intro"></div>
        </div>
    );
}

export default DishText;
