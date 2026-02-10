import MainLayout from "@/components/layout/MainLayout";
import {
  Badge,
  Box,
  Breadcrumbs,
  Button,
  IconButton,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { responsive } from "@/components/shared/responsive";
import ArrowBackIcon from "@mui/icons-material/ArrowBackOutlined";
import NextIcon from "@mui/icons-material/NavigateNext";
import CircleIcon from "@mui/icons-material/Circle";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ButtonStyle = {
  display: "flex",
  width: "100%",
  height: "auto",
  flexDirection: "row",
  justifyContent: "space-between",
  gap: { xs: "16px", md: "50px" },
  alignItems: "start",
  borderRadius: "10px",
  padding: { xs: "16px", md: "20px" },
  background: "#EDEDED",
  boxShadow: "0px 3px 6px #00000029",
};

const CircleIconStyle = {
  width: "4px",
  height: "4px",
  color: "#ff0000",
  marginX: "10px",
};

const DateStyle = {
  fontWeight: 500,
  fontSize: { xs: "12px", md: "14px" },
  color: "#504C4C",
  whiteSpace: "nowrap",
};

const TitleStyle = {
  fontWeight: 700,
  fontSize: { xs: "22px", md: "25px" },
  color: "#01B1A8",
  marginBottom: { xs: "24px", md: "45px" },
  textAlign: "left",
};

const TextStyle = {
  fontSize: { xs: "14px", md: "16px" },
  textAlign: "left",
  color: "#504C4C",
  marginBottom: "20px",
};

const ArticleBadge = {
  borderRadius: "5px",
  minWidth: "max-content",
  padding: "5px 10px",
  fontSize: { xs: "12px", md: "14px" },
  fontWeight: 400,
};

const ReadMoreStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  fontWeight: 500,
  fontSize: { xs: "14px", md: "16px" },
  color: "#01B1A8",
  whiteSpace: "nowrap",
  gap: "10px",
};

