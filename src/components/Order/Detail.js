import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import * as  styleGuide from '../../constants/styleGuide'
import {Grid, ListItem} from '@material-ui/core'

import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const styles = theme => ({
    root: {
        fontSize: styleGuide.XXXL,
        fontWeight: 'bold',
        color: styleGuide.purpleText,


    },
    items: {
        borderBottom: '1px solid' + styleGuide.greyDivider,
        paddingBottom: '30px',
        marginBottom: '30px',
    },
    shippingDetails: {
        borderLeft: '1px solid' + styleGuide.greyDivider,
    },
    contactDetail: {},
    detailHeader: {
        display:'inline-block',
        paddingBottom:'20px',
        fontSize: '18px',
        fontFamily: 'ocsSemiBold',

    },
    detailIcon: {
        fontSize: '30px',
        paddingRight: '20px',
    },
    detailContent: {
        fontFamily: 'ocsSemiBold',
        fontSize: '14px',

    },
    nested: {
        padding: '30px',
    },
    detailPadding:{
        paddingBottom:'10px',

    },
    rightChild:{
        paddingLeft: '40px',

    },
    leftParent:{
        paddingRight:'40px',
    }



});
const items = [
    {
        name: 'shoes',
        number: '2',
        barcode: 'AFBBS-18'
    },
    {
        name: 'shoes',
        number: '2',
        barcode: 'AFBBS-18'
    },
    {
        name: 'shoes',
        number: '2',
        barcode: 'AFBBS-18'
    },
    {
        name: 'shoes',
        number: '2',
        barcode: 'AFBBS-18'
    },
]

class OrderDetail extends React.Component {
    constructor() {
        super()
        this.state = {

            open: false


        }

    }


    handleClick = () => {
        this.setState(state => ({open: !state.open}));
    };

    render() {
        const {classes} = this.props;

        return (
            <div>
                <ListItem button onClick={this.handleClick}>
                    <Grid container alignItems={'center'}>
                        <Grid item sm={2}>
                            #190209-1B
                        </Grid>
                        <Grid item sm={2}>
                            Success
                            as of 10/17/18
                        </Grid>
                        <Grid item sm={2}>
                            Tom cfsdaofo
                        </Grid>
                        <Grid item sm={2}>
                            1,110 HKD
                        </Grid>
                        <Grid item sm={2}>
                            Fool-Club
                        </Grid>
                        <Grid item sm={1}>
                            10/03/2018
                        </Grid>
                        <Grid item sm={1}>
                            {this.state.open ? <ExpandLess/> : <ExpandMore/>}
                        </Grid>
                    </Grid>
                </ListItem>
                <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                    <div button className={classes.nested}>
                        <Grid container alignItems={'stretch'} spacing={40}

                        >
                            <Grid item sm={5} className={classes.leftParent}>
                                <Grid container alignItems={'flex-start '} className={classes.items}>
                                    <Grid item>
                                        <div className={'icon-phone-16' + ' ' + classes.detailIcon}/>
                                    </Grid>

                                    <Grid item sm={10}>
                                        <span className={classes.detailHeader}>Items</span>
                                        {
                                            items.map((item, i) => {
                                                return (
                                                    <Grid container alignItems={'center'} justify={'space-between'}
                                                    className={classes.detailPadding}>
                                                        <Grid item>
                                                            {item.name}(x{item.number})
                                                        </Grid>
                                                        <Grid item>
                                                            <Grid container alignItems={'center'}>
                                                            <span className={'icon-barcode-16'} style={{
                                                                paddingRight: '10px',
                                                            }}/>
                                                                <span>
                                          {item.name}
                                                  </span>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>


                                                )
                                            })
                                        }
                                    </Grid>

                                </Grid>
                                <Grid container alignItems={'flex-start '} className={classes.contactDetail}>
                                    <Grid item>
                                        <div className={'icon-phone-16' + ' ' + classes.detailIcon}/>

                                    </Grid>

                                    <Grid item sm={10}>
                                            <span className={classes.detailHeader}>
                                                Contact Information
                                            </span>
                                        <div className={classes.detailContent +' '+classes.detailPadding}>
                                            +852 3829 1092
                                        </div>
                                        <div className={classes.detailContent +' '+classes.detailPadding}>
                                            email@gmail.com
                                        </div>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item sm={7}
                                  className={classes.shippingDetails}
                                  >
                                <Grid container alignItems={'flex-start'} className={classes.rightChild}>
                                    <Grid item>
                                        <span className={'icon-warning-16' + ' ' + classes.detailIcon}/>
                                    </Grid>
                                    <Grid item sm={10} container>
                                        <Grid item sm={12}>
                                        <span className={classes.detailHeader}>
                        Shiping Details
                    </span>
                                        </Grid>


                                        <Grid itme sm={12}>
                                            <Grid container alignItems={'flex-start'} className={classes.detailPadding}>
                                                <Grid item sm={6}>
                                                    <div>
                                                        company
                                                    </div>
                                                </Grid>
                                                <Grid item sm={6}>
                                                    <div>
                                                        SF Express
                                                    </div>
                                                </Grid>
                                            </Grid>
                                            <Grid container alignItems={'flex-start'} className={classes.detailPadding}>
                                                <Grid item sm={6}>
                                                    <div>
                                                        shipping cost
                                                    </div>
                                                </Grid>
                                                <Grid item sm={6}>
                                                    <div>
                                                        Free Shipping

                                                    </div>
                                                </Grid>
                                            </Grid>
                                            <Grid container alignItems={'flex-start'} className={classes.detailPadding}>
                                                <Grid item sm={6}>
                                                    <div>
                                                        tracking details

                                                    </div>
                                                </Grid>
                                                <Grid item sm={6}>
                                                    <div>
                                                        www.thisissomelink.com/tracking

                                                    </div>
                                                </Grid>
                                            </Grid>
                                            <Grid container alignItems={'flex-start'} className={classes.detailPadding}>
                                                <Grid item sm={6}>
                                                    <div>
                                                        delivery type

                                                    </div>
                                                </Grid>
                                                <Grid item sm={6}>
                                                    <div>
                                                        Premium Delivery

                                                    </div>
                                                </Grid>
                                            </Grid>

                                            <Grid container alignItems={'flex-start'} className={classes.detailPadding}>
                                                <Grid item sm={6}>
                                                    <div>
                                                        location

                                                    </div>
                                                </Grid>
                                                <Grid item sm={6}>
                                                    <div>
                                                        12D, Flr 5, Block 3, Ming Ting Crescent,
                                                        Tung Chung Lautau Island, Hong Kong

                                                    </div>
                                                </Grid>
                                            </Grid>

                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>
                </Collapse>
            </div>


        );
    }
}

OrderDetail.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OrderDetail);