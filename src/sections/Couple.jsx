import React from "react";
import Container from "../layout/Container";
import { Bg2, Bride, Flower1, Groom, IconWhite } from "../assets/images";

function Couple() {
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
        <div className="relative z-10 px-10 py-14">
          <div className="flex justify-center mb-8">
            <img className="w-[40%]" src={IconWhite} />
          </div>
          <p className="font-content  font-light text-xs text-white text-center mb-9  ">
            MERUPAKAN SUATU KEHORMATAN BAGI KAMI APABILA BAPAK / IBU / SAUDARA /
            I BERKENAN HADIR UNTUK MEMBERIKAN DOA RESTU PADA RESEPSI PERNIKAHAN
            PUTRA-PUTRI KAMI 
          </p>
          <p className=" text-2xl font-bold font-body text-white text-center  mb-5">
            Andreas Kurnia
            <br /> Ferdiantoro S.Kom
          </p>
          <p className="font-content  font-light text-xs text-white text-center   ">
            PUTRI DARI
            <br />
            BPK. Ir. JOHANNES BOEDIJANTORO <br />
            IBU FERIE KUSUMA KRISTYANINGSIH S.Keb Bdn
          </p>
          <p className=" text-2xl font-bold font-body text-white text-center  my-9">
            &
          </p>
          <p className=" text-2xl font-bold font-body text-white text-center  mb-5">
            dr. Kasilda
            <br /> Pasha Devanda
          </p>
          <p className="font-content  font-light text-xs text-white text-center  mb-14 ">
            PUTRA DARI
            <br />
            BPK. Dr. ANTONIUS GATOT SUBROTO, Sp.N, FMIN <br />
            IBU IDA ERVIYANI (Almh)
          </p>
          <div className="flex items-center justify-center gap-10 mb-3">
            <div className="w-36 h-36 overflow-hidden rounded-lg">
              <img
                src={Groom}
                className="w-full h-full object-cover scale-150"
              />
            </div>

            <p className="text-white  font-alex text-3xl">
              Andreas <br /> Kurnia <br /> Ferdiantoro
            </p>
          </div>
          <div className="flex items-center justify-center gap-10">
            <p className="text-white font-alex text-3xl">
              Kasilda <br />
              Pasha <br /> Devanda
            </p>
            <div className="w-36 h-36 overflow-hidden rounded-lg">
              <img
                src={Bride}
                className="w-full h-full object-cover transform scale-x-[-1]"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Couple;
