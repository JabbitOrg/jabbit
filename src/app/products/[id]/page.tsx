import { BASE_URL } from '@/src/constants/API';
import ProductDetailView from './components/ProductDetailView';

const Products = async ({ params }: { params: Promise<{ id: string }> }) => {
  const productId = (await params).id;

  const response = await fetch(`${BASE_URL}/products/${productId}`, {
    method: 'GET',
    cache: 'no-store',
  });

  const productData = await response.json();
  return <ProductDetailView productData={productData} />;
};

export default Products;
