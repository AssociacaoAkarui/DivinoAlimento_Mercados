import React from "react";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import AppBarDivino from "./AppBarDivino";
import AppShell from "./AppShell";

interface ResponsiveLayoutProps {
  children: React.ReactNode;
  className?: string;
  headerContent?: React.ReactNode;
  leftHeaderContent?: React.ReactNode;
  showHeader?: boolean;
}

export const ResponsiveLayout = ({
  children,
  className,
  headerContent,
  leftHeaderContent,
  showHeader = true,
}: ResponsiveLayoutProps) => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");
  const isFornecedorRoute = location.pathname.startsWith("/fornecedor");
  const isLoginRoute =
    location.pathname.includes("/login") ||
    location.pathname.includes("/register") ||
    location.pathname.includes("/verify-email") ||
    location.pathname.includes("/onboarding");

  if (isFornecedorRoute && isLoginRoute) {
    return (
      <div className="min-h-screen bg-gradient-surface overflow-x-hidden">
        <div className="min-h-screen flex flex-col overflow-x-hidden lg:hidden">
          {showHeader && (
            <AppBarDivino leftContent={leftHeaderContent}>
              {headerContent}
            </AppBarDivino>
          )}
        </div>
        <div className="hidden lg:flex min-h-screen">
          <AppShell className={className}>
            {showHeader && (
              <AppBarDivino leftContent={leftHeaderContent}>
                {headerContent}
              </AppBarDivino>
            )}
          </AppShell>
        </div>
        <main className="flex-1 flex flex-col px-4 py-6 lg:items-center lg:justify-center lg:px-8 lg:py-12">
          <div className="w-full lg:max-w-md">{children}</div>
        </main>
      </div>
    );
  }

  // Desktop Admin Layout - Without Sidebar (same as consumer/supplier)
  if (isAdminRoute && !isLoginRoute) {
    return (
      <AppShell className={className}>
        {/* Header */}
        {showHeader && (
          <AppBarDivino leftContent={leftHeaderContent}>
            {headerContent}
          </AppBarDivino>
        )}

        {/* Main Content with 12 column grid */}
        <main
          className={cn(
            "flex-1 py-6 lg:py-8",
            // Grid system for desktop
            "grid grid-cols-1 lg:grid-cols-12 gap-6",
            className,
          )}
        >
          <div className="lg:col-span-12">{children}</div>
        </main>
      </AppShell>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-surface overflow-x-hidden">
      <div className="min-h-screen flex flex-col overflow-x-hidden lg:hidden">
        {showHeader && (
          <AppBarDivino leftContent={leftHeaderContent}>
            {headerContent}
          </AppBarDivino>
        )}
      </div>
      <div className="hidden lg:block">
        <AppShell className={className}>
          {showHeader && (
            <AppBarDivino leftContent={leftHeaderContent}>
              {headerContent}
            </AppBarDivino>
          )}
        </AppShell>
      </div>
      <main
        className={cn(
          "flex-1 px-4 pt-8 pb-6",
          "lg:py-8",
          "lg:grid lg:grid-cols-12 lg:gap-8",
          className,
        )}
      >
        <div className="lg:col-span-12">{children}</div>
      </main>
    </div>
  );
};

export default ResponsiveLayout;
