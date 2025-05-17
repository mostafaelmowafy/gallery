import { useEffect } from "react";
import data from "../data";
import ProtectedImage from "./ProtectedImage"; // استيراد المكون الجديد

function Gallery() {
  useEffect(() => {
    const handleBeforePrint = () => {
      alert("لا يسمح بطباعة المحتوى");
      window.location.href = "/gallery";
    };

    window.addEventListener("beforeprint", handleBeforePrint);
    return () => window.removeEventListener("beforeprint", handleBeforePrint);
  }, []);

  return (
    <div className="bg-black flex flex-col items-center">
      <div className="bg-black h-dvh flex flex-col items-center justify-center border-b">
        <p className="text-white text-center text-3xl font-bold md:-mt-0 xl:mb-5 -mt-20 mb-20">
          Gallary
        </p>
        <div>
          <img
            src="/assets/board.png"
            alt="Gallary"
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>
      </div>
      <div className="mt-24 grid grid-cols-3 md:grid-cols-5 gap-4 p-4 w-full max-w-6xl">
        {data.map((item) => (
          <div key={item.id} className="overflow-hidden rounded-lg relative">
            <ProtectedImage
              src={item.imgUrl}
              alt="Gallary"
              css={
                "w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              }
            />
            <div
              className="absolute inset-0 z-50 pointer-events-none 
                        bg-gradient-to-b from-transparent via-transparent to-black opacity-10
                        hover:opacity-0 transition-opacity duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
