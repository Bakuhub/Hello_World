import PropTypes from "prop-types";
import React from 'react'
import {Collapse, Grid} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles';
import * as styleGuide from '../../constants/styleGuide'
import SubTitle from '../Widget/SubTitle'
import SearchBar from '../Widget/SearchBar'
import BlogsCol from './Blogs/Overview'
import {Link} from 'react-router-dom'
import WhiteButton from '../Widget/WhiteButton'
import WhiteDropDown from '../Widget/WhiteDropDown'
import DatePicker from '../Widget/DatePicker'
import Header from '../Layout/Body/Header'

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
    shopListItem: styleGuide.shopListItem,
    divider: styleGuide.headerDivider,

});

class FeedsOverview extends React.Component {
    constructor() {
        super()
        this.state = {
            openDatePicker: false,
            startDate: '',
            endDate: ''

        }

    }

    openDatePicker = () => event => {
        this.setState({openDatePicker: !this.state.openDatePicker})
    }
    getData = (a, b) => {
        this.setState(
            {
                startDate: a,
                endDate: b,
            }
        )
    }

    render() {
        const {classes} = this.props;

        return (
            <Grid container className={classes.root}>
                <Grid item sm={12}>
                    <Header
                        title={(<SubTitle title={'Blog Feed'}/>)}
                        leftControl={(<Grid container alignItems={'center'}>
                            <WhiteButton
                                icon={'icon-calendar-16'}
                                value={this.state.startDate + "-" + this.state.endDate}
                                onClick={this.openDatePicker()}

                            />

                            <WhiteDropDown
                                icon={'icon-filter-16'}
                                icon2={'icon-down-16'}
                                value={'All'}

                            />
                            <SearchBar placeHolder={'Search Blogs'}/>

                        </Grid>)}
                        rightControl={
                            (
                                <Link to={'/feeds/new'}>
                                    <Grid container alignItems={'center'} justify={'center'}
                                          className={'regHeight purpleButton '}>
                                        <Grid item>
                                            <div className={' icon-add-16'} style={{fontSize: '14px'}}/>
                                        </Grid>
                                        <Grid item>
                                            <span className={'Lighter SubHeading'}>&nbsp;Create Blog Post</span>
                                        </Grid>
                                    </Grid>
                                </Link>
                            )
                        }
                        toolBar={
                            (
                                <Collapse in={this.state.openDatePicker}>
                                    <DatePicker
                                        startDate={this.state.startDate}
                                        endDate={this.state.endDate}


                                    />

                                </Collapse>
                            )
                        }
                    />
                </Grid>

                <Grid item sm={12}>
                    <Grid container alignItems={'center'} justify={'center'}>
                        <Grid item sm={10}>
                            <BlogsCol/>
                        </Grid>
                        <Grid item sm={10}>
                            <BlogsCol/>
                        </Grid>
                        <Grid item sm={10}>
                            <BlogsCol/>
                        </Grid>
                        <Grid item sm={10}>
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