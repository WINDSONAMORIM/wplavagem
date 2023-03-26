import { Typography } from "@mui/material";

export const Footer = () => {
  return (
    <div
      style={{
        width: "100vw",
        position: "fixed",
        bottom: 0,
        backgroundColor: "#eeeeee",
        textAlign: "center",
      }}
    >
      <Typography variant="overline">
        &copy; desenvolvido por Windson Amorim Marana
      </Typography>
    </div>
  );
};
