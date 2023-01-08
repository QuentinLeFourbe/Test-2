import {
  addHours,
  format,
  isSameHour,
  startOfDay,
  startOfHour,
} from 'date-fns';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export type TimeSelectorProps = {
  onTimeSelected: (time: Date) => void;
};

function TimeSelector({ onTimeSelected }: TimeSelectorProps) {
  const [selectedTime, setSelectedTime] = useState(startOfHour(new Date()));

  const getHours = () => {
    const hours = [];
    let currentHour = startOfDay(new Date());
    for (let i = 0; i < 24; i++) {
      hours.push(currentHour);
      currentHour = addHours(currentHour, 1);
    }
    return hours;
  };

  const selectHour = (hour: Date) => {
    setSelectedTime(hour);
    onTimeSelected(hour);
  };

  return (
    <HourContainer>
      {getHours().map((hour, index) => {
        const isSelected = selectedTime && isSameHour(hour, selectedTime);
        return (
          <HourItem
            key={index}
            isSelected={!!isSelected}
            onClick={() => selectHour(hour)}
          >
            {format(hour, 'HH:mm a')}
          </HourItem>
        );
      })}
    </HourContainer>
  );
}

export default TimeSelector;

const HourContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: stretch;
  justify-content: center;
  overflow: auto;
  height: 225px;
  width: 150px;
  padding: 12px 0;
  //make a thin scrollbar
  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #c2c2c2;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #999999;
  }
`;

const HourItem = styled.button<{ isSelected: boolean }>`
  color: #565f68;
  font-size: 12px;
  border: none;
  background: none;
  cursor: pointer;
  padding: 8px 0;
  &:hover {
    background: #f9fafc;
    border-radius: 4px;
  }
  ${({ isSelected }) =>
    isSelected &&
    `
    background: #f6f7fb;
    font-weight: bold;
    `}
`;
