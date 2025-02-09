import { Secret } from 'jsonwebtoken';

export const JWT = {
  SECRET: process.env.JWT_SECRET as Secret,
  EXPIRES_IN: '3d',
} as const;
