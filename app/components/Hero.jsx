const Hero = () => {
  return (
    <header className="h-[500px] bg-center flex flex-col-reverse bg-cover w-full bg-[url('/assets/header.webp')]">
      <div className="mb-5 w-10/12 max-w-7xl text-white mx-auto">
        <h1 className="text-2xl lg:text-3xl font-serif">
          Introducing N-Tech Shop Center
        </h1>
        <p>Your whole week at a glance</p>
        <button className="bg-[#77371e] hover:bg-[#e4be60] border  border-green-800 w-60 mt-2 py-3 rounded-full text-center text-white">
          Get the Weekly Kit
        </button>
      </div>
    </header>
  );
};

export default Hero;
