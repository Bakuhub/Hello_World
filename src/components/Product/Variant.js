import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import * as  styleGuide from '../../constants/styleGuide'

const styles = theme => ({
    root: {
        fontSize: styleGuide.XXXL,
        fontWeight: 'bold',
        color: styleGuide.purpleText,
    },
    form:styleGuide.formBlock,
});

class SubTitle extends React.Component {

    constructor() {
        super()
        this.state = {
            category: [
                /***
                 * {
                 * categoryName1:{
                 *  option1,option2...
                 *  },
                 *  {
                 * categoryName2:{
                 *  option1,option2...
                 *  },
                 * }
                 */

            ]
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