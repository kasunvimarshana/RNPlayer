import React, { Component } from 'react';
import { DatePickerAndroid, Text } from 'react-native';

import { t } from '../Services/i18n';

class DatePicker extends Component {
    state = {
        hasSelectedDate: false,
    }

    componentDidMount() {
        const { date, minDate } = this.props;

        DatePickerAndroid
            .open({ date, minDate })
            .then(({ action, year, month, day }) => {
                if (action !== DatePickerAndroid.dismissedAction) {
                    this.setState({ hasSelectedDate: true });

                    this.props.onDateChange(new Date(year, month, day));
                } else {
                    this.props.onDateChange(null);
                }
            })
            .catch(({ message }) =>
                console.warn(`Could not open DatepickerAndroid: ${message}`));
    }

    render() {
        if (this.state.hasSelectedDate) {
            return (
                <Text>
                    {t("DatePickerAndroid:dueDate", { date: this.props.date })}
                </Text>
            );
        }

        return null;
    }
}

export default DatePicker;