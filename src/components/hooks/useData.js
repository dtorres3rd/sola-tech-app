import React, { useState, useEffect } from 'react';
import apiClient from '../../utils/api-client';

const useData = (endpoint, customConfig, dependency) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () => {
      setIsLoading(true);
      apiClient
        .get(endpoint, customConfig)
        .then((res) => {
          if (
            endpoint === '/products' &&
            data &&
            data.products &&
            customConfig.params.page !== 1
          ) {
            setData((prevData) => ({
              ...prevData,
              products: [...prevData.products, ...res.data.products],
            }));
          } else {
            setData(res.data);
          }

          setIsLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setIsLoading(false);
        });
    },
    dependency ? dependency : []
  );

  return { data, error, isLoading };
};

export default useData;
