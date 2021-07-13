import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import { AiOutlineBell, AiOutlineUser } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

Header.propTypes = {};

function Header(props) {
    return (
        <div className="header">
            <div className="header_logo">
                <NavLink exact to="/" className="link">
                    foodilive
                </NavLink>
            </div>

            <div className="header_nav">
                <NavLink
                    exact
                    to="/"
                    activeClassName="active"
                    className="nav-item"
                >
                    Trang chủ
                </NavLink>
                <NavLink
                    to="/thuc-don"
                    activeClassName="active"
                    className="nav-item"
                >
                    Thực đơn
                </NavLink>
                <NavLink
                    to="/lien-he"
                    activeClassName="active"
                    className="nav-item"
                >
                    Liên hệ
                </NavLink>
            </div>

            <div className="header_buttons">
                <div className="button">
                    <AiOutlineBell />
                </div>
                <div className="button">
                    <AiOutlineUser />
                </div>
            </div>
        </div>
    );
}

export default Header;
