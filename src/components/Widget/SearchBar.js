import React, {Fragment} from 'react';
import * as styleGuide from '../../constants/styleGuide'
import {Grid,Input} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles';
import PropTypes from "prop-types";
import {Link} from 'react-router-dom'


const styles = theme => ({
    root: {
        display: 'inline-block',
        backgroundColor: 'white',
        padding: '7px 20px',
        border: '1px solid' + styleGuide.greyDivider,
        borderLeft:'0',
        boxShadow: 'inset 0 1px 2px 0px #ededed',
        width:'300px'
    },
    title: {
        color: styleGuide.lighterText,
        fontSize: styleGuide.XL,

        fontWeight: 'lighter',
        paddingBottom: styleGuide.M,
    },
    btnText: {
        fontSize: styleGuide.L,


    },
    icon: {
        fontSize: styleGuide.XL,
        marginRight: '5px',
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
            <div className={classes.root} >
                <Grid container alignItems={'center'}  >
                    <span className={'icon-search-16' + ' ' + this.props.icon}/>
                    <Input className={classes.btnText}
                           placeholder={this.props.placeHolder}
                           disableUnderline={true}
                    />
                </Grid>
            </div>
        )
    }
}

WhiteButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WhiteButton);