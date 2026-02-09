/* eslint-disable @next/next/no-img-element */
import { Box, Button, Link, Stack, TextField, Typography } from '@mui/material';
import { CustomTextfield } from '@/components/custom-textfield';
import SquareCheckbox from '@/components/custom-checkbox/SquareCheckbox';
import MainLayout from '@/components/layout/MainLayout';
import Api from '@/api';
import { useState } from 'react';
import Swal from 'sweetalert2';

const TabStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  paddingBottom: '14.5px',
  width: 'max-content',
  fontWeight: 700,
  fontSize: '18px',
  color: '#212020',
};

const FormTitle = {
  fontWeight: 500,
  fontSize: '18px',
  color: '#504c4c',
  marginBottom: '10px',
};

function SignIn() {
  const [errors, setErrors] = useState([]);
  const [input, setInput] = useState({});

  const onChangeInput = (ev) => {
    const name = ev.target.name;
    const value = ev.target.value;

    input[name] = value;
    setInput({ ...input });
  }

  const onSubmit = async () => {
    try {
      const { token } = await Api.login(input)
      if (token) {
        localStorage.setItem("", `__q_strn|${token}`)
        window.location.href = "/dashboard";
      }
    } catch (ex) {
      if (ex.name == "ValidationError") {
        setErrors(ex.errors);
      } else {
        Swal.fire({ title: "Error", text: ex.message, icon: "error" });
      }
    }
  }

  const checkError = (path) => {
    return errors.find(({ path: pth }) => path == pth);
  }


  return (
    <MainLayout>
      <Box
        sx={{
          padding: { xs: '30px', md: '92px 198px 100px 127px' },
          background: '#fcfcfc',
        }}
      >
        <Stack
          sx={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'start',
            gap: '26px',
          }}
        >
          <Typography
            sx={{ fontWeight: 600, fontSize: '40px', color: '#212020' }}
          >
            My Account
          </Typography>
          <Typography sx={{ fontSize: '20px', color: '#212020' }}>
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our privacy policy.
          </Typography>
        </Stack>
        <Stack
          sx={{
            flexDirection: 'column',
            padding: { xs: '20px', md: '60px 434px 0 71px' },
          }}
        >
          <Stack
            sx={{ flexDirection: 'row', gap: '28px', marginBottom: '30.5px' }}
          >
            <Link
              href="/sign-up"
              sx={{
                ...TabStyle,
                textDecoration: 'none',
              }}
            >
              Sign Up
            </Link>
            <Typography
              sx={{
                ...TabStyle,
                borderBottom: '3px solid #01b1a8',
              }}
            >
              Sign In
            </Typography>
          </Stack>
          <Stack sx={{ flexDirection: 'column', marginBottom: '28px' }}>
            <Typography sx={FormTitle}>
              Username or email address{' '}
              <span style={{ fontWeight: 600, color: '#01b1a8' }}>*</span>
            </Typography>
            <TextField
              helperText={checkError("/username")?.message}
              error={checkError("/username")}
              name="username"
              onChange={onChangeInput}
              sx={{ marginBottom: '30px' }}
              placeholder="Username or email address"
            />
            <Typography sx={FormTitle}>
              Your password{' '}
              <span style={{ fontWeight: 600, color: '#01b1a8' }}>*</span>
            </Typography>
            <TextField
              helperText={checkError("/password")?.message}
              error={checkError("/password")}
              name="password"
              onChange={onChangeInput}
              sx={{ marginBottom: '12px' }}
              type="password"
              placeholder="Enter your password"
            />
            <Stack
              sx={{
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: { xs: 'center', sm: 'space-between' },
                alignItems: { xs: 'start', sm: 'center' },
              }}
            >
              <Stack
                sx={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}
              >
                <SquareCheckbox sx={{ marginRight: '10px' }} />
                <Typography
                  sx={{ fontWeight: 500, fontSize: '18px', color: '#504c4c' }}
                >
                  Remember me
                </Typography>
              </Stack>
              <Link
                href=""
                sx={{
                  justifyContent: 'flex-end',
                  fontWeight: 500,
                  fontSize: '18px',
                  color: '#212020',
                  textDecoration: 'none',
                }}
              >
                Forgot your password?
              </Link>
            </Stack>
          </Stack>
          <Stack
            sx={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '30px',
              marginBottom: '16px',
            }}
          >
            <Button
              onClick={onSubmit}
              sx={{
                width: '100%',
                background: '#01b1a8',
                borderRadius: '5px',
                padding: '14px 0',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#fff',
                '&:hover': {
                  background: '#fff',
                  color: '#01b1a8',
                  border: '2px solid #00AB9F',
                },
              }}
            >
              Sign In With Email
            </Button>
            {/* <Typography
              sx={{ fontWeight: 500, fontSize: '18px', color: '#212020' }}
            >
              OR
            </Typography>
            <Button
              sx={{
                width: '100%',
                background: '#EDEDED',
                borderRadius: '5px',
                padding: '14px 0',
                justifyContent: 'center',
                alignItems: 'center',
                fontWeight: '600',
                fontSize: '18px',
                lineHeight: '20px',
                color: '#212020',
                '&:hover': {
                  background: '#ededed',
                  color: '#212020',
                },
              }}
            >
              <img
                src="/icon/googleIcon.png"
                alt="googleIcon"
                width="25px"
                height="25px"
                style={{ marginRight: '20px' }}
              />
              Sign In with Google
            </Button> */}
          </Stack>
          <Stack
            sx={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <Typography
              sx={{ fontWeight: 500, fontSize: '18px', color: '#504C4C' }}
            >
              Don&apos;t have an account ?
            </Typography>
            <Link
              href="/sign-up"
              sx={{
                fontWeight: 500,
                fontSize: '18px',
                color: '#01b1a8',
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              Sign Up
            </Link>
          </Stack>
        </Stack>
      </Box>
    </MainLayout>
  );
};

export default SignIn;
