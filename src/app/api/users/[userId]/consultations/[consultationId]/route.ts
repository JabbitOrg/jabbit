import {
  CONSULTATION_SHEET_NAME,
  CONSULTATION_SHEET_RANGE,
} from '@/src/server/constants/SHEET_INFOS';
import { findSheetDataById } from '@/src/server/services/googleSheet/googleSheetService';
import {
  handlePreflight,
  createErrorApiResponse,
  createSuccessApiResponse,
} from '@/src/server/utils/apiResponseUtils';
import { ConsultationMapper } from '@/src/server/mappers/consultation.mapper';
import { ConsultationDto } from '@/src/server/dtos/consultation.dto';

export async function GET(
  req: Request,
  { params }: { params: Promise<{ userId: string; consultationId: string }> },
) {
  const preflightResponse = handlePreflight(req);
  if (preflightResponse) {
    return preflightResponse;
  }

  const { userId, consultationId } = await params;

  const { headerRow, dataRows } = await findSheetDataById(
    CONSULTATION_SHEET_NAME,
    CONSULTATION_SHEET_RANGE,
    consultationId,
  );

  if (!headerRow || !dataRows) {
    return createErrorApiResponse('UNKNOWN_ERROR');
  }

  const consultation = ConsultationMapper.fromSheetRow(headerRow, dataRows);

  if (consultation.userId !== userId) {
    return createErrorApiResponse('UNKNOWN_ERROR');
  }

  const consultationDto = new ConsultationDto(consultation);
  return createSuccessApiResponse('READ_SUCCESS', consultationDto);
}
