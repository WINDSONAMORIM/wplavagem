import { Avatar, Fab } from "@mui/material";
import { Box } from "@mui/system";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import casalImage from "./../../assets/images/casal.jpg";

export const Contact = () => {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Avatar
          alt="desenho de um casal equipados para limpeza"
          src={casalImage}
          sx={{ justifyContent: { sm: "flex-start" }, width: 500, height: 500 }}
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
        <Fab
          color="primary"
          size="large"
          href="https://api.whatsapp.com/send?phone=5511952765321"
        >
          <WhatsAppIcon sx={{ height: 50, width: 50 }} />
        </Fab>

        <Fab
          color="primary"
          size="large"
          href="https://www.instagram.com/wp.lavagem_oficial/"
        >
          <InstagramIcon sx={{ height: 50, width: 50 }} />
        </Fab>
      </Box>
    </>
  );
};
