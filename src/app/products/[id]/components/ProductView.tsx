'use client';

import Navigation from '@/src/app/components/Navigation/Naviagtion';
import { Flex } from '@chakra-ui/react';
import FloatingCard from './FloatingCard';
import { useState } from 'react';
import ProductDetail from './ProductDetail';
import Footer from '@/src/app/components/Footer/Footer';

interface ProductDetailViewProps {
  productData: any;
}

const ProductView = ({ productData }: ProductDetailViewProps) => {
  console.log(productData);
  const [selectedPriceTagIndex, setSelectedPriceTagIndex] = useState(0);

  const handlePriceTagClick = (index: number) => {
    setSelectedPriceTagIndex(index);
  };

  return (
    <Flex
      flexDirection="column"
      width="100%"
      minHeight="100vh"
      paddingTop="35px"
      alignItems="center"
      gap="94px"
    >
      <Navigation />
      <Flex width="1280px" justifyContent="space-between" gap="78px">
        <Flex width="50%" flexDirection="column">
          <ProductDetail />
          <Footer />
        </Flex>
        <Flex width="50%">
          <FloatingCard
            priceTags={productData.priceTags}
            handlePriceTagClick={handlePriceTagClick}
            selectedPriceTagIndex={selectedPriceTagIndex}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProductView;
