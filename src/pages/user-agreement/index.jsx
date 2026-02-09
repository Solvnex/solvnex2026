import React from "react";
import Image from "next/image";
import MainLayout from "@/components/layout/MainLayout";
import {
  Box,
  Breadcrumbs,
  Button,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import NextIcon from "@mui/icons-material/NavigateNext";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const TitleStyle = {
  fontWeight: 700,
  fontSize: "25px",
  color: "#212020",
  lineHeight: "30px",
  marginBottom: "60px",
};

const ButtonStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: "82px",
  padding: "81px 58px 66px 85px",
  background: "#F7F7F7",
  width: "540px",
  height: "268px",
}

const ButtonTitleStyle = {
  fontWeight: 700,
  fontSize: "32px",
  lineHeight: "38px",
  color: "#212020",
  textAlign: "left",
  marginTop: "44px",
}

const ButtonDescStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  fontWeight: 500,
  fontSize: "18px",
  lineHeight: "21px",
  color: "#504C4C",
  gap: "20px",
  textWrap:'nowrap'
}

const UserAgreement = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  const breadcrumbs = [
    <Link
      href="/"
      key="1"
      sx={{
        fontWeight: 500,
        fontSize: "16px",
        color: "#504C4C",
        textDecoration: "none",
      }}
    >
      Home
    </Link>,
    <Typography
      key="2"
      sx={{
        fontSize: "16px",
        color: "#504C4C",
        textDecoration: "none",
      }}
    >
      User Agreement
    </Typography>,
  ];

  return (
    <MainLayout>
      <Box
        sx={{
          background: "#fcfcfc",
          padding: { xs: "10px 30px", md: "14px 101px 100px" },
          width: "100%",
        }}
      >
        <Breadcrumbs sx={{ marginBottom: "30px" }} separator={<NextIcon />}>
          {breadcrumbs}
        </Breadcrumbs>
        <Typography sx={TitleStyle}>User Agreement</Typography>
        <Stack
          sx={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "30px",
            marginBottom: "100px",
          }}
        >
          <Button
          href="/user-agreement/business"
            sx={ButtonStyle}
          >
            <Image
              src="/icon/building.png"
              alt="icon"
              width={106}
              height={106}
            />
            <Typography
              sx={ButtonTitleStyle}
            >
              Business <br />
              <br />
              <span
                style={ButtonDescStyle}
              >
                Read User Agreement{" "}
                <ArrowForwardIcon sx={{ color: "#01b1a8" }} />
              </span>
            </Typography>
          </Button>
          <Button
          href="/user-agreement/gig-professional"
            sx={ButtonStyle}
          >
            <Image
              src="/icon/person.png"
              alt="icon"
              width={106}
              height={106}
            />
            <Typography
              sx={{
              ...ButtonTitleStyle,
                marginTop: "6px",
              }}
            >
              Gig Professional <br />
              <br />
              <span
                style={ButtonDescStyle}
              >
                Read User Agreement{" "}
                <ArrowForwardIcon sx={{ color: "#01b1a8" }} />
              </span>
            </Typography>
          </Button>
        </Stack>
        <Button
          onClick={handleGoBack}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            background: "#FFFFFF 0% 0% no-repeat padding-box",
            padding: "14px 20px",
            borderRadius: "10px",
            gap: "20px",
            fontWeight: 600,
            fontSize: "18px",
            lineHeight: "20px",
            color: "#01B1A8",
            marginLeft: "24px",

            "&:hover": {
              background: "#01B1A8",
              color: "#ffffff",
            },
          }}
        >
          <ArrowBackIcon />
          Back
        </Button>
      </Box>
    </MainLayout>
  );
};

export default UserAgreement;
