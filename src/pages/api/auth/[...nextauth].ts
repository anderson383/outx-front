import { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import getConfig from 'next/config';
import NextAuth from 'next-auth/next';
import { repositoryContainer } from '@/services/configuration/inversify.conf';
import { TYPES } from '@/services/configuration/types';
import { AuthRepository } from '@/services/repositories/auth/auth.repository';
const { publicRuntimeConfig } = getConfig();

import jwt from 'jsonwebtoken';
export const authOptions:AuthOptions = {
  secret: process.env.AUTH_SECRET,
  pages: {signIn: '/login'},
  providers: [
    CredentialsProvider({
      name: 'Credentials Deyli',
      credentials: {
        password: {
          label: 'password',
          type: 'password'
        },
        username: {
          label: 'username',
          type: 'text'
        }
      },
      async authorize(credentials:any, req) {
        // Add logic here to look up the user from the credentials supplied
        try {
          const authRepository:AuthRepository = repositoryContainer.get(TYPES.AUTH_REPOSITORY);
          const {
            accessToken, refreshToken
          } = await authRepository.login({
            email: req.body.username,
            password: req.body.password
          });

          const decodedPayload:any = jwt.decode(accessToken);

          return {
            ...decodedPayload,
            accessToken,
            refreshToken
          };
        } catch (err) {
          return null;
        }
      }
    })
  ],

  callbacks: {
    async jwt(jwtData:any) {
      const {
        token, user, account
      } = jwtData;

      if (account && user) {
        const {
          accessToken, refreshToken, ...userData
        } = user;

        return {
          accessToken,
          refreshToken,
          user: userData
        };
      }

      return token;
    },
    async session(seesionData) {
      const {
        session, token: tokenUser
      } = seesionData;

      return {
        ...session,
        user: tokenUser.user,
        accessToken: tokenUser.accessToken,
        error: tokenUser.error
      };
    }
  }
};

export default NextAuth(authOptions);