const Article = () => {
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
    <Typography key="2" sx={{ fontSize: "16px", color: "#504C4C" }}>
      Articles
    </Typography>,
  ];

  return (
    <MainLayout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "start",
          padding: { xs: "30px", md: "30px 150px 100px 72px" },
          background: "#fcfcfc",
        }}
      >
        <IconButton
          onClick={handleGoBack}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "start",
            width: "max-content",
            height: "max-content",
            marginBottom: "16px",
          }}
        >
          <ArrowBackIcon
            sx={{ width: "20px", height: "20px", color: "#01b1a8" }}
          />
        </IconButton>
        <Stack
          sx={{
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "start",
            gap: "21px",
            marginBottom: "60px",
            marginLeft: { xs: 0, md: "55px" },
          }}
        >
          <Typography
            sx={{ fontWeight: 700, fontSize: responsive.titleXL, color: "#212020" }}
          >
            Everything you need to know
          </Typography>
          <Typography sx={{ fontSize: { xs: "18px", md: "20px" }, color: "#212020" }}>
            Articles
          </Typography>
            <Stack
              sx={{
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "start",
                gap: "60px",
                marginBottom: "80px",
                marginLeft: { xs: 0, md: "23px" },
                width: "100%",
              }}
            >
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Breadcrumbs
                sx={{ flexDirection: "row", justifyContent: "flex-start" }}
                separator={<NextIcon />}
              >
                {breadcrumbs}
              </Breadcrumbs>
              <Stack
                sx={{
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "23px",
                }}
              >
                <Typography sx={{ fontSize: "16px", color: "#212020" }}>
                  Showing 1-3 of 3 results
                </Typography>
              </Stack>
            </Stack>
            <Stack sx={{ flexDirection: "column", gap: "38px", width: "100%" }}>
              <Button
              href="/articles/article-1"
                sx={{
                  ...ButtonStyle,
                  "&:hover": {
                    background: 'url("/background/ArticleABtnBg.png")',
                    backgroundSize: "cover",
                  },
                }}
              >
                <Typography sx={DateStyle}>
                  June 24, 2023
                  <CircleIcon sx={CircleIconStyle} />
                  <span style={{ fontWeight: 400 }}>7 min read</span>
                </Typography>
                <Stack
                  sx={{
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "start",
                  }}
                >
                  <Typography sx={TitleStyle}>
                    Going Big With Gig Economy
                  </Typography>
                  <Typography sx={TextStyle}>
                    To combat rising unemployment in Malaysia, SOLVNEX is
                    pushing to disrupt the traditional hiring landscape to
                    provide opportunities for gig professionals…
                  </Typography>
                  <Badge
                    sx={{
                      ...ArticleBadge,
                      color: "#287975",
                      background: "#B6E6E4 0% 0% no-repeat padding-box",
                    }}
                  >
                    Business
                  </Badge>
                </Stack>
                <Typography sx={ReadMoreStyle}>
                  Read more
                  <ArrowForwardIcon />
                </Typography>
              </Button>
              <Button
              href="/articles/article-2"
                sx={{
                  ...ButtonStyle,
                  "&:hover": {
                    background: 'url("/background/ArticleBBtnBg.png")',
                    backgroundSize: "cover",
                  },
                }}
              >
                <Typography sx={DateStyle}>
                  August 5, 2023
                  <CircleIcon sx={CircleIconStyle} />
                  <span style={{ fontWeight: 400 }}>4 min read</span>
                </Typography>
                <Stack
                  sx={{
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "start",
                  }}
                >
                  <Typography sx={TitleStyle}>
                    The Rise of Gig Professionals: Redefining the Workforce of
                    the Future
                  </Typography>
                  <Typography sx={TextStyle}>
                    In today’s fast-paced and digital-driven world, the gig
                    economy has emerged as a transformative force, reshaping the
                    way people…
                  </Typography>
                  <Badge
                    sx={{
                      ...ArticleBadge,
                      color: "#887305",
                      background: "#F8EECC 0% 0% no-repeat padding-box",
                    }}
                  >
                    Gig Professional
                  </Badge>
                </Stack>
                <Typography sx={ReadMoreStyle}>
                  Read more
                  <ArrowForwardIcon />
                </Typography>
              </Button>
              <Button
              href="/articles/article-3"
                sx={{
                  ...ButtonStyle,
                  "&:hover": {
                    background: 'url("/background/ArticleCBtnBg.png")',
                    backgroundSize: "cover",
                  },
                }}
              >
                <Typography sx={DateStyle}>
                  July 20, 2023
                  <CircleIcon sx={CircleIconStyle} />
                  <span style={{ fontWeight: 400 }}>5 min read</span>
                </Typography>
                <Stack
                  sx={{
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "start",
                  }}
                >
                  <Typography sx={TitleStyle}>
                    Gig Economy vs. Traditional Employment: Pros and Cons
                  </Typography>
                  <Typography sx={TextStyle}>
                    You’ve heard a lot of talk about using temporary employees
                    or subcontractors to fill roles at your company. But many
                    managers find it hard to imagine temps…
                  </Typography>
                  <Badge
                    sx={{
                      ...ArticleBadge,
                      color: "#887305",
                      background: "#F8EECC 0% 0% no-repeat padding-box",
                    }}
                  >
                    Gig Professional
                  </Badge>
                </Stack>
                <Typography sx={ReadMoreStyle}>
                  Read more
                  <ArrowForwardIcon />
                </Typography>
              </Button>
            </Stack>
          </Stack>
          <Pagination
            sx={{
              marginTop: "60px",
              "& .MuiPaginationItem-root": {
                fontWeight: 600,
                fontSize: "16px",
                color: "#212020",
              },
              "& .MuiPaginationItem-page.Mui-selected": {
                width: "48px",
                height: "48px",
                background: "#01b1a8",
                fontWeight: 600,
                fontSize: "16px",
                color: "#fff",
              },
            }}
          />
        </Stack>
      </Box>
    </MainLayout>
  );
};

export default Article;
