import React from 'react';
import './Home.css';

const Home = () => {
  const destinations = [
    {
      id: 1,
      name: 'Mountain Trek',
      image: 'public/mountain.avif',
      description: 'Breathtaking views of the mountains.',
    },
    {
      id: 2,
      name: 'Beach Paradise',
      image: 'public/sandybeach.avif',
      description: 'Relax on the sandy beaches.',
    },
    {
      id: 3,
      name: 'Jungle Safari',
      image: 'public/wildlife.avif',
      description: 'Experience the thrill of wildlife.',
    },
    {
      id: 4,
      name: 'Desert Adventure',
      image: 'public/desert.avif',
      description: 'Discover the beauty of the vast desert landscapes.',
    },
  ];

  return (
    <div className="home">
      {/* Body Section */}
      <section className="body">
        <h1>Welcome to Adventure Co.</h1>
        <p>Your journey begins here.</p>
        <button className="button">Explore Now</button>
      </section>

      {/* Destination Collection */}
      <section className="destinations">
        <h2>Popular Destinations</h2>
        <div className="destination-grid">
          {destinations.map((destination) => (
            <div key={destination.id} className="destination-card">
              <img src={destination.image} alt={destination.name} />
              <h3>{destination.name}</h3>
              <p>{destination.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;