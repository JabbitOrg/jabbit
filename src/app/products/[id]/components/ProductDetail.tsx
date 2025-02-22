import { Box, Flex, Text } from '@chakra-ui/react';
import VerifiedIconSVG from '@/public/assets/verifiedBadge.svg';
import Specialties from './Specialties';
import Certification from './Certification';
import SpecialtyDetailBadge from './SpecialtyDetailBadge';
import { parseDescription } from '@/src/utils/parser';
import Experience from './Experience';
import { activity } from '@/src/types/activity';
import Activity from './Activity';

type experience = {
  status: '현' | '전';
  description: string;
};

interface ProductDetailProps {
  productTitle: string;
  expertName: string;
  isVerified: boolean;
  certifications: string[];
  specialties: string[];
  specialtyDetail: string[];
  activities: activity[];
  targetDescription: string;
  productDescription: string;
  experiences: experience[];
  yearsOfExperience: number;
}

const ProductDetail = ({
  productTitle = '내 보험 보장 내용과 비용, 적절한지 판단해 드립니다',
  expertName = '한승호',
  isVerified = true,
  certifications = ['재무설계(국가공인)', '증권투자', '펀드투자'],
  specialties = ['종합재무상담', '보험진단'],
  specialtyDetail = ['보험 리모델링', '기존 보험 검토', '신규 보험 가입'],
  targetDescription = '- 과도한 보험료가 부담스러운 분\n- 가입 보험에 대해 전문가 점검이 필요한 분\n- 부족한 보장이 없는지 확인하고 싶은 분 ',
  productDescription = '[상세 소개]는 전문가가 직접 해당 상품을 설명하는 part입니다.\n[상세 소개]는 전문가가 직접 해당 상품을 설명하는 part입니다.\n[상세 소개]는 전문가가 직접 해당 상품을 설명하는 part입니다.\n[상세 소개]는 전문가가 직접 해당 상품을 설명하는 part입니다.\n[상세 소개]는 전문가가 직접 해당 상품을 설명하는 part입니다.',
  experiences = [
    {
      status: '현',
      description: '보험 리모델링 보도 방송',
    },
    {
      status: '전',
      description: '보험 리모델링 보도 방송',
    },
    {
      status: '현',
      description: '보험 리모델링 보도 방송',
    },
  ],
  yearsOfExperience = 18,
  activities = [
    {
      type: '교육/강연',
      year: 2024,
      description: '보험 리모델링 교육 강연',
    },
    {
      type: '교육/강연',
      year: 2023,
      description: '보험 리모델링 교육 강연',
    },
    {
      type: '교육/강연',
      year: 2022,
      description: '보험 리모델링 교육 강연',
    },
    {
      type: '보도/방송',
      year: 2024,
      description: '보험 리모델링 보도 방송',
    },
    {
      type: '보도/방송',
      year: 2023,
      description: '보험 리모델링 보도 방송',
    },
    {
      type: '보도/방송',
      year: 2022,
      description: '보험 리모델링 보도 방송',
    },
  ],
}: ProductDetailProps) => {
  return (
    <>
      {/* 상단 제목 */}
      <Box width="550px">
        <Text
          fontSize="40px"
          fontWeight={600}
          color="main.black_1"
          wordBreak="keep-all"
        >
          {productTitle}
        </Text>
      </Box>
      {/* 전문가 정보 */}
      <Flex flexDirection="column" gap="16px">
        <Flex gap="10px" alignItems="center" marginTop="51px">
          <Text textStyle="xl" fontWeight={600}>
            {expertName} 재무설계사
          </Text>
          {isVerified && (
            <Flex
              gap="5px"
              bg="#eaecf9"
              borderRadius="7px"
              justifyContent="center"
              alignItems="center"
              padding="8px"
            >
              <VerifiedIconSVG />
              <Text fontSize="16px" color="primary">
                자격검증이 완료된 전문가에요
              </Text>
            </Flex>
          )}
        </Flex>
        <Flex gap="10px">
          {certifications.map((certification, index) => (
            <Certification
              key={index}
              certification={certification}
              isVerified={certification === '재무설계(국가공인)'}
            />
          ))}
        </Flex>
      </Flex>
      {/* 주요 분야 */}
      <Flex flexDirection="column" gap="16px" marginTop="46px">
        <Text textStyle="lg" fontWeight={600}>
          주요 분야
        </Text>
        <Flex gap="55px">
          {specialties.map((specialty, index) => (
            <Specialties specialty={specialty} key={index} />
          ))}
        </Flex>
      </Flex>
      {/* 상세 분야 */}
      <Flex flexDirection="column" gap="20px" marginTop="60px">
        <Text textStyle="lg" fontWeight={600}>
          상세 분야
        </Text>
        <Flex gap="10px">
          {specialtyDetail.map((detail, index) => (
            <SpecialtyDetailBadge specialtyDetail={detail} key={index} />
          ))}
        </Flex>
      </Flex>
      <Flex
        borderTop="1px solid var(--chakra-colors-main-line)"
        borderBottom="1px solid var(--chakra-colors-main-line)"
        margin="60px auto"
        padding="60px 0"
        width="100%"
        flexDirection="column"
        gap="60px"
      >
        <Flex flexDirection="column" gap="20px">
          <Text textStyle="lg" fontWeight={600}>
            추천 대상
          </Text>
          <Box>
            {parseDescription(targetDescription).map((line, index) => (
              <Text key={index} textStyle="md" color="main.black_2">
                {line}
              </Text>
            ))}
          </Box>
        </Flex>
        <Flex flexDirection="column" gap="20px">
          <Text textStyle="lg" fontWeight={600}>
            상세 소개
          </Text>
          <Box>
            {parseDescription(productDescription).map((line, index) => (
              <Text key={index} textStyle="md" color="main.black_2">
                {line}
              </Text>
            ))}
          </Box>
        </Flex>
      </Flex>

      <Flex flexDirection="column" gap="80px" marginBottom="120px">
        <Flex flexDirection="column" gap="20px">
          <Text textStyle="lg" fontWeight={600}>
            경력 총 {yearsOfExperience}년
          </Text>
          <Flex flexDirection="column" gap="10px">
            {experiences.map((experience, index) => (
              <Experience
                type={experience.status}
                description={experience.description}
                key={index}
              />
            ))}
          </Flex>
        </Flex>

        <Flex flexDirection="column" gap="20px">
          <Text textStyle="lg" fontWeight={600}>
            활동 사항
          </Text>
          <Activity activities={activities} />
        </Flex>
      </Flex>
    </>
  );
};

export default ProductDetail;
