import PropTypes from "prop-types";
import React from 'react'
import {Checkbox, FormControlLabel,Divider, Grid, ListItem,Switch} from '@material-ui/core'
import FormTitle from '../Widget/FormTitle'
import {withStyles} from '@material-ui/core/styles';
import InputBar from '../Widget/InputBar'
import * as styleGuide from '../../constants/styleGuide'
import SubTitle from '../Widget/SubTitle'
import PairCancelButton from '../Widget/PairCancelButton'
import DragDropZone from '../Widget/DragDropZone'
import BackArrow from '../Widget/BackArrow'
import SearchBar from '../Widget/SearchBar'
import DatePicker from '../Widget/DatePicker'
import BlogsCol from './Blogs/Overview'
import {Link} from 'react-router-dom'

const styles = theme => ({
    root: {
        padding: '40px'
    },
    title: {
        padding: ' 0 20px'
    },
    saveCancelButton: {
        paddingLeft: '60px',
    },
    form: styleGuide.formBlock,
    childInput: {
        padding: '60px'
    },
    shopListItem: styleGuide.shopListItem

});

class FeedsOverview extends React.Component {
    constructor() {
        super()
        this.state = {}

    }


    render() {
        const {classes} = this.props;

        return (
            <Grid container  className={classes.root}>
                <Grid item sm={12}>
                    <SubTitle title={'Blog Feed'}/></Grid>
                <Grid item sm={2}>
                <DatePicker placeHolder={'Mar10- Apr20'}/>
                </Grid>
                <Grid item sm ={4}>
                    <SearchBar placeHolder={'Search Blogs'} />
                </Grid>
                <Grid item sm={4}/>
                <Grid item sm={2}>
                    <ListItem button>
                        Add Blogs
                    </ListItem>
                </Grid>
                <Grid item sm={12}>
                <Divider/>
                </Grid>
                <Grid item sm={12}>
                    <Grid container alignItems={'center'} justify={'center'}>
                        <Grid item>
                            <BlogsCol/>
                        </Grid>       <Grid item>
                            <BlogsCol/>
                        </Grid>       <Grid item>
                            <BlogsCol/>
                        </Grid>       <Grid item>
                            <BlogsCol/>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>);
    }
}

    FeedsOverview.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FeedsOverview);