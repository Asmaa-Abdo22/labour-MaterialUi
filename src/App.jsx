import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ResponsiveAppBar from "./components/SearchAppBar/SearchAppBar";
import mainImg from "./assets/images/green-sofa-and-pink-chair-sit-in-a-living-room_COMPRESSED.jpg";
import ShopByCategory from "./components/ShopByCategory/ShopByCategory";
import Grid from "@mui/material/Grid2";
import secOneImg from "./assets/images/secOne.jpg";
import secTwo from "./assets/images/secTwo.jpg";
import secThree from "./assets/images/secThree.jpg";
import { Fade } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";
function App() {
  return (
    <>
      {/* ---------NAV-one------ */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "5px",
          borderBottom: "1px solid grey",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "flex-start", sm: "center" },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: "bold",
            fontSize: {
              xs: "2rem",
              sm: "3rem",
            },
          }}
        >
          EQ3
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            flexDirection: { xs: "column", sm: "row" },
            marginTop: { xs: "10px", sm: "0" },
          }}
        >
          <Box>
            <Breadcrumbs
              aria-label="breadcrumb"
              sx={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <Typography sx={{ color: "text.primary" }}>
                <FmdGoodOutlinedIcon />
              </Typography>
              <Typography sx={{ color: "text.primary" }}>
                <HelpOutlineOutlinedIcon />
              </Typography>
              <Typography sx={{ color: "text.primary" }}>
                <FavoriteBorderOutlinedIcon />
              </Typography>
              <Typography
                sx={{
                  color: "text.primary",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <PersonOutlinedIcon /> Join/Login to EQ3
              </Typography>
              <Typography
                sx={{
                  color: "text.primary",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <LanguageOutlinedIcon /> EN/CAD
              </Typography>
            </Breadcrumbs>
          </Box>

          <Box>
            <Button
              sx={{ color: "black", borderColor: "black" }}
              variant="outlined"
              startIcon={<ShoppingCartOutlinedIcon />}
            >
              Cart (0)
            </Button>
          </Box>
        </Box>
      </Box>
      {/* ---------NAV-twoo------ */}
      <ResponsiveAppBar />
      {/* ---------Title Box----- */}
      <Box
        sx={{
          backgroundColor: " #F5A049",
          padding: "7px",
          textAlign: "center",
        }}
      >
        <Typography sx={{ fontWeight: "bold" }}>
          Labour Day: Enjoy 20% Off EQ3
        </Typography>
      </Box>
      {/* ---------Main Image----- */}
      <Box sx={{ textAlign: "center", position: "relative" }}>
        <Box
          component={"img"}
          src={mainImg}
          alt="Example Image"
          sx={{
            width: { xs: "100%", md: "90%" },
            height: "100%",
            objectFit: "cover",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            top: { xs: "45%", md: "75%" },
            transform: "translatex(-50%)",
            width: "80%",
            textAlign: "center",
          }}
        >
         <Slide direction="down">
         <Typography
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "1.25rem", md: "3rem" },
              textTransform: "uppercase",
              color: "#FFA725",
            }}
          >
            {" "}
            Labour Day: Enjoy 20% Off EQ3
          </Typography>
          
         </Slide>

         <Slide direction="up">
         <Typography
            sx={{
              textTransform: "capitalize",
              fontSize: { xs: "14px", md: "22px" },
              margin: "auto",
              color: "white",
            }}
          >
            save on designs made with lognevity in mind .now until september 3rd
          </Typography>
         </Slide>
        </Box>
      </Box>
      {/* --------- Image List----- */}
      <ShopByCategory />
      {/* ---------Section1----- */}
      <Box sx={{ paddingBlock: "10px", textAlign: "center" }}>
        <Grid container spacing={1}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Slide direction="left" cascade>
              <Box
                component="img"
                src={secOneImg}
                sx={{
                  width: "80%",
                  height: "350px",
                  objectFit: "contain",
                }}
                alt="two persons"
              />
            </Slide>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Slide direction="right" cascade>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  alignItems: "center",
                  paddingInline: "20px",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ paddingTop: { xs: "0", md: "60px" } }}
                >
                  AS LOW AS 0% APR FINANCING UPON APPROVAL WITH AFFIRM
                </Typography>
                <Typography variant="subtitle1" sx={{}}>
                  Affirm provides flexible payment solutions, allowing you to
                  buy better and pay over time.
                </Typography>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "black", width: "fit-content" }}
                >
                  Learn More
                </Button>
              </Box>
            </Slide>
          </Grid>
        </Grid>
      </Box>
      {/* ---------Section2----- */}
      <Box
        sx={{
          textAlign: "center",
          paddingBlock: "50px",
          backgroundColor: "#F5F5F5",
        }}
      >
        <Grid container spacing={1}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Slide direction="right" cascade>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  alignItems: "center",
                  paddingInline: "20px",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ paddingTop: { xs: "0", md: "60px" } }}
                >
                  CHOOSE WITH CONFIDENCE
                </Typography>
                <Typography variant="subtitle1" sx={{}}>
                  Remove the guesswork in choosing your upholstery design by
                  ordering complimentary swatches.
                </Typography>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "black", width: "fit-content" }}
                >
                  Order Swatches
                </Button>
              </Box>
            </Slide>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Slide direction="left" cascade>
              <Box
                component="img"
                src={secTwo}
                sx={{
                  width: "80%",
                  height: "350px",
                  objectFit: "contain",
                }}
                alt="two persons"
              />
            </Slide>
          </Grid>
        </Grid>
      </Box>
       {/* ---------Section3----- */}
       <Box sx={{  textAlign: "center" , paddingBlock: "50px" }}>
        <Grid container spacing={1}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Slide direction="left" cascade>
              <Box
                component="img"
                src={secThree}
                sx={{
                  width: "80%",
                  height: "350px",
                  objectFit: "contain",
                }}
                alt="two persons"
              />
            </Slide>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Slide direction="right" cascade>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  alignItems: "center",
                  paddingInline: "20px",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ paddingTop: { xs: "0", md: "60px" } }}
                >
                 Complimentary Design Services
                </Typography>
                <Typography variant="subtitle1" sx={{}}>
                Let's create your dream space together
                </Typography>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "black", width: "fit-content" }}
                >
                  Book A Consultation
                </Button>
              </Box>
            </Slide>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default App;
