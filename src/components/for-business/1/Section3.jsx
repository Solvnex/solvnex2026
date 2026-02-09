/* eslint-disable @next/next/no-img-element */
import {
  Stack,
  Tooltip,
  Typography,
  styled,
  tooltipClasses,
} from '@mui/material';

import PlayIcon from '@mui/icons-material/PlayArrowOutlined';

const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.arrow}`]: {
    color: '#fff',
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#fff',
    maxWidth: 'none',
    padding: '20px',
    maxHeight: 'none',
  },
});

const ListDivStyle = {
  flexDirection: 'column',
  gap: '18px',
  alignItems: 'center',
};

const ListTitle = {
  fontWeight: 500,
  fontSize: '18px',
  color: '#fff',
  width: '92px',
  textAlign: 'center',
};

const IconDivStyle = {
  justifyContent: 'center',
  alignItems: 'center',
  background: '#FFFFFF 0% 0% no-repeat padding-box',
  boxShadow: '0px 3px 6px #00000029',
  border: '1px solid #01B1A8',
  width: '60px',
  height: '60px',
  borderRadius: '5px',
  cursor: 'pointer',
};

const ListConnector = {
  border: '2px dashed #C6C1B3',
  width: '185px',
  marginTop: '60px',
};

const Section3 = () => {
  return (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: '80px 91px 480px 101px',
        background: '#000',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}
    >
      <Typography sx={{ fontSize: '18px', color: '#fff', marginBottom: '7px' }}>
        Step 1 : Hiring Make It Easy
      </Typography>
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: '38px',
          color: '#F7D102',
          marginBottom: '50px',
        }}
      >
        A hiring platform to save your time, money and effort
      </Typography>
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Stack sx={ListDivStyle}>
          <Typography sx={ListTitle}>Job Posting</Typography>
          <CustomTooltip
            title={
              <Stack sx={{ width: '400px', height: 'auto' }}>
                <img src="/images/postJobStepImage.png" alt="..." />
              </Stack>
            }
            arrow
            placement="bottom-start"
          >
            <Stack sx={{ width: '66px', height: '66px', cursor: 'pointer' }}>
              <img src="/images/profileImage.png" alt="..." />
            </Stack>
          </CustomTooltip>
        </Stack>
        <Typography sx={ListConnector} />
        <Stack sx={ListDivStyle}>
          <Typography sx={ListTitle}>ML Matching</Typography>
          <CustomTooltip
            title={
              <Stack sx={{ width: '400px', height: 'auto' }}>
                <img src="/images/mlMatchStepImage.png" alt="..." />
              </Stack>
            }
            arrow
            placement="bottom-start"
          >
            <Stack sx={IconDivStyle}>
              <img
                src="/icon/greenChainIcon.png"
                alt="..."
                width="30px"
                height="30px"
              />
            </Stack>
          </CustomTooltip>
        </Stack>
        <Typography sx={ListConnector} />
        <Stack sx={ListDivStyle}>
          <Typography sx={ListTitle}>Technical Clarification</Typography>
          <CustomTooltip
            title={
              <Stack sx={{ width: '400px', height: 'auto' }}>
                <img src="/images/techClarificationStepImage.png" alt="..." />
              </Stack>
            }
            arrow
            placement="bottom-start"
          >
            <Stack sx={IconDivStyle}>
              <img
                src="/icon/bulletListIcon.png"
                alt="..."
                width="30px"
                height="30px"
              />
            </Stack>
          </CustomTooltip>
        </Stack>
        <Typography sx={ListConnector} />
        <Stack sx={ListDivStyle}>
          <Typography sx={ListTitle}>Rate Negotiation</Typography>
          <CustomTooltip
            title={
              <Stack sx={{ width: '400px', height: 'auto' }}>
                <img src="/images/rateNegoStepImage.png" alt="..." />
              </Stack>
            }
            arrow
            placement="bottom-start"
          >
            <Stack sx={IconDivStyle}>
              <img
                src="/icon/handCoinIcon.png"
                alt="..."
                width="30px"
                height="30px"
              />
            </Stack>
          </CustomTooltip>
        </Stack>
        <Typography sx={ListConnector} />
        <Stack sx={ListDivStyle}>
          <Typography sx={ListTitle}>
            <br />
            Hire
          </Typography>
          <CustomTooltip
            title={
              <Stack sx={{ width: '400px', height: 'auto' }}>
                <img src="/images/hireStepImage.png" alt="..." />
              </Stack>
            }
            arrow
            placement="bottom-end"
          >
            <Stack sx={IconDivStyle}>
              <img
                src="/icon/briefcaseIcon.png"
                alt="..."
                width="30px"
                height="30px"
              />
            </Stack>
          </CustomTooltip>
        </Stack>
        <Typography sx={{ ...ListConnector, width: '66px' }} />
        <Stack sx={ListDivStyle}>
          <Typography sx={ListTitle}>Project Start</Typography>
          <Stack
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
              width: '66px',
              height: '66px',
              background: 'transparent',
              border: '4px solid #1AAA55',
              borderRadius: '50%',
            }}
          >
            <PlayIcon sx={{ color: '#1AAA55', fontSize: '45px' }} />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Section3;
