import React, { useEffect, useState, useContext } from "react";
import Photo from "../components/photos/photo";
import { AuthContext } from "../context/authContext";

const Profile = (props) => {
  const auth = useContext(AuthContext);
  const [loadedPhotos, setLoadedPhotos] = useState();
  useEffect(() => {
    const sendRequest = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/photos/user/${auth.userID}`
        );
        const responseData = await response.json();
        if (!response.ok) {
          throw new Error(responseData.message);
        }
        console.log(responseData);
        setLoadedPhotos(responseData.photos);
      } catch (err) {
        console.log(err);
      }
    };
    sendRequest();
  }, []);
  const [loadedBookings, setLoadedBookings] = useState();
  useEffect(() => {
    const sendRequest = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/bookings/user/${auth.userID}`
        );
        const responseData = await response.json();
        if (!response.ok) {
          throw new Error(responseData.message);
        }
        setLoadedBookings(responseData.bookings);
        console.log(responseData);
      } catch (err) {
        console.log(err);
      }
    };
    sendRequest();
  }, []);
  console.log(loadedPhotos);
  console.log(loadedBookings);
  return (
    <div>
      {loadedBookings &&
        loadedBookings
          .slice()
          .reverse()
          .map((booking) => (
            <div class="db center mw6 black link">
              {booking}
              <br />
              <br />
            </div>
          ))}
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
export default Profile;
