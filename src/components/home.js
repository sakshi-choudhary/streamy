import Twitch from "../shared/utlis/twitch";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black3">
      <div className="flex justify-between w-screen px-4 py-2 bg-black2 shadow-xl">
        <Twitch className="text-sm" />
        <h1 className="text-gray-300 italic font-medium text-2xl mt-3">
          Twitch TV
        </h1>
      </div>
    </div>
  );
};

export default Home;
