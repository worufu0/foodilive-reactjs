import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';
import { NavLink } from 'react-router-dom';
import {
    HiOutlineBell,
    HiOutlineShoppingBag,
    HiOutlineUser,
} from 'react-icons/hi';

Header.propTypes = {};

function Header(props) {
    return (
        <div className="header">
            <div className="header-left">
                <NavLink exact to="/" className="header-left-logo">
                    foodilive
                </NavLink>
            </div>

            <div className="header-center">
                <div className="header-center-nav">
                    <NavLink exact to="/" className="header-center-nav__item">
                        Trang chủ
                    </NavLink>

                    <NavLink to="/thuc-don" className="header-center-nav__item">
                        Thực đơn
                    </NavLink>

                    <NavLink to="/lien-he" className="header-center-nav__item">
                        Liên hệ
                    </NavLink>
                </div>
            </div>

            <div className="header-right">
                <div className="header-right__btn">
                    <HiOutlineBell />
                </div>

                <div className="header-right__btn">
                    <HiOutlineShoppingBag />
                </div>

                <div className="header-right__btn">
                    <HiOutlineUser />
                </div>
            </div>
        </div>
    );
}

export default Header;
