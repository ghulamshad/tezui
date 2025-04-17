import React from 'react';
import { Slider as MUISlider, SliderProps as MUISliderProps } from '@mui/material';

interface SliderProps extends MUISliderProps {
  value: number;
  onChange: (event: Event, value: number | number[]) => void;
}

const Slider: React.FC<SliderProps> = ({
  value,
  onChange,
  ...props
}) => {
  return <MUISlider value={value} onChange={onChange} {...props} />;
};

export default Slider;
