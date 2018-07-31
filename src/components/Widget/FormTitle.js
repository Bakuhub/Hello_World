import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import * as styleGuide from '../../constants/styleGuide'
import {Divider} from '@material-ui/core'

const styles = theme => ({
    title: {
        color: styleGuide.purpleText,
        fontSize: styleGuide.XXL,
        fontWeight: 'bold'
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
            <Fragment>
                <div className={classes.title}>
                    {this.props.title}
                </div>
                <br/>
                <Divider/>
                <br/>
            </Fragment>

        );
    }
}

FormTitle.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormTitle);