import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import * as  styleGuide from '../../constants/styleGuide'
import {Divider, Grid} from '@material-ui/core'

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
            title: ''
        }
    }

    render() {
        const {classes} = this.props;

        return (
            <Grid container alignItems={'center'} spacing={16} >
                <Grid item sm={5}>
                    <span className={'icon-shoes-24'}/>
                    <span>Items</span>
                    {
                        items.map((item, i) => {
                            return (
                                <Fragment>
                      <span>
                    {item.name}(x{item.number})
                </span>
                                    <span className={'icon-barcode-16'}/>
                                    <span>
                        {item.name}
                    </span>
                                </Fragment>


                            )
                        })
                    }
                    <Divider/>
                    <span className={'icon-phone-16'}/>
                    <span>
        Contact Details
    </span>
                    <span>
        +852 3829 1092
    </span>
                    <span>
        email@gmail.com
    </span>
                </Grid>
                <Grid item sm={7}>
                    <span className={'icon-warning-16'}/>
                    <span>
                        Shiping Details
                    </span>
                    <Grid container alignItems={'center'}>
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


        );
    }
}

OrderDetail.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OrderDetail);