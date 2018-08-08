import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {Grid,Divider} from '@material-ui/core'
import * as styleGuide from '../../constants/styleGuide'

const styles = theme => ({
    root: {},
    left:{
        paddingRight:'20px',
        borderRight:'1px solid' + styleGuide.greyDivider,
    },
    right:{
        paddingLeft:'20px',

    },
    icon:{
        padding:'0px 5px ',
    }
});

class FeedsToolBar extends React.Component {

    constructor() {
        super()
        this.state = {
            title: ''
        }
    }

    render() {
        const {classes} = this.props;

        return (
            <Grid container alignItems={'center'} className={classes.root}>
                <Grid item  className={classes.left}>
                    <span className={'icon-upload-24'+' '+ classes.icon}/>
                    <span className={'icon-upload-24'+' '+ classes.icon}/>
                    <span className={'icon-upload-24'+' '+ classes.icon}/>
                    <span className={'icon-upload-24'+' '+ classes.icon}/>

                </Grid>
                <Grid item className={classes.right} >
                    <span className={'icon-upload-24'+' '+ classes.icon}/>
                    <span className={'icon-upload-24'+' '+ classes.icon}/>
                    <span className={'icon-upload-24'+' '+ classes.icon}/>
                    <span className={'icon-upload-24'+' '+ classes.icon}/>

                </Grid>
            </Grid>
        );
    }
}

FeedsToolBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FeedsToolBar);