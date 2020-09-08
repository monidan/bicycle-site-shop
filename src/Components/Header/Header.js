import React, {Component} from 'react';
import {Container} from "@material-ui/core";
import NavBar from "../NavBar/NavBar";
import TextCard from "../TextCard";
import './headerStyles.css';
import {myTexts as texts} from "../../textValues";
import {AiOutlineArrowDown} from 'react-icons/ai';

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.scrollDown = this.scrollDown.bind(this);
    }

    scrollDown() {
        console.log('Button clicked.')
    }

    render() {
        let text = texts.find(text => text['header'])
        return (
            <div id='header'>
                <Container maxWidth={"lg"}>
                    <NavBar />
                    <div className='header__greeting'>
                        <TextCard mainText={text.header.mainText}
                                 primaryText={text.header.captionText}
                                 className='header__text-card'/>
                        <AiOutlineArrowDown className='arrow-down'
                                            onClick={this.scrollDown}/>
                        </div>
                </Container>
            </div>
        );
    }
}
