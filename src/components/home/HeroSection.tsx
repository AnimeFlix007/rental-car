export default function HeroSection() {
  return (
    <section className="section hero" id="home">
      <div className="container">
        <div className="hero-content">
          <h2 className="h1 hero-title">The easy way to takeover a lease</h2>

          <p className="hero-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        <div className="hero-banner"></div>

        <form action="" className="hero-form">
          <div className="input-wrapper">
            <label htmlFor="input-1" className="input-label">
              Car, Bike, or Scooty
            </label>

            <input
              type="text"
              name="car-model"
              id="input-1"
              className="input-field"
              placeholder="What are you looking?"
            />
          </div>

          <button type="submit" className="btn">
            Search
          </button>
        </form>
      </div>
    </section>
  );
}
