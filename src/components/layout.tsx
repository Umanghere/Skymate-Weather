import type { PropsWithChildren } from "react";
import { Header } from "./header";
import { useTheme } from "@/context/theme-provider"; // Import the theme hook

export function Layout({ children }: PropsWithChildren) {
  const { theme } = useTheme(); // Get the current theme
  
  return (
    <div className="bg-gradient-to-br from-background to-muted">
      <Header />
      <main className="min-h-screen container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="border-t backdrop-blur supports-[backdrop-filter]:bg-background/60 py-12">
        <div className="container mx-auto px-4 text-center">
          {/* Apply conditional text color based on theme */}
          <p className={theme === "dark" ? "text-gray-200" : "text-gray-700"}>
            Made with ❤️ by Umang Bansal
          </p>
        </div>
      </footer>
    </div>
  );
}