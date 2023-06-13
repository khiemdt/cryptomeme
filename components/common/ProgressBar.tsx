import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import LinearProgress, {
  LinearProgressProps,
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const getPercent = (value: number) => {
  if (value % 1 === 0) {
    return value;
  }
  return value.toFixed(1);
};

interface CircularProgressBarProps extends CircularProgressProps {
  label?: boolean;
  strokeColor: string;
  trailColor: string;
  value: any;
}

export function CircularProgressBar({
  strokeColor,
  trailColor,
  label,
  value,
  ...props
}: CircularProgressBarProps) {
  const sxProps = {
    position: "absolute",
    left: 0,
    "& .MuiCircularProgress-circle": {
      strokeLinecap: "round",
    },
  };

  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
        color: strokeColor,
        fontSize: 20,
        width: 75,
        height: 75,
      }}
    >
      <CircularProgress
        {...props}
        sx={{
          ...sxProps,
          zIndex: 1,
        }}
        variant="determinate"
        color="inherit"
        value={value}
      />
      <CircularProgress
        style={{ color: trailColor }}
        variant="determinate"
        {...props}
        value={100}
        sx={sxProps}
      />
      {label ? (
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="caption"
            component="div"
            className="!text-black-0.85 !text-20-20 !font-normal"
          >{`${getPercent(value)}%`}</Typography>
        </Box>
      ) : null}
    </Box>
  );
}

interface LinearProgressBarProps extends LinearProgressProps {
  label?: boolean;
  strokeColor: string;
  trailColor: string;
  value: any;
  width?: number | string;
  height?: number | string;
}

export function LinearProgressBar({
  strokeColor,
  trailColor,
  width = 100,
  height = 8,
  ...props
}: LinearProgressBarProps) {
  const BorderLinearProgress = styled(LinearProgress)(({}) => ({
    borderRadius: 5,
    width,
    height,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: trailColor,
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: strokeColor,
    },
  }));

  return (
    <div className="flex items-center justify-between">
      <BorderLinearProgress variant="determinate" value={props.value} />
      {props.label ? (
        <Typography className="text-12-16 font-medium text-[#172239]">{`${getPercent(
          props.value
        )}%`}</Typography>
      ) : null}
    </div>
  );
}
