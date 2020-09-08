import React, {Component} from 'react';
import {Container} from "@material-ui/core";
import './aboutUs.css';
import {myTexts as texts} from "../../textValues";
import Typography from "@material-ui/core/Typography";

export default class AboutUs extends Component{
    render() {
        let text = texts.find(text => text.aboutUs);
        let heading = text.aboutUs.heading,
            caption = text.aboutUs.caption;
        return (
            <Container maxWidth='lg'>
                <div id='about-us'>
                    <article className="about-us__article">
                        <div className='about-us__description'>
                            <Typography variant='h2' className='heading'>
                                {heading}
                            </Typography>
                            <Typography variant='subtitle1' className='caption'>
                                {caption}
                            </Typography>
                            <div className="about-us__button-container">
                                <a href="" className="button about-us__button caption">
                                    Read more
                                </a>
                            </div>
                        </div>
                        <div className="about-us__image-container">
                            <img src={require('../../Assets/e-bike-article.jpg')}
                                 alt="e-bike"
                                 className='about-us__image'/>
                        </div>
                    </article>
                </div>
            </Container>
        );
    }
}