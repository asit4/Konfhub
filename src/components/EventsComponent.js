import { Box, Hidden } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import React from "react";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

const useStyles = makeStyles(() => ({
  singIcon: {
    [theme.breakpoints.down("md")]: {
      width: 200,
    },
  },
}));

const EventsComponent = () => {
  const classes = useStyles();
  return (
    <Box
      mt={5}
      bgcolor={"#FFDBA6"}
      height={456}
      borderRadius={"50px"}
      className="EventsWrapper"
      sx={{ zIndex: -99 }}
    >
      <Box
        display={"flex"}
        flexDirection={{ md: "row", sm: "row", xs: "column" }}
        p={{ md: 6, sm: 3, xs: 3 }}
      >
        <Box width={{ md: "60%", sm: "60%", xs: "100%" }}>
          <Box
            className="Events"
            mt={{ md: 4, sm: 0, xs: 0 }}
            fontFamily={"Caveat Brush"}
            fontSize={{ md: 72, sm: 66, xs: 40 }}
            fontWeight={400}
            lineHeight={"93.6px"}
            fontStyle={"cursive"}
            color={"#572148"}
          >
            Events
          </Box>
          <Box
            className="EventsSubtext"
            mt={{ md: 4, sm: 4, xs: 0 }}
            pl={{ md: 5, sm: 5, xs: 0 }}
            textAlign={"left"}
            fontWeight={400}
            fontSize={{ md: 18, sm: 14 }}
            lineHeight={"25px"}
            fontFamily={"Nunito"}
            color={"#572148"}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim praesent elementum facilisis
            leo, vel fringilla est ullamcorper eget nulla facilisi etiam
            dignissim diam quis enim lobortis scelerisque fermentum dui faucibus
            in ornare quam viverra
          </Box>
        </Box>
        <Hidden smDown>
          <Box width={"40%"} display={"flex"} justifyContent={"flex-end"}>
            <img
              src={"/SingIcon.svg"}
              alt={"SingIcon"}
              className={classes.singIcon}
            />
          </Box>
        </Hidden>
      </Box>
    </Box>
  );
};

export default EventsComponent;
