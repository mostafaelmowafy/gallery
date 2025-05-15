import data from "../data";
function Gallery() {
  return (
    <div className="bg-black flex flex-col items-center">
      <div className="bg-black h-screen flex flex-col items-center justify-center border-b">
        <p className=" text-white text-center text-3xl font-bold md:-mt-0 xl:mb-5 -mt-20 mb-20">
          Gallary
        </p>
        <div className="">
          <img src="/assets/board.png" alt="Gallary" className="  " />
        </div>
      </div>
      <div className=" mt-24 grid grid-cols-3 md:grid-cols-5 gap-4 p-4 w-full max-w-6xl">
        {data.map((item) => {
          return (
            <div key={item.id} className=" overflow-hidden rounded-lg">
              <img
                src={item.imgUrl}
                alt="Gallary"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Gallery;
