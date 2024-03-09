import React from 'react';
import { Image } from 'antd';

const DynamicImageLoader = ({ imageUrls }) => {
  return (
    <div>
      {imageUrls.map((url, index) => (
        <Image
          key={index}
          src={url}
          alt={`Dynamic image ${index}`}
          style={{ maxWidth: "200px", margin: "10px" }}
        />
      ))}
    </div>
  );
};

export default DynamicImageLoader;
