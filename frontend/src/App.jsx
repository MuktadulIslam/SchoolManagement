import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataFetcher = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000');
        setData(response.data); // Assuming your response contains a 'message' property
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Data from Backend:</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <p>{data}</p>
      )}
    </div>
  );
};

export default DataFetcher;
