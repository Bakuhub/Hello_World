import React from 'react';
import {Divider, Grid, ListItem} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles';
import PropTypes from "prop-types";
import {Link} from 'react-router-dom'
import WhiteButton from '../../../Widget/WhiteButton'
const styles = theme => ({
    root: {
        width: '100%',
    },
    img: {
        height: '100%',
        width: '100%'
    },
    textField: {
        height: '100%',
        width: '100%'
    },

    section: {},
    status: {},
    date: {},
    more: {}
});

class FeedsEdit extends React.Component {
    state = {
        anchor: 'left',
    };

    constructor() {
        super()
        this.state = {
            placeHolder: '',

            content: 'Controlled',
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
            <Grid container alignItems={'stretch'}  spacing={16} className={classes.root}>
                <Grid item sm={9}>
                    <div  contenteditable="true">
                        please enter your title here...


                    </div>
                    <div contentEditable="true">
                        please enter your contents here...


                    </div>
                </Grid>
                <Grid item sm={3}>
                    <Grid container>
                        <Grid item sm={10}/>
                        <Grid item sm={2}>
                            <Link to={'/feeds/section/edit'} className={' icon-more-16'}/>
                        </Grid>
                        <Grid item sm={12}>


                                    <WhiteButton

                                        link={'/feeds/new'}
                                        icon={'icon-add-16'}
                                        value={'Add Media'}


                                        />

                        </Grid>
                    </Grid>

                </Grid>
                <Grid item sm={12}>
                    <br/>
                    <Divider/>
                    <br/>
                </Grid>


            </Grid>
        )
    }
}


FeedsEdit.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FeedsEdit);