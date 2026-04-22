import React, { useEffect, useState } from "react";
import Container from "../layout/Container";
import {
  Bg2,
  Bride,
  Flower1,
  Groom,
  IconColor,
  IconWhite,
  Ornament,
} from "../assets/images";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

function Event() {
  const weddingDate = new Date("2026-12-20T09:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((distance / 1000 / 60) % 60),
      seconds: Math.floor((distance / 1000) % 60),
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
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
        <div className="absolute inset-0 bg-white/70 z-0 " />
        <div className="relative z-10 px-10 py-14 text-center">
          <div className="flex justify-center mb-8">
            <img className="w-[40%]" src={IconColor} />
          </div>
          <p className="font-alex text-4xl text-[#B6A893] font-extralight">
            Wedding Date
          </p>
          <p className="font-body font-bold text-brown text-2xl ">
            6 JUNI 2026
          </p>
          <div className="flex justify-center items-center gap-1 text-center mb-14">
            <TimeBox label="D" value={timeLeft.days} />
            <TimeBox label="H" value={timeLeft.hours} />
            <TimeBox label="M" value={timeLeft.minutes} />
            <TimeBox label="S" value={timeLeft.seconds} />
          </div>
          <div className="mb-24">
            <p className="font-body font-bold text-brown text-2xl mb-5">
              RESEPSI PERNIKAHAN
            </p>
            <p className="font-content  font-light text-xs text-brown text-center  ">
              PUKUL 12.30 - 14.30 WIB
            </p>
            <p className="font-content text-xs text-brown text-center font-medium  ">
              GRAHA LILA SEMESTA
            </p>
            <p className="font-content  font-light text-xs text-brown text-center mb-10">
              JOHO, SUMBEREJO, KEC. NGASEM, KABUPATEN KEDIRI, JAWA TIMUR
            </p>
            <button className="bg-brown-dark font-content px-14 py-2 text-white text-xs">
              LOKASI
            </button>
          </div>
          <div className="mb-20">
            <p className="font-body font-bold text-brown text-2xl mb-5">
              PEMBERKATAN
            </p>
            <p className="font-content font-light text-xs text-brown text-center  ">
              PUKUL 08.00 - 10.00 WIB
            </p>
            <p className="font-content text-xs text-brown text-center font-medium  ">
              GKJW KEDIRI
            </p>
            <p className="font-content font-light text-xs text-brown text-center mb-10">
              JOHO, SUMBEREJO, KEC. NGASEM, KABUPATEN KEDIRI, JAWA TIMUR
            </p>
            <button className="bg-brown-dark font-content px-14 py-2 text-white text-xs">
              LOKASI
            </button>
          </div>
          <p className="font-content  font-light text-xs text-brown text-center ">
            ATAS KEHADIRAN SERTA DOA RESTU BAPAK / IBU / SAUDARA / I KAMI
            MENGUCAPKAN BANYAK TERIMA KASIH
          </p>
        </div>
        {/* Ornament */}
        {/* <div className="relative bottom-[-80px] w-full flex justify-center z-20">
          <img src={Ornament} />
        </div> */}
      </div>
    </Container>
  );
}

function TimeBox({ label, value }) {
  return (
    <div className="p-4 w-14 font-body  flex text-center  items-center text-brown">
      <div className=" mr-[1px]">{value.toString().padStart(2, "0")}</div>
      <div className=" ">{label}</div>
    </div>
  );
}

export default Event;
