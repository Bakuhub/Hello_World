import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import * as  styleGuide from '../../constants/styleGuide'
import {Grid} from '@material-ui/core'

const styles = theme => ({
    backArrow: {
        fontSize: styleGuide.M,
        fontWeight: 'bold',
        color: styleGuide.lighterText,
    },
    icon:{
compose: 'icon-left-16',
            color:"red",
    }
});

class BackArrow extends React.Component {

    constructor() {
        super()
        this.state = {
            title: ''
        }
    }

    render() {
        const {classes} = this.props;

        return (
            <Grid container alignItems={'center'}>
                <Grid item>

                    <span className={classes.icon}/>
                    <span className={classes.backArrow}>
                        {this.props.title}
                    </span>

                </Grid>
            </Grid>
        );
    }
}

BackArrow.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BackArrow);