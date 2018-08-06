import React from 'react';
import * as styleGuide from '../../constants/styleGuide'
import {Grid} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles';
import PropTypes from "prop-types";
import {Link} from 'react-router-dom'


const styles = theme => ({
    root: {
        display: 'inline-block',
        backgroundColor: styleGuide.purpleButton,
        padding: '10px 20px',
        border:'1px solid'+ styleGuide.purpleButton,

    },
    title: {
        color: styleGuide.lighterText,
        fontSize: styleGuide.XL,

        fontWeight: 'lighter',
        paddingBottom: styleGuide.M,
    },
    btnText: {
        color: 'white',
        fontSize: styleGuide.L,


    },
    icon: {
        fontSize: styleGuide.XL,
        marginRight: '5px',
    }
});

class PurpleButton extends React.Component {
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
            <Link to={this.props.link}
                  className={classes.root}>
                <Grid container alignItems={'center'}>
                    <span className={classes.icon + ' ' + this.props.icon}/>
                    <span className={classes.btnText}>
                                                {this.props.value}
                    </span>
                    <span className={classes.icon + ' ' + this.props.icon2}/>
                </Grid>
            </Link>
        )
    }
}


PurpleButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PurpleButton);