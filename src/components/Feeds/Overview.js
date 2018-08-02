import PropTypes from "prop-types";
import React from 'react'
import {Divider, Grid} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles';
import * as styleGuide from '../../constants/styleGuide'
import SubTitle from '../Widget/SubTitle'
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
            <Grid container className={classes.root}>
                <Grid item sm={12}>
                    <SubTitle title={'Blog Feed'}/></Grid>
                <Grid item sm={2}>
                    <Grid

                        container alignItems={'center'}
                        className={' whiteBackGround lighterBorder regHeight'}
                    >
                        <Grid item sm={2}>
                            <div className={' icon-calendar-16'}/>
                        </Grid>
                        <Grid item sm={10}>
                            <div>
                                Mar 10   -   Apr 30
                            </div>
                        </Grid>

                    </Grid>
                </Grid>
                <Grid item sm={1}>
                    <Grid

                        container alignItems={'center'}
                          className={' whiteBackGround lighterBorder regHeight'}
                    >
                        <Grid item sm={3}>
                            <div className={' icon-filter-16'}/>
                        </Grid>
                        <Grid item sm={6}>
                            <div>&nbsp;&nbsp; All
                            </div>
                        </Grid>
                        <Grid item sm={3}>
                            <div className={' icon-down-16'}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sm={3}>
                    <SearchBar placeHolder={'Search Blogs'}/>
                </Grid>
                <Grid item sm={4}/>
                <Grid item sm={2}>
                    <Link to={'/feeds/new'}>
                        <Grid container alignItems={'center'} justify={'center'} className={'regHeight purpleButton '}>
                            <Grid item>
                                <div className={' icon-add-16'} style={{fontSize: '14px'}}/>
                            </Grid>
                            <Grid item>
                                <span className={'Lighter SubHeading'}>&nbsp;Create Blog Post</span>
                            </Grid>
                        </Grid>
                    </Link>
                </Grid>
                <Grid item sm={12}>
                    <Divider/>
                </Grid>
                <Grid item sm={12}>
                    <Grid container alignItems={'center'} justify={'center'}>
                        <Grid item>
                            <BlogsCol/>
                        </Grid>
                        <Grid item>
                            <BlogsCol/>
                        </Grid>
                        <Grid item>
                            <BlogsCol/>
                        </Grid>
                        <Grid item>
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