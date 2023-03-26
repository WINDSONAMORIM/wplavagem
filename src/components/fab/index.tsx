import { Fab } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export const FAB = () => {
  const fabStyle = {
    position: "fixed",
    bottom: 16,
    right: 16,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <Fab size="medium" color="success" sx={fabStyle}>
      <a href="https://api.whatsapp.com/send?phone=5511992597337">
        <WhatsAppIcon sx={{ color: "#ffffff", height: 60, width: 60 }} />
      </a>
    </Fab>
  );
};
