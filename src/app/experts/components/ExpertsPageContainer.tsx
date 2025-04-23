import { BASE_URL } from '@/src/client/constants/API';
import ExpertsView from './ExpertsView';
import { useEffect, useState } from 'react';
import { AppError } from '@/src/client/errors/AppError';
import { useErrorToast } from '@/src/client/errors/useErrorToast';
import { SimpleProduct } from '@/src/client/types/product';
const ExpertsPageContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { showErrorToast } = useErrorToast();
  const [data, setData] = useState<SimpleProduct[]>([]);

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${BASE_URL}/products/`, {
        method: 'GET',
        cache: 'no-store',
      });

      const responseJson = await response.json();

      if (!responseJson.success)
        throw new AppError({
          name: responseJson.name,
          message: responseJson.message,
        });

      setData(responseJson.data);
    } catch (error) {
      showErrorToast(error as Error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return <ExpertsView data={data} isLoading={isLoading} />;
};

export default ExpertsPageContainer;
