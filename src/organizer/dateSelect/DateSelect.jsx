import React, {useState} from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import DateChoose from './DateChoose';

function DateSelect({ns}) {
  const [value, onChange] = useState(new Date());
  const today = new Date();
  const day = today.getDate();
  const maxDate = new Date();
  const tomorrow = today;
  tomorrow.setDate(day + 1);
  maxDate.setDate(day + 31);

  function dateChange() {
    // do something...
  }
  return (
    <div className="column-default">
      <Calendar
        onChange={onChange}
        value={value}
        minDate={tomorrow}
        maxDate={maxDate}
        onChange={dateChange}
      />
      <DateChoose ns={ns}/>
    </div>
  )
}

export default DateSelect