import PropTypes from "prop-types";
import React from 'react'
import {Grid} from '@material-ui/core'
import FormTitle from '../Widget/FormTitle'
import {withStyles} from '@material-ui/core/styles';
import InputBar from '../Widget/InputBar'
import * as styleGuide from '../../constants/styleGuide'


const styles = theme => ({
    root: {
        padding:'50px'
    },
    form: {
        boxShadow: '-2px 2px 0px 0px' + styleGuide.greyPaperShadow,
        borderRadius: '5px',
        border: '1px solid #E8E4ED',
        padding: '30px 40px 50px 40px'
    }
});

class ProductEdit extends React.Component {
    constructor() {
        super()
        this.state = {
            placeHolder: ''

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
            <Grid container  spacing={40} className={classes.root}>
                <Grid item sm={12}>
                </Grid>
                <Grid item sm={2}>

                </Grid>
                <Grid item sm={8}/>
                <Grid item sm={2}>

                </Grid>
                <Grid item sm={4} >
                    <Grid container alignItems={'stretch'} direction={'column'} className={classes.form}>
                        <Grid item>
                            <FormTitle title={'Images & Videos'}/>
                        </Grid>
                        <Grid item>
                            <Grid container alignItems={'center'}>
                                <Grid item>
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>

                </Grid>
                <Grid item sm={8}  >
                    <Grid container direction={'column'} spacing={40}>
                        <Grid item>
                            <Grid container alignItems={'stretch'} spacing={16} className={classes.form}>
                                <Grid item sm={12}>
                                    <FormTitle title={'Images & Videos'}/>
                                </Grid>
                                <Grid item sm={12}>
                                    <InputBar placeHolder={"fifgjweqfnqweoigno"} title={'Name'}/>
                                </Grid>
                                <Grid item sm={12}>
                                    <InputBar placeHolder={"Type some description..."} title={'Description'}/>
                                </Grid>
                                <Grid item sm={12}>
                                    <Grid container spacing={40}>
                                        <Grid item sm={6}>
                                            <InputBar placeHolder={""} title={'Price(default for variants)'}/>
                                        </Grid>
                                        <Grid item sm={6}>
                                            <InputBar placeHolder={"Product Category"} title={'Product Category'}/>
                                        </Grid>
                                    </Grid></Grid>
                            </Grid>
                        </Grid>
                        <Grid item >
                            <Grid container alignItems={'stretch'} spacing={16} className={classes.form}>
                                <Grid item sm={12}>
                                    <FormTitle title={'Images & Videos'}/>
                                </Grid>
                                <Grid item sm={12}>
                                    <InputBar placeHolder={"fifgjweqfnqweoigno"} title={'Name'}/>
                                </Grid>
                                <Grid item sm={12}>
                                    <InputBar placeHolder={"Type some description..."} title={'Description'}/>
                                </Grid>
                                <Grid item sm={12}>
                                    <Grid container spacing={40}>
                                        <Grid item sm={6}>
                                            <InputBar placeHolder={""} title={'Price(default for variants)'}/>
                                        </Grid>
                                        <Grid item sm={6}>
                                            <InputBar placeHolder={"Product Category"} title={'Product Category'}/>
                                        </Grid>
                                    </Grid></Grid>
                            </Grid>
                        </Grid>
                        <Grid item >
                            <Grid container alignItems={'stretch'} spacing={16} className={classes.form}>
                                <Grid item sm={12}>
                                    <FormTitle title={'Images & Videos'}/>
                                </Grid>
                                <Grid item sm={12}>
                                    <InputBar placeHolder={"fifgjweqfnqweoigno"} title={'Name'}/>
                                </Grid>
                                <Grid item sm={12}>
                                    <InputBar placeHolder={"Type some description..."} title={'Description'}/>
                                </Grid>
                                <Grid item sm={12}>
                                    <Grid container spacing={40}>
                                        <Grid item sm={6}>
                                            <InputBar placeHolder={""} title={'Price(default for variants)'}/>
                                        </Grid>
                                        <Grid item sm={6}>
                                            <InputBar placeHolder={"Product Category"} title={'Product Category'}/>
                                        </Grid>
                                    </Grid></Grid>
                            </Grid>
                        </Grid>

                    </Grid>

                </Grid>

            </Grid>
        );
    }
}

ProductEdit.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductEdit);