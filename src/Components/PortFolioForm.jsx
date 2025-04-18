// src/components/PortfolioForm.jsx
import React, { useState } from 'react';
import '../PortfolioForm.css';

const PortfolioForm = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock upload: You can integrate with Cloudinary or API here
    console.log({
      title,
      desc,
      image,
    });

    alert("Project submitted!");
    setTitle('');
    setDesc('');
    setImage(null);
  };

  return (
    <form className="portfolio-form" onSubmit={handleSubmit}>
      <h2>Add Portfolio Project</h2>

      <input
        type="text"
        placeholder="Project Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <textarea
        placeholder="Short Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        required
      />

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
      />

      <button type="submit">Submit Project</button>
    </form>
  );
};

export default PortfolioForm;
