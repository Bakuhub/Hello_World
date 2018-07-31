import PropTypes from "prop-types";
import React, {Fragment} from 'react'
import {Checkbox, FormControlLabel, Grid, Switch} from '@material-ui/core'
import FormTitle from '../Widget/FormTitle'
import {withStyles} from '@material-ui/core/styles';
import InputBar from '../Widget/InputBar'
import * as styleGuide from '../../constants/styleGuide'
import SubTitle from '../Widget/SubTitle'
import PairCancelButton from '../Widget/PairCancelButton'
import IntegrationReactSelect from '../Widget/TagsBar'

const styles = theme => ({
    root: {
        padding: '30px'
    },
    title: {
        padding: ' 0 20px'

    },
    saveCancelButton: {
        paddingLeft: '60px',
    },
    form: {
        boxShadow: '-2px 2px 0px 0px' + styleGuide.greyPaperShadow,
        borderRadius: '5px',
        border: '1px solid #E8E4ED',
        padding: '30px 40px 50px 40px'
    }
    ,
    childInput: {
        padding: '60px'

    },

});

class ProductEdit extends React.Component {
    constructor() {
        super()
        this.state = {
            placeHolder: '',
            isProductOptionsShow: {
                display: 'none'
            }

        }
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,

        });
    };


    render() {
        const {classes} = this.props;

        return (
            <Grid container className={classes.root}>

                <Grid item sm={12}>
                    <Grid container spacing={40}>
                        <Grid container className={classes.title}>
                            <Grid item sm={12}>
                            </Grid>
                            <Grid item sm={4}>
                                <SubTitle title={'Product Name'}/>

                            </Grid>
                            <Grid item sm={5}/>
                            <Grid item sm={3} className={classes.saveCancelButton}>
                                <PairCancelButton action={'Save Changes'}/>
                            </Grid>
                        </Grid>

                        <Grid item sm={4}>
                            <Grid container direction={'column'} spacing={40}>
                                <Grid item>
                                    <Grid container alignItems={'stretch'} spacing={16} className={classes.form}>
                                        <Grid item sm={12}>
                                            <FormTitle title={'Images & Videos'}/>
                                        </Grid>
                                        <Grid item sm={12}>
                                            <InputBar placeHolder={"displayed name"} title={'Name'}/>
                                        </Grid>
                                        <Grid item sm={12}>
                                            <InputBar placeHolder={"Type some description..."} title={'Description'}/>
                                        </Grid>
                                        <Grid item sm={12}>
                                            <Grid container spacing={40}>
                                                <Grid item sm={6}>
                                                    <InputBar placeHolder={""}
                                                              title={'Price(default for variants)'}
                                                    />
                                                </Grid>
                                                <Grid item sm={6}>
                                                    <InputBar placeHolder={"Product Category"}
                                                              title={'Product Category'}/>
                                                </Grid>
                                            </Grid></Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Grid container spacing={16} className={classes.form}>
                                        <Grid item sm={12}>
                                            <FormTitle title={'Language Setting'}/>
                                        </Grid>


                                        <Grid item sm={1}>
                                            <div className={'egwewqngn'}/>
                                        </Grid>
                                        <Grid item sm={11}>
                                            <IntegrationReactSelect/>
                                        </Grid>

                                    </Grid>
                                </Grid></Grid>
                        </Grid>
                        <Grid item sm={8}>
                            <Grid container direction={'column'} spacing={40}>
                                <Grid item>
                                    <Grid container alignItems={'stretch'} spacing={16} className={classes.form}>
                                        <Grid item sm={12}>
                                            <FormTitle title={'Images & Videos'}/>
                                        </Grid>
                                        <Grid item sm={12}>
                                            <InputBar placeHolder={"displayed name"} title={'Name'}/>
                                        </Grid>
                                        <Grid item sm={12}>
                                            <InputBar placeHolder={"Type some description..."} title={'Description'}/>
                                        </Grid>
                                        <Grid item sm={12}>
                                            <Grid container spacing={40}>
                                                <Grid item sm={6}>
                                                    <InputBar placeHolder={""}
                                                              title={'Price(default for variants)'}
                                                    />
                                                </Grid>
                                                <Grid item sm={6}>
                                                    <InputBar placeHolder={"Product Category"}
                                                              title={'Product Category'}/>
                                                </Grid>
                                            </Grid></Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Grid container spacing={16} className={classes.form}>
                                        <Grid item sm={12}>
                                            <FormTitle title={'Inventory & Shipping'}/>
                                        </Grid>
                                        <Grid item sm={12}>
                                            <InputBar placeHolder={"e.g. AISWDAQ-1 B"}
                                                      title={'SKU(default for variants)'}/>
                                        </Grid>
                                        <Grid item sm={10}>
                                            <InputBar placeHolder={"Type some description..."}
                                                      title={'Current Stock Level'}/>
                                        </Grid>
                                        <Grid item sm={2}>
                                            <div> Stock Logs</div>

                                        </Grid>
                                        <Grid item sm={6}>
                                            <InputBar placeHolder={"Minimum stock lev el till warning"}
                                                      title={'Low Stock Warning'}/>

                                        </Grid>
                                        <Grid item sm={6}/>
                                        <Grid item sm={3} style={{paddingRight: '30px'}}>
                                            <InputBar placeHolder={"LBS"}
                                                      title={'Weight'}/>
                                        </Grid>
                                        <Grid item sm={3} style={{paddingRight: '30px'}}>
                                            <InputBar placeHolder={'inches'}
                                                      title={'Height'}
                                            />
                                        </Grid>
                                        <Grid item sm={6}/>
                                        <Grid item sm={12}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox/>
                                                }
                                                label="Offer free shipping"
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Grid container alignItems={'stretch'} spacing={16} className={classes.form}>
                                        <Grid item sm={10}>
                                            <FormTitle title={'Product Options'}/>
                                        </Grid>
                                        <Grid item sm={2}>
                                            <FormControlLabel
                                                control={
                                                    <Switch

                                                        checked={this.state.checkedB}
                                                        onChange={this.handleChange('checkedB')}
                                                        value="checkedB"
                                                    />
                                                }
                                            />
                                        </Grid>
                                        {this.props.isProductOptionsShow !== 'none' && (
                                            <Fragment>
                                                <Grid item sm={12}>
                                                    <InputBar placeHolder={"display name"} title={'Name'}/>
                                                </Grid>
                                                < Grid item sm={12}>
                                                    <InputBar placeHolder={"Type some description..."}
                                                              title={'Description'}/>
                                                </Grid>
                                                <Grid item sm={12}>
                                                    <Grid container spacing={40}>
                                                        <Grid item sm={6}>
                                                            <InputBar placeHolder={""}
                                                                      title={'Price(default for variants)'}/>
                                                        </Grid>
                                                        <Grid item sm={6}>
                                                            <InputBar placeHolder={"Product Category"}
                                                                      title={'Product Category'}/>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Fragment>
                                        )}

                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>);
    }
}

ProductEdit.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductEdit);