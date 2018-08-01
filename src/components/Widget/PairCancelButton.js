import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import * as styleGuide from '../../constants/styleGuide'
import {Grid, ListItem} from '@material-ui/core'
import {Link} from 'react-router-dom'

const styles = theme => ({
    cancel: {

        color: styleGuide.purpleButton,
        height: '35px',
        paddingLeft: '10px',
        paddingRight: '10px',
        select: 'none',
        fontSize: styleGuide.L,
        fontWeight: 'lighter',
    },
    action: {

        backgroundColor: styleGuide.purpleButton,
        height: '35px',
        select: 'none',
        paddingLeft:'30px',
        color: 'white',
        textAlign: 'center',
        fontSize: styleGuide.L,
        fontWeight: 'lighter',
        borderRadius: '2px',


    }
});

class PairCancelButton extends React.Component {
    state = {
        anchor: 'left',
    };

    constructor() {
        super()
        this.state = {
            action: '',
            cancelLink:'',
            actionLink:''
        }
    }

    render() {
        const {classes} = this.props;

        return (
            <Grid container alignItems={'center'}>
                <Grid item sm={4}>
                    <ListItem button className={classes.cancel} component={Link} to={this.props.cancelLink} >
                        Cancel
                    </ListItem>
                </Grid>
                <Grid item sm={8}>
                    <ListItem button className={classes.action} component={Link} to={this.props.actionLink}>
                        {this.props.action}
                    </ListItem>
                </Grid>

            </Grid>

        );
    }
}

PairCancelButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PairCancelButton);