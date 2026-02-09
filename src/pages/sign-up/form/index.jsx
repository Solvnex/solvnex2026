/* eslint-disable @next/next/no-img-element */
import { Box, Button, Link, Stack, Typography, TextField, Select, MenuItem } from '@mui/material';
import { CustomTextfield } from '../../../components/custom-textfield';
import {
  FormTitle,
  SignupFormDesc,
  SignupFormTitle,
  SignupWithEmailBtn,
  SignupWithGoogleBtn,
  TabStyle,
} from '../../../components/sign-up/Signup.Styles';
import SecondaryLayout from '@/components/layout/SecondaryLayout';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Api from '@/api';
import Swal from 'sweetalert2';

const SignupForm = ({ role }) => {
  const router = useRouter();

  const [errors, setErrors] = useState([]);
  const [input, setInput] = useState({ role });
  const [deps, setDeps] = useState([]);

  useEffect(()=>{
    const fetchDeps = async () => {
      try {
        const resp = await Api.departments();
        setDeps(resp);
        setInput(prev => ({ ...prev, departmentId: resp[0]?.id }));
      } catch (ex) {
        console.log(ex);
        setDeps([]);
      }
    };
    fetchDeps();
  },[])

  const onChangeInput = (ev) => {
    const name = ev.target.name;
    const value = ev.target.value;

    input[name] = value;
    setInput({ ...input });
  }

  

  const onSubmit = async () => {
    try {
      const resp = await Api.register(input)
      if (resp.uuid)
        router.push('/sign-up/call-arranged');
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
    <SecondaryLayout>
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
          <Typography sx={SignupFormTitle}>
            Thank you for your respond! Now, Let&apos;s us do your job.
          </Typography>
          <Typography sx={SignupFormDesc}>
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
            <Typography sx={{ ...TabStyle, borderBottom: '3px solid #01b1a8' }}>
              Sign Up
            </Typography>
            <Link
              href="/sign-in"
              sx={{
                ...TabStyle,
                textDecoration: 'none',
              }}
            >
              Sign In
            </Link>
          </Stack>
          <Stack sx={{ flexDirection: 'column', marginBottom: '28px' }}>
            <Typography sx={FormTitle}>
              Full name{' '}
              <span style={{ fontWeight: 600, color: '#01b1a8' }}>*</span>
            </Typography>
            <TextField
              helperText={checkError("/fullname")?.message}
              error={checkError("/fullname")}
              value={input["fullname"]}
              name="fullname"
              onChange={onChangeInput}
              sx={{ marginBottom: '30px' }}
              placeholder="Fullname"
            />

            <Typography sx={FormTitle}>
              Username{' '}
              <span style={{ fontWeight: 600, color: '#01b1a8' }}>*</span>
            </Typography>
            <TextField
              helperText={checkError("/username")?.message}
              error={checkError("/username")}
              value={input["username"]}              
              name="username"
              onChange={onChangeInput}
              sx={{ marginBottom: '30px' }}
              placeholder="Username"
            />
            <Typography sx={FormTitle}>
              Email address{' '}
              <span style={{ fontWeight: 600, color: '#01b1a8' }}>*</span>
            </Typography>
            <TextField
              helperText={checkError("/email")?.message}
              error={checkError("/email")}
              value={input["email"]}    
              type="email"
              name="email"
              onChange={onChangeInput}
              sx={{ marginBottom: '30px' }}
              placeholder="Email address"
            />
            <Typography sx={FormTitle}>
              Create password{' '}
              <span style={{ fontWeight: 600, color: '#01b1a8' }}>*</span>
            </Typography>
            <TextField
              helperText={checkError("/password")?.message}
              error={checkError("/password")}
              value={input["password"]}    
              type="password"
              name="password"
              onChange={onChangeInput}
              sx={{ marginBottom: '30px' }}
              placeholder="Enter your password"
            />
            <Typography sx={FormTitle}>
              Re-enter password{' '}
              <span style={{ fontWeight: 600, color: '#01b1a8' }}>*</span>
            </Typography>
            <TextField
              helperText={checkError("/confirmPwd")?.message}
              error={checkError("/confirmPwd")}
              value={input["confirmPwd"]}    
              type="password"
              name="confirmPwd"
              onChange={onChangeInput}
              sx={{ marginBottom: '30px' }}
              placeholder="Enter your password"
            />
            {/* <Typography sx={FormTitle}>
              Company name{' '}
              <span style={{ fontWeight: 600, color: '#01b1a8' }}>*</span>
            </Typography>
            <CustomTextfield
              sx={{ marginBottom: '30px' }}
              placeholder="Enter your company name"
            />
            <Typography sx={FormTitle}>
              Contact number{' '}
              <span style={{ fontWeight: 600, color: '#01b1a8' }}>*</span>
            </Typography>
            <CustomTextfield
              name="confirmPwd"
              onChange={onChangeInput}
              sx={{ marginBottom: '30px' }}
              placeholder="Enter your contact number"
            /> */}
            {["taskowner"].includes(input["role"]) ? <>
            <Typography sx={FormTitle}>
              Company Size
              <span style={{ fontWeight: 600, color: '#01b1a8' }}>*</span>
            </Typography>
            <Select
              helperText={checkError("/departmentId")?.message}
              error={checkError("/departmentId")}
              value={input["departmentId"] || ""}    
              name="departmentId"
              onChange={onChangeInput}
              sx={{ marginBottom: '30px' }}
              displayEmpty
            >
              {deps.map(({id, name})=><MenuItem value={id} key={id} >{name}</MenuItem>)}
            </Select> 
            </> : null}
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
            <Button onClick={onSubmit} sx={SignupWithEmailBtn}>
              Sign Up With Email
            </Button>
            {/* <Typography
              sx={{ fontWeight: 500, fontSize: '18px', color: '#212020' }}
            >
              OR
            </Typography>
            <Button sx={SignupWithGoogleBtn}>
              <img
                src="/icon/googleIcon.png"
                alt="googleIcon"
                width="25px"
                height="25px"
                style={{ marginRight: '20px' }}
              />
              Sign Up with Google
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
              href="/sign-in"
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
              Sign In
            </Link>
          </Stack>
        </Stack>
      </Box>
    </SecondaryLayout>
  );
};

export const getServerSideProps = (ctx) => {
  const { role = "freelancer" } = ctx.query;
  return { props: { role } }
}

export default SignupForm;
