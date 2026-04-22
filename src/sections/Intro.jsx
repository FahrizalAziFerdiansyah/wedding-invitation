import React from "react";
import Container from "../layout/Container";
import bgImage from "../assets/images/image1.png";
import ornament from "../assets/images/ornament.png";
import { IconWhite } from "../assets/images";

function Intro() {
  return (
    <Container>
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col relative"
        style={{ backgroundImage: `url('${bgImage}')` }}
      >
        <div className="absolute top-12 w-full z-20">
          <div className="flex justify-center">
            <img className="w-[40%]" src={IconWhite} />
          </div>
        </div>

        <div className="absolute inset-0 bg-primary/90 z-0" />

        <div className="absolute inset-0 flex justify-center items-center z-10">
          <div className="h-full w-[1px] bg-[#F7DABD]" />
        </div>

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center justify-center flex-1">
          <div className="translate-y-30 w-full">
            <div className="bg-brown w-full items-center text-center">
              <p className="text-white font-body text-sm py-1">
                KLIK UNTUK MEMBUKA UNDANGAN
              </p>
            </div>
          </div>
        </div>

        {/* Ornament */}
        <div className="absolute bottom-[-40px] w-full flex justify-center z-20">
          <img src={ornament} />
        </div>
      </div>
    </Container>
  );
}

export default Intro;
