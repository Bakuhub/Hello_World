import React, {Fragment} from 'react';
import chroma from 'chroma-js';
import * as styleGuide from '../../constants/styleGuide'
import Select from 'react-select';
import {withStyles} from "@material-ui/core/styles/index";
import PropTypes from "prop-types";

import CreatableSelect from 'react-select/lib/Creatable';
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

const colourOptions = [
    {value: 'red', label: 'red', color: 'red'},
    {value: 'yellow', label: 'yellow', color: 'yellow'},
    {value: 'blue', label: 'blue', color: 'blue'}, {value: 'red2', label: 'red', color: 'red'},
    {value: 'yellow2', label: 'yellow', color: 'yellow'},
    {value: 'blue', label: 'blue', color: 'blue'}, {value: 'red1', label: 'red', color: 'red'},
    {value: 'ye5llow', label: 'yellow', color: 'yellow'},
    {value: 'bl2ue', label: 'blue', color: 'blue'}, {value: 'red4', label: 'red', color: 'red'},
    {value: 'ye5llow', label: 'yellow', color: 'yellow'},
    {value: 'bl4ue', label: 'blue', color: 'blue'}, {value: 're5d', label: 'red', color: 'red'},
    {value: 'ye1llow', label: 'yellow', color: 'yellow'},
    {value: 'blu5e', label: 'blue', color: 'blue'},
]
const colourStyles = {
    control: styles => ({...styles, backgroundColor: 'white',}),
    option: (styles, {data, isDisabled, isFocused, isSelected}) => {
        const color = chroma(data.color);
        return {
            ...styles,
            backgroundColor: isDisabled
                ? null
                : isSelected ? data.color : isFocused ? color.alpha(0.1).css() : null,
            color: isDisabled
                ? '#ccc'
                : isSelected
                    ? chroma.contrast(color, 'white') > 2 ? 'white' : 'black'
                    : data.color,
            cursor: isDisabled ? 'not-allowed' : 'default',
        };
    },
    multiValue: (styles, {data}) => {
        const color = chroma(data.color);
        return {
            ...styles,
            backgroundColor: color.alpha(0.1).css(),
        };
    },
    multiValueLabel: (styles, {data}) => ({
        ...styles,
        color: data.color,
    }),
    multiValueRemove: (styles, {data}) => ({
        ...styles,
        color: data.color,
        ':hover': {
            backgroundColor: data.color,
            color: 'white',
        },
    }),
};

class TagsBar extends React.Component {

    constructor() {
        super()
        this.state = {
            placeHolder: '',
            title: '',
            startAdornment: '',
            endAdornment: '',

        }
    }

    render() {
        const {classes} = this.props;
        return (
            <Fragment>
                <div className={classes.title}>
                    {this.props.title}
                </div>
                <CreatableSelect
                    isMulti
                    onChange={this.handleChange}
                    options={colourOptions}
                />
            </Fragment>


        )
    }
}

TagsBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TagsBar);