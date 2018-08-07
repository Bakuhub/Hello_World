import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import * as  styleGuide from '../../constants/styleGuide'

const styles = theme => ({
    root: {
        fontSize: styleGuide.XXXL,
        fontWeight: 'bold',
        color: styleGuide.purpleText,
    }
});

class SubTitle extends React.Component {

    constructor() {
        super()
        this.state = {
            title: ''
        }
    }

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                {this.props.title}
            </div>
        );
    }
}

SubTitle.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SubTitle);