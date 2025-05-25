import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ArtFullDetails = ({ arts }) => {
  const { artId } = useParams();
  const parsedArtId = parseInt(artId);
  const art = arts.find((e) => e.id === parsedArtId);
  console.log(art);
  if (!art) {
    return <div>Art not found</div>;
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

      await axios.post('https://fsbackendd-production.up.railway.app/api/v1/items', { ...art }, {
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
      <h1 style={{ fontSize: '1.5em', fontWeight: 'bold' }} className="my-4 text-center">{art.title}<br /></h1>
      <div className="flex flex-wrap">
        <div className="w-full rounded-sm md:w-8/12 lg:w-8/12 xl:w-8/12 md:pr-4 mb-4">
          <img style={{ borderRadius: '20px' }} className="w-full h-auto" src={art.urlToImage} alt={art.title} />
        </div>
        <div className="w-full md:w-4/12 lg:w-4/12 xl:w-4/12">
          <h3 style={{ fontSize: '1.3em', fontWeight: 'bold' }} className="my-3">Art Description</h3>
          <p style={{ fontSize: '1em', fontStyle: 'italic' }}>{art.description}</p>
          <br />
          <h1 style={{ fontSize: '1.5em', fontWeight: 'bold' }}> Price: Rs {art.price}</h1>
          <br />
          <button class="bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded" onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ArtFullDetails;
