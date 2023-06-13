import useWindowDimensions from '@mfc/helpers/hooks/useWindowDimensions';
import CircularProgress from '@mui/material/CircularProgress';

interface Props {
  value?: number
  score?: number
}

const CircleProgress: React.FC<Props> = ({ value = 0, score = 0 }) => {
  const windowDimensions = useWindowDimensions();
  const isMobile = windowDimensions.width < 768;
  return (
    <div>
      <div className="relative inline-flex">
        <CircularProgress
          variant="determinate"
          value={value}
          className="w-[100px] h-[100px]"
          style={{
            width: isMobile ? 72 : 100,
            height: isMobile ? 72 : 100,
            borderRadius: "100%",
            boxShadow: "inset 0 0 0px 8px rgba(255, 150, 102, 0.1)",
            backgroundColor: "transparent",
            color: '#FF9666'
          }}
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
          <div className='text-main-1 text-26-40 font-semibold'>{score}</div>
        </div>
      </div>
    </div>
  );
};

export default CircleProgress;
