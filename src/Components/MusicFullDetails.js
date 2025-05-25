import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const MusicFullDetails = ({ musics }) => {
  const { musicId } = useParams();
  const parsedMusicId = parseInt(musicId);
  const musicItem = musics.find((music) => music.id === parsedMusicId);

  if (!musicItem) {
    return <div>Music not found</div>;
  }

  const handleAddToCart = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        // Handle error: Token not found
        console.error('Token not found in local storage');
        window.alert('No Token in local storage ');
        return;
      }

      await axios.post('http://localhost:5000/api/v1/items', { ...musicItem }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      alert('Item added to cart!');
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 style={{ fontSize: '1.5em', fontWeight: 'bold' }} className="my-4 text-center">{musicItem.title}<br /></h1>
      <div className="flex flex-wrap">
        <div className="w-full rounded-sm md:w-8/12 lg:w-8/12 xl:w-8/12 md:pr-4 mb-4">
          <img style={{ borderRadius: '20px' }} className="w-full h-auto" src={musicItem.urlToImage} alt={musicItem.title} />
        </div>
        <div className="w-full md:w-4/12 lg:w-4/12 xl:w-4/12">
          <h3 style={{ fontSize: '1.3em', fontWeight: 'bold' }} className="my-3">Music Description</h3>
          <p style={{ fontSize: '1em', fontStyle: 'italic' }}>{musicItem.description}</p>
          <br />
          <p style={{ fontSize: '1.5em', fontWeight: 'revert' }}>Check the Music : </p>
          <br />
          <audio controls>
            <source src={musicItem.urlToAudio} type="audio/mpeg" />
          </audio>
          <br />
          <h1 style={{ fontSize: '1.5em', fontWeight: 'bold' }}> Price: Rs {musicItem.price} for the show</h1>
          <br />
          <button class="bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded" onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default MusicFullDetails;
