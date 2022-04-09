import React from "react";
import { makeStyles } from "@mui/styles";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";

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
  searchTextfield: {
    width: "95%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  select: {
    width: "100%",
  },
  dropdownStyle: {
    borderRadius: 50,
    border: "2px solid #000000",
    width: 210,
    marginTop: 10,
    marginLeft: 15,
  },
}));

const SearchPastEventComponent = ({
  isPastEvents,
  setIsPastEvents,
  searchText,
  setSearchText,
}) => {
  const classes = useStyles();

  return (
    <Box
      zIndex={1}
      width={597}
      maxHeight={{ md: 120, sm: 120, xs: 190 }}
      bgcolor={"#FFFFFF"}
      borderRadius={"15px"}
      boxShadow={"0px 4px 15px rgba(0, 0, 0, 0.15)"}
      pl={4}
      pr={4}
      pt={2.5}
      pb={{ md: 2.5, sm: 2.5, xs: 3.5 }}
      display={"flex"}
      justifyContent={"space-between"}
      flexDirection={{ md: "row", sm: "row", xs: "column" }}
    >
      <Box width={{ md: "60%", sm: "60%", xs: "100%" }}>
        <Box
          fontFamily={"Nunito"}
          fontSize={18}
          lineHeight={"25px"}
          fontWeight={700}
          color={"#000000"}
        >
          Search
        </Box>
        <Box mt={1}>
          <TextField
            className={classes.searchTextfield}
            InputProps={{
              endAdornment: <img src={"/SearchIcon.svg"} alt={"Search"} />,
            }}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </Box>
      </Box>
      <Box
        width={{ md: "35%", sm: "35%", xs: "100%" }}
        mt={{ md: 0, sm: 0, xs: 2 }}
      >
        <Box
          fontFamily={"Nunito"}
          fontSize={18}
          lineHeight={"25px"}
          fontWeight={700}
          color={"#000000"}
        >
          Past Events
        </Box>
        <Box mt={1}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Select Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              fullWidth
              className={classes.select}
              IconComponent={() => (
                <Box mr={2}>
                  <img src={"/Arrow.svg"} alt={"DropDown Icon"} />
                </Box>
              )}
              label="Select Type"
              value={isPastEvents}
              onChange={(e) => setIsPastEvents(e.target.value)}
              MenuProps={{ classes: { paper: classes.dropdownStyle } }}
            >
              <MenuItem
                value={true}
                sx={{
                  padding: "5px 20px 10px 20px",
                  borderBottom: "2px solid #000000",
                  "&:hover": {
                    background: "none",
                  },
                }}
              >
                True
              </MenuItem>
              <MenuItem
                value={false}
                sx={{
                  padding: "10px 20px 5px 20px",
                  "&:hover": {
                    background: "none",
                  },
                }}
              >
                False
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};

export default SearchPastEventComponent;
