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
    fontWeight:600,
    fontSize:'20px',
    color:'#01B1A8'
}

const Article1 = () => {
  return (
    <Box>
      <Badge
        sx={{
          borderRadius: "5px",
          minWidth: "max-content",
          padding: "5px 10px",
          fontSize: "14px",
          fontWeight: 400,
          color: "#287975",
          background: "#B6E6E4 0% 0% no-repeat padding-box",
          marginBottom: "23px",
        }}
      >
        Business
      </Badge>
      <Typography sx={TitleStyle}>Going Big With Gig Economy</Typography>
      <Typography sx={DateStyle}>
        June 24, 2023
        <CircleIcon sx={CircleIconStyle} />
        <span style={{ fontWeight: 400 }}>7 min read</span>
      </Typography>
      <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "end",
          gap: "30px",
          marginBottom:'40px'
        }}
      >
        <img
          src="/images/article1img.png"
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
            To combat rising unemployment in Malaysia, SOLVNEX is pushing to
            disrupt the traditional hiring landscape to provide opportunities
            for gig professionals and corporations alike.
          </Typography>
          <br />
          <br />
          <Typography sx={QuoteStyle}>
            “Gig” is a term widely used by jazz musicians since the 20s (that’s
            1920s, mind you) to describe a paid engagement for a live
            performance. Yet in recent years, usage of the word expanded to
            define alternative work arrangements across all industries with the
            features of early jazz gigs such as jobs of a short-term and
            task-based nature.
          </Typography>
          <br />
          <br />
          <Typography sx={TextStyle}>
            The gig economy gained prominence in the past decade or so, boosted
            by advances in technology and digital connectivity, coming a long
            way since the early aughts when digital nomads were the
            posterchildren of the way of life.
          </Typography>
        </Stack>
      </Stack>
      <Typography sx={TextStyle}>
            According to a research paper by Mastercard, “Fueling the global gig
            economy”, the number of global gig workers is expected to rise to 78
            million in 2023 from 43 million in 2018. On the other hand, the
            number of freelancers is projected to grow to 915 million from 770
            million within the same period. For this research, gig workers are
            defined as freelancers who are connected to customers by digital gig
            platforms and are expected to make up 10 per cent of the freelancer
            population by 2023.
          </Typography>
          <br />
          <br />
          <Typography sx={TextStyle}>
            Consequently, the research projects global gig economy wage
            disbursement to reach USD298 billion by 2023 on the back of growing
            demand and workforce.
          </Typography>
          <br />
          <br />
          <Typography sx={SubtitleStyle}>Untapped opportunities</Typography>
          <br />
          <br />
          <Typography sx={TextStyle}>“Observing this trend, we saw an opportunity in the untapped market for gig economy in Malaysia. As more and more gig workers come into the workforce, be it by choice and due to circumstances outside their control, we hope our platform can help connect these workers to the right jobs available,” says Qadir Hairi, the Chief Executive Officer of SOLVNEX, a platform that uses machine learning to match gig workers with suitable jobs posted on the site. </Typography>
          <br />
          <br />
          <Typography sx={TextStyle}>“When this startup was in its ideation stage under the Social Enterprise Education Lab (SEEd.Lab) programme by PETRONAS and Tata Consultancy Services (TCS), our vision was to connect graduate talents or young professionals who are unemployed to gigs from corporations and SMEs. COVID-19 hit when we were still refining our ideas, and when the youth unemployment numbers in Malaysia grew as a result, we were certain that our startup could do some good in this uncertain climate,” Qadir adds.</Typography>
          <br />
          <img src="/images/article1.2img.png"
          alt="image"
          width="100%"
          height="391px"
          style={{ borderRadius: "10px" }} />
          <br />
          <Typography sx={TextStyle}>
          According to the World Bank, about 25.1 per cent of the workforce in Malaysia are self-employed in 2020. This number is expected to rise as companies scale down due to the economic impact of the pandemic. Even then, awareness and acceptance of the gig economy are still at an early stage. 
          </Typography>
          <br />
          <br />
          <Typography sx={TextStyle}>“From our research, we found that a lot of corporate governance structure for large corporations do not cover gig professionals. This means that they do not have a process for hiring freelancers, which is a huge missed opportunity for both the corporations and the gig professionals in our target market,” Qadir reveals. One of the major reasons for this, is that corporate Malaysia has yet to find the right approach to integrate the gig worker option into their hiring structure. </Typography>
          <br />
          <br />
          <Typography sx={TextStyle}>An Ernst and Young (E&Y) initiative to leverage the gig economy in the US, saw the company launch a tech solution, GigNow to enable better contingent worker recruitment. The experiment showed significant benefits, including a 60 per cent time reduction in filling up vacancies, increased cost savings, and improved agility. E&Y believes that gig economy could possibly form some 20 to 30 per cent of most large global companies’ workforces within the next three to five years.</Typography>
          <br />
          <br />
          <Typography sx={SubtitleStyle}>Putting the word out</Typography>
          <br />
          <br />
          <Typography sx={TextStyle}>Unlike other gig work platforms, SOLVNEX is focused on the Malaysian job market and on getting corporations and SMEs to participate in the gig economy – the first in country to do so. </Typography>
          <br />
          <br />
          <Typography sx={TextStyle}>Qadir believes that it is imperative for Malaysian corporations to catch up and incorporate gig economy into considerations when they deliberate upon policies and processes. SOLVNEX is in the midst of a Proof of Concept delivery with a corporation to do just that. </Typography>
          <br />
          <br />
          <Typography sx={TextStyle}>
          “A lot of companies have just two ways to hire a talent: permanent or contract of at least a year. We are working with corporations to deconstruct and disrupt traditional hiring mechanism while taking into account the security and risk factors, and adhering with the governing policy in place,” he explains. 
          </Typography>
          <br />
          <br />
          <Typography sx={TextStyle}>The SOLVNEX team takes different approaches to reach corporations and SMEs. With the latter, the team reached out through online campaigns through social media such as LinkedIn, Facebook and Instagram. For corporations, a more hands-on approach is necessary. </Typography>
          <br />
          <br />
          <Typography sx={TextStyle}>“We need to knock on their doors, introduce ourselves and pitch our ideas to get their buy-in. Corporations are gradually becoming aware of this alternative hiring method, attempts have been made now and then but they quickly run out of momentum,” Qadir says. </Typography>
          <br />
          <br />
          <Typography sx={TextStyle}>And the team at SOLVNEX really put their money where their mouth is. Qadir reveals that while the team, who met through SEEd.Lab had a great mix of skills to support this startup, they lacked a programmer to build the application which formed SOLVNEX today.</Typography>
          <br />
          <br />
          <Typography sx={SubtitleStyle}>A trusted platform</Typography>
          <br />
          <br />
          <Typography sx={TextStyle}>The team at SOLVNEX is also highly involved in upholding the quality of the jobs taking place on the platform, carefully screening gig workers that sign up, with relevant background checks and pre-assessments to make sure that their level of experience and skills are as claimed.  </Typography>
          <br />
          <br />
          <Typography sx={TextStyle}>“We also make sure that the jobs posted by the companies are legitimate. Every job that is posted is screened, verified and approved by a designated person in SOLVNEX. We also have a review and feedback system as a control for the quality of the job transactions,” Qadir explains. </Typography>
          <br />
          <br />
          <Typography sx={TextStyle}>
          Once they go through this initial stage, companies and gig workers can easily find their match via a search as SOLVNEX employs an algorithm developed based on historical and statistical data that describe how companies hire – are they cost sensitive, what level of skill is required, what are the optional and mandatory skills, just to name a few. 
          </Typography>
          <br />
          <br />
          <Typography sx={TextStyle}>While initially anchoring their vision on alleviating youth unemployment, SOLVNEX now welcomes professionals and talents from all walks of life, with general and niche skills. </Typography>
          <br />
          <br />
          <Typography sx={TextStyle}>“There’s been a lot of retrenchment since COVID-19 and we hope SOLVNEX can be a new source of livelihood for these talented individuals. We recently welcomed a 70-year-old retiree from the oil and gas industry. He has immense potential and experience as a trainer for the industry and we feel that it is a waste to let go of these talents for lack of a platform or avenue to find jobs,” Qadir says, reiterating that the gig economy harbours opportunities across all industries. </Typography>
          <br />
          <br />
          <Typography sx={TextStyle}>Qadir credits the team’s time at SEEd.Lab for the progress made by the startup. The team came to SEEd.Lab as individuals eager to make a difference and found the means and support to realise their ambitions in a feasible manner. </Typography>
          <br />
          <br />
          <Typography sx={TextStyle}>“We were able to get the right guidance from established mentors and support from the programme. Through SEEd.Lab, we even got to meet with various startup players and work with them to learn as much as possible, giving us a leg up when we graduate from the programme. </Typography>
          <br />
          <br />
          <Typography sx={TextStyle}>“We just wanted to help. We’ve all had experiences working in various industries. But when we saw the advertisement for SEEd.Lab, we saw an opportunity not to be missed. We have a team here that has a good mix of talents, we grouped together because our strengths meshed well and we are all hustlers,” Qadir enthuses with a smile.</Typography>
    </Box>
  );
};

export default Article1;
