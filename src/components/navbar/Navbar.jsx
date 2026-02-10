/* eslint-disable @next/next/no-img-element */
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Link,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import { useRouter } from "next/router";
import MenuIcon from "@mui/icons-material/MenuOutlined";
import CloseIcon from "@mui/icons-material/CloseOutlined";
import NavbarMenu from "./NavbarMenu";

const BlackBtnStyle = {
  padding: "12px 20px",
  color: "#1F1D1D",
  cursor: "pointer",
  "&:hover": {
    background: "transparent",
    color: "#01B1A8",
  },

  "&.Mui-selected": {
    color: "#01B1A8",
  },
};

const SubBtnStyle = {
  padding: "8px 20px",
  color: "#1F1D1D",
  justifyContent: "flex-start",
  textAlign: "left",
  "&:hover": {
    background: "transparent",
    color: "#01B1A8",
  },
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [businessMenu, setBusinessMenu] = useState(null);
  const [talentMenu, setTalentMenu] = useState(null);
  const [careerMenu, setCareerMenu] = useState(null);
  const router = useRouter();
  const currentPath = router.asPath || "";
  const activeBusiness = currentPath.startsWith("/for-business");
  const activeTalent = currentPath.startsWith("/for-talent");
  const activeCareer = currentPath.startsWith("/career-guides");
  const activeWhy = currentPath.startsWith("/why-solvnex");
  const activeArticles = currentPath.startsWith("/articles");
  const activeFaq = currentPath.startsWith("/faq");
  const activeSignIn = currentPath.startsWith("/sign-in");
  const activeBusiness1 = currentPath.startsWith("/for-business/1");
  const activeBusiness2 = currentPath.startsWith("/for-business/2");
  const activeTalent1 = currentPath.startsWith("/for-talent/1");
  const activeTalent2 = currentPath.startsWith("/for-talent/2");

  const handleMenuOpen = (event, setMenu) => {
    setMenu(event.currentTarget);
  };

  const handleMenuClose = (setMenu) => {
    setMenu(null);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const navigateAndClose = (href) => {
    router.push(href);
    setOpen(false);
  };

  const businessMenuItems = [
    { label: "Solvnex Matching Platform", href: "/for-business/1" },
    { label: "Recruit Project-Based Talents", href: "/for-business/2" },
  ];

  const talentMenuItems = [
    { label: "Task-Based Gig Platform", href: "/for-talent/1" },
    { label: "Recruit Project-Based Talents", href: "/for-talent/2" },
  ];

  const careerMenuItems = [
    { label: "Career Development", href: "/career-guides/career-development" },
    {
      label: "Pay & Salary Discovery",
      href: "/career-guides/pay-and-salary-discovery",
    },
    {
      label: "Resume & Cover Letter",
      href: "/career-guides/resume-and-cover-letter",
    },
    {
      label: "Interview Preparation",
      href: "/career-guides/interview-preparation",
    },
  ];

  const drawerContent = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "85vw",
        maxWidth: 400,
        padding: "30px",
        gap: "10px",
      }}
    >
      <IconButton
        sx={{
          justifyContent: "flex-end",
        }}
        onClick={handleDrawerClose}
      >
        <CloseIcon />
      </IconButton>

      <Button
        onClick={() => navigateAndClose("/for-business/1")}
        sx={{
          ...SubBtnStyle,
          color: activeBusiness1 ? "#01B1A8" : "#1F1D1D",
          marginLeft: "10px",
        }}
      >
        Solvnex Matching Platform
      </Button>
      <Button
        onClick={() => navigateAndClose("/for-business/2")}
        sx={{
          ...SubBtnStyle,
          color: activeBusiness2 ? "#01B1A8" : "#1F1D1D",
          marginLeft: "10px",
        }}
      >
        Recruit Project-Based Talents
      </Button>

      <Button
        onClick={() => navigateAndClose("/for-talent/1")}
        sx={{
          ...SubBtnStyle,
          color: activeTalent1 ? "#01B1A8" : "#1F1D1D",
          marginLeft: "10px",
        }}
      >
        Task-Based Gig Platform
      </Button>
      <Button
        onClick={() => navigateAndClose("/for-talent/2")}
        sx={{
          ...SubBtnStyle,
          color: activeTalent2 ? "#01B1A8" : "#1F1D1D",
          marginLeft: "10px",
        }}
      >
        Recruit Project-Based Talents
      </Button>
      <Button
        onClick={() => navigateAndClose("/why-solvnex")}
        sx={{ ...BlackBtnStyle, color: activeWhy ? "#01B1A8" : "#1F1D1D" }}
      >
        Why Solvnex
      </Button>
      <Button
        onClick={() => navigateAndClose("/career-guides")}
        sx={{ ...BlackBtnStyle, color: activeCareer ? "#01B1A8" : "#1F1D1D" }}
      >
        Career Guides
      </Button>
      <Button
        onClick={() => navigateAndClose("/articles")}
        sx={{ ...BlackBtnStyle, color: activeArticles ? "#01B1A8" : "#1F1D1D" }}
      >
        Articles
      </Button>
      <Button
        onClick={() => navigateAndClose("/faq/page-1")}
        sx={{ ...BlackBtnStyle, color: activeFaq ? "#01B1A8" : "#1F1D1D" }}
      >
        FAQ
      </Button>
      {/* <Button sx={{ ...BlackBtnStyle, color: activeSignIn ? '#01B1A8' : '#1F1D1D' }}>Sign In</Button>
      <Button
        sx={{
          padding: '12px 20px',
          background: '#01b1a8 0% 0% no-repeat padding-box',
          color: '#fff',
          '&:hover': {
            background: '#01b1a8 0% 0% no-repeat padding-box',
            color: '#fff',
          },
          '&.Mui-selected': {
            background: 'transparent',
            color: '#01B1A8',
          },
        }}
      >
        Sign Up
      </Button> */}
    </Box>
  );

  return (
    <AppBar
      sx={{
        position: "sticky",
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "88px",
        background: "#fcfcfc",
        padding: { xs: "30px", md: "23px 62px 24px 70px" },
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "none",
        zIndex: 1300,
      }}
    >
      <Link
        href="/"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <img
          src="/images/logosolvnex.png"
          alt="logo_solvnex"
          width="109px"
          height="23px"
        />
      </Link>
      <Stack
        sx={{
          display: { xs: "none", md: "flex" },
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Button
          onClick={(event) => handleMenuOpen(event, setBusinessMenu)}
          sx={{
            ...BlackBtnStyle,
            color: activeBusiness ? "#01B1A8" : "#1F1D1D",
          }}
        >
          For Business
        </Button>
        <NavbarMenu
          anchorEl={businessMenu}
          open={Boolean(businessMenu)}
          onClose={() => handleMenuClose(setBusinessMenu)}
          menuItems={businessMenuItems}
        />
        <Button
          onClick={(event) => handleMenuOpen(event, setTalentMenu)}
          sx={{ ...BlackBtnStyle, color: activeTalent ? "#01B1A8" : "#1F1D1D" }}
        >
          For Talent
        </Button>
        <NavbarMenu
          anchorEl={talentMenu}
          open={Boolean(talentMenu)}
          onClose={() => handleMenuClose(setTalentMenu)}
          menuItems={talentMenuItems}
        />
        <Button
          href="/why-solvnex"
          sx={{ ...BlackBtnStyle, color: activeWhy ? "#01B1A8" : "#1F1D1D" }}
        >
          Why Solvnex
        </Button>
        <Button
          onClick={(event) => handleMenuOpen(event, setCareerMenu)}
          sx={{ ...BlackBtnStyle, color: activeCareer ? "#01B1A8" : "#1F1D1D" }}
        >
          Career Guides
        </Button>
        <NavbarMenu
          anchorEl={careerMenu}
          open={Boolean(careerMenu)}
          onClose={() => handleMenuClose(setCareerMenu)}
          menuItems={careerMenuItems}
        />
        <Button
          href="/articles"
          sx={{
            ...BlackBtnStyle,
            color: activeArticles ? "#01B1A8" : "#1F1D1D",
          }}
        >
          Articles
        </Button>
        <Button
          href="/faq/page-1"
          sx={{ ...BlackBtnStyle, color: activeFaq ? "#01B1A8" : "#1F1D1D" }}
        >
          FAQ
        </Button>
        {/* <Button href="/sign-in" sx={BlackBtnStyle}>
          Sign In
        </Button>
        <Button
          href="/sign-up"
          sx={{
            padding: '12px 20px',
            background: '#01b1a8 0% 0% no-repeat padding-box',
            color: '#fff',
            '&:hover': {
              background: '#01b1a8 0% 0% no-repeat padding-box',
              color: '#fff',
            },
            '&.Mui-selected': {
              background: 'transparent',
              color: '#01B1A8',
            },
          }}
        >
          Sign Up
        </Button> */}
      </Stack>
      <IconButton
        aria-label="Open navigation menu"
        onClick={handleDrawerOpen}
        sx={{ display: { md: "none" }, zIndex: 1400, pointerEvents: "auto" }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="right"
        open={open}
        onClose={handleDrawerClose}
        ModalProps={{ keepMounted: true }}
        sx={{ zIndex: 1500 }}
      >
        {drawerContent}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
