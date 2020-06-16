import React from "react";
import moment from 'moment';
import DateTime from "../DateTime/DateTime";

function makePrettierDateTime(date) {
  const publicationDate = moment(date, 'YYYY-MM-DD HH:MM:SS')
  const difference = moment().diff(publicationDate);
  // if less than an hour
  if (difference < 3600000 ) return `${moment().diff(publicationDate, 'minutes')} минут назад`;
  // if more than an hour
  if (difference < 86400000 ) return `${moment().diff(publicationDate, 'hours')} часов назад`;
  // if more than a day
  return `${moment().diff(publicationDate, 'days')} дней назад`;
}

const withPrettyDateTime = date => Component => class extends React.Component {
  render() {
    const prettyDate = (typeof date === 'function') ? date(this.props.date) : date;
    return <Component {...this.props} date={prettyDate}/>
  }
};

const DateTimePretty = withPrettyDateTime(makePrettierDateTime)(DateTime);

export default DateTimePretty;