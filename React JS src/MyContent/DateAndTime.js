import React, { Component } from 'react'

class DateAndTime extends Component {
    render() {
        const currDate = new Date().toLocaleDateString();
        const currTime = new Date().toLocaleTimeString();
        return (
            <div>
                <h1>Date = {currDate}</h1>
                <h1>Time = {currTime}</h1>
            </div>
        )
    }
}
export default DateAndTime;
