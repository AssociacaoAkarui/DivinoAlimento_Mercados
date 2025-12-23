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
      <>
        <div className="lg:hidden min-h-screen bg-gradient-surface overflow-x-hidden flex flex-col">
          {showHeader && (
            <AppBarDivino leftContent={leftHeaderContent}>
              {headerContent}
            </AppBarDivino>
          )}
          <main className="flex-1 flex flex-col px-4 py-6">{children}</main>
        </div>

        <div className="hidden lg:flex min-h-screen bg-gradient-surface overflow-x-hidden">
          <AppShell className={className}>
            {showHeader && (
              <AppBarDivino leftContent={leftHeaderContent}>
                {headerContent}
              </AppBarDivino>
            )}
            <main className="flex-1 flex items-center justify-center px-8 py-12">
              <div className="w-full max-w-md">{children}</div>
            </main>
          </AppShell>
        </div>
      </>
    );
  }

  if (isAdminRoute && !isLoginRoute) {
    return (
      <AppShell className={className}>
        {showHeader && (
          <AppBarDivino leftContent={leftHeaderContent}>
            {headerContent}
          </AppBarDivino>
        )}

        <main
          className={cn(
            "flex-1 py-6 lg:py-8",
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
    <>
      <div className="lg:hidden min-h-screen bg-gradient-surface overflow-x-hidden flex flex-col">
        {showHeader && (
          <AppBarDivino leftContent={leftHeaderContent}>
            {headerContent}
          </AppBarDivino>
        )}
        <main className="flex-1 px-4 pt-8 pb-6">{children}</main>
      </div>

      <div className="hidden lg:block min-h-screen bg-gradient-surface overflow-x-hidden">
        <AppShell className={className}>
          {showHeader && (
            <AppBarDivino leftContent={leftHeaderContent}>
              {headerContent}
            </AppBarDivino>
          )}

          <main
            className={cn(
              "flex-1 py-8",
              "grid grid-cols-1 lg:grid-cols-12 gap-8",
              className,
            )}
          >
            <div className="lg:col-span-12">{children}</div>
          </main>
        </AppShell>
      </div>
    </>
  );
};

export default ResponsiveLayout;
