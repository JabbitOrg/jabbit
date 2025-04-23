import { readSheetData } from '@/src/server/services/googleSheet/googleSheetService';
import {
  EXPERT_SHEET_NAME,
  EXPERT_SHEET_RANGE,
} from '@/src/server/constants/SHEET_INFOS';
import { ExpertMapper } from '@/src/server/mappers/expert.mapper';
import { ExpertSimpleDto } from '@/src/server/dtos/expert.simple.dto';
import {
  createErrorApiResponse,
  createSuccessApiResponse,
  handlePreflight,
} from '@/src/server/utils/apiResponseUtils';

export async function GET(req: Request) {
  const preflightResponse = handlePreflight(req);
  if (preflightResponse) {
    return preflightResponse;
  }

  const { headerRow, dataRows } = await readSheetData(
    EXPERT_SHEET_NAME,
    EXPERT_SHEET_RANGE,
  );
  if (!headerRow || !dataRows) {
    return createErrorApiResponse('UNKNOWN_ERROR');
  }

  const expertSimpleDtos: ExpertSimpleDto[] = [];

  for (const expert of dataRows) {
    try {
      const parsedExpert = ExpertMapper.fromSheetRow(headerRow, expert);
      expertSimpleDtos.push(new ExpertSimpleDto(parsedExpert));
    } catch (error) {
      console.error(`Parsing error on expert id ${expert[0]}:`, error);
    }
  }

  return createSuccessApiResponse('READ_SUCCESS', expertSimpleDtos);
}
