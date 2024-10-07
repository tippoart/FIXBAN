import Link from "next/link";
import Image from "next/image";
import GoogleMapRect from "google-map-react";
import React, { useState } from "react";


const Maps = ({ coordinates, setCoordinates }) => {

   const [formData, setFormData] = useState({
     name: "",
     waNumber: "",
     location: "",
     paymentMethod: "",
   });


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Lakukan logika pengiriman form, misal kirim ke API
  };


  return (
    <div className="mt-24 p-11 rounded-lg lg:h-1/2 md:h-96" id="maps">
      {/* <div style={{ height: "400px", width: "100%" }}>
        <GoogleMapRect
          bootstrapURLKeys={{ key: "AIzaSyBLNPVpeFMMwbNIim5PAeuenv9n_W9RJwM" }}
          defaultCenter={coordinates}
          center={coordinates}
          defaultZoom={10}
          margin={[50, 50, 50, 50]}
          options={{}}
          onChange={() => {}}
          onChildClick={() => {}}
        />
      </div> */}

      <div className="flex justify-center flex-col lg:flex-row gap-5">
        <div className="w-1/2 mx-auto p-8 bg-white shadow-md rounded-md mt-10">
          <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Pesan Layanan Anda
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nama */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Nama
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Masukkan nama lengkap"
              />
            </div>

            {/* Nomor WA */}
            <div>
              <label
                htmlFor="waNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Nomor WA
              </label>
              <input
                type="text"
                id="waNumber"
                name="waNumber"
                value={formData.waNumber}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Masukkan nomor WhatsApp"
              />
            </div>

            {/* Lokasi */}
            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700"
              >
                Lokasi
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Masukkan lokasi pengiriman"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full px-4 py-2 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Pesan Sekarang
              </button>
            </div>
          </form>
        </div>

        <iframe
          className="w-1/2 h-64 rounded-md relative top-10"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44724.596672240215!2d110.37785792167968!3d-7.730744200000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a59261d27825b%3A0x833618f7ccb39405!2sTambal%20Ban%20Panggilan%20Jogja!5e1!3m2!1sid!2sid!4v1728264923005!5m2!1sid!2sid"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ border: 0 }}
        ></iframe>

      
      </div>
    </div>
  );
};

export default Maps;


