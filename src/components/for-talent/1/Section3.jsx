import {
  Stack,
  Tooltip,
  Typography,
  styled,
  tooltipClasses,
} from '@mui/material';
import Image from 'next/image';
import { responsive } from '@/components/shared/responsive';

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
  width: { xs: '0px', md: '225px' },
  display: { xs: 'none', md: 'block' },
  marginTop: '60px',
};

const Section3 = () => {
  return (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: { xs: '30px', md: '80px 91px 480px 101px' },
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
          flexDirection: responsive.rowToCol,
          justifyContent: 'flex-start',
          alignItems: 'center',
          width: '100%',
          gap: { xs: '20px', md: '0' },
        }}
      >
        <Stack sx={ListDivStyle}>
          <Typography sx={ListTitle}>Profile Set Up</Typography>
          <CustomTooltip
            title={
              <Stack sx={{ width: '400px', height: 'auto' }}>
                <Image src="/images/talentProfileStep.png" alt="talentProfileStep" width={400} height={280} style={{ width: '100%', height: 'auto' }} />
              </Stack>
            }
            arrow
            placement="bottom-start"
          >
            <Stack sx={{ width: '66px', height: '66px', cursor: 'pointer' }}>
              <Image src="/images/profileImageTalent.png" alt="profileImageTalent" width={66} height={66} style={{ width: '100%', height: '100%' }} />
            </Stack>
          </CustomTooltip>
        </Stack>
        <Typography sx={ListConnector} />
        <Stack sx={ListDivStyle}>
          <Typography sx={ListTitle}>Matching Result</Typography>
          <CustomTooltip
            title={
              <Stack sx={{ width: '400px', height: 'auto' }}>
                <Image src="/images/talentMatchImage.png" alt="talentMatchImage" width={400} height={280} style={{ width: '100%', height: 'auto' }} />
              </Stack>
            }
            arrow
            placement="bottom-start"
          >
            <Stack sx={IconDivStyle}>
              <Image src="/icon/chainIcon.png" alt="chain" width={30} height={30} />
            </Stack>
          </CustomTooltip>
        </Stack>
        <Typography sx={ListConnector} />
        <Stack sx={ListDivStyle}>
          <Typography sx={ListTitle}>Rate Negotiation</Typography>
          <CustomTooltip
            title={
              <Stack sx={{ width: '400px', height: 'auto' }}>
                <Image src="/images/talentNegoStep.png" alt="talentNegoStep" width={400} height={280} style={{ width: '100%', height: 'auto' }} />
              </Stack>
            }
            arrow
            placement="bottom-start"
          >
            <Stack sx={IconDivStyle}>
              <Image src="/icon/handCoinIcon.png" alt="handCoin" width={30} height={30} />
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
                <Image src="/images/talentHireStep.png" alt="talentHireStep" width={400} height={280} style={{ width: '100%', height: 'auto' }} />
              </Stack>
            }
            arrow
            placement="bottom-end"
          >
            <Stack sx={IconDivStyle}>
              <Image src="/icon/briefcaseIcon.png" alt="briefcase" width={30} height={30} />
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
