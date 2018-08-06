import React, {Fragment} from 'react';
import chroma from 'chroma-js';
import * as styleGuide from '../../constants/styleGuide'
import Select from 'react-select';
import {withStyles} from "@material-ui/core/styles/index";
import PropTypes from "prop-types";
import CreatableSelect from 'react-select/lib/Creatable';


const dot = (color = '#ccc') => ({
    alignItems: 'flex-start',
    display: 'flex',

    ':before': {
        backgroundColor: color,
        borderRadius: 10,
        content: ' ',
        display: 'block',
        marginRight: 8,
        height: 10,
        width: 10,
    },
});

const colourStyles = {
    control: styles => ({ ...styles,
        border: '1px solid #E8E4ED',
fontSize: styleGuide.L,
boxShadow: 'inset 0 2px 2px 0px #ededed',
borderRadius: '5px',
paddingRight: '10px',
backgroundColor: '#f5f5f7',
minHeight:'80px',
        alignItems:'flex-start',
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
        const color = styleGuide.purpleButton;
        return {
            ...styles,
            backgroundColor: isDisabled
                ? null
                : isSelected ? data.color : isFocused ? color : null,
            color: isDisabled
                ? '#ccc'
                : isSelected
                    ? chroma.contrast(color, 'white') > 2 ? 'white' : 'black'
                    : data.color,
            cursor: isDisabled ? 'not-allowed' : 'default',
        };
    },
    input: styles => ({ ...styles, ...dot(),}),
    placeholder: styles => ({ ...styles, ...dot()}),
    multiValue: (styles, { data }) => {
        const color = styleGuide.greyDivider;
        return {
            ...styles,
            backgroundColor: 'white',
            border:'1px solid'+styleGuide.greyDivider,
            borderRadius:'2px',
            display:'flex',
            alignItem:'center',


        };
    },
    multiValueLabel: (styles, { data }) => ({
        ...styles,
        color: styleGuide.purpleText,
    }),
    multiValueRemove: (styles, { data }) => ({
        ...styles,
        color: 'yellow',
        ':hover': {

        },
    }),
};


const colourOptions = [
    {value: 'red', label: 'red',color:'black'},
    {value: 'red', label: 'red',color:'black'},    {value: 'red', label: 'red',color:'black'},    {value: 'red', label: 'red',color:'black'},    {value: 'red', label: 'red',color:'black'},    {value: 'red', label: 'red',color:'black'},    {value: 'red', label: 'red',color:'black'},    {value: 'red', label: 'red',color:'black'},    {value: 'red', label: 'red',color:'black'},    {value: 'red', label: 'red',color:'black'},    {value: 'red', label: 'red',color:'black'},    {value: 'red', label: 'red',color:'black'},    {value: 'red', label: 'red',color:'black'},    {value: 'red', label: 'red',color:'black'},
]
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
        return (
            <Fragment>
                <div>
                    {this.props.title}
                </div>
                <CreatableSelect
                    isMulti
                    onChange={this.handleChange}
                    options={colourOptions}
                    className={'gg'}
                    defaultValue={colourOptions[2]}
                    label="Single select"
                    styles={colourStyles}
                />
            </Fragment>


        )
    }
}

TagsBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default TagsBar;