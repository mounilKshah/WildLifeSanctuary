import React, { useEffect, useState } from "react";
import Photo from "../components/photos/photo";

const AllPhotos = (props) => {
  const [loadedPhotos, setLoadedPhotos] = useState();
  useEffect(() => {
    const sendRequest = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/photos/all");
        const responseData = await response.json();
        if (!response.ok) {
          throw new Error(responseData.message);
        }
        setLoadedPhotos(responseData.photos);
      } catch (err) {
        console.log(err);
      }
    };
    sendRequest();
  }, []);
  console.log(loadedPhotos);
  return (
    <div>
      {loadedPhotos &&
        loadedPhotos
          .slice()
          .reverse()
          .map((photo) => (
            <div class="db center mw6 black link">
              <Photo
                title={photo.title}
                sanctuary={photo.sanctuary}
                image={`http://localhost:5000/${photo.image}`}
                creator={photo.creator_name}
              />
              <br />
              <br />
            </div>
          ))}
    </div>
  );
};
export default AllPhotos;
