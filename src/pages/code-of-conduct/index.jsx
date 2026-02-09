import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Box, Breadcrumbs, Button, Link, Typography } from "@mui/material";
import { useRouter } from "next/router";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import NextIcon from "@mui/icons-material/NavigateNext";

const TitleStyle = {
  fontWeight: 700,
  fontSize: "25px",
  color: "#212020",
  lineHeight: "30px",
  marginBottom: "60px",
};

const ListTitleStyle = {
  fontWeight: 700,
  fontSize: "20px",
  color: "#212020",
  lineHeight: "30px",
  marginBottom: "30px",
};

const ContentStyle = {
  fontWeight: 500,
  fontSize: "18px",
  color: "#212020",
  lineHeight: "30px",
  marginBottom: "30px",
};

const LinkStyle = {
  color: "#01b1a8",
  textDecoration: "underline",
};

const ListStyle = {
  fontWeight: 500,
  fontSize: "18px",
  color: "#212020",
  marginLeft: "20px",
};

const CodeofConduct = () => {
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
      Code Of Conduct
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
        <Typography sx={TitleStyle}>Code Of Conduct</Typography>
        <Typography sx={ContentStyle}>
          SOLVNEX DIGITAL SDN BHD (202101026823 (1427123-P)) has an obligation
          to conduct its business in accordance with all applicable rules,
          regulations and laws. We are committed to helping all Users act in a
          way that preserves trust and respect. This Code is meant as a guide to
          using our Site appropriately and must be always followed. Any
          questions regarding this Code should be addressed to the SOLVNEX
          Support Team where we can provide you with additional information
          regarding the correct procedure(s) to follow and address any concerns
          you may have.
        </Typography>

        <Typography sx={ListTitleStyle}>Personal Behavior</Typography>
        <Typography sx={ContentStyle}>I will:</Typography>
        <Typography sx={ListStyle}>
          A) Act ethically and with integrity.
        </Typography>
        <Typography sx={ListStyle}>
          B) Comply will all of SOLVNEX's policies.
        </Typography>
        <Typography sx={ListStyle}>
          C) Respect the rights of all Users.
        </Typography>
        <Typography sx={ListStyle}>
          D) Not abuse confidential information or participate in any other
          illegal practice.
        </Typography>
        <Typography sx={ListStyle}>
          E) Have regard for Users’ interests, rights and safety.
        </Typography>
        <Typography sx={ListStyle}>
          F) Not harass, bully or discriminate.
        </Typography>
        <Typography sx={ListStyle}>
          G) Not falsify my own or any other identity and I will provide true
          and correct information.
        </Typography>
        <Typography sx={ListStyle}>D) a data processor; or</Typography>
        <Typography sx={ListStyle}>
          H) Not seek to communicate or receive/initiate payments off-site.
        </Typography>
        <Typography sx={ListStyle}>
          I) Not agree to do work I am not capable of doing.
        </Typography>
        <Typography sx={ListStyle}>
          J) Not request the upfront release of Milestone Payments before I have
          delivered work.
        </Typography>
        <Typography sx={{ ...ListStyle, marginBottom: "30px" }}>
          K) Not abuse the services offered.
        </Typography>

        <Typography sx={ListTitleStyle}>User Content</Typography>
        <Typography sx={ContentStyle}>I will:</Typography>
        <Typography sx={ListStyle}>
          A) Be responsible for the content I post on SOLVNEX.
        </Typography>
        <Typography sx={ListStyle}>
          B) Not post content that infringes upon any copyright or the
          intellectual property rights of others.
        </Typography>
        <Typography sx={ListStyle}>
          C) Not post content that violates any law or regulation.
        </Typography>
        <Typography sx={ListStyle}>
          D) Not post content that is defamatory.{" "}
        </Typography>
        <Typography sx={ListStyle}>
          E) Not post content that is obscene or contains child pornography.
        </Typography>
        <Typography sx={ListStyle}>
          F) Not post content that includes incomplete, false or inaccurate
          information about any person, product, or service.
        </Typography>
        <Typography sx={ListStyle}>
          G) Not post content that contains any viruses or programming routines
          intended to damage any system.
        </Typography>
        <Typography sx={{ ...ListStyle, marginBottom: "30px" }}>
          H) Not post content that creates liability for SOLVNEX or harms its
          business operations or reputation.
        </Typography>

        <Typography sx={ListTitleStyle}>Confidentiality</Typography>
        <Typography sx={ContentStyle}>I will:</Typography>
        <Typography sx={ListStyle}>
          A) Respect confidentiality and privacy.
        </Typography>
        <Typography sx={{ ...ListStyle, marginBottom: "30px" }}>
          B) Not disclose information or documents I have acquired, other than
          as required by law or where authorization is given by SOLVNEX
        </Typography>

        <Typography sx={ListTitleStyle}>Contact</Typography>
        <Typography sx={ContentStyle}>I will:</Typography>
        <Typography sx={ListStyle}>
          A) Not ask other SOLVNEX users for their private contact details and
          will communicate with them only through official website features.
        </Typography>
        <Typography sx={ListStyle}>B) Not engage in fraud.</Typography>
        <Typography sx={ListStyle}>C) Not create multiple accounts.</Typography>
        <Typography sx={ListStyle}>
          D) Not use the site to illegally transfer funds.
        </Typography>
        <Typography sx={{ ...ListStyle, marginBottom: "30px" }}>
          E) Not use the site to generate false feedback about any person,
          product, or service.
        </Typography>

        <Typography sx={ListTitleStyle}>Communication</Typography>
        <Typography sx={ContentStyle}>I will:</Typography>
        <Typography sx={ListStyle}>
          A) Avoid exaggeration, derogatory remarks, and inappropriate
          references.
        </Typography>
        <Typography sx={ListStyle}>
          B) Not engage in personal attacks, negative or other unfair criticism,
          and any unprofessional conduct.
        </Typography>
        <Typography sx={{ ...ListStyle, marginBottom: "30px" }}>
          C) Use the right channel to express my opinions or inquiries
        </Typography>

        <Typography sx={ListTitleStyle}> Bidding</Typography>
        <Typography sx={ContentStyle}>I will:</Typography>
        <Typography sx={ListStyle}>A) Not underbid to avoid fees.</Typography>
        <Typography sx={ListStyle}>
          B) Not participate in projects involving illegal behaviour.
        </Typography>
        <Typography sx={{ ...ListStyle, marginBottom: "30px" }}>
          C) Only bid on projects that I plan to complete.
        </Typography>

        <Typography sx={ListTitleStyle}> Spam Or Advertising</Typography>
        <Typography sx={ContentStyle}>I will:</Typography>
        <Typography sx={ListStyle}>
        A) Not spam or advertise my website or service unless otherwise allowed. 
        </Typography>
        <Typography sx={{ ...ListStyle, marginBottom: "30px" }}>
        B) Not obtain names from mailing lists, group emails, etc to send unsolicited emails (“Spam”).
        </Typography>

        <Typography sx={ListTitleStyle}>Payments</Typography>
        <Typography sx={ContentStyle}>I will:</Typography>
        <Typography sx={ListStyle}>
          A) Not use SOLVNEX to facilitate money exchange including, but not
          limited to, cryptocurrency (e.g. bitcoin, ethereum, etc).
        </Typography>
        <Typography sx={{ ...ListStyle, marginBottom: "30px" }}>
          B) Comply with my obligations after the work is submitted by the gig
          professionals.
        </Typography>

        <Typography sx={{ ...ContentStyle, marginBottom: "100px" }}>
        Solvnex Support Team :{" "}
          <Link href="mailto:hello@solvnex.com" sx={LinkStyle}>
            hello@solvnex.com
          </Link>
        </Typography>
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

export default CodeofConduct;
