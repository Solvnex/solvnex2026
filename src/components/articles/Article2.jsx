import { Badge, Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
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

const Article2 = () => {
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
        <span style={{ fontWeight: 400 }}>4 min read</span>
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
        <Box sx={{ borderRadius: "10px", overflow: "hidden" }}>
          <Image
            src="/images/article2img.png"
            alt="image"
            width={667}
            height={638}
          />
        </Box>
        <Stack
          sx={{
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "start",
          }}
        >
          <Typography sx={TextStyle}>
            The traditional 9-to-5 job with a long-term contract, a cubicle, and
            a predictable routine is no longer the norm. In recent years, the
            workforce has undergone a significant transformation, with the rise
            of gig professionals, also known as freelancers or independent
            contractors. This dynamic group of workers is redefining the way we
            think about employment, career paths, and job security. In this
            article, we explore the profound impact of gig professionals and how
            they are shaping the workforce of the future.
          </Typography>
          <br />
          <br />
          <Typography sx={QuoteStyle}>
            Gig professionals are individuals who leverage their skills,
            expertise, and entrepreneurial spirit to offer their services on a
            project-by-project basis. Rather than being tied to a single
            employer, they take on multiple clients and projects, often working
            remotely.
          </Typography>
        </Stack>
      </Stack>
      <Typography sx={SubtitleStyle}>Several factors have fueled the growth of the gig economy:</Typography>
      <br />
      <br />
      <Typography sx={TextStyle}>
      1. Technology: The proliferation of digital platforms and the internet have made it easier for gig professionals to connect with clients and find work. Freelance marketplaces, like Upwork and Fiverr, provide a space for businesses and independent workers to collaborate. 
      </Typography>
      <br />
      <br />
      <Typography sx={TextStyle}>
      2. Work-Life Balance: Many gig professionals are attracted to the flexibility and autonomy that freelance work offers. They can choose when, where, and how they work, allowing for a better work-life balance. 
      </Typography>
      <br />
      <br />
      <Typography sx={TextStyle}>
      3. Specialized Skills: As industries become more specialized, the demand for niche expertise has grown. Many gig professionals have unique skills or knowledge that businesses need for specific projects. 
      </Typography>
      <br />
      <br />
      <Typography sx={TextStyle}>
      4. Cost Savings: Hiring gig professionals can be cost-effective for businesses. They often don’t require the same level of benefits and overhead costs as full-time employees.
      </Typography>
      <br />
      <br />
      <Typography sx={SubtitleStyle}>Impact on the Workforce:</Typography>
      <br />
      <br />
      <Typography sx={TextStyle}>
      The rise of gig professionals is having a profound impact on the traditional workforce: 
      </Typography>
      <br />
      <br />
      <Typography sx={TextStyle}>
      1. New Career Paths: The gig economy has opened up alternative career paths. Workers can move away from linear, corporate trajectories and craft a career that aligns more closely with their passions and interests. 
      </Typography>
      <br />
      <br />
      <Typography sx={TextStyle}>
      2. Diverse Skill Sets: Businesses can access a wider pool of specialized talent. They no longer need to rely solely on their in-house team; they can tap into the expertise of gig professionals. 
      </Typography>
      <br />
      <br />
      <Typography sx={TextStyle}>
      3. Workplace Flexibility: Traditional offices are no longer the central hub of work. Gig professionals can work from anywhere, leading to the rise of remote work and distributed teams. 
      </Typography>
      <br />
      <br />
      <Typography sx={TextStyle}>
      4. Changing Definitions of Job Security: While gig work can offer flexibility and independence, it also comes with uncertainty. Job security in the gig economy is different; it’s often based on the ability to secure the next project or client.
      </Typography>
      <br />
      <br />
      <Typography sx={SubtitleStyle}>Challenges and Opportunities</Typography>
      <br />
      <br />
      <Typography sx={TextStyle}>
      The gig economy is not without its challenges. Gig professionals often lack traditional employment benefits, such as health insurance, retirement plans, and job stability. However, the gig economy also presents opportunities for innovation and adaptability. Gig professionals can be more agile, responding to market changes and economic shifts quickly.
      </Typography>
      <br />
      <br />
      <Typography sx={TextStyle}>
      The rise of gig professionals is reshaping the workforce and challenging long-standing notions of employment. As the gig economy continues to grow, it’s important for businesses and policymakers to adapt to this new reality. The future of work is diverse, flexible, and driven by individual passions and skills. Embracing and understanding the gig economy is key to navigating the evolving landscape of employment and career development in the 21st century.
      </Typography>
    </Box>
  );
};

export default Article2;
