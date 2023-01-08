import { format, getHours, setHours, startOfDay, startOfHour } from 'date-fns';
import React from 'react';
import styled from 'styled-components';
import Button from '../Atoms/Button';
import DateSelector from '../Atoms/DateSelector';
import TimeSelector from '../Atoms/TimeSelector';

type Props = {};

function Calendar({}: Props) {
  const [date, setDate] = React.useState<Date>(startOfDay(new Date()));
  const [time, setTime] = React.useState<Date>(startOfHour(new Date()));

  const schedule = () => {
    const scheduleDate = setHours(date, getHours(time));
    alert(`
    Scheduled for ${format(scheduleDate, 'dd/MM/yyyy HH:mm a')}
    scheduleDate: ${scheduleDate}
    `);
  };

  return (
    <Container>
      <Title>Schedule Response</Title>
      <RowContainer>
        <DateContainer>
          <LabelContainer>
            <LabelSpan>Date</LabelSpan>
            <DateSpan>{format(date, 'dd/MM/yyyy')}</DateSpan>
          </LabelContainer>
          <DateSelector onDateSelected={setDate} />
        </DateContainer>
        <TimeContainer>
          <LabelContainer>
            <LabelSpan>Time</LabelSpan>
            <DateSpan>{format(time, 'HH:mm a')}</DateSpan>
          </LabelContainer>
          <TimeSelector onTimeSelected={setTime} />
        </TimeContainer>
      </RowContainer>
      <ButtonsContainer>
        <Button onClick={() => schedule()}>Schedule</Button>
        <Button mode="secondary">Cancel</Button>
      </ButtonsContainer>
    </Container>
  );
}

export default Calendar;

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: stretch;
  justify-content: center;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  margin: 16px;
  padding: 16px;
`;

const LabelContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 16px;
`;

const DateContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

const TimeContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

const LabelSpan = styled.span`
  color: #777f89;
  font-size: 11px;
`;

const RowContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 8px;
`;

const DateSpan = styled.span`
  background-color: #f6f7fb;
  border-radius: 8px;
  padding: 8px;
  font-size: 12px;
  color: #777f89;
`;

const Title = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #545b61;
  margin: 0px 0px 24px 0px;
`;

const ButtonsContainer = styled.div`
  padding-top: 8px;
  display: flex;
  flex-flow: row nowrap;
  gap: 16px;
`;
