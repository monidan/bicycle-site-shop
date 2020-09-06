import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingBasket} from "@fortawesome/free-solid-svg-icons";

export default class NavBar extends Component{
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            cartTotal: 0
        }
    }
    render() {
        return(
          <div className="navigation-bar">
                  <div className="nav-logo logo">
                    <p>Bikeshop</p>
                  </div>
                  <ul className='nav-list'>
                      <li className='nav-item'>
                          <a href="#">Bikes</a>
                      </li>
                      <li className='nav-item'>
                          <a href="#">Components</a>
                      </li>
                      <li className='nav-item'>
                          <a href="#">Accesories</a>
                      </li>
                  </ul>
                  <div className="nav-basket">
                      <FontAwesomeIcon className='basket-icon' icon={faShoppingBasket}/>
                      <a href='#'>Basket <span className='cart-total'>({this.state.cartTotal})</span></a>
                  </div>
          </div>
        );
    }
}