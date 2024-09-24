export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <div className="relative w-full h-[400px] md:h-[600px] bg-gray-200">
        <img
          src="/hero.jpg"
          alt="Fashion Hero Image"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Welcome to The Style Journal
          </h1>
          <p className="text-lg md:text-2xl">
            Your Source for Fashion Trends & Inspiration
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="text-center pt-32 px-5">
        <p className="max-w-[750px] mx-auto leading-8 mt-8">
          <span className="text-xl md:text-2xl font-bold text-amber-400">
            The Style Journal
          </span>
          &nbsp; is your go-to destination for the latest in fashion, style
          tips, and trend inspiration. From runway looks to streetwear
          essentials, The Style Journal is here to help you navigate the
          ever-changing world of fashion.
        </p>
      </div>
    </main>
  );
}
