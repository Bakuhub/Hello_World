import React from 'react';
import chroma from 'chroma-js';

import Select from 'react-select';
const colourOptions = [
{ value: 'red', label: 'red',color:'red' },
{ value: 'yellow', label: 'yellow' ,color:'yellow'},
{ value: 'blue', label: 'blue' ,color:'blue'},
]
const colourStyles = {
    control: styles => ({ ...styles, backgroundColor: 'white' ,}),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
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
    multiValue: (styles, { data }) => {
        const color = chroma(data.color);
        return {
            ...styles,
            backgroundColor: color.alpha(0.1).css(),
        };
    },
    multiValueLabel: (styles, { data }) => ({
        ...styles,
        color: data.color,
    }),
    multiValueRemove: (styles, { data }) => ({
        ...styles,
        color: data.color,
        ':hover': {
            backgroundColor: data.color,
            color: 'white',
        },
    }),
};

export default () => (
    <Select
        closeMenuOnSelect={false}
        defaultValue={[colourOptions[0]]}
        isMulti
        options={colourOptions}
        styles={colourStyles}
    />
);