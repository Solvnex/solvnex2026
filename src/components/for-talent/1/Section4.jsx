import {
  Stack,
  Tooltip,
  Typography,
  styled,
  tooltipClasses,
} from '@mui/material';
import Image from 'next/image';
import { responsive } from '@/components/shared/responsive';

import CheckIcon from '@mui/icons-material/CheckOutlined';

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
  width: { xs: '0px', md: '450px' },
  display: { xs: 'none', md: 'block' },
  marginTop: '60px',
};

const Section4 = () => {
  return (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: { xs: '30px', md: '23px 90px 476px 104px' },
        background: '#000',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}
    >
      <Typography sx={{ fontSize: '18px', color: '#fff', marginBottom: '7px' }}>
        Step 2 : Project Management
      </Typography>
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: '38px',
          color: '#F7D102',
          marginBottom: '50px',
        }}
      >
        Start work - Deliver - Done
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
          <Typography sx={ListTitle}>Project Start</Typography>
          <CustomTooltip
            title={
              <Stack sx={{ width: '400px', height: 'auto' }}>
                <Image src="/images/talentProjectStart.png" alt="talentProjectStart" width={400} height={280} style={{ width: '100%', height: 'auto' }} />
              </Stack>
            }
            arrow
            placement="bottom-start"
          >
            <Stack sx={IconDivStyle}>
              <Image src="/icon/playIcon.png" alt="play" width={30} height={30} />
            </Stack>
          </CustomTooltip>
        </Stack>
        <Typography sx={ListConnector} />
        <Stack sx={ListDivStyle}>
          <Typography sx={ListTitle}>
            <br />
            Workspace
          </Typography>
          <CustomTooltip
            title={
              <Stack sx={{ width: '400px', height: 'auto' }}>
                <Image src="/images/talentWorkspace.png" alt="talentWorkspace" width={400} height={280} style={{ width: '100%', height: 'auto' }} />
              </Stack>
            }
            arrow
            placement="bottom-start"
          >
            <Stack sx={IconDivStyle}>
              <Image src="/icon/desktopIcon.png" alt="desktop" width={30} height={30} />
            </Stack>
          </CustomTooltip>
        </Stack>
        <Typography sx={ListConnector} />
        <Stack sx={ListDivStyle}>
          <Typography sx={ListTitle}>Project Closing</Typography>
          <CustomTooltip
            title={
              <Stack sx={{ width: '400px', height: 'auto' }}>
                <Image src="/images/talentJobClose.png" alt="talentJobClose" width={400} height={280} style={{ width: '100%', height: 'auto' }} />
              </Stack>
            }
            arrow
            placement="bottom-end"
          >
            <Stack sx={IconDivStyle}>
              <Image src="/icon/stampIcon.png" alt="stamp" width={30} height={30} />
            </Stack>
          </CustomTooltip>
        </Stack>
        <Typography sx={{ ...ListConnector, width: '66px' }} />
        <Stack sx={ListDivStyle}>
          <Typography sx={ListTitle}>
            <br />
            Completed!
          </Typography>
          <Stack
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
              width: '66px',
              height: '66px',
              background: '#1AAA55 0% 0% no-repeat padding-box',
              borderRadius: '50%',
            }}
          >
            <CheckIcon sx={{ color: '#fff', fontSize: '45px' }} />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Section4;
