import PropTypes from "prop-types";
import React from 'react'
import {Grid} from '@material-ui/core'
import FormTitle from '../Widget/FormTitle'
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
    root: {}
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
            <Grid container alignItems={'center'} spacing={24}>
                <Grid item sm={8}>
                    <Grid container alignItems={'center'}>
                        <Grid item>
                            <FormTitle title={'Images & Videos'}/>
                        </Grid>
                    </Grid>

                </Grid>
                <Grid item sm={4}>
                </Grid>

            </Grid>
        );
    }
}

ProductEdit.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductEdit);