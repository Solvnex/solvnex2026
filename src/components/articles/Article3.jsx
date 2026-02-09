import { Badge, Box, Stack, Typography } from "@mui/material";
import React from "react";

import CircleIcon from "@mui/icons-material/Circle";

const TitleStyle = {
  fontWeight: 700,
  fontSize: "25px",
  color: "#212020",
  marginBottom: "15px",
  textAlign: "left",
};

const DateStyle = {
  fontWeight: 500,
  fontSize: "14px",
  color: "#504C4C",
  textWrap: "nowrap",
  marginBottom: "40px",
};

const CircleIconStyle = {
  width: "4px",
  height: "4px",
  color: "#ff0000",
  marginX: "10px",
};

const TextStyle = {
  fontSize: "18px",
  color: "#504C4C",
};

const QuoteStyle = {
  fontWeight: 500,
  fontSize: "25px",
  color: "#504C4C",
};

const SubtitleStyle = {
  fontWeight: 600,
  fontSize: "20px",
  color: "#01B1A8",
};

const Article3 = () => {
  return (
    <Box>
      <Badge
        sx={{
          borderRadius: "5px",
          minWidth: "max-content",
          padding: "5px 10px",
          fontSize: "14px",
          fontWeight: 400,
          color: "#887305",
          background: "#F8EECC 0% 0% no-repeat padding-box",
          marginBottom: "23px",
        }}
      >
        Gig Professional
      </Badge>
      <Typography sx={TitleStyle}>
        The Rise of Gig Professionals: Redefining the Workforce of the Future
      </Typography>
      <Typography sx={DateStyle}>
        August 5, 2023
        <CircleIcon sx={CircleIconStyle} />
        <span style={{ fontWeight: 400 }}>5 min read</span>
      </Typography>
      <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "start",
          gap: "30px",
          marginBottom: "40px",
        }}
      >
        <img
          src="/images/article3img.png"
          alt="image"
          width="667px"
          height="638px"
          style={{ borderRadius: "10px" }}
        />
        <Stack
          sx={{
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "start",
          }}
        >
          <Typography sx={TextStyle}>
            In a dynamic and ever-changing market, businesses need to be agile
            and responsive to shifting demands. Traditional employment
            structures can be less flexible, making it challenging to quickly
            adapt to new opportunities or address sudden challenges. This is
            where the gig economy shines.
          </Typography>
          <br />
          <br />
          <Typography sx={QuoteStyle}>
            Businesses can swiftly scale their workforce up or down as needed.
            Whether it’s seasonal fluctuations, a sudden influx of projects, or
            specialized tasks, the gig economy allows companies to access talent
            precisely when they need it. This agility empowers businesses to
            respond promptly to market changes and maintain a competitive edge.
          </Typography>
        </Stack>
      </Stack>
      <Typography sx={SubtitleStyle}>Access to Specialized Skills</Typography>
      <br />
      <br />
      <Typography sx={TextStyle}>
        The gig economy provides businesses with access to a diverse range of
        specialized skills. Independent professionals often have niche expertise
        acquired through years of experience in their respective fields. By
        engaging these gig workers, businesses can tap into this knowledge
        without the long-term commitment associated with hiring full-time
        employees.
      </Typography>
      <br />
      <br />
      <Typography sx={TextStyle}>
        This access to specialized skills is invaluable in an increasingly
        complex and competitive business environment. Whether it’s web
        development, graphic design, digital marketing, or legal counsel,
        businesses can leverage gig professionals to fill gaps in their skill
        set, ensuring that they remain at the forefront of innovation and
        expertise.
      </Typography>
      <br />
      <br />
      <Typography sx={SubtitleStyle}>Cost-Effective Solutions</Typography>
      <br />
      <br />
      <Typography sx={TextStyle}>
        Cost-efficiency is a driving force behind the gig economy’s growth.
        Hiring full-time employees comes with numerous expenses, including
        salaries, benefits, office space, and equipment. In contrast, gig
        professionals are typically responsible for their own tools, work
        remotely, and don’t require the same level of benefits.
      </Typography>
      <br />
      <br />
      <Typography sx={TextStyle}>
        By engaging gig workers, businesses can significantly reduce overhead
        costs. This allows them to allocate resources more strategically,
        directing savings towards innovation, growth, and other core business
        needs. Moreover, businesses can negotiate project-based rates, aligning
        costs with project budgets.
      </Typography>
      <br />
      <br />
      <Typography sx={TextStyle}>
        The gig economy is not just a passing trend; it’s reshaping the way
        businesses operate and stay competitive. Agility, access to specialized
        skills, and cost-effective solutions are just three compelling reasons
        why businesses are increasingly turning to the gig economy.
      </Typography>
      <br />
      <br />
      <Typography sx={TextStyle}>
        To thrive in today’s fast-paced and ever-changing business environment,
        companies must embrace this transformative workforce model. By doing so,
        they can secure the expertise they need, remain agile in the face of
        change, and drive cost-efficiency, all while staying at the forefront of
        their industries. The gig economy is not just a workforce revolution;
        it’s a strategic advantage for businesses looking to succeed in the 21st
        century.
      </Typography>
    </Box>
  );
};

export default Article3;
