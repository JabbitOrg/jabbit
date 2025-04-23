import {
  EXPERT_SHEET_NAME,
  EXPERT_SHEET_RANGE,
  PRODUCT_SHEET_RANGE,
} from '@/src/server/constants/SHEET_INFOS';
import { readSheetData } from '@/src/server/services/googleSheet/googleSheetService';
import { PRODUCT_SHEET_NAME } from '@/src/server/constants/SHEET_INFOS';
import {
  createErrorApiResponse,
  createSuccessApiResponse,
  handlePreflight,
} from '@/src/server/utils/apiResponseUtils';
import { ProductMapper } from '@/src/server/mappers/product.mapper';
import { ProductSimpleDto } from '@/src/server/dtos/product.simple.dto';
import { ExpertMapper } from '@/src/server/mappers/expert.mapper';

export async function GET(req: Request) {
  const preflightResponse = handlePreflight(req);
  if (preflightResponse) {
    return preflightResponse;
  }

  const { headerRow: productHeaderRow, dataRows: productDataRows } =
    await readSheetData(PRODUCT_SHEET_NAME, PRODUCT_SHEET_RANGE);
  if (!productHeaderRow || !productDataRows) {
    return createErrorApiResponse('UNKNOWN_ERROR');
  }

  const { headerRow: expertHeaderRow, dataRows: expertDataRows } =
    await readSheetData(EXPERT_SHEET_NAME, EXPERT_SHEET_RANGE);
  if (!expertHeaderRow || !expertDataRows) {
    return createErrorApiResponse('UNKNOWN_ERROR');
  }

  const productSimpleDtos: ProductSimpleDto[] = [];
  const productColumnIndexes = ProductMapper.getColumnIndexes(productHeaderRow);
  const expertColumnIndexes = ExpertMapper.getColumnIndexes(expertHeaderRow);
  for (const product of productDataRows) {
    try {
      const expert = expertDataRows.find(
        (expert) =>
          expert[expertColumnIndexes.id] ===
          product[productColumnIndexes.expertId],
      );
      if (!expert) {
        console.error(
          `Expert not found for product id ${product[0]}:`,
          product,
        );
        continue;
      }
      const parsedProduct = ProductMapper.fromSheetRow(
        productHeaderRow,
        product,
        ExpertMapper.fromSheetRow(expertHeaderRow, expert),
      );
      productSimpleDtos.push(new ProductSimpleDto(parsedProduct));
    } catch (error) {
      console.error(`Parsing error on product id ${product[0]}:`, error);
    }
  }

  return createSuccessApiResponse('READ_SUCCESS', productSimpleDtos);
}
