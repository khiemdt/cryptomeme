import * as React from 'react';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 6,
  borderRadius: 3,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#AAAAAA",
  },
  [`& .${linearProgressClasses.bar}`]: {
    backgroundColor: '#F05323',
  },
}));
interface Props {
  value: number
}

const CustomizedProgressBars = ({ value }: Props) => {
  return (
    <BorderLinearProgress variant="determinate" value={value} />
  );
}
export default CustomizedProgressBars