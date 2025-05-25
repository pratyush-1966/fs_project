import React from 'react';
import { Link } from 'react-router-dom';
import './ArtCards.css';

const ArtCards = ({ art }) => {
  return (
<div className="card">
<div  className="img-cover"><img src={art.urlToImage} alt='art'/><div  className="icon"><svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 9H22M12 1.5L20.9333 8.2C21.4667 8.6 21.4667 9.4 20.9333 9.8L12 16.5" stroke="black" stroke-width="3"/>
</svg>
</div></div>

<div className=" desc">
  <h1>{art.title}</h1>
  <p>{art.description.slice(0, 80)}...</p>
  <Link className='bg-zinc-900' to={`/arts/${art.id}`}>
            <button className="  text-white font-bold rounded">More Info<svg width="19" height="14" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg"></svg></button>
          </Link>
</div>
</div>
    
  );
};

export default ArtCards;
