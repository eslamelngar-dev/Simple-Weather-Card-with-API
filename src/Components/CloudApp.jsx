import Container from "@mui/material/Container";
import Clock from "./Clock";
import { useEffect } from "react";
import axios from "axios";
import TopCard from "./TopCard";
import CardBody from "./CardBody";
import { useSelector, useDispatch } from "react-redux";
import { setweather } from "../weatherSlice";

export default function CloudApp() {
  const dispatch = useDispatch();
  const temp = useSelector((state) => state.weather);

  useEffect(() => {
    const controller = new AbortController();

    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?lat=31.238292068629814&lon=29.954716341145474&appid=dcb46835d14de0ec8d5eb597fdd81d23",
        { signal: controller.signal }
      )
      .then((response) => {
        const temperature = Math.round(response.data.main.temp - 272.15);
        const min = Math.round(response.data.main.temp_min - 272.15);
        const max = Math.round(response.data.main.temp_max - 272.15);
        const desc = response.data.weather[0].description;
        const iconCode = response.data.weather[0].icon;

        dispatch(
          setweather({
            temperature,
            min,
            max,
            desc,
            icon: `https://openweathermap.org/img/wn/${iconCode}@4x.png`,
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });

    return () => controller.abort();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
  <Container
    maxWidth="sm"
    sx={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Clock />

    {/* Card */}
    <div
      style={{
        width: "100%",
        background: "#0052d0",
        color: "white",
        padding: "16px",
        borderRadius: "15px",
        boxShadow: "0px 11px 20px rgba(0,0,0,0.15)",
      }}
      dir="rtl"
    >
      <TopCard />

      <CardBody
        temperature={temp.temperature}
        min={temp.min}
        max={temp.max}
        icon={temp.icon}
      />
    </div>
  </Container>
);
}
