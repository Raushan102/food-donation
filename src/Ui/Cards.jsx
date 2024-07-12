import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useFirebase } from "../utility/Storage";
import Loader from "./Loader";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Cards = ({
  quantity,
  userId,
  userEmail,
  description,
  displayName,
  expirationDate,
  foodName,
  imageURL,
  longitude,
  latitude,
  number,
  photoURL,
}) => {
  const firebase = useFirebase();

  const { data: imageUrl, isPending, isError, error } = useQuery({
    queryKey: ["meals", imageURL],
    queryFn: () => firebase.getImageURL(imageURL),
  });

  // Function to open Google Maps link for given latitude and longitude
  const openGoogleMaps = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    window.open(url, "_blank");
  };

  return (
    <div className="w-full md:max-w-full mx-auto bg-gray-900 shadow-lg rounded-lg mt-4 mb-4">
      <img
        className="w-full h-64 object-cover shadow-lg rounded-lg"
        src={imageUrl}
        alt={isPending ? <Loader /> : imageURL}
      />
      <div className="p-4">
        <h1 className="text-xl font-semibold text-primary-color">{foodName}</h1>
        <p className="mt-2 text-secondary-color">
          <strong>Quantity :</strong> {quantity}
        </p>
        <p className="mt-1.5 text-secondary-color">
          <strong>Locate Food : </strong>
          <span
            className="text-blue-500 cursor-pointer"
            onClick={openGoogleMaps}
          >
            Get Location
          </span>
          <FontAwesomeIcon
            icon={faLocationDot}
            className="text-gray-100 cursor-pointer center ml-2"
            onClick={openGoogleMaps}
          />
        </p>
        <p className="mt-1.5 text-secondary-color">
          <strong>Expiration Date :</strong> {expirationDate}
        </p>
        <p className="mt-1.5 text-secondary-color">
          <strong>Name :</strong> {displayName}
          <br />
          <strong className="mt-1">Email :</strong> {userEmail}
          <br />
          <strong className="mt">Phone Number :</strong> {number}
        </p>
        <img
          className="mt-1.5 w-10 h-10 rounded-full"
          src={photoURL}
          alt={displayName}
        />
      </div>
    </div>
  );
};

export default Cards;
