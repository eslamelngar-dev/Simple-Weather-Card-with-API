import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { CircularProgress } from "@mui/material";

export default function CardBody({ temperature, desc, min, max, icon,isLoading }) {
  useEffect(() => {});

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          marginTop: "10px",
          paddingRight: "30px",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginRight: "-30px",
            }}
          >
            {isLoading ? (
              <CircularProgress />
            ) : (
              <Typography variant="h1">{temperature}°</Typography>
            )}
          </div>

          <Typography variant="h6" sx={{ opacity: 0.8 }}>
            {desc}
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "10px",
              gap: "10px",
            }}
          >
            <Typography>{`الصغري: ${min}`}</Typography>
            <span>|</span>
            <Typography>{`الكبري: ${max}`}</Typography>
          </div>
        </div>

        <div style={{ marginRight: "-24px" }}>
          <img src={icon} />
        </div>
      </div>
    </>
  );
}
