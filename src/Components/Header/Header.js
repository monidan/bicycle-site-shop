import React, {Component} from 'react';
import {Container} from "@material-ui/core";
import NavBar from "../NavBar/NavBar";
import './headerStyles.css';

export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <Container maxWidth={"lg"}>
                    <NavBar />

                </Container>
            </div>
        );
    }
}