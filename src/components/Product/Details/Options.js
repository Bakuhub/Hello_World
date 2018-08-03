import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {Divider, Grid} from '@material-ui/core'
import * as  styleGuide from '../../../constants/styleGuide'
import TagsBar from '../../Widget/TagsBar'
import InputBar from '../../Widget/InputBar'

const styles = theme => ({
    root: {
        fontSize: styleGuide.XXXL,
        fontWeight: 'bold',
        color: styleGuide.purpleText,
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
            <Grid container alignItems={'center'} spacing={24}>
                <Grid item sm={4}>
                    <InputBar title={'Option Name'} placeHolder={'please name your option'}/>
                </Grid>
                <Grid item sm={8}>
                    <TagsBar title={'Option Choice'}/>
                </Grid>
                <Grid item sm={12}>
                    <br/>

                    <Divider/>
                </Grid>
                <br/>
                <br/>

            </Grid>


        );
    }
}

Options.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Options);