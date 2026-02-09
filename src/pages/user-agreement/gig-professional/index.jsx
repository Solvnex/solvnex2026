import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Box, Breadcrumbs, Button, Link, Typography } from "@mui/material";
import { useRouter } from "next/router";

import NextIcon from "@mui/icons-material/NavigateNext";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

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

  const ButtonStyle = {
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
    width: 'max-content',

    "&:hover": {
      background: "#01B1A8",
      color: "#ffffff",
    },
  }

const GigProfessional = () => {
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
        <Link
        href="/user-agreement"
          key="2"
          sx={{
            fontWeight: 500,
            fontSize: "16px",
            color: "#504C4C",
            textDecoration: "none",
          }}
        >
          User Agreement
        </Link>,
        <Typography key="3" sx={{
            fontSize: "16px",
            color: "#504C4C",
            textDecoration: "none",
          }}>Gig Professional</Typography>
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

        <Typography sx={TitleStyle}>User Agreement (Gig Professional)</Typography>
        <Typography sx={ContentStyle}>
        This User Agreement describes the terms and conditions which you accept by using our website or our Services. We have incorporated by reference some linked information.
        </Typography>
        <Typography sx={ContentStyle}>
          Welcome to{" "}
          <Link
            href="https://www.solvnex.com/"
            sx={{ ...LinkStyle, textDecoration: "none" }}
          >
            www.solvnex.com
          </Link>
        </Typography>
        <Typography sx={ContentStyle}>
        The following terms of service stipulated under this User Agreement shall govern your access to and use of the SOLVNEX website, including but not limited to, any content, functionality and services offered on or through www.solvnex.com (the “Website”) by SOLVNEX DIGITAL SDN BHD. and, with respect to payment processing services. SOLVNEX DIGITAL SDN BHD (202101026823 (1427123-P) collectively referred herein as “SOLVNEX” “we” or “us”.
        </Typography>
        <Typography sx={ContentStyle}>
        Please read the terms of service carefully before you start to use the Website. By using the Website, opening an account or by clicking to accept or agree to the terms of service when this option is made available to Gig Professional, Gig Professional accept and agree to be bound and abide by these terms of service and our Privacy Policy, found here, incorporated herein by reference. If Gig Professional does not want to agree to these terms of service or the Privacy Policy, Gig Professional must not access or use the Website.
        </Typography>
        <Typography sx={ContentStyle}>
        By using this Website, you represent and warrant that you as the Gig Professional are of legal age to form a binding contract and meet all of the foregoing eligibility requirements. If Gig Professional does not meet all of these requirements, Gig Professional must not access or use the Website.
        </Typography>
        <Typography sx={ContentStyle}>
        Our Customer Support team is available Monday - Friday (9.00am - 5.00pm) if Gig Professional have any questions regarding the Website or Terms of Service. Please directly email to <Link sx={LinkStyle} href="mailto:hello@solvnex.com">
            hello@solvnex.com
          </Link> for further clarification on SOLVNEX.
        </Typography>
        <Typography sx={ContentStyle}>
        This User Agreement describes the terms and conditions which you accept by using our website or our Services. We have incorporated by reference some linked information.
        </Typography>

        <Typography sx={ListTitleStyle}>Personal Behavior</Typography>
        <Typography sx={ContentStyle}>
          The following terms of service stipulated under this User Agreement
          shall govern your access to and use of the SOLVNEX Website, including
          but not limited to, any content, functionality and services offered on
          or through www.solvnex.com (the “Website”) by SOLVNEX DIGITAL SDN BHD.
          and, with respect to payment processing services. SOLVNEX DIGITAL SDN
          BHD 202101026823 (1427123-P) collectively referred herein as “SOLVNEX”
          “we” or “us”.
        </Typography>
        <Typography sx={ContentStyle}>
          Please read the terms of service carefully before you start to use the
          Website. By using the Website, opening an account or by clicking to
          accept or agree to the terms of service when this option is made
          available to Client, Client accepts and agree to be bound and abide by
          these terms of service and our Privacy Policy, found here,
          incorporated herein by reference. If Client does not want to agree to
          these terms of service or the Privacy Policy, Client must not access
          or use the Website.{" "}
        </Typography>
        <Typography sx={ContentStyle}>
          By using this Website, you represent and warrant that you as the
          Client are of legal age to form a binding contract and meet all the
          foregoing eligibility requirements. If Client does not meet all these
          requirements, Client must not access or use the Website.{" "}
        </Typography>
        <Typography sx={ContentStyle}>
          Our Customer Support team is available Monday - Friday (9.00am -
          5.00pm) if Client have any questions regarding the Website or Terms of
          Service. Please directly email to{" "}
          <Link sx={LinkStyle} href="mailto:hello@solvnex.com">
            hello@solvnex.com
          </Link>{" "}
          for further clarification on SOLVNEX.{" "}
        </Typography>
        <Typography sx={ContentStyle}>
          The original language of these terms of service, as well as all other
          texts throughout the Website, is English. In case of conflicts between
          the original English version and any translation, the English version
          shall prevail.
        </Typography>

        <Typography sx={ListTitleStyle}>
          Key Terms
        </Typography>
        <Typography sx={ContentStyle}>
        User, “you” or “your” or “their” or “they” means an individual who visits or uses the Website. Verified User, Users have been satisfactorily verified. Gig Professional is the User who is registered and verified in the Website and/or bids for Project and completes Project as posted by Client in the Website. Inactive Account means a User Account that has not been logged into for a 6-month period, or other period determined by us from time to time. Client is the User who offers Project on the Website.
        </Typography>
        <Typography sx={ContentStyle}>
        Intellectual Property Rights means any and all intellectual property rights, existing worldwide and the subject matter of such rights, including: (a) patents, copyright, rights in circuit layouts (or similar rights), registered designs, registered and unregistered trademarks, and any right to have confidential information kept confidential; and (b) any application or right to apply for registration of any of the rights referred to in paragraph (a), whether or not such rights are registered or capable of being registered and whether existing under any laws, at common law or in equity.
        </Typography>
        <Typography sx={ContentStyle}>
        Milestone Payment means a payment made by the Client to the Gig Professional under a User Contract and which will be released in accordance with the section “Terms of Payment” of these terms and conditions.
        </Typography>
        <Typography sx={ContentStyle}>
        Project or “Listing” or “Task” means a task offered or awarded by a Client via the Website, which may include a Project listed by a Client, a Project awarded by a client (for example through Invite Me), a project offered by a Client to a Gig Professional as a result of a project hosted via the Website.
        </Typography>
        <Typography sx={ContentStyle}>
        Disputes are disagreements experienced during a project between a Client and Gig Professional on the Website or experience through the usage of this Website between a Client and SOLVNEX. 
        </Typography>
        <Typography sx={ContentStyle}>
        User Contract means:
        </Typography>
        <Typography sx={ListStyle}>
        A) This User Agreement; 
        </Typography>
        <Typography sx={ListStyle}>
        B) The Code of Conduct as amended from time to time; 
        </Typography>
        <Typography sx={ListStyle}>
        C) Any other contractual provisions accepted by both the Gig Professional and Client uploaded to the Website, to the extent not inconsistent with the 
        </Typography>
        <Typography sx={ListStyle}>
        D) User Agreement and the Code of Conduct; and 
        </Typography>
        <Typography sx={{ ...ListStyle, marginBottom: "30px" }}>
        E) Any other material incorporated by reference from time to time.
        </Typography>
        <Typography sx={ContentStyle}>Website means the Websites operated by SOLVNEX and available at: www.solvnex.com and any of its regional or other domains or properties, and any related SOLVNEX service, tool or application, specifically including mobile web, any iOS App and any Android App, or API or other access mechanism.</Typography>

        <Typography sx={ListTitleStyle}>
          Overview
        </Typography>
        <Typography sx={ContentStyle}>By accessing and using the Website, Gig Professional agrees to the following terms with SOLVNEX. We may amend this User Agreement and any linked information from time to time by posting amended terms on the Website. </Typography>
        <Typography sx={ContentStyle}>The Website provides an online platform for Users to bid and/or accept the listed Project posted an/offered by Client. Gig Professional must register for an Account in order to bid and/or accept the Project. The Website enables Users to work together online to complete and pay for projects, and to use the services that we provide. We are not a party to any contractual agreements between Client and Gig Professional in the online venue, we merely facilitate connections between the parties. </Typography>
        <Typography sx={ContentStyle}>We may, from time to time, change or add to the Website or the information, products or services described in it.</Typography>
        <Typography sx={ListStyle}>- Only registered and verified Gig Professional may offer and accept Project on the Website. Registration is free. </Typography>
        <Typography sx={ListStyle}>- Unable to load the shape </Typography>
        <Typography sx={ListStyle}>- Gig Professional will be offered Project based on the qualifications/competency screening and technical assessment conducted by Client and/or its authorized parties. </Typography>
        <Typography sx={ListStyle}>- Upon acceptance of the offer, Gig Professional shall be fully responsible to perform the Projects in accordance with the deliverables instructed by the Client and any cancellation without cause shall not be always allowed. If there are any cancellations by Gig Professional, such cancellation may affect the reputation and rating status of Gig Professional. </Typography>
        <Typography sx={ListStyle}>- Client shall pay to SOLVNEX upon submission of full task completion or milestone task completion of the Project. Solvnex shall then dirburse such payment to Gig Professional. </Typography>
        <Typography sx={ListStyle}>- SOLVNEX will deduct 18% of payment received by Gig Professional as a platform fee. </Typography>
        <Typography sx={ListStyle}>- Gig Professional may not accept payments using any method other than through www.solvnex.com. </Typography>
        <Typography sx={ListStyle}>- When offering the projects, Clients are granted all rights for the delivered projects, unless otherwise specified by the Gig Professional on their profile. </Typography>
        <Typography sx={ListStyle}>
        - SOLVNEX, subject to Client’s written consent, may use all published delivered works for SOLVNEX marketing and promotion purposes. 
        </Typography>
        <Typography sx={{ ...ListStyle, marginBottom: "30px" }}>
        - We care about your privacy. The Privacy Policy is a part of these Terms of Service and incorporated herein by reference.
        </Typography>

        <Typography sx={ListTitleStyle}>
        Eligibility
        </Typography>
        <Typography sx={ContentStyle}>
        Gig Professional will not use the Website if they:
        </Typography>
        <Typography sx={ListStyle}>A) Are not able to form legally binding contracts; </Typography>
        <Typography sx={ListStyle}>B) A person barred from receiving and rendering services under the laws of Malaysia or other applicable laws in other jurisdictions; </Typography>
        <Typography sx={ListStyle}>
        C) Are suspended from using the Website; or 
        </Typography>
        <Typography sx={{ ...ListStyle, marginBottom: "30px" }}>
        D) Do not hold a valid email address.
        </Typography>
        <Typography sx={ContentStyle}>
        All free User accounts are associated with individuals. Login credentials should not be shared by Users with others. The individual associated with the account will be held responsible for all actions taken by the account, without limitation. 
        </Typography>
        <Typography sx={ContentStyle}>
        We may, at our absolute discretion, refuse to register any person or entity as a User. 
        </Typography>
        <Typography sx={ContentStyle}>
        You cannot transfer or assign any rights or obligations you have under this agreement without prior written consent.
        </Typography>

        <Typography sx={ListTitleStyle}>
          Solvnex
        </Typography>
        <Typography sx={ContentStyle}>
        While using the Website, Client will not attempt to or otherwise do any of the following:
        </Typography>
        <Typography sx={ListStyle}>1) Post content or items in inappropriate categories or areas on our websites and services. </Typography>
        <Typography sx={ListStyle}>2) Infringe any laws, third party rights or our policies, such as the Code of Conduct. </Typography>
        <Typography sx={ListStyle}>3) Fail to perform the obligation of the services offered to Gig Professional. </Typography>
        <Typography sx={ListStyle}>4) Circumvent or manipulate our fee structure, the billing process, or fees owed to Gig Professional. </Typography>
        <Typography sx={ListStyle}>5) Post false, inaccurate, misleading, deceptive, defamatory or offensive content (including personal information). </Typography>
        <Typography sx={ListStyle}>6) Take any action that may undermine the feedback or reputation systems (such as displaying, importing or exporting feedback information or using it for purposes unrelated to the Website). </Typography>
        <Typography sx={ListStyle}>7) Transfer your SOLVNEX account (including feedback) and username to another party without our consent. </Typography>
        <Typography sx={ListStyle}>8) Distribute or post spam, unsolicited, or bulk electronic communications, chain letters, or pyramid schemes. </Typography>
        <Typography sx={ListStyle}>
        9) Distribute viruses or any other technologies that may harm SOLVNEX, the Website, or the interests or property of SOLVNEX Users (including their Intellectual Property Rights, privacy and publicity rights) or is unlawful, threatening, abusive, defamatory, invasive of privacy, vulgar, obscene, profane or which may harass or cause distress or inconvenience to, or incite hatred of, any person. 
        </Typography>
        <Typography sx={ListStyle}>10) Download and aggregate listings from our website for display with listings from other websites without our express written permission, “frame”, “mirror” or otherwise incorporate any part of the Website into any other website without our prior written authorisation. </Typography>
        <Typography sx={ListStyle}>11) Attempt to modify, translate, adapt, edit, decompile, disassemble, or reverse engineer any software programs used by us in connection with the Website.   </Typography>
        <Typography sx={ListStyle}>12) Copy, modify or distribute rights or content from the Website or SOLVNEX’s copyrights and trademarks; or </Typography>
        <Typography sx={ListStyle}>13) Harvest or otherwise collect information about Users, including email addresses, without their consent </Typography>
        <Typography sx={{ ...ListStyle, marginBottom: "30px" }}>
        14) Use SOLVNEX to facilitate money exchange including, but not limited to, cryptocurrency (e.g. bitcoin, ethereum, etc).
        </Typography>

        <Typography sx={ListTitleStyle}>
        Fees And Services
        </Typography>
        <Typography sx={ContentStyle}>
        We charge 18% as the platform fee per transaction from the payment to be received by the Gig Professional. Unless otherwise stated, all fees are quoted in Ringgit Malaysia (RM).
        </Typography>

        <Typography sx={ListTitleStyle}>Content</Typography>
        <Typography sx={ContentStyle}>
        Client acknowledges and agree that:
        </Typography>
        <Typography sx={ListStyle}>
        A) We act only as a forum for the online distribution and publication of User content. We make no warranty that User content is made available on the Website. We have the right (but not the obligation) to take any action deemed appropriate by us with respect to your user content. 
        </Typography>
        <Typography sx={ListStyle}>B) we have no responsibility or liability for the deletion or failure to store any content, whether the content was made available on the Website; and </Typography>
        <Typography sx={{ ...ListStyle, marginBottom: "30px" }}>
        C) Any and all content submitted to the Website is subject to our approval. We may reject, approve or modify your User content at our sole discretion.
        </Typography>
        <Typography sx={ContentStyle}>You represent and warrant that your content:</Typography>
        <Typography sx={ListStyle}>A) Will not infringe upon or misappropriate any copyright, patent, trademark, trade secret, or other intellectual property right or proprietary right or right of publicity or privacy of any person; </Typography>
        <Typography sx={ListStyle}>B) Will not violate any law or regulation; </Typography>
        <Typography sx={ListStyle}>C) Will not be defamatory or trade libellous; </Typography>
        <Typography sx={ListStyle}>D) Will not be obscene or contain child pornography; </Typography>
        <Typography sx={ListStyle}>E) Will not contain the development, design, manufacture or production of missiles, or nuclear, chemical or biological weapons; </Typography>
        <Typography sx={ListStyle}>F) Will not contain material linked to terrorist activities;  </Typography>
        <Typography sx={ListStyle}>G) Will not include incomplete, false or inaccurate information about User or any other individual; and </Typography>
        <Typography sx={{ ...ListStyle, marginBottom: "30px" }}>
        H) Will not contain any viruses or other computer programming routines that are intended to damage, detrimentally interfere with, surreptitiously intercept or expropriate any system, data or personal information.
        </Typography>
        <Typography sx={ContentStyle}>Information on the Website may contain general information about legal, financial, health and other matters. The Gig Professional must not rely on the information on the Website as an alternative to professional advice. If the Gig Professional has specific questions about any matter, Gig Professional should consult their professional adviser.</Typography>
        <Typography sx={ContentStyle}>We provide unmonitored access to third party content, including User feedback and articles with original content and opinions (or links to such third party content). We only act as a portal and have no liability based on, or related to, third party content on the Website, whether arising under the laws of copyright or other intellectual property, defamation, libel, privacy, obscenity, or any other legal discipline. </Typography>
        <Typography sx={ContentStyle}>The Website may contain links to other third party websites. We do not control the websites to which we link from the Website. We do not endorse the content, products, services, practices, policies or performance of the websites we link to from the Website. Use of third party content, links to third party content and/or websites is at your risk. </Typography>
        <Typography sx={ContentStyle}>In relation to deletion or hiding of any information or content, using the Website to delete, hide or otherwise dispose of information does not imply permanent deletion of content or information. Information may be retained for a period to fulfil record keeping, regulatory, compliance, statistical, law enforcement and other.</Typography>

        <Typography sx={ListTitleStyle}>
        Feedback, Rating And Reviews
        </Typography>
        <Typography sx={ContentStyle}>
        Gig Professional acknowledges that SOLVNEX can use any feedback, rating or reviews Gig Professional leave consisting of comments and any rating(s) (e.g. quality, communication etc.) together with any composite rating by us. Gig Professional acknowledges that such feedback, rating and reviews belong solely to us, notwithstanding that we permit Gig Professional to use it on our Website while Gig Professional remains a User. Gig Professional must not use, or deal with, such feedback, rating and reviews in any way inconsistent with our policies as posted on the Website from time to time without our prior written permission. 
        </Typography>
        <Typography sx={ContentStyle}>
        Gig Professional may not do (or omit to do) anything that may undermine the integrity of the SOLVNEX feedback system. We are entitled to suspend or terminate your Account at any time if we, in our sole and absolute discretion, are concerned by any feedback about Gig Professional, or your feedback rating, where we believe our feedback system may be subverted.
        </Typography>

        <Typography sx={ListTitleStyle}>
        Advertising
        </Typography>
        <Typography sx={ContentStyle}>
        Unless otherwise agreed with us, Gig Professional must not advertise an external website, product or service on the Website. Any website address posted on the Website, including in a listing, bid, listing description, clarification board or the message board, must relate to a Project, item listed, user or service being performed on the Website. 
        </Typography>
        <Typography sx={ContentStyle}>
        We may display advertisements or promotions on the Website. Gig Professional acknowledge and agree that we shall not be responsible for any loss or damage of any kind incurred by Gig Professional as a result of the presence of such advertisements or promotions or any subsequent dealings with third parties. Furthermore, Gig Professional acknowledges and agrees that content of any advertisements or promotions may be protected by copyrights, trademarks, service marks, patents or other intellectual property or proprietary rights and laws. Unless expressly authorised by SOLVNEX or third-party right holders, Gig Professional agrees not to modify, sell, distribute, appropriate or create derivative works based on such advertisement/promotions.
        </Typography>

        <Typography sx={ListTitleStyle}>
        Communication With Other Users
        </Typography>
        <Typography sx={ContentStyle}>
        Communication with other Users on the Website must be conducted through the text, audio and or video chat functionality, along with message boards, public clarification boards, workspace message board, direct message sending, and other communication channels provided on the Website. 
        </Typography>
        <Typography sx={ContentStyle}>
        Gig Professional must not post your email address or any other contact information (including but not limited to Skype ID or other identifying strings on other platforms) on the Website, except in the “email” field of the signup form, at our request or as otherwise permitted by us on the Website. 
        </Typography>
        <Typography sx={ContentStyle}>
        In relation to video chat and audio chat, any terms agreed to between any Users must be confirmed in writing using the chat or direct message function. 
        </Typography>
        <Typography sx={ContentStyle}>
        We may read all correspondence posted to the Website and download or access, and test (if necessary), all uploaded files, programs and websites related to your use of the Website for the purpose of investigating fraud, regulatory compliance, risk management and other related purposes.
        </Typography>

        <Typography sx={ListTitleStyle}>
        Identity / Know Your Customer
        </Typography>
        <Typography sx={ContentStyle}>Gig Professional authorise us, directly or through third parties, to make any inquiries we consider necessary to validate Gig Professional identity. Gig Professional must, at our request:</Typography>
        <Typography sx={ListStyle}>
        A) Provide further information to us, which may include Gig Professional date of birth and or other information that will allow us to reasonably identify Gig Professional; 
        </Typography>
        <Typography sx={{ ...ListStyle, marginBottom: "30px" }}>
        B) Take steps to confirm ownership of Gig Professional email address or financial instruments.
        </Typography>
        <Typography sx={ContentStyle}>The Gig Professional must also, at our request, provide copies of identification documents (such as your passport or driver’s licence). We may also ask Gig Professional to provide photographic identification holding your identification together with a sign with a code that we provide as an additional identity verification step. We also reserve the right to request a video interview with Gig Professional to validate this information, Gig Professional identity, Gig Professional background and Gig Professional skills. </Typography>
        <Typography sx={ContentStyle}>We reserve the right to close, suspend, or limit access to Gig Professional Account, the Website and/or SOLVNEX Services in the event we are unable to obtain or verify to our satisfaction the information which we request under this section. </Typography>
        <Typography sx={ContentStyle}>We reserve the right to update Gig Professional particulars on the website in order to match any identity documentation that has been provided. Disbursements such as wire transfers from the website may only be made to the beneficiary matching Gig Professional provided identity documents and account information.</Typography>

        <Typography sx={ListTitleStyle}>
          Gig Professional
        </Typography>
        <Typography sx={ListStyle}>- Gig Professionals creates and verifies their profiles on SOLVNEX to receive the matching task. </Typography>
        <Typography sx={ListStyle}>- Gig Professionals shall be responsible for and shall pay at its own expense when due and payable all statutory contributions and TAXES assessed against it in connection with the task performed. </Typography>
        <Typography sx={ListStyle}>- Gig Professionals are responsible to ensure they have medical coverage. </Typography>
        <Typography sx={{ ...ListStyle, marginBottom: "30px" }}>- Gig Professionals acknowledge that by entering into the contract with the Client, it shall not create a master-servant relationship between the parties and the gig professionals are providing services as an independent contractor to the Client.</Typography>
        <Typography sx={ContentStyle}>
        Users may be removed by SOLVNEX from the Site for violations of these Terms of Service and/or our Community Standards, which may include (but are not limited to) the following violations and/or materials:
        </Typography>
        <Typography sx={ListStyle}>A) Illegal or Fraudulent services;  </Typography>
        <Typography sx={ListStyle}>B) Adult oriented services, Pornographic, Inappropriate/Obscene; </Typography>
        <Typography sx={ListStyle}>C) Intentional copies of Gigs; </Typography>
        <Typography sx={ListStyle}>D) Spam, nonsense, or violent or deceptive Gigs; deceptive Gigs. </Typography>
        <Typography sx={ListStyle}>E) Gig Professional misleading to Clients or others; </Typography>
        <Typography sx={ListStyle}>F) eselling of regulated goods; </Typography>
        <Typography sx={ListStyle}>G) Offering to prepare academic works on behalf of Clients; </Typography>
        <Typography sx={ListStyle}>H) Services that extend beyond 30 days of service duration; </Typography>
        <Typography sx={ListStyle}>
        I) Exceedingly low quality Gigs Professional; 
        </Typography>
        <Typography sx={ListStyle}>J) Promoting SOLVNEX through activities that are prohibited by any laws, regulations, and/or third parties’ terms of service, as well as through any marketing activity that negatively affects our relationships with our users or partners. </Typography>
        <Typography sx={ListStyle}>K) Gig Professionals that are removed for violations mentioned above, may result in the suspension of their account. </Typography>
        <Typography sx={ListStyle}>L) Gig Professionals that are removed for violations are not eligible to be restored or edited. </Typography>
        <Typography sx={ListStyle}>M) Gig Professionals may be removed from our Search feature due to poor performance and/or user misconduct. </Typography>
        <Typography sx={ListStyle}>
        N) Gig Professionals are required to have an appropriate image related to the service offered. An option to upload two additional images are available to all Gig Professionals. Gig Professional must deliver the same quality of service as shown on their images. Recurring deliveries that don’t match the quality shown on the images may lead to the Gig Professional’s account losing Gig Professional’s status or becoming permanently disabled. 
        </Typography>
        <Typography sx={{ ...ListStyle, marginBottom: "30px" }}>
        O) tatements on the Profile Page that undermine or circumvent these User Agreement is prohibited.
        </Typography>

        <Typography sx={ListTitleStyle}>
        Terms Of Payment
        </Typography>
        <Typography sx={ContentStyle}>
        Gig Professional acknowledge and agree that:
        </Typography>
        <Typography sx={ListStyle}>A) We are not a bank or other licensed financial institution and do not provide banking services or any financial services to you; </Typography>
        <Typography sx={ListStyle}>B) Payment may only be paid into youí Account, oí íeleased fíom youí Account, by us and you must only use the mechanisms available on the Website to íeceive payment in íespective píoject; </Typography>
        <Typography sx={ListStyle}>C) Any refund of payment required to be processed in your favour will be returned only to the source of the original deposit, and cannot be redirected to any other payment source;  </Typography>
        <Typography sx={ListStyle}>D) We may hold the amount in respect of the amount due to your Account in an account held by us with a financial institution (or in any manner that we decide in our sole discretion from time to time) and such amount is not segregated into a separate account.  </Typography>
        <Typography sx={{ ...ListStyle, marginBottom: "30px" }}>
        E) Terms of Payment píocess shall be 7 woíking days fíom the days of the acceptance of youí woíks in undisputed and satisfactoíy manneí foí complete oí milestone task completion, unless of any unfoíeseen ciícumstances which we will íectify and infoím to you of íevised teíms of payment.
        </Typography>

        <Typography sx={ListTitleStyle}>
        Inactive Accounts
        </Typography>
        <Typography sx={ContentStyle}>
        We reserve the right to close an Inactive Account.
        </Typography>

        <Typography sx={ListTitleStyle}>
        Right To Refuse Service
        </Typography>
        <Typography sx={ContentStyle}>
        We may close, suspend or limit the Gig Professional access to their Account without reason. Without limiting the foregoing, we may close, suspend or limit the Gig Professional access to their Account:
        </Typography>
        <Typography sx={ListStyle}>A) If we determine that Gig Professional have breached, or are acting in breach of this User Agreement; </Typography>
        <Typography sx={ListStyle}>B) If Gig Professional under-bid on any Project in an attempt to renegotiate the actual price privately, to attempt to avoid fees; </Typography>
        <Typography sx={ListStyle}>C) If we determine that Gig Professional have infringed legal rights (resulting in actual or potential claims), including infringing Intellectual Property Rights; </Typography>
        <Typography sx={ListStyle}>D) If we determine that Gig Professional have engaged, or are engaging, in fraudulent, or illegal activities; </Typography>
        <Typography sx={ListStyle}>E) Gig Professional do not respond to account verification requests; </Typography>
        <Typography sx={ListStyle}>F) Gig Professional do not complete account verification when requested within 3 months of the date of request; </Typography>
        <Typography sx={ListStyle}>G) Gig Professional are the subject of a United Nations, Australian, EU, USA or other applicable sanctions regime, or our banking and payment relationships otherwise preclude us from conducting business with Gig Professional; </Typography>
        <Typography sx={ListStyle}>H) To manage any risk of loss to us, a User, or any other person; or </Typography>
        <Typography sx={{ ...ListStyle, marginBottom: "30px" }}>
        I) For other reasons.
        </Typography>
        <Typography sx={ContentStyle}>If we close your Account due to your breach of this User Agreement, you may also become liable for certain fees as described in this User Agreement. </Typography>
        <Typography sx={ContentStyle}>Without limiting our other remedies, to the extent Gig Professional have breached this User Agreement, Gig Professional must pay us all fees owed to us and reimburse us for all losses and costs (including any and all of our employee time) and reasonable expenses (including legal fees) related to investigating such breach and collecting such fees.</Typography>

        <Typography sx={ListTitleStyle}>
        Gig Professional Acknowledge And Agree That:
        </Typography>
        <Typography sx={ListStyle}>A) The damages that we will sustain as a result of your breach of this User Agreement will be substantial and will potentially include (without limitation) fines and other related expenses imposed on us by our payment processors and Users and that those damages may be extremely difficult and impracticable to ascertain. </Typography>
        <Typography sx={ListStyle}>B) If you breach this User Agreement, we may fine you up to RM 3,000 (or more depends on the cases) for each breach and/or we may take legal action against you to recover losses that are in excess of the fine amount; </Typography>
        <Typography sx={ListStyle}>C) A fine of up to RM 3,000 is a presently reasonable pre-estimate or minimum estimate of our damages, considering all currently existing circumstances, including (without limitation) the relationship of the sum to the range of harm to us that reasonably could be anticipated and the anticipation that proof of actual damages may be impractical or extremely difficult; and  </Typography>
        <Typography sx={{ ...ListStyle, marginBottom: "30px" }}>
        D) We may collect the entiíe (oí paít of the) amount of the fine fíom the amount due to youí Account.
        </Typography>
        <Typography sx={ContentStyle}>If we close your Account for a reason other than as a result of your breach of this User Agreement, unless as otherwise specified in this User Agreement, you will be entitled to receive any payment due from us to you. </Typography>
        <Typography sx={ContentStyle}>In the event that we close your Account, you will have no claim whatsoever against us in respect of any such suspension or termination of your Account.</Typography>

        <Typography sx={ListTitleStyle}>
        Access And Interference
        </Typography>
        <Typography sx={ContentStyle}>
        Gig Professional agrees that you will not use any robot, spider, scraper or other automated means to access the Website via any means, including for the avoidance of doubt access to our API or application programming interface, for any purpose without our express written permission. Additionally, Gig Professional agree that they will not:
        </Typography>
        <Typography sx={ListStyle}>A) Tke any action that imposes or may impose (in our sole discretion, exercised reasonably) an unreasonable or disproportionately large load on our infrastructure; </Typography>
        <Typography sx={ListStyle}>B) Interfere with, damage, manipulate, disrupt, disable, modify, overburden, or impair any device, software system or network connected to or used (by you or us) in relation to the Website or your Account, or assist any other person to do any of these things, or take any action that imposes, or may impose, in our discretion, an unreasonable or disproportionately large load on our infrastructure; </Typography>
        <Typography sx={ListStyle}>C) Copy, reproduce, modify, create derivative works from, distribute, or publicly display any content (except for your information) from the websites without the prior express written permission of Gig Professional and the appropriate third party, as applicable;  </Typography>
        <Typography sx={ListStyle}>D) Interfere or attempt to interfere with the proper working of the Websites, services or tools, or any activities conducted on or with the Websites, services or tools; or </Typography>
        <Typography sx={{ ...ListStyle, marginBottom: "30px" }}>
        E) By pass our robot exclusion headers or other measures we may use to prevent or restrict access to the Website
        </Typography>

        <Typography sx={ListTitleStyle}>
        Privacy
        </Typography>
        <Typography sx={ContentStyle}>
        We use Gig Professional information as described in the SOLVNEX Privacy Policy. If Gig Professional object to your information being transferred or used in this way then Gig Professional must not use our services. For the avoidance of doubt, Gig Professional name and personal details shall be used for identity purposes in the normal course of conducting business in this online marketplace. This may include on invoices and purchase orders including but not limited to between transacting parties, including those automatically generated on awarding, accepting and payment.
        </Typography>

        <Typography sx={ListTitleStyle}>
        Indemnity
        </Typography>
        <Typography sx={ContentStyle}>
        Gig Professional will indemnify us (and our officers, directors, agents, subsidiaries, joint venturers and employees) against any claim or demand, including legal fees and costs, made against us by any third party due to or arising out of Gig Professional breach of this Agreement, or Gig Professional infringement of any law or the rights of a third party in the course of using the Website and SOLVNEX Services. 
        </Typography>
        <Typography sx={ContentStyle}>In addition, we can apply any cíedits fíom the amount due to the Gig Píofessional Account against any liabilities Gig Professional owes to us or loss suffered by us as a result of Gig Professional non- performance or breach of this User Agreement.</Typography>

        <Typography sx={ListTitleStyle}>
        Security
        </Typography>
        <Typography sx={ContentStyle}>
        Gig Professional must immediately notify us upon becoming aware of any unauthorised access or any other security breach to the Website, Gig Professional Account or the SOLVNEX Services and do everything possible to mitigate the unauthorised access or security breach (including preserving evidence and notifying appropriate authorities). Gig Professional User Account is theirs only, and Gig Professional must not share their password with others. The Gig Professional is solely responsible for securing their password. We will not be liable for any loss or damage arising from unauthorised access of Gig Professional accounts resulting from their failure to secure their password.
        </Typography>

        <Typography sx={ListTitleStyle}>
        No Warranty As To Each User’s Purported Identity
        </Typography>
        <Typography sx={ContentStyle}>
        We cannot and do not confirm each User’s purported identity on the Website. We may provide information about a User, such as email address and phone number. However, such information is based solely on data that a User submits and we provide such information solely for the convenience of Users and the provision of such information is not an introduction, endorsement or recommendation by us.
        </Typography>

        <Typography sx={ListTitleStyle}>
        No Warranty As To Content
        </Typography>
        <Typography sx={ContentStyle}>
        The Website is a dynamic time-sensitive Website. As such, information on the Website will change frequently. It is possible that some information could be considered offensive, harmful, inaccurate or misleading or mislabelled or deceptively labelled accidentally by us or accidentally or purposefully by a third party. 
        </Typography>
        <Typography sx={ContentStyle}>Our Services, the Website and all content on it are provided on an ‘as is’, ‘with all faults’ and ‘as available’ basis and without warranties of any kind either express or implied. Without limiting the foregoing, we make no representation or warranty about:</Typography>
        <Typography sx={ListStyle}>A) The Website or any Gig Professional Services or SOLVNEX Services; </Typography>
        <Typography sx={ListStyle}>B) The accuracy, reliability, availability, veracity, timeliness or content of the Website or any Gig Professional Services or SOLVNEX Services;  </Typography>
        <Typography sx={ListStyle}>C) Whether the Website or Gig Professional Services or SOLVNEX Services will be up-to- date, uninterrupted, secure, error-free or non-misleading; </Typography>
        <Typography sx={ListStyle}>D) Whether defects in the Website will be corrected; </Typography>
        <Typography sx={ListStyle}>E) Whether the Website, the Gig Professional Services or SOLVNEX Services; or any data, content or material will be backed up or whether business continuity arrangements are in place in respect of the Website, Gig Professional Services or SOLVNEX Services; </Typography>
        <Typography sx={ListStyle}>F) Any third party agreements or any guarantee of business gained by you through the Website, Gig Professional Services or SOLVNEX Services or us; </Typography>
        <Typography sx={{ ...ListStyle, marginBottom: "30px" }}>
        G) The Website, Gig Professional Services or SOLVNEX Services; or infrastructure on which they are based, being error or malicious code free, secure, confidential or performing at any particular standard or having any particular function.
        </Typography>
        <Typography sx={ContentStyle}>To every extent permitted by law, we specifically disclaim any implied warranties of title, merchantability, fitness for a particular purpose, quality, suitability and non-infringement.</Typography>

        <Typography sx={ListTitleStyle}>
        Legal Limitations
        </Typography>
        <Typography sx={ContentStyle}>
        As some jurisdictions do not allow some of the exclusions or limitations as established above, some of these exclusions or limitations may not apply to Gig Professional. In that event, the liability will be limited as far as legally possible under the applicable laws. 
        </Typography>
        <Typography sx={ContentStyle}>Gig Professional and we agree that Gig Professional and we will only be permitted to bring claims against the other only on an individual basis and not as a plaintiff or class member in any purported class or representative action or proceeding. Unless both Gig Professional and we agree otherwise, the arbitrator may not consolidate or join more than one person’s or party’s claims and may not otherwise preside over any form of a consolidated, representative, or class proceeding. In addition, the arbitrator may award relief (including monetary, injunctive, and declaratory relief) only in favour of the individual party seeking relief and only to the extent necessary to provide relief necessitated by that party’s individual claim(s). Any relief awarded cannot affect other Users.</Typography>

        <Typography sx={ListTitleStyle}>
       Notices
        </Typography>
        <Typography sx={ContentStyle}>
        Legal notices will be served or to the email address Gig Professional provides to SOLVNEX during the registration process. Notice will be deemed given 24 hours after email is sent, unless the sending party is notified that the email address is invalid or that the email has not been delivered. Any notices to SOLVNEX must be given to <Link sx={LinkStyle} href="mailto:hello@solvnex.com">
            hello@solvnex.com
          </Link>.
        </Typography>

        <Typography sx={ListTitleStyle}>
       Law
        </Typography>
        <Typography sx={ContentStyle}>
        This Agreement will be governed in all respects by the Malaysian Law.
        </Typography>

        <Typography sx={ListTitleStyle}>
        Disputes
        </Typography>
        <Typography sx={ContentStyle}>
        Any dispute, Gig Professional shall log to SOLVNEX system.
        </Typography>

        <Typography sx={ListTitleStyle}>
        Severability
        </Typography>
        <Typography sx={ContentStyle}>
        The provisions of this User Agreement are severable, and if any provision of this User Agreement is held to be invalid or unenforceable, such provision may be removed and the remaining provisions will be enforced. This Agreement may be assigned by us to an associated entity at any time, or to a third party without Gig Professional consent in the event of a sale or other transfer of some or all of our assets. In the event of any sale or transfer, Gig Professional will remain bound by this User Agreement.
        </Typography>

        <Typography sx={ListTitleStyle}>
        Interpretation
        </Typography>
        <Typography sx={ContentStyle}>
        Headings are for reference purposes only and in no way define, limit, construe or describe the scope or extent of such section.
        </Typography>

        <Typography sx={ListTitleStyle}>
        No Waiver
        </Typography>
        <Typography sx={ContentStyle}>
        Our failure to act with respect to an anticipated or actual breach by Gig Professional or others does not waive our right to act with respect to subsequent or similar breaches. Nothing in this section shall exclude or restrict Gig Professional liability arising out of fraud or fraudulent misinterpretation.
        </Typography>

        <Typography sx={ListTitleStyle}>
        Communications
        </Typography>
        <Typography sx={ContentStyle}>
        Gig Professional consent to receive notices and information from us in respect of the Website and Services by electronic communication. Gig Professional may withdraw this consent at any time, but if Gig Professional does so we may choose to suspend or close your Account.
        </Typography>

        <Typography sx={ListTitleStyle}>
        Additional Terms
        </Typography>
        <Typography sx={ContentStyle}>
        It is important to read and understand all our policies as they provide the rules for trading on the SOLVNEX Website. In addition there may be specific policies or rules that apply, and it is Gig Professional responsibility to check our Help pages and policies to make sure you comply. Our policies, including all policies referenced in them, are part of this Agreement and provide additional terms and conditions related to specific services offered on our Websites, including but not limited to:
        </Typography>
        <Button href="/privacy-policy" sx={{...ButtonStyle,marginBottom:'20px'}}>Privacy Policy <ArrowForwardIcon /></Button>
        <Button href="/code-of-conduct" sx={{...ButtonStyle,marginBottom:'30px'}}>Code Of Conduct <ArrowForwardIcon /></Button>
        <Typography sx={ContentStyle}>Each of these policies may be changed from time to time. Changes take effect when we post them on the SOLVNEX Website. When using particular services on our Website, Client is subject to any posted policies or rules applicable to services Client use through the Website, which may be posted from time to time. All such policies or rules are incorporated into this User Agreement.</Typography>

        <Typography sx={ListTitleStyle}>
        General
        </Typography>
        <Typography sx={ContentStyle}>
        SOLVNEX Digital is located at Level 23 Menara Exchange 106, Lingkaran TRX Tun Razak Exchange, Kuala Lumpur, 55188 WP KUALA LUMPUR
        </Typography>

        <Typography sx={ListTitleStyle}>
        Abusing Solvnex
        </Typography>
        <Typography sx={ContentStyle}>
        SOLVNEX reserves to the greatest extent possible all rights, without limiting any other remedies, to limit, suspend or terminate our service(s) and or user account(s), suspend or ban access to our services, remove any content, and to take all technical or legal steps to ban users. Without limiting the reasons for taking the actions, conduct giving rise to this response could include:
        </Typography>
        <Typography sx={ListStyle}>A) Use of our services for any illegitimate or non bona fide purpose </Typography>
        <Typography sx={ListStyle}>B) Ceating problems with other users or potential legal liabilities </Typography>
        <Typography sx={ListStyle}>C) Infringing the intellectual property rights of third parties </Typography>
        <Typography sx={ListStyle}>D) Acting inconsistently with the letter or spirit of any of our policies </Typography>
        <Typography sx={ListStyle}>E) Abuse of any staff members including inappropriate or unreasonable communications </Typography>
        <Typography sx={{...ListStyle,marginBottom:'30px'}}>F) Any attempt to use SOLVNEX’s platform or services for any objectionable purpose.</Typography>

        <Typography sx={ListTitleStyle}>
        Feedback
        </Typography>
        <Typography sx={{ ...ContentStyle, marginBottom: "100px" }}>
        If Client have any questions about this User Agreement or if Client wish to report breaches of this User Agreement, please email us at hello@solvnex.com.
        </Typography>

        <Button
          onClick={handleGoBack}
          sx={ButtonStyle}
        >
          <ArrowBackIcon />
          Back
        </Button>
      </Box>
    </MainLayout>
    )
}

export default GigProfessional;