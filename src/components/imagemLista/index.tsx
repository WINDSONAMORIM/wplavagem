import { Box, ImageList, ImageListItem, Modal } from "@mui/material";
import React, { useState } from "react";
import clsx from "classnames";

import imagem1 from "../../assets/images/Foto1.jpg";
import imagem2 from "../../assets/images/Foto2.jpg";
import imagem3 from "../../assets/images/Foto3.jpg";
import imagem4 from "../../assets/images/Foto4.jpg";
import imagem5 from "../../assets/images/Foto5.jpg";
import { ImageModal } from "../modal";

/*interface ModalProps {
  open: boolean;
  onClose: () => void;
  img: string;
}*/

const itemData = [
  {
    img: imagem1,
    title: "title1",
  },
  {
    img: imagem2,
    title: "title2",
  },
  {
    img: imagem3,
    title: "title3",
  },
  {
    img: imagem4,
    title: "title4",
  },
  {
    img: imagem5,
    title: "title5",
  },
];

/*const ImageModal = (props: ModalProps) => {
  return (
    <Modal open={props.open} onClose={props.onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "#03063a" // Cor inicial do gradiente ,
          backgroundImage:
            "linear-gradient(315deg, #05083f7a 74%, #62b6e745 74%)" // Gradiente de cores ,
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
};*/

export const ImagemList = () => {
  const [selectedImgIndex, setSelectedImgIndex] = useState(null || 0);
  const [modalOpen, setModalOpen] = useState(false);

  const handleImageClick = (index: number) => {
    setSelectedImgIndex(index);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Box sx={{ width: "100%", height: 450, overflowY: "scroll" }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData.map((item, index) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                onClick={() => handleImageClick(index)}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      <ImageModal
        open={modalOpen}
        onClose={handleModalClose}
        img={itemData[selectedImgIndex]?.img}
      />
    </>
  );
};
