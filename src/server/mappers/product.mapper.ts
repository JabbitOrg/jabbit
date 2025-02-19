import { Product, ProductPriceInfo } from '@/src/server/domains/product';
import { Expert } from '@/src/server/domains/expert';

export class ProductMapper {
  static fromSheetRow(row: string[], expert: Expert): Product {
    return {
      id: row[0],
      expert: expert,
      name: row[2],
      priceInfos: JSON.parse(row[3]) as ProductPriceInfo[],
      detailFields: JSON.parse(row[4]) as string[],
      targetDescription: row[5],
      productDescription: row[6],
    };
  }
}
