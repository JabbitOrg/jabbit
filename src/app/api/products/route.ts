import {
  EXPERT_SHEET_NAME,
  EXPERT_SHEET_RANGE,
  PRODUCT_SHEET_RANGE,
} from '@/src/server/constants/SHEET_INFOS';
import { readSheetData } from '@/src/server/service/googleSheet/googleSheetService';
import { PRODUCT_SHEET_NAME } from '@/src/server/constants/SHEET_INFOS';
import {
  createErrorApiResponse,
  createSuccessApiResponse,
} from '@/src/server/utils/apiResponseUtils';
import { ERROR_INFOS } from '@/src/constants/ERROR_INFOS';
import { ProductMapper } from '@/src/server/mappers/product.mapper';
import { ProductSimpleDto } from '@/src/server/dtos/product.simple.dto';
import { ExpertMapper } from '@/src/server/mappers/expert.mapper';
import { API_MESSAGES } from '@/src/server/constants/API_MESSAGES';

export async function GET() {
  const productsRawData = await readSheetData(
    PRODUCT_SHEET_NAME,
    PRODUCT_SHEET_RANGE,
  );
  if (!productsRawData) {
    return createErrorApiResponse(
      ERROR_INFOS['googleSheet.noData'].statusCode,
      'googleSheet.noData',
    );
  }

  const expertRawData = await readSheetData(
    EXPERT_SHEET_NAME,
    EXPERT_SHEET_RANGE,
  );
  if (!expertRawData) {
    return createErrorApiResponse(
      ERROR_INFOS['googleSheet.noData'].statusCode,
      'googleSheet.noData',
    );
  }

  const productSimpleDtos: ProductSimpleDto[] = [];

  for (const product of productsRawData) {
    try {
      const expert = expertRawData.find((expert) => expert[0] === product[1]);
      if (!expert) {
        console.error(
          `Expert not found for product id ${product[0]}:`,
          product,
        );
        continue;
      }
      const parsedProduct = ProductMapper.fromSheetRow(
        product,
        ExpertMapper.fromSheetRow(expert),
      );
      productSimpleDtos.push(new ProductSimpleDto(parsedProduct));
    } catch (error) {
      console.error(`Parsing error on product id ${product[0]}:`, error);
    }
  }

  return createSuccessApiResponse(
    200,
    productSimpleDtos,
    API_MESSAGES['READ_SUCCESS'],
  );
}
