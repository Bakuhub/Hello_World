import React from 'react';
import * as styleGuide from '../../constants/styleGuide'
import {Grid} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles';
import PropTypes from "prop-types";
import {Link} from 'react-router-dom'

const statusOptions ={
    success:'black',

}

const styles = theme => ({
    root:{
        display:'inline-block',
        backgroundColor: statusOptions[this.props.value],
        padding:'10px 20px',
        border:'1px solid'+styleGuide.greyDivider,
        maxHeight:'40px'
    },
    title: {
        color: styleGuide.lighterText,
        fontSize: styleGuide.XL,

        fontWeight: 'lighter',
        paddingBottom: styleGuide.M,
    },
    btnText:{
        fontSize:styleGuide.L,


    },
    icon:{
        fontSize:styleGuide.XL,
        marginRight:'5px',
    }

});

class StatusLabel extends React.Component {
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
            <div className={classes.root} style={ {backgroundColor:statusOptions[this.props.value]}}>
                <Grid container alignItems={'center'}>
                    <span className={classes.btnText}>
                                                {this.props.value}

                    </span>
                </Grid>
            </div>
        )
    }
}

StatusLabel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StatusLabel);