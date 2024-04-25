import React, { useState, useEffect } from "react";

export const ModelList = () => {
  const [models, setModels] = useState([]);

  const baseUrl = 'http://localhost:8000/api/';

  const getModels = async () => {
    try {
      const modelUrl = `${baseUrl}vehicle_models/`;
      const response = await fetch(modelUrl);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const modelData = await response.json();
      console.log(modelData.models);
      setModels(modelData.models);
    } catch (error) {
      console.error('Error fetching models:', error);
    }
  };

  useEffect(() => {
    getModels();
  }, []);

  return (
    <>
      <h1>Models</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Manufacturer</th>
            <th>Picture</th>
          </tr>
        </thead>
        <tbody>
          {models.map(({ id, name, manufacturer_name, picture_url }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>{manufacturer_name}</td>
              <td>
                <img src={picture_url} alt="Car" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ModelList;