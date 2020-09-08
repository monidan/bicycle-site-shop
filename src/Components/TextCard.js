import React, {Component} from 'react';
import Typography from "@material-ui/core/Typography";

export default class TextCard extends Component{
    render() {
        return(
            <div className={this.props.className}>
                <Typography variant='h1' className='text-card__title'>
                    {this.props.mainText}
                </Typography>
                <Typography variant='subtitle1' className='text-card__caption'>
                    {this.props.primaryText}
                </Typography>
            </div>

        );
    }
}