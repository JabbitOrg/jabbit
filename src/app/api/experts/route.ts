import { NextResponse } from 'next/server';
import { readSheetData } from '@/src/googleSheet/googleSheetService';
import { ERROR_INFOS } from '@/src/constants/ERROR_INFOS';
import { EXPERT_SHEET_NAME } from '@/src/constants/SHEET_INFOS';
import { ExpertMapper } from '@/src/mappers/expert.mapper';
import { ExpertSimpleDto } from '@/src/dtos/expert.simple.dto';
import { createSuccessApiResponse } from '@/src/utils/apiResponseUtils';
import { API_MESSAGES } from '@/src/constants/API_MESSAGES';

export async function GET() {
  const expertsRawData = await readSheetData(EXPERT_SHEET_NAME, 'A2:H');
  if (!expertsRawData) {
    return NextResponse.json(
      {
        success: false,
        errorInfoKey: 'googleSheet.noData',
      },
      { status: ERROR_INFOS['googleSheet.noData'].statusCode },
    );
  }

  const expertSimpleDtos: ExpertSimpleDto[] = [];

  for (const expert of expertsRawData) {
    try {
      const parsedExpert = ExpertMapper.fromSheetRow(expert);
      expertSimpleDtos.push(new ExpertSimpleDto(parsedExpert));
    } catch (error) {
      console.error(`Parsing error on expert id ${expert[0]}:`, error);
    }
  }

  return createSuccessApiResponse(
    200,
    expertSimpleDtos,
    API_MESSAGES['READ_SUCCESS'],
  );
}
