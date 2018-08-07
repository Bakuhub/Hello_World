import PropTypes from "prop-types";
import React from 'react'
import {Divider, Grid} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles';
import * as styleGuide from '../../constants/styleGuide'
import SubTitle from '../Widget/SubTitle'
import SearchBar from '../Widget/SearchBar'
import Table from '../Widget/Table'
import WhiteDropDown from '../Widget/WhiteDropDown'
import WhiteButton from '../Widget/WhiteButton'
import statusLabel from '../Widget/statusLabel'
import OrderDetail from './Detail'
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

class OrdersOverview extends React.Component {
    constructor() {
        super()
        this.state = {

            open: true


        }

    }


    render() {
        const {classes} = this.props;

        return (
            <Grid container className={classes.root}>
                <Grid item sm={12}>

                    <SubTitle title={'Orders'}/></Grid>
                <Grid item sm={12}>
                    <Grid container justify={'space-between'} alignItems={'center'}>
                        <Grid item>

                            <WhiteDropDown
                                icon={'icon-more-16'}
                                value={'Filter'}

                            />

                            <SearchBar/>
                        </Grid>
                        <Grid item>
                            <WhiteButton
                                icon={'icon-share-16'}
                                value={'Export List'}
                            />
                        </Grid>
                    </Grid>
                </Grid>


                <Grid item sm={12}>
                    <Divider/>
                </Grid>
                <Grid item sm={12}>
                    <Table/>
                </Grid>
                <Grid item sm={12}>
                </Grid>
            </Grid>);
    }
}

OrdersOverview.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OrdersOverview);