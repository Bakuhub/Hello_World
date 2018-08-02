import React from 'react';
import * as styleGuide from '../../constants/styleGuide'
import {Grid, Input} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles';
import PropTypes from "prop-types";


const styles = theme => ({
    inputBar: {
        backgroundColor: styleGuide.greyInputBackGround,
        borderRadius: '5px',
        height: '35px',
        border: '1px solid #E8E4ED',
        fontSize: '14px',
        color: styleGuide.purpleText,
        paddingLeft: '10px',
        paddingRight: '10px',
        boxShadow: 'inset 0 5px 1px -5px #000000'
    },
    title: {
        color: styleGuide.lighterText,
        fontSize: styleGuide.XL,

        fontWeight: 'lighter',
        paddingBottom: styleGuide.M,
    }
});

class SearchBar extends React.Component {
    state = {
        anchor: 'left',
    };

    constructor() {
        super()
        this.state = {
            placeHolder: '',


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
            <Grid container alignItems={'center'}
                  className={' whiteBackGround lighterBorder regHeight'}
            >
                <Grid item sm={1}>
                    <div className={' icon-search-16'} style={{}}/>
                </Grid>
                <Grid item sm={10}>

                    <Input placeholder={this.props.placeHolder}
                           disableUnderline={true}
                           className={'Thin'}
                    />
                </Grid>
            </Grid>
                )
                }}


SearchBar.propTypes = {
                classes: PropTypes.object.isRequired,
            };

                export default withStyles(styles)(SearchBar);