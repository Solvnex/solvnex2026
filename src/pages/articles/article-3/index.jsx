import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import {
  Badge,
  Box,
  Breadcrumbs,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import NextIcon from "@mui/icons-material/NavigateNext";
import Article3 from "@/components/articles/Article3";
import { responsive } from "@/components/shared/responsive";

const ArticleA = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  const breadcrumbs = [
    <Typography
      key="1"
      sx={{
        fontWeight: 500,
        fontSize: "16px",
        color: "#504C4C",
        textDecoration: "none",
      }}
    >
      Discoveries
    </Typography>,
    <Typography
      key="2"
      sx={{
        fontWeight: 500,
        fontSize: "16px",
        color: "#504C4C",
        textDecoration: "none",
      }}
    >
      Articles
    </Typography>,
    <Typography key="3" sx={{ fontSize: "16px", color: "#504C4C" }}>
      3 Reasons Businesses Are Upping Into The Gig Economy
    </Typography>,
  ];

  return (
    <MainLayout>
      <Box sx={{ padding: { xs: "30px", md: "30px 109px 100px 72px" } }}>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "10px",
            marginBottom: "40px",
          }}
        >
          <ArrowBackIcon
            onClick={handleGoBack}
            sx={{
              width: "20px",
              height: "20px",
              color: "#01b1a8",
              cursor: "pointer",
            }}
          />
          <Breadcrumbs separator={<NextIcon />}>{breadcrumbs}</Breadcrumbs>
        </Stack>
        <Stack
          sx={{
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "start",
            marginLeft: { xs: 0, md: "28px" },
          }}
        >
          <Article3 />
        </Stack>
      </Box>
    </MainLayout>
  );
};

export default ArticleA;
