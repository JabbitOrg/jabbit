'use client';

interface ProductDetailViewProps {
  productData: any;
}

const ProductDetailView = ({ productData }: ProductDetailViewProps) => {
  return <div>{JSON.stringify(productData)}</div>;
};

export default ProductDetailView;
