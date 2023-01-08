import React, { useState } from 'react';
import styled from 'styled-components';
import {
  getMonth,
  startOfWeek,
  addDays,
  startOfMonth,
  endOfMonth,
  getDate,
  addMonths,
  format,
  isSameDay,
  isSameMonth,
} from 'date-fns';
import { ReactComponent as ChevronLeft } from '../assets/chevron-left.svg';
import { ReactComponent as ChevronRight } from '../assets/chevron-right.svg';

export type DateSelectorProps = {
  onSelectedDateChange: (date: Date) => void;
};

function DateSelector({ onSelectedDateChange }: DateSelectorProps) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [activeDate, setActiveDate] = useState(new Date());
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  const getWeekDates = (weekDate: Date) => {
    const weekDates = [];
    let currentDate = startOfWeek(weekDate);
    for (let i = 0; i < 7; i++) {
      weekDates.push(currentDate);
      currentDate = addDays(currentDate, 1);
    }
    return weekDates;
  };

  const getMonthDates = (monthDate: Date) => {
    const monthDates = [];
    const monthStartDate = startOfMonth(monthDate);
    const monthEndDate = endOfMonth(monthDate);
    console.log('monthEndDate', monthEndDate);
    let currentDate = monthStartDate;
    while (currentDate <= monthEndDate) {
      monthDates.push(...getWeekDates(currentDate));
      currentDate = startOfWeek(addDays(currentDate, 7));
      console.log('currentDate', currentDate);
    }
    return monthDates;
  };

  const handleMonthChange = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      setActiveDate(addMonths(activeDate, 1));
    } else {
      setActiveDate(addMonths(activeDate, -1));
    }
  };

  const selectDate = (date: Date) => {
    setSelectedDate(date);
    onSelectedDateChange(date);
  };

  return (
    <Container>
      <MonthContainer>
        <MonthLabel>{format(activeDate, 'MMMM yyyy')}</MonthLabel>
        <ChevronContainer>
          <ChevronButton onClick={() => handleMonthChange('prev')}>
            <ChevronLeft />
          </ChevronButton>
          <ChevronButton onClick={() => handleMonthChange('next')}>
            <ChevronRight />
          </ChevronButton>
        </ChevronContainer>
      </MonthContainer>
      <DayContainer>
        {days.map((day, index) => (
          <div key={index}>{day}</div>
        ))}
      </DayContainer>
      <DateContainer>
        {getMonthDates(activeDate).map((date, index) => {
          const isSelected = isSameDay(date, selectedDate);
          const isActive = isSameMonth(date, activeDate) || isSelected;
          return (
            <CalendarDate
              key={index}
              isDateSelected={isSelected}
              isDateActive={isActive}
              onClick={() => selectDate(date)}
            >
              {getDate(date)}
            </CalendarDate>
          );
        })}
      </DateContainer>
    </Container>
  );
}

export default DateSelector;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 300px;
  padding: 8px;
`;

const MonthContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ChevronContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 16px;
`;

const DayContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
  justify-items: center;
  align-items: center;
  font-size: 12px;
  color: #e4e7ec;
`;

const DateContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 8px;
  justify-items: center;
  align-items: center;
`;

const MonthLabel = styled.p`
  color: #5c7dd2;
  font-weight: bold;
  font-size: 12px;
  padding: 0px 8px;
`;

const CalendarDate = styled.button<{
  isDateSelected: boolean;
  isDateActive: boolean;
}>`
  border: none;
  background: none;
  cursor: pointer;
  font-size: 12px;
  border-radius: 8px;
  height: 28px;
  width: 28px;
  padding: 0px;
  color: ${({ isDateActive }) => (isDateActive ? 'black' : '#e4e7ec')};
  background: ${({ isDateSelected }) => (isDateSelected ? '#e4e7ec' : 'none')};
  font-weight: ${({ isDateSelected }) => (isDateSelected ? 'bold' : 'normal')};
`;

const ChevronButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 28px;
  width: 28px;
`;
