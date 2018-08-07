import React from 'react';
import DayPicker, {DateUtils} from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import Helmet from 'react-helmet'

export default class Example extends React.Component {
    constructor(props) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.handleDayMouseEnter = this.handleDayMouseEnter.bind(this);
        this.handleResetClick = this.handleResetClick.bind(this);
        this.state = this.getInitialState();
    }

    getInitialState() {
        return {
            from: this.props.startDate,
            to: this.props.endDate,
            enteredTo: null, // Keep track of the last day for mouseEnter.
        };
    }

    isSelectingFirstDay(from, to, day) {
        const isBeforeFirstDay = from && DateUtils.isDayBefore(day, from);
        const isRangeSelected = from && to;
        return !from || isBeforeFirstDay || isRangeSelected;
    }

    handleDayClick(day) {
        const {from, to} = this.state;
        if (from && to && day >= from && day <= to) {
            this.handleResetClick();
            return;
        }
        if (this.isSelectingFirstDay(from, to, day)) {
            this.setState({
                from: day,
                to: null,
                enteredTo: null,
            });
        } else {
            this.setState({
                to: day,
                enteredTo: day,
            });

        }
    }

    handleDayMouseEnter(day) {
        const {from, to} = this.state;
        if (!this.isSelectingFirstDay(from, to, day)) {
            this.setState({
                enteredTo: day,
            });
        }
    }

    handleResetClick() {
        this.setState(this.getInitialState());
    }

    render() {
        const {from, to, enteredTo} = this.state;
        const modifiers = {start: from, end: enteredTo};
        const disabledDays = {before: this.state.from};
        const selectedDays = [from, {from, to: enteredTo}];
        return (
            <div>
                <DayPicker
                    className="Range"
                    numberOfMonths={2}
                    fromMonth={from}
                    selectedDays={selectedDays}
                    disabledDays={disabledDays}
                    modifiers={modifiers}
                    onDayClick={this.handleDayClick}
                    onDayMouseEnter={this.handleDayMouseEnter}
                    onChange={this.props.onChange}
                />
                <div>
                    {!from && !to && 'Please select the first day.'}
                    {from && !to && 'Please select the last day.'}
                    {from &&
                    to &&
                    `Selected from ${from.toLocaleDateString()} to
                ${to.toLocaleDateString()}`}{' '}
                    {from &&
                    to && (
                        <button className="link" onClick={this.handleResetClick}>
                            Reset
                        </button>
                    )}
                </div>

                <Helmet>
                    <style>{`
 .Range .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
    color: white;
            background-color: #905CC4 !important;

  }
  .Range .DayPicker-Day--selected.DayPicker-Day--start ,
  .Range .DayPicker-Day--selected.DayPicker-Day--end  {
     color: white;
            background-color: #321052 !important;
  }
  .Range .DayPicker-Day {
    border-radius: 0 !important;
  }


`}</style>
                </Helmet>

            </div>
        );
    }
}