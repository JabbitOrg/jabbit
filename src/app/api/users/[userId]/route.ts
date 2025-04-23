import { USER_SHEET_NAME } from '@/src/server/constants/SHEET_INFOS';
import { USER_SHEET_RANGE } from '@/src/server/constants/SHEET_INFOS';
import { UserMapper } from '@/src/server/mappers/user.mapper';
import { findSheetDataById } from '@/src/server/services/googleSheet/googleSheetService';
import {
  createErrorApiResponse,
  createSuccessApiResponse,
  handlePreflight,
} from '@/src/server/utils/apiResponseUtils';

export async function GET(
  req: Request,
  { params }: { params: Promise<{ userId: string }> },
) {
  const preflightResponse = handlePreflight(req);
  if (preflightResponse) {
    return preflightResponse;
  }

  const { userId } = await params;

  const { headerRow, dataRows } = await findSheetDataById(
    USER_SHEET_NAME,
    USER_SHEET_RANGE,
    userId,
  );
  if (!headerRow || !dataRows) {
    return createErrorApiResponse('UNKNOWN_ERROR');
  }

  const userDto = UserMapper.fromSheetRow(headerRow, dataRows);
  return createSuccessApiResponse('READ_SUCCESS', userDto);
}
