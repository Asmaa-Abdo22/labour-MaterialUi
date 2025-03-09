import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import one from "../../assets/images/one.png";
import two from "../../assets/images/two.png";
import three from "../../assets/images/three.png";
import four from "../../assets/images/four.png";
import five from "../../assets/images/five.png";
import six from "../../assets/images/six.png";
import seven from "../../assets/images/seven.png";
import eight from "../../assets/images/8.png";
import nine from "../../assets/images/9.png";
import ten from "../../assets/images/10.png";
import eleven from "../../assets/images/11.png";
import twelve from "../../assets/images/12.png";
import { Typography } from "@mui/material";
import { Slide } from "react-awesome-reveal";

const categories = [
  { img: one, title: "Ready to Ship Upholstery" },
  { img: two, title: "Dining" },
  { img: three, title: "Storage Beds" },
  { img: four, title: "Lighting" },
  { img: five, title: "Accent Tables" },
  { img: six, title: "Rugs" },
  { img: seven, title: "Bar & Counter Stools" },
  { img: eight, title: "Accent Stools" },
  { img: nine, title: "Accessories" },
  { img: ten, title: "Accent Chairs" },
  { img: eleven, title: "Outdoor" },
  { img: twelve, title: "Media & Storage" },
];

function ShopByCategory() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const getCols = () => {
    if (isSmallScreen) return 1;
    if (isMediumScreen) return 2;
    return 4;
  };

  return (
    <>
      <Typography
        sx={{
          fontWeight: "bold",
          marginTop: "30px",
          marginLeft: "80px",
          fontSize: "22px",
        }}
      >
        SHOP BY CATEGORY
      </Typography>
      <Box display="flex" justifyContent="center" alignItems="center" py={4}>
        <ImageList
          sx={{
            width: "90%",
            height: "auto",
            overflow: "hidden",
            textAlign: "center",
          }}
          cols={getCols()}
          gap={16}
        >
          {categories.map((category) => (
            <Slide direction="left" cascade  key={category.img}>
              <ImageListItem
               
                sx={{ backgroundColor: "#f5f5f5", padding: 2, borderRadius: 2 }}
              >
                <img
                  src={category.img}
                  alt={category.title}
                  loading="lazy"
                  style={{ borderRadius: 8, width: "100%", height: "auto" }}
                />

                <ImageListItemBar title={category.title} position="below" />
              </ImageListItem>
            </Slide>
          ))}
        </ImageList>
      </Box>
    </>
  );
}

export default ShopByCategory;
