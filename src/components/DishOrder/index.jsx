import React from 'react';
import PropTypes from 'prop-types';
import './DishOrder.scss';
import { HiOutlineTag } from 'react-icons/hi';
import { IoBagAddOutline } from 'react-icons/io5';

DishOrder.propTypes = {};

function DishOrder(props) {
    return (
        <div className="dish-order">
            <div className="dish-order-discount">
                <HiOutlineTag className="dish-order-discount__icon" />
                <div className="dish-order-discount__text">
                    <b>10%</b>
                    <span>giảm</span>
                </div>
            </div>

            <div className="dish-order-quantity">
                <div className="dish-order-quantity__decrease">-</div>
                <input
                    type="number"
                    className="dish-order-quantity__input"
                    value="1"
                />
                <div className="dish-order-quantity__increase">+</div>
            </div>

            <button type="submit" className="dish-order__btn">
                <IoBagAddOutline />
                <span>Thêm vào giỏ</span>
            </button>

            <div className="dish-order__price">120,000 đ</div>
        </div>
    );
}

export default DishOrder;
