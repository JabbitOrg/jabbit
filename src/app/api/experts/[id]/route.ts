import { findSheetDataById } from '@/src/googleSheet/googleSheetService';
import { ERROR_INFOS } from '@/src/constants/ERROR_INFOS';
import {
  EXPERT_SHEET_NAME,
  EXPERT_SHEET_RANGE,
} from '@/src/constants/SHEET_INFOS';
import { ExpertMapper } from '@/src/mappers/expert.mapper';
import { ExpertDto } from '@/src/dtos/expert.dto';
import {
  createErrorApiResponse,
  createSuccessApiResponse,
} from '@/src/utils/apiResponseUtils';
import { API_MESSAGES } from '@/src/constants/API_MESSAGES';

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const expertId = id;

  const expertRawData = await findSheetDataById(
    EXPERT_SHEET_NAME,
    EXPERT_SHEET_RANGE,
    expertId,
  );

  if (!expertRawData) {
    return createErrorApiResponse(
      ERROR_INFOS['googleSheet.noData'].statusCode,
      'googleSheet.noData',
    );
  }

  try {
    const parsedExpert = ExpertMapper.fromSheetRow(expertRawData);
    const expertDto = new ExpertDto(parsedExpert);

    return createSuccessApiResponse(
      200,
      expertDto,
      API_MESSAGES['READ_SUCCESS'],
    );
  } catch (error) {
    console.error(`Parsing error for expert with id ${expertId}:`, error);
    return createErrorApiResponse(
      ERROR_INFOS['googleSheet.parseError'].statusCode,
      'googleSheet.parseError',
    );
  }
}
