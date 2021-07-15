import React from 'react';
import PropTypes from 'prop-types';
import './DishImg.scss';

DishImg.propTypes = {};

function DishImg(props) {
    return (
        <div className="dish-img">
            <div className="dish-img-ingred dish-img-ingred--one">
                <img
                    src="images/beef.png"
                    alt=""
                    className="dish-img-ingred__img"
                />
                <div className="dish-img-ingred__text">
                    300gr <br /> Thịt bò
                </div>
                <div className="dish-img-ingred__dot"></div>
            </div>

            <div className="dish-img-ingred dish-img-ingred--two">
                <img
                    src="images/quail-egg.png"
                    alt=""
                    className="dish-img-ingred__img"
                />
                <div className="dish-img-ingred__text">
                    10 <br /> Trứng cút
                </div>
                <div className="dish-img-ingred__dot"></div>
            </div>

            <div className="dish-img-ingred dish-img-ingred--three">
                <img
                    src="images/borecole.png"
                    alt=""
                    className="dish-img-ingred__img"
                />
                <div className="dish-img-ingred__text">
                    100gr <br /> Rau cải
                </div>
                <div className="dish-img-ingred__dot"></div>
            </div>

            <div className="dish-img__plate--large">
                <div className="dish-img__plate--medium">
                    <img
                        src="images/dish.png"
                        className="dish-img__plate--small"
                    ></img>
                </div>
            </div>
        </div>
    );
}

export default DishImg;
