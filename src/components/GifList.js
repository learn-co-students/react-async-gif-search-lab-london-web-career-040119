import React from 'react';

const GifList = props => {
  const { data } = props;
  return (
    <div>
      {data.map(gif => (
        <img key={gif.id} src={gif.images.original.url} alt={gif.id} />
      ))}
    </div>
  );
};

export default GifList;
