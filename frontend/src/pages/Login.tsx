import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ResponsiveLayout from "@/components/layout/ResponsiveLayout";
import CoBrandAkarui from "@/components/layout/CoBrandAkarui";
import SkipToContent from "@/components/ui/SkipToContent";
import { Eye, EyeOff, Mail, Lock, ArrowLeft } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { getDefaultRoute, validateLoginCredentials } from "@/lib/login-helpers";
import { formatLoginError } from "@/lib/login-formatters";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { login, activeRole, isAuthenticated } = useAuth();

  // Redirecionar após login bem-sucedido
  useEffect(() => {
    if (isAuthenticated && activeRole) {
      const defaultRoute = getDefaultRoute(activeRole);
      navigate(defaultRoute);
    }
  }, [isAuthenticated, activeRole, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validation = validateLoginCredentials(email, password);
    if (!validation.valid) {
      toast({
        title: "Erro de validação",
        description: validation.errors.join(", "),
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      await login(email, password);

      toast({
        title: "Login realizado com sucesso!",
        description: "Redirecionando...",
      });
    } catch (error) {
      const errorMessage = formatLoginError(error);
      toast({
        title: "Erro no login",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <SkipToContent />
      <ResponsiveLayout
        showHeader={false}
        headerContent={
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={() => navigate("/")}
            className="focus-ring"
            aria-label="Voltar para página inicial"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span className="sr-only">Voltar para página inicial</span>
          </Button>
        }
      >
        <div className="flex items-center justify-center min-h-screen py-2 sm:py-4 lg:py-6">
          <div className="w-full max-w-md lg:max-w-lg px-4">
            {/* Co-brand AKARUI */}
            <CoBrandAkarui />

            <Card className="w-full shadow-lg">
              <CardHeader className="text-center pb-4">
                <h1 className="font-poppins text-2xl lg:text-3xl text-primary font-semibold leading-none tracking-tight">
                  Entrar
                </h1>
                <p className="text-sm lg:text-base text-muted-foreground">
                  Acesse sua conta do Divino Alimento
                </p>
              </CardHeader>

              <CardContent className="space-y-4 p-6 lg:p-8">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-sm lg:text-base font-medium block"
                    >
                      E-mail
                    </Label>
                    <div className="relative">
                      <Mail
                        className="absolute left-3 top-3 w-4 h-4 lg:w-5 lg:h-5 text-muted-foreground pointer-events-none"
                        aria-hidden="true"
                      />
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10 lg:pl-12 lg:h-12 lg:text-base focus-ring"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="password"
                      className="text-sm lg:text-base font-medium block"
                    >
                      Senha
                    </Label>
                    <div className="relative">
                      <Lock
                        className="absolute left-3 top-3 w-4 h-4 lg:w-5 lg:h-5 text-muted-foreground pointer-events-none"
                        aria-hidden="true"
                      />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Digite sua senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pl-10 lg:pl-12 pr-10 lg:pr-12 lg:h-12 lg:text-base focus-ring"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon-sm"
                        className="absolute right-2 top-2 lg:right-3 lg:top-3"
                        onClick={() => setShowPassword(!showPassword)}
                        aria-label={
                          showPassword ? "Ocultar senha" : "Mostrar senha"
                        }
                        aria-pressed={showPassword}
                      >
                        {showPassword ? (
                          <EyeOff
                            className="w-4 h-4 lg:w-5 lg:h-5"
                            aria-hidden="true"
                          />
                        ) : (
                          <Eye
                            className="w-4 h-4 lg:w-5 lg:h-5"
                            aria-hidden="true"
                          />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Link
                      to="/esqueci-senha"
                      className="text-sm lg:text-base text-primary hover:underline focus-ring rounded px-1"
                    >
                      Esqueci a senha
                    </Link>
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-11 lg:h-12 text-base"
                    disabled={isLoading}
                    size="lg"
                  >
                    {isLoading ? "Entrando..." : "Entrar"}
                  </Button>
                </form>

                <div className="text-center space-y-2">
                  <p className="text-sm lg:text-base text-muted-foreground">
                    Não tem conta?{" "}
                    <Link
                      to="/registro"
                      className="text-primary hover:underline font-medium focus-ring rounded px-1"
                    >
                      Criar conta
                    </Link>
                  </p>
                  <p className="text-sm lg:text-base text-muted-foreground">
                    <Link
                      to="/"
                      className="text-primary hover:underline font-medium focus-ring rounded px-1"
                    >
                      ← Voltar para página inicial
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </ResponsiveLayout>
    </>
  );
};

export default Login;
