import type { Metadata } from 'next';
import { Provider } from '@/src/components/ui/provider';
import { Theme } from '@chakra-ui/react';
import localFont from 'next/font/local';
import { Toaster } from '@/src/components/ui/toaster';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import ChannelTalk from './common/ChannelTalk/ChannelTalk';
export const metadata: Metadata = {
  title: 'JABBIT (재빗)',
  description: '재무관리의 모든 것',
};

const pretendard = localFont({
  src: '../font/PretendardVariable.woff2',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning className={pretendard.className}>
      <body>
        <ChannelTalk />
        <Provider>
          <Theme appearance="light">{children}</Theme>
          <Toaster />
        </Provider>
        <GoogleAnalytics
          gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID ?? ''}
        />
        <GoogleTagManager
          gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID ?? ''}
        />
      </body>
    </html>
  );
}
