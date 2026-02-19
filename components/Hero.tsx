const Hero = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-nordic leading-tight">
          Find your{' '}
          <span className="relative inline-block">
            <span className="relative z-10 font-medium">sanctuary</span>
            <span className="absolute bottom-2 left-0 w-full h-3 bg-mosque/20 -rotate-1 z-0"></span>
          </span>
          .
        </h1>

        <div className="relative group max-w-2xl mx-auto">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <span className="material-icons text-nordic-muted text-2xl group-focus-within:text-mosque transition-colors font-material-icons">
              search
            </span>
          </div>
          <input
            type="text"
            className="block w-full pl-12 pr-4 py-4 rounded-xl border-none bg-white text-nordic shadow-soft placeholder-nordic-muted/60 focus:ring-2 focus:ring-mosque focus:bg-white transition-all text-lg"
            placeholder="Search by city, neighborhood, or address..."
          />
          <button className="absolute inset-y-2 right-2 px-6 bg-mosque hover:bg-mosque/90 text-white font-medium rounded-lg transition-colors flex items-center justify-center shadow-lg shadow-mosque/20">
            Search
          </button>
        </div>

        <div className="flex items-center justify-center gap-3 overflow-x-auto hide-scroll py-2 px-4 -mx-4">
          <button className="whitespace-nowrap px-5 py-2 rounded-full bg-nordic text-white text-sm font-medium shadow-lg shadow-nordic/10 transition-transform hover:-translate-y-0.5">
            All
          </button>
          <button className="whitespace-nowrap px-5 py-2 rounded-full bg-white border border-nordic/5 text-nordic-muted hover:text-nordic hover:border-mosque/50 text-sm font-medium transition-all hover:bg-mosque/5">
            House
          </button>
          <button className="whitespace-nowrap px-5 py-2 rounded-full bg-white border border-nordic/5 text-nordic-muted hover:text-nordic hover:border-mosque/50 text-sm font-medium transition-all hover:bg-mosque/5">
            Apartment
          </button>
          <button className="whitespace-nowrap px-5 py-2 rounded-full bg-white border border-nordic/5 text-nordic-muted hover:text-nordic hover:border-mosque/50 text-sm font-medium transition-all hover:bg-mosque/5">
            Villa
          </button>
          <button className="whitespace-nowrap px-5 py-2 rounded-full bg-white border border-nordic/5 text-nordic-muted hover:text-nordic hover:border-mosque/50 text-sm font-medium transition-all hover:bg-mosque/5">
            Penthouse
          </button>
          <div className="w-px h-6 bg-nordic/10 mx-2"></div>
          <button className="whitespace-nowrap flex items-center gap-1 px-4 py-2 rounded-full text-nordic font-medium text-sm hover:bg-black/5 transition-colors">
            <span className="material-icons text-base font-material-icons">
              tune
            </span>{' '}
            Filters
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
