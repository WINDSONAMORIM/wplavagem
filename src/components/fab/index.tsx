import { Fab } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export const FAB = () => {
  const fabStyle = {
    position: "absolute",
    bottom: 16,
    right: 16,
  };

  return (
    <Fab size="large" color="success" sx={fabStyle}>
      <a href="https://web.whatsapp.com/send?phone=5511992597337">
        <WhatsAppIcon fontSize="large" sx={{ color: "#ffffff" }} />
      </a>
    </Fab>
  );
};
