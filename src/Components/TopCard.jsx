import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import moment from "moment";
import "moment/min/locales";
moment.locale("ar");

export default function TopCard() {
  return (
    <>
      <div
        style={{
          marginBottom: "10px",
          display: "flex ",
          alignItems: "center",
          justifyContent: "space-between",
          marginRight: "10px",
        }}
      >
        <Typography variant="h3" style={{ marginLeft: "10px" }}>
          الإسكندرية
        </Typography>

        <Typography
          variant="subtitle1"
          style={{ color: "white", fontSize: "1rem", marginLeft: "20px",fontWeight:"600" }}
        >
          {moment().format("D / M")}
        </Typography>
      </div>

      <Divider sx={{ background: "rgba(255,255,255,0.3)", my: 2 }} />
    </>
  );
}
