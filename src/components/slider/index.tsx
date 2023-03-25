import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import tapete from "../../assets/images/limpeza_tapete.jpg";
import carro from "../../assets/images/limpeza_carro.jpg";
import sofa from "../../assets/images/limpeza_sofa.jpg";

export const Slider = () => {
  const imagens = [tapete, carro, sofa];
  const carousel = useRef<HTMLInputElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth);
    if (
      carousel.current?.scrollWidth === undefined ||
      carousel.current?.offsetWidth === undefined
    ) {
    } else {
      setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
    }
  }, []);
  /**
   * app
   *
   *
   *
   */
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "900px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.div
        ref={carousel}
        whileTap={{ cursor: "grabbing" }}
        style={{ cursor: "grab", overflow: "hidden" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.1 }}
          style={{ display: "flex" }}
        >
          {imagens.map((img) => (
            <motion.div
              style={{ minHeight: "100px", minWidth: "300px", padding: "14px" }}
              key={img}
            >
              <img
                style={{
                  width: "100%",
                  height: "90%",
                  borderRadius: 30,
                  pointerEvents: "none",
                }}
                src={img}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};
