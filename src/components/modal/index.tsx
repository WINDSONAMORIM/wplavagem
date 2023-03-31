import { Modal } from "@mui/material";
import { Box } from "@mui/system";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  img: string;
}

export const ImageModal = (props: ModalProps) => {
  return (
    <Modal open={props.open} onClose={props.onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "#03063a" /* Cor inicial do gradiente */,
          backgroundImage:
            "linear-gradient(315deg, #05083f7a 74%, #62b6e745 74%)" /* Gradiente de cores */,
          boxShadow: 24,
          p: 1,
          maxWidth: "100%",
          maxHeight: "100%",
          overflow: "auto",
        }}
      >
        <img src={props.img} alt={"image"} style={{ maxWidth: "100%" }} />
      </Box>
    </Modal>
  );
};
