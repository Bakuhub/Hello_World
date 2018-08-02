import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Grid} from '@material-ui/core'

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
});


class DatePickers extends React.Component {


    constructor() {
        super()
        this.state = {
            placeHolder: '',


        }
    }

    render() {
        const {classes} = this.props;

        return (
            <Fragment>

                < div >
                    < label
                        htmlFor = "start" > Start </label>
                        <input type="date" id="start" name="trip"
                               value="2018-07-22"
                               min="2018-01-01" max="2018-12-31"/>
                        </div>

                        <div>
                            <label htmlFor="end">End</label>
                            <input type="date" id="end" name="trip"
                                   value="2018-07-29"
                                   min="2018-01-01"
                                   max="2018-12-31"/>
                        </div>
            </Fragment>

        );
    }
}

DatePickers.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DatePickers);