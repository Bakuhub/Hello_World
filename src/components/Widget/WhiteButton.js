import React from 'react';
import * as styleGuide from '../../constants/styleGuide'
import {Grid} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles';
import PropTypes from "prop-types";
import {Link} from 'react-router-dom'


const styles = theme => ({
    inputBar: {
        backgroundColor: styleGuide.greyInputBackGround,
        borderRadius: '5px',
        height: '35px',
        border: '1px solid #E8E4ED',
        fontSize: '14px',
        color: styleGuide.purpleText,
        paddingLeft: '10px',
        paddingRight: '10px',
        boxShadow: 'inset 0 5px 1px -5px #000000'
    },
    title: {
        color: styleGuide.lighterText,
        fontSize: styleGuide.XL,

        fontWeight: 'lighter',
        paddingBottom: styleGuide.M,
    }
});

class WhiteButton extends React.Component {
    state = {
        anchor: 'left',
    };

    constructor() {
        super()
        this.state = {
            placeHolder: '',


        }
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,

        });
    };


    render() {
        const {classes} = this.props;

        return (
            <Link to={this.props.link}>
                <Grid container alignItems={'center'} className={'regHeight purpleButton '}>

                    <Grid item sm={2}>
                        <div className={this.props.icon} style={{fontSize: '14px'}}/>
                    </Grid>
                    <Grid item sm={1}/>
                    <Grid item sm={9}>

                        <span className={'Lighter SubHeading'}>
                        {this.props.value}
                        </span>
                    </Grid>
                </Grid>
            </Link>
        )
    }
}


WhiteButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WhiteButton);