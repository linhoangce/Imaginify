import type { Metadata } from "next";
import { IBM_Plex_Sans, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import {
	ClerkProvider,
	SignedIn,
	SignedOut,
	SignIn,
	SignInButton,
	SignUp,
	SignUpButton,
	UserButton,
} from "@clerk/nextjs";

const IBMPlex = IBM_Plex_Sans({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-ibm-plex",
});

export const metadata: Metadata = {
	title: "Imagic",
	description: "AI-powered image generator",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<ClerkProvider
			 appearance={{
				variables: {colorPrimary: '#624cf5'}
			 }}
			>
				<body className={cn("font-IBMPPlex antialiased", IBMPlex.variable)}>
					<SignedOut>
						<SignInButton />
						<SignUpButton />
					</SignedOut>
					{children}
				</body>
			</ClerkProvider>
		</html>
	);
}
