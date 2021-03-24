import React, { useState } from 'react';
import UploadForm from './UploadForm'
import Title from './Title';
import ImageGrid from './ImageGrid';
import Modal from './Modal';

const Admin = () => {
    const [selectedImg, setSelectedImg] = useState(null);
  return (
      <div>
        <Title/>
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
      </div>
  )
}

export default Admin;