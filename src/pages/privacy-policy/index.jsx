import React from "react";
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

const PrivacyPolicy = () => {
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
      Privacy Policy
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
        <Typography sx={TitleStyle}>Privacy Policy</Typography>
        <Typography sx={ContentStyle}>
          SOLVNEX DIGITAL SDN BHD (202101026823 (1427123-P)) is a Malaysian
          startup company with a registered address of Level 23, Menara Exchange
          106, Lingkaran TRX Tun Razak Exchange, Kuala Lumpur, 55188 WP KUALA
          LUMPUR. It is a company providing an online service marketplace that
          connects Gig Professionals with their potential clients from
          corporates and businesses. We can be reached out through email at{" "}
          <Link sx={LinkStyle} href="mailto:hello@solvnex.com">
            hello@solvnex.com
          </Link>
          .
        </Typography>

        <Typography sx={ListTitleStyle}>1. Introduction</Typography>
        <Typography sx={ContentStyle}>
          In compliance with the Personal Data Protection Act 2010 (“the Act”)
          and its regulations, this notice is issued to all our valued Users
          and/ or prospective Users. This Notice will inform Users of their
          rights with regards to their personal data that has been and/or will
          be collected, used, disclosed, and processed by us.
        </Typography>

        <Typography sx={ListTitleStyle}>
          2. Collection of Personal Data
        </Typography>
        <Typography sx={ContentStyle}>
          We have collected and will collect Users personal data to be processed
          by us and/or on Users behalf in the course of Users present or future
          dealings with SOLVNEX DIGITAL SDN BHD, its subsidiary (ies), its
          associated company (ies) (“we”, “our”, “us” or “Company”), third party
          (ies). Users personal data enables us to achieve the “Purpose” herein
          that is in connection with our business. Third party(ies) means any
          person other than -
        </Typography>
        <Typography sx={ListStyle}>
          A) an individual who is the subject of personal data;
        </Typography>
        <Typography sx={ListStyle}>
          B) a relevant person in relation to the individual who is the subject
          of personal data;
        </Typography>
        <Typography sx={ListStyle}>
          C) SOLVNEX DIGITAL SDN BHD, its subsidiary(ies) and/or its associated
          company(ies);
        </Typography>
        <Typography sx={ListStyle}>D) a data processor; or</Typography>
        <Typography sx={{ ...ListStyle, marginBottom: "30px" }}>
          E) a person authorized in writing by SOLVNEX DIGITAL SDN BHD to
          process the personal data under the direct control of the SOLVNEX
          DIGITAL SDN BHD
        </Typography>

        <Typography sx={ListTitleStyle}>
          3. Description of Personal Data
        </Typography>
        <Typography sx={ListStyle}>A) Name;</Typography>
        <Typography sx={ListStyle}>B) Identity Card Number;</Typography>
        <Typography sx={ListStyle}>C) Gender;</Typography>
        <Typography sx={ListStyle}>D) Email address;</Typography>
        <Typography sx={ListStyle}>E) Mobile phone number;</Typography>
        <Typography sx={ListStyle}>F) Passport number;</Typography>
        <Typography sx={ListStyle}>G) IP address</Typography>
        <Typography sx={ListStyle}>H) Images (still/recording);</Typography>
        <Typography sx={ListStyle}>
          I) Sensitive personal data; and any{" "}
        </Typography>
        <Typography sx={{ ...ListStyle, marginBottom: "30px" }}>
          J) Personally Identifiable Information (PII) defined by international
          privacy laws and standards.{" "}
        </Typography>

        <Typography sx={ListTitleStyle}>
          4. Purposes for Collection of Personal Data{" "}
        </Typography>
        <Typography sx={ContentStyle}>
          SOLVNEX DIGITAL SDN BHD will use User personal data for the following
          purposes but not limited to:
        </Typography>
        <Typography sx={ListStyle}>
          A) Providing or facilitating the delivery of the services or products
          through the uses of the website;
        </Typography>
        <Typography sx={ListStyle}>B) Matching between User;</Typography>
        <Typography sx={ListStyle}>
          C) providing the services or products User have requested;
        </Typography>
        <Typography sx={ListStyle}>
          D) providing technical or other support to User;{" "}
        </Typography>
        <Typography sx={ListStyle}>
          E) answering inquiries about our services, or to respond to a
          complaint;
        </Typography>
        <Typography sx={ListStyle}>
          F) depending on the extent of consent obtained from the User, to
          process, facilitate, administer and provide you with our products and
          services, to carry out, manage and maintain your relationship with us,
          your commercial transactions and dealings with us, to send you
          promotional materials relating to our products and services, or
          promote products and services of our partners or such third parties
          which we think may be of interest to you;
        </Typography>
        <Typography sx={ListStyle}>
          G) allow for debugging, testing, and otherwise operate our platforms;
        </Typography>
        <Typography sx={ListStyle}>
          H) conducting data analysis, research and otherwise build and improve
          our platforms;
        </Typography>
        <Typography sx={ListStyle}>
          I) in other circumstances, such purposes that are necessary or
          directly related to the User’s relationship with us or where it is
          permitted under the applicable laws;
        </Typography>
        <Typography sx={{ ...ListStyle, marginBottom: "30px" }}>
          J) other purposes with User consent, unless the User withdraws their
          consent for these purposes.
        </Typography>

        <Typography sx={ListTitleStyle}>
          5. Sources of Personal Data{" "}
        </Typography>
        <Typography sx={ContentStyle}>
          SOLVNEX DIGITAL SDN BHD may obtain User personal data from the
          following sources but not limited to:
        </Typography>
        <Typography sx={ListStyle}>
          A) User-Generated Content (User Profile Creatio,);
        </Typography>
        <Typography sx={ListStyle}>B) Application Forms;</Typography>
        <Typography sx={ListStyle}>C) Feedback Forms; or</Typography>
        <Typography sx={{ ...ListStyle, marginBottom: "30px" }}>
          D) Website;{" "}
        </Typography>
        <Typography sx={ListTitleStyle}>
          6. Disclosure of personal data
        </Typography>
        <Typography sx={ContentStyle}>
          We may disclose User personal data to other subsidiaries within our
          group, our associated companies, and also Third Parties. These
          subsidiaries and Third Parties will treat User personal data as
          confidential, in accordance with this Privacy Policy and with all
          applicable Data Protection legislation and will process such personal
          data only for the Purposes and within the terms set out herein. We are
          responsible for the personal data under our control, including
          personal data disclosed by us to a data processor. We take every
          measure to provide a comparable level of protection for personal data
          should the information be processed by a data processor. SOLVNEX
          DIGITAL SDN BHD is committed to complying with the Personal Data
          Protection Act 2010, in particular, its policies as well as
          corresponding guidelines and orders.
        </Typography>

        <Typography sx={ListTitleStyle}>
          7. Security of Personal Data
        </Typography>
        <Typography sx={ContentStyle}>
          SOLVNEX DIGITAL SDN BHD uses strict procedures and security features
          to prevent unauthorized access wherever possiblE) Personal data
          provided to SOLVNEX DIGITAL SDN BHD via our website or via any
          Applications, online credit card transactions are protected during
          transit using encryption such as Transport Layer Security (TLS). When
          personal data is stored by SOLVNEX DIGITAL SDN BHD, we use computer
          systems with limited access housed in facilities using physical
          security measures. Data stored in cloud services is in encrypted form
          including when we utilize third-party storagE) The level of security
          of personal data that is kept in a non-electric environment is also
          treated with strict procedures and means.
        </Typography>

        <Typography sx={ListTitleStyle}>8. Use of Cookies</Typography>
        <Typography sx={ContentStyle}>
          The cookies used by the Website are solely associated with anonymous
          users and their computers and do not provide personal data on Users.
          Some cookies are used by third parties to provide SOLVNEX DIGITAL SDN
          BHD with data on the effectiveness of its engagements and promotions.
          The cookies used by the Website do not in any way collect personal
          data that could be used to identify a specific User. In addition,
          cookies are of a temporary nature, used solely to improve the
          efficiency of the last transmission. Users may configure their browser
          to notify them of the reception of cookies and to prevent their
          installation on their computer.
        </Typography>

        <Typography sx={ListTitleStyle}>
          9. Transfer of Personal Data
        </Typography>
        <Typography sx={ContentStyle}>
          We are very serious about providing a comparable level of protection
          for personal data should the information be processed or used outside
          Malaysia by our vendors or experts.
        </Typography>

        <Typography sx={ListTitleStyle}>
          10. Marketing and Promotional Purposes
        </Typography>
        <Typography sx={ContentStyle}>
          Upon subscribing to our services, Users will be receiving marketing
          and/or promotional emails or calls from us, which includes but not
          limited to, monthly promotions and information on future events. If
          the User does not wish to receive any promotional news or calls,
          please click the “unsubscribe” link at the bottom of the email and you
          will be excluded from our newsletters and contacts. User shall always
          have the right to unsubscribe the materials as to send out the
          materials at the first place, consent is required.
        </Typography>

        <Typography sx={ListTitleStyle}>
          11. Data Subject's Obligations
        </Typography>
        <Typography sx={ContentStyle}>
          It is necessary for SOLVNEX DIGITAL SDN BHD to collect and retain User
          personal datA) Therefore, it is also obligatory for User to supply
          personal data to use in the most accurate manner. If User does not
          provide us with personal data, SOLVNEX DIGITAL SDN BHD is unable to
          process personal data on User behalf, for the Purpose stated in clause
          4 herein, or effectively render our services to User, and all
          relationship created or to be created between us shall then be
          terminated and ceased to be in effect immediately.
        </Typography>

        <Typography sx={ListTitleStyle}>
          12. The Rights of Data Subject
        </Typography>
        <Typography sx={ListStyle}>
          A){" "}
          <span style={{ textDecoration: "underline" }}>
            To request access to personal data:
          </span>
          <br /> Users have the right to request access to their own personal
          data processed by us on reasonable notice. Access, requests can be
          made through online means by filling up the Data Access Request Form.
        </Typography>
        <Typography sx={ListStyle}>
          B){" "}
          <span style={{ textDecoration: "underline" }}>
            To request correction of personal data:
          </span>{" "}
          <br />
          Users have the right to request correction and/or update of their own
          personal data that is inaccurate, incomplete, or outdated. Correction
          requests can be made through online means by filling up the Data
          Correction Request Form.
        </Typography>
        <Typography sx={{ ...ListStyle, marginBottom: "30px" }}>
          C){" "}
          <span style={{ textDecoration: "underline" }}>
            To limit processing of User personal data:
          </span>
          <br /> Users are entitled to limit our processing of personal data by
          expressly withdrawing the consent given previously, in each case,
          including for direct marketing purposes subject to any applicable
          legal restrictions. contractual conditions and within a reasonable
          time period.
        </Typography>

        <Typography sx={ListTitleStyle}>
          13. Changes To Privacy Policy
        </Typography>
        <Typography sx={ContentStyle}>
          We reserve the right to amend this Privacy Policy from time to time
          without prior notice. We advise that Users check our website for this
          Privacy Policy on a regular basis. Kindly view our privacy notice on
          the website,{" "}
          <Link href="https://www.solvnex.com/" sx={LinkStyle}>
            www.solvnex.com
          </Link>
        </Typography>

        <Typography sx={ListTitleStyle}>
          14. Acknowledgement And Consent
        </Typography>
        <Typography sx={ContentStyle}>
          By communicating, engaging with SOLVNEX DIGITAL SDN BHD or use the
          Company’s products and services, User acknowledges that User has read
          and understood this notice and agree and consent to the use,
          processing, disclosure and transfer of User personal data by the
          SOLVNEX DIGITAL SDN BHD as described in this Notice. Any marketing
          email SOLVNEX DIGITAL SDN BHD sends to the User should contain an
          automated unsubscribe link so that you can opt-out of the mailing
          list. Users can also withdraw their consent by written notice or fill
          in the form on the website. Options shall also be given to User
          whether they consent to be given the marketing/promotional materials.
        </Typography>

        <Typography sx={ListTitleStyle}>
          15. Inquiries And Complaints
        </Typography>
        <Typography sx={ContentStyle}>
          Should User require further information about the personal data we
          hold or the way in which User information is being collected or used
          which are not answered by this Privacy Notice, please contact or write
          to us at:
        </Typography>
        <Typography sx={{...ContentStyle,marginBottom:'100px'}}>
          Email:{" "}
          <Link href="mailto:hello@solvnex.com" sx={LinkStyle}>
            hello@solvnex.com
          </Link>
          <br />
          Registered Address: Level 23, Menara Exchange 106, Lingkaran TRX Tun
          Razak Exchange, Kuala Lumpur, 55188 WP KUALA LUMPUR
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

            "&:hover":{
                background:'#01B1A8',
                color:'#ffffff'
            }
          }}
        >
          <ArrowBackIcon />
          Back
        </Button>
      </Box>
    </MainLayout>
  );
};

export default PrivacyPolicy;
