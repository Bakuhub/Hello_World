import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import * as  styleGuide from '../../constants/styleGuide'
import {Divider, Grid, ListItem, ListItemIcon, ListItemText} from '@material-ui/core'

import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const styles = theme => ({
    root: {
        fontSize: styleGuide.XXXL,
        fontWeight: 'bold',
        color: styleGuide.purpleText,

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
            <div >
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
                        <Grid container alignItems={'center'} spacing={16}>
                            <Grid item sm={5}>

                                <span className={'icon-shoes-24'}/>
                                <span>Items</span>
                                {
                                    items.map((item, i) => {
                                        return (
                                            <div>
                                             <span>
                                        {item.name}(x{item.number})
                                             </span>
                                                <span className={'icon-barcode-16'}/>
                                                <span>
                                          {item.name}
                                                  </span>
                                            </div>


                                        )
                                    })
                                }
                                <Divider/>
                                <span className={'icon-phone-16'}/>
                                <span>
        Contact Details
    </span>
                                <div>
                                    +852 3829 1092
                                </div>
                                <div>
                                    email@gmail.com
                                </div>
                            </Grid>
                            <Grid item sm={7}>
                                <Grid container alignItems={'center'}>
                                    <Grid item sm={12}>
                                        <span className={'icon-warning-16'}/>
                                        <span>
                        Shiping Details
                    </span>
                                    </Grid>

                                    <Grid itme sm={6}>
                                        <div>
                                            company
                                        </div>
                                        <div>
                                            shipping cost
                                        </div>
                                        <div>
                                            tracking details
                                        </div>
                                        <div>
                                            delivery type
                                        </div>
                                        <div>
                                            location
                                        </div>

                                    </Grid>
                                    <Grid itme sm={6}>
                                        <div>
                                            SF Express
                                        </div>
                                        <div>
                                            Free Shipping
                                        </div>
                                        <div>
                                            www.thisissomelink.com/tracking
                                        </div>
                                        <div>
                                            Premium Delivery
                                        </div>
                                        <div>
                                            12D, Flr 5, Block 3, Ming Ting Crescent,
                                            Tung Chung Lautau Island, Hong Kong
                                        </div>
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