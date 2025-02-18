import { Product, ProductPriceInfo } from '@/src/types/product';
import { ExpertSimpleDto } from './expert.simple.dto';

export class ProductSimpleDto {
  id: string;
  expert: ExpertSimpleDto;
  name: string;
  priceInfos: ProductPriceInfo[];
  detailFields: string[];

  constructor(product: Product) {
    this.id = product.id;
    this.expert = new ExpertSimpleDto(product.expert);
    this.name = product.name;
    this.priceInfos = product.priceInfos;
    this.detailFields = product.detailFields;
  }
}
