import React, { useState } from 'react';

const Jsx01 = () => {
  const [image, setImage] = useState(null); // 선택한 이미지
  const [imageName, setImageName] = useState(null);

  const ReadImage = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
      setImageName(file.name);

      const formData = new FormData()
      formData.append("uploadFile", file)
      const response = await fetch("http://localhost:10000/api/members/upload-file2", {
            method: "POST",
            body: formData,
            credentials: "include",
        })

    }
  };
  return (
    <div className="App">
      <img src={image}></img>
      <input type="file" onChange={ReadImage}/>
    </div>
  );
};

export default Jsx01;