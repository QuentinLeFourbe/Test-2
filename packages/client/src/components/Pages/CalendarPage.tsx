import React from 'react';
import DateSelector from '../Atoms/DateSelector';
import TimeSelector from '../Atoms/TimeSelector';
import Calendar from '../Organisms/Calendar';
import CenteredLayout from '../Templates/CenteredLayout';

function CalendarPage() {
  return (
    <CenteredLayout>
      <Calendar />
    </CenteredLayout>
  );
}

export default CalendarPage;
