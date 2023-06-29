import ThemeProvider from "@/providers/ThemeProvider";
import "./globals.css";
import { Inter } from "next/font/google";
import EmojiHistoryProvider from "@/providers/EmojiHistoryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pickoji",
  description: "Emoji picker tool",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <ThemeProvider>
            <EmojiHistoryProvider>
                {children}
            </EmojiHistoryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
