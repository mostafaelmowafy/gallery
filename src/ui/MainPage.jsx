import mainImg from "../../public/assets/main.png";
import Typewriter from "./Write";
function MainPage() {
  return (
    <>
      <div className="flex justify-center flex-col items-center bg-stone-950">
        {/* Your existing background elements */}
        <span className="absolute w-48 h-48 bg-stone-200 blur-3xl opacity-15 rounded-full -right-10 top-7" />
        <span className="absolute w-48 h-48 bg-stone-200 blur-3xl opacity-15 rounded-full -left-20 bottom-50% z-10" />
        {/* Your image container */}
        <div className="relative border-2 rounded-full w-52 h-52">
          <img
            className="absolute inline-block w-64 h-64 bottom-0 hover:bottom-10 transition-all duration-300"
            src={mainImg}
          />
        </div>
        <Typewriter text={"I'm Mo3az Gad\nPhotographer"} />;
      </div>
    </>
  );
}

export default MainPage;
