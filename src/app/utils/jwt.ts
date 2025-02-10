import jwt, { Secret } from 'jsonwebtoken';
import { JWT } from '@/src/app/config/jwt';
import { User } from '@/src/app/store/authStore';

export const createJwtToken = (user: User) => {
  const jwtToken = jwt.sign(
    {
      id: user.id,
      provider: user.provider,
    },
    JWT.SECRET as Secret,
    { expiresIn: JWT.EXPIRES_IN },
  );
  return jwtToken;
};
