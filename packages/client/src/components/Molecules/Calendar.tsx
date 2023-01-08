import { format } from 'date-fns';
import React from 'react';
import styled from 'styled-components';
import Button from '../Atoms/Button';
import DateSelector from '../Atoms/DateSelector';
import TimeSelector from '../Atoms/TimeSelector';

type Props = {};

function Calendar({}: Props) {
  const [date, setDate] = React.useState<Date>(new Date());
  const [time, setTime] = React.useState<Date>(new Date());

  const schedule = () => {
    alert(`Date: ${date} Time: ${time}`);
  };

  return (
    <Container>
      <Title>Schedule Response</Title>
      <DateContainer>
        <RowContainer>
          <LabelSpan>Date</LabelSpan>
          <DateSpan>{format(date, 'dd/MM/yyyy')}</DateSpan>
        </RowContainer>
        <RowContainer>
          <LabelSpan>Time</LabelSpan>
          <DateSpan>{format(time, 'HH:mm a')}</DateSpan>
        </RowContainer>
      </DateContainer>
      <SelectorsContainer>
        <DateSelector onDateSelected={setDate} />
        <TimeSelector onTimeSelected={setTime} />
      </SelectorsContainer>
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

const DateContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
`;

const LabelSpan = styled.span`
  color: #777f89;
  font-size: 11px;
`;

const RowContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 8px;
`;

const DateSpan = styled.span`
  background-color: #f6f7fb;
  border-radius: 8px;
  padding: 8px;
  font-size: 12px;
  color: #777f89;
`;

const SelectorsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 16px;
  padding: 16px 0px;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #222c37;
  margin: 0px 0px 24px 0px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 16px;
`;
