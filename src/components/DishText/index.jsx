import React from 'react';
import PropTypes from 'prop-types';
import './DishText.scss';

DishText.propTypes = {};

function DishText(props) {
    return (
        <div className="dish-text">
            <div className="dish-text__name">Bít tết bò</div>
            <div className="dish-text__title">Thịt bò, rau cải và trứng</div>
            <div className="dish-text__intro">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Luctus venenatis lectus magna fringilla urna. Quis vel eros
                donec ac odio.
            </div>
        </div>
    );
}

export default DishText;
