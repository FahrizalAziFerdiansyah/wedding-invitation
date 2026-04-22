import React from "react";
import Container from "../layout/Container";
import {
  Bg2,
  Bride,
  Flower1,
  Groom,
  IconWhite,
  Image10,
  Image9,
} from "../assets/images";

function Gallery() {
  return (
    <Container>
      <div className="min-h-screen bg-cover bg-center  relative bg-white ">
        <img
          src={Flower1}
          className="w-[317px] rotate-[180deg] translate-y-[-120px] absolute"
        />
        <img
          src={Flower1}
          className="w-[317px]  translate-y-[500px] right-[-50px] absolute"
        />
        <div className="absolute inset-0 bg-primary/90 z-0 " />
        <div className="relative z-10  py-14">
          <div className="flex justify-center mb-8">
            <img className="w-[40%]" src={IconWhite} />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Gallery;
