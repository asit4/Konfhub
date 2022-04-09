import "./App.css";
import { Box, Container, Divider, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import EventsComponent from "./components/EventsComponent";
import SearchPastEventComponent from "./components/SearchPastEventComponent";
import axios from "axios";
import useDebounce from "./components/useDebounce";

function App() {
  const [isPastEvents, setIsPastEvents] = useState();
  const [searchText, setSearchText] = useState("");
  const [list, setList] = useState([]);
  const [loadMore, setLoadMore] = useState(12);

  const searchQuery = useDebounce(searchText.toLowerCase());

  useEffect(() => {
    axios
      .get(
        "https://iitm1blt3l.execute-api.ap-southeast-1.amazonaws.com/dev/hosted-events?limit=" +
          loadMore +
          "&past_events=" +
          isPastEvents +
          "&search_query=" +
          searchQuery
      )
      .then((res) => {
        setList(res);
      })
      .catch((e) => {
        alert(e);
      });
  }, [searchQuery, isPastEvents, loadMore]);

  return (
    <Container maxWidth={"lg"}>
      <Box fontSize={72}>
        <img src={"/Logo_second.svg"} alt={"Logo"} />
      </Box>
      <EventsComponent />
      <Box
        mt={{ md: -8, sm: -8, xs: -12 }}
        display={"flex"}
        justifyContent={"center"}
        zIndex={1}
      >
        <SearchPastEventComponent
          isPastEvents={isPastEvents}
          setIsPastEvents={setIsPastEvents}
          setSearchText={setSearchText}
          searchText={searchText}
        />
      </Box>
      <Box mt={{ md: 2, sm: 2, xs: 4 }}>
        <Box
          fontFamily={"Nunito"}
          fontSize={{ md: 36, sm: 36, xs: 30 }}
          lineHeight={"100%"}
          fontWeight={700}
        >
          250+ Events
        </Box>
      </Box>
      <Grid container spacing={3}>
        {list?.data?.events?.map((each) => (
          <Grid item xs={12} sm={6} md={3}>
            <Box display={"flex"} justifyContent={"center"}>
              <Box
                mt={5}
                height={287}
                width={{ md: 271, sm: 271, xs: 271 }}
                bgcolor={"#fff"}
                sx={{
                  filter: "drop-shadow(0px 0px 13.5679px rgba(0, 0, 0, 0.2))",
                }}
              >
                <Box
                  height={170}
                  sx={{
                    backgroundImage: `url(${"/EventBackground.svg"})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                />
                <Box pl={2} pr={2} pb={2} pt={4}>
                  <Box
                    fontFamily={"Prompt"}
                    fontWeight={600}
                    fontSize={16.28}
                    lineHeight={"21.17px"}
                    textAlign={"left"}
                    color={"#141B25"}
                    height={50}
                  >
                    {each?.name?.length > 54
                      ? each?.name?.substring(0, 35) + "..."
                      : each?.name?.substring(0, 35)}
                  </Box>
                  <Box display={"flex"} justifyContent={"space-between"}>
                    <Box display={"flex"} alignItems={"flex-start"}>
                      <img src={"/Stroke.svg"} alt={"Stroke"} />
                      <Box
                        ml={1}
                        fontFamily={"Prompt"}
                        fontWeight={400}
                        fontSize={10.8543}
                        lineHeight={"16px"}
                        textAlign={"left"}
                        color={"#141B25"}
                      >
                        Raddison Blue
                      </Box>
                    </Box>
                    <Box display={"flex"} alignItems={"flex-start"}>
                      <img src={"/DangerCircle.svg"} alt={"Stroke"} />
                      <Box
                        ml={1}
                        fontFamily={"Prompt"}
                        fontWeight={400}
                        fontSize={10.8543}
                        lineHeight={"16px"}
                        textAlign={"left"}
                        color={"#141B25"}
                      >
                        {`${each?.is_free === true ? "Free" : "Paid"} | ${
                          each?.is_virtual === true ? "Online" : "Offline"
                        }`}
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
      {list?.data?.events?.length !== list?.data?.count && (
        <Box
          mt={4}
          mb={4}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box width={"40%"}>
            <Divider sx={{ borderBottom: "2px solid #CCCCCC" }} />
          </Box>
          <Box
            pl={{ md: 3, sm: 2, xs: 2 }}
            pr={{ md: 3, sm: 2, xs: 2 }}
            pt={{ md: 2, sm: 2, xs: 1 }}
            pb={{ md: 2, sm: 2, xs: 1 }}
            border={"1px solid #CCCCCC"}
            borderRadius={"50px"}
            fontFamily={"Prompt"}
            fontSize={{ md: 18, sm: 18, xs: 8 }}
            lineHeight={"100%"}
            fontWeight={400}
            color={"#141B25"}
            sx={{ cursor: "pointer" }}
            onClick={() => setLoadMore(loadMore + loadMore)}
          >
            Load More
          </Box>
          <Box width={"40%"}>
            <Divider sx={{ borderBottom: "2px solid #CCCCCC" }} />
          </Box>
        </Box>
      )}
    </Container>
  );
}

export default App;
