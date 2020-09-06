import React, {Component} from 'react';
import Typography from "@material-ui/core/Typography";

export default class TextCard extends Component{
    render() {
        return(
            <Typography variant='h1'>
                {this.props.mainText}
            </Typography>
        );
    }
}