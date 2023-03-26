import { Box, ImageList, ImageListItem } from "@mui/material";
import imagem1 from "../../assets/images/Foto1.jpg";
import imagem2 from "../../assets/images/Foto2.jpg";
import imagem3 from "../../assets/images/Foto3.jpg";
import imagem4 from "../../assets/images/Foto4.jpg";
import imagem5 from "../../assets/images/Foto5.jpg";

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

export const ImagemList = () => {
  return (
    <Box sx={{ width: "100%", height: 450, overflowY: "scroll" }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};
