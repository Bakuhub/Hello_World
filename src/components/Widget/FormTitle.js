import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import * as styleGuide from '../../constants/styleGuide'
import {Divider,Grid} from '@material-ui/core'

const styles = theme => ({
    title: {
        color: styleGuide.purpleText,
        fontSize: styleGuide.XXL,
        fontWeight: 'bold',
    }
});

class FormTitle extends React.Component {
    state = {
        anchor: 'left',
    };

    constructor() {
        super()
        this.state = {
            title: ''
        }
    }

    render() {
        const {classes} = this.props;

        return (
            <Grid
            container alignItems={'center'} justify={'space-between'}>
                <Grid item>
                <span className={classes.title}>
                    {this.props.title}
                </span></Grid>
                <Grid item >
                    {this.props.extra}</Grid>
            </Grid>

        );
    }
}

FormTitle.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormTitle);