import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {Divider, Grid} from '@material-ui/core'
import * as  styleGuide from '../../../constants/styleGuide'
import TagsBar from '../../Widget/TagsBar'
import InputBar from '../../Widget/InputBar'

const styles = theme => ({
    root: {
        paddingTop:'20px',
paddingBottom:'20px',
        borderBottom:'1px solid' +styleGuide.greyDivider
    }
});

class Options extends React.Component {

    constructor() {
        super()
        this.state = {
            title: ''
        }
    }

    render() {
        const {classes} = this.props;

        return (
            <Grid className={classes.root} container alignItems={'center'} spacing={24}>
                <Grid item sm={4}>
                    <InputBar title={'Option Name'} placeHolder={'please name your option'}/>
                </Grid>
                <Grid item sm={8}>
                    <TagsBar title={'Option Choice'}/>
                </Grid>

            </Grid>


        );
    }
}

Options.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Options);