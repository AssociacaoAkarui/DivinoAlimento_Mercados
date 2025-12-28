import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "@/components/routing/ProtectedRoute";
const Index = lazy(() => import("./pages/Index"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const MinhaCesta = lazy(() => import("./pages/MinhaCesta"));
const PedidoConsumidores = lazy(() => import("./pages/PedidoConsumidores"));
const ConsumidorPagamentos = lazy(() => import("./pages/consumidor/ConsumidorPagamentos"));
const ConsumidorSelecionarCiclo = lazy(() => import("./pages/consumidor/ConsumidorSelecionarCiclo"));
const ConsumidorRelatorioPedidos = lazy(() => import("./pages/consumidor/ConsumidorRelatorioPedidos"));
const ConsumidorRelatorioPedidosResultado = lazy(() => import("./pages/consumidor/ConsumidorRelatorioPedidosResultado"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Fornecedor pages
const LojaProdutor = lazy(() => import("./pages/fornecedor/LojaProdutor"));
const FornecedorSelecionarCiclo = lazy(() => import("./pages/fornecedor/FornecedorSelecionarCiclo"));
const FornecedorSelecionarCicloEntregas = lazy(() => import("./pages/fornecedor/FornecedorSelecionarCicloEntregas"));
const FornecedorEntregas = lazy(() => import("./pages/fornecedor/FornecedorEntregas"));

// Admin pages
const AdminDashboard = lazy(() => import("./pages/admin/AdminDashboard"));
const AdminMercados = lazy(() => import("./pages/admin/AdminMercados"));
const AdminPrecos = lazy(() => import("./pages/admin/AdminPrecos"));
const AdminPrecosLista = lazy(() => import("./pages/admin/AdminPrecosLista"));
const AdminCategorias = lazy(() => import("./pages/admin/AdminCategorias"));
const AdminCategoriaNovo = lazy(() => import("./pages/admin/AdminCategoriaNovo"));
const AdminCategoriaDados = lazy(() => import("./pages/admin/AdminCategoriaDados"));
const AdminProdutos = lazy(() => import("./pages/admin/AdminProdutos"));
const AdminProdutoNovo = lazy(() => import("./pages/admin/AdminProdutoNovo"));
const AdminProdutoEditar = lazy(() => import("./pages/admin/AdminProdutoEditar"));
const AdminProdutosComercializaveis = lazy(() => import("./pages/admin/AdminProdutosComercializaveis"));
const AdminProdutoComercializavelNovo = lazy(() => import("./pages/admin/AdminProdutoComercializavelNovo"));
const AdminProdutoComercializavelEditar = lazy(() => import("./pages/admin/AdminProdutoComercializavelEditar"));
const AdminCicloIndex = lazy(() => import("./pages/admin/AdminCicloIndex"));
const AdminCiclo = lazy(() => import("./pages/admin/AdminCiclo"));
const AdminOferta = lazy(() => import("./pages/admin/AdminOferta"));
const AdminComposicaoCesta = lazy(() => import("./pages/admin/AdminComposicaoCesta"));
const AdminComposicaoLote = lazy(() => import("./pages/admin/AdminComposicaoLote"));
const AdminComposicaoVendaDiretaLiberar = lazy(() => import("./pages/admin/AdminComposicaoVendaDiretaLiberar"));
const AdminLiberarVendaDireta = lazy(() => import("./pages/admin/AdminLiberarVendaDireta"));
const AdminEntregasFornecedores = lazy(() => import("./pages/admin/AdminEntregasFornecedores"));
const AdminPedidosConsumidores = lazy(() => import("./pages/admin/AdminPedidosConsumidores"));
const AdminRelatorioFornecedores = lazy(() => import("./pages/admin/AdminRelatorioFornecedores"));
const AdminRelatorioFornecedoresResultado = lazy(() => import("./pages/admin/AdminRelatorioFornecedoresResultado"));
const AdminRelatorioConsumidores = lazy(() => import("./pages/admin/AdminRelatorioConsumidores"));
const AdminRelatorioConsumidoresResultado = lazy(() => import("./pages/admin/AdminRelatorioConsumidoresResultado"));
const AdminMigrarOfertas = lazy(() => import("./pages/admin/AdminMigrarOfertas"));
const AdminPagamentosGerar = lazy(() => import("./pages/admin/AdminPagamentosGerar"));
const AdminPagamentosGerir = lazy(() => import("./pages/admin/AdminPagamentosGerir"));
const Usuarios = lazy(() => import("./pages/Usuarios"));
const UsuarioIndex = lazy(() => import("./pages/UsuarioIndex"));
const UsuarioDados = lazy(() => import("./pages/UsuarioDados"));
const UsuarioNovo = lazy(() => import("./pages/UsuarioNovo"));
const AdminMercadoDashboard = lazy(() => import("./pages/adminmercado/AdminMercadoDashboard"));
const AdminMercadoMercados = lazy(() => import("./pages/adminmercado/AdminMercadoMercados"));
const AdminMercadoPrecos = lazy(() => import("./pages/adminmercado/AdminMercadoPrecos"));
const AdminMercadoPrecosGestao = lazy(() => import("./pages/adminmercado/AdminMercadoPrecosGestao"));
const AdminMercadoCicloIndex = lazy(() => import("./pages/adminmercado/AdminMercadoCicloIndex"));
const AdminMercadoCiclo = lazy(() => import("./pages/adminmercado/AdminMercadoCiclo"));
const AdminMercadoComposicaoCesta = lazy(() => import("./pages/adminmercado/AdminMercadoComposicaoCesta"));
const AdminMercadoComposicaoLote = lazy(() => import("./pages/adminmercado/AdminMercadoComposicaoLote"));
const AdminMercadoMigrarOfertas = lazy(() => import("./pages/adminmercado/AdminMercadoMigrarOfertas"));
const AdminMercadoRelatorioFornecedores = lazy(() => import("./pages/adminmercado/AdminMercadoRelatorioFornecedores"));
const AdminMercadoRelatorioFornecedoresResultado = lazy(() => import("./pages/adminmercado/AdminMercadoRelatorioFornecedoresResultado"));
const AdminMercadoRelatorioConsumidores = lazy(() => import("./pages/adminmercado/AdminMercadoRelatorioConsumidores"));
const AdminMercadoRelatorioConsumidoresResultado = lazy(() => import("./pages/adminmercado/AdminMercadoRelatorioConsumidoresResultado"));
const AdminMercadoRelatorioFornecedoresCiclo = lazy(() => import("./pages/adminmercado/AdminMercadoRelatorioFornecedoresCiclo"));
const AdminMercadoRelatorioConsumidoresCiclo = lazy(() => import("./pages/adminmercado/AdminMercadoRelatorioConsumidoresCiclo"));
const AdminMercadoPontosEntrega = lazy(() => import("./pages/adminmercado/AdminMercadoPontosEntrega"));
const AdminMercadoPontoEntregaNovo = lazy(() => import("./pages/adminmercado/AdminMercadoPontoEntregaNovo"));
const AdminMercadoPontoEntregaEditar = lazy(() => import("./pages/adminmercado/AdminMercadoPontoEntregaEditar"));

const queryClient = new QueryClient();


// Loading fallback component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
          {/* Public Routes */}
          <Route
            path="/"
            element={
              <ProtectedRoute requireAuth={false}>
                <Index />
              </ProtectedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <ProtectedRoute requireAuth={false}>
                <Login />
              </ProtectedRoute>
            }
          />
          <Route
            path="/registro"
            element={
              <ProtectedRoute requireAuth={false}>
                <Register />
              </ProtectedRoute>
            }
          />

          {/* Consumidor Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/minhaCesta/:id"
            element={
              <ProtectedRoute>
                <MinhaCesta />
              </ProtectedRoute>
            }
          />
          <Route
            path="/consumidor/selecionar-ciclo"
            element={
              <ProtectedRoute>
                <ConsumidorSelecionarCiclo />
              </ProtectedRoute>
            }
          />
          <Route
            path="/pedidoConsumidores/:id"
            element={
              <ProtectedRoute>
                <PedidoConsumidores />
              </ProtectedRoute>
            }
          />
          <Route
            path="/consumidor/pagamentos"
            element={
              <ProtectedRoute>
                <ConsumidorPagamentos />
              </ProtectedRoute>
            }
          />
          <Route
            path="/consumidor/relatorio-pedidos"
            element={
              <ProtectedRoute>
                <ConsumidorRelatorioPedidos />
              </ProtectedRoute>
            }
          />
          <Route
            path="/consumidor/relatorio-pedidos-resultado/:cicloId"
            element={
              <ProtectedRoute>
                <ConsumidorRelatorioPedidosResultado />
              </ProtectedRoute>
            }
          />

          {/* Fornecedor Routes */}
          <Route
            path="/fornecedor/loja"
            element={
              <ProtectedRoute>
                <LojaProdutor />
              </ProtectedRoute>
            }
          />
          <Route
            path="/fornecedor/selecionar-ciclo"
            element={
              <ProtectedRoute>
                <FornecedorSelecionarCiclo />
              </ProtectedRoute>
            }
          />
          <Route
            path="/fornecedor/selecionar-ciclo-entregas"
            element={
              <ProtectedRoute>
                <FornecedorSelecionarCicloEntregas />
              </ProtectedRoute>
            }
          />
          <Route
            path="/fornecedor/entregas/:cicloId"
            element={
              <ProtectedRoute>
                <FornecedorEntregas />
              </ProtectedRoute>
            }
          />

          {/* Admin Routes */}
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          {/* Admin Mercado Routes */}
          <Route
            path="/adminmercado/dashboard"
            element={
              <ProtectedRoute>
                <AdminMercadoDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/adminmercado/mercados"
            element={
              <ProtectedRoute>
                <AdminMercadoMercados />
              </ProtectedRoute>
            }
          />
          <Route
            path="/adminmercado/precos"
            element={
              <ProtectedRoute>
                <AdminMercadoPrecos />
              </ProtectedRoute>
            }
          />
          <Route
            path="/adminmercado/precos/:id"
            element={
              <ProtectedRoute>
                <AdminMercadoPrecosGestao />
              </ProtectedRoute>
            }
          />
          <Route
            path="/adminmercado/ciclo-index"
            element={
              <ProtectedRoute>
                <AdminMercadoCicloIndex />
              </ProtectedRoute>
            }
          />
          <Route
            path="/adminmercado/ciclo"
            element={
              <ProtectedRoute>
                <AdminMercadoCiclo />
              </ProtectedRoute>
            }
          />
          <Route
            path="/adminmercado/ciclo/:id"
            element={
              <ProtectedRoute>
                <AdminMercadoCiclo />
              </ProtectedRoute>
            }
          />
          <Route
            path="/adminmercado/composicao-cesta/:cicloId"
            element={
              <ProtectedRoute>
                <AdminMercadoComposicaoCesta />
              </ProtectedRoute>
            }
          />
          <Route
            path="/adminmercado/composicao-lote/:cicloId"
            element={
              <ProtectedRoute>
                <AdminMercadoComposicaoLote />
              </ProtectedRoute>
            }
          />
          <Route
            path="/adminmercado/migrar-ofertas/:cicloId"
            element={
              <ProtectedRoute>
                <AdminMercadoMigrarOfertas />
              </ProtectedRoute>
            }
          />
          <Route
            path="/adminmercado/relatorio-fornecedores/resultado"
            element={
              <ProtectedRoute>
                <AdminMercadoRelatorioFornecedoresResultado />
              </ProtectedRoute>
            }
          />
          <Route
            path="/adminmercado/relatorio-fornecedores/:cicloId"
            element={
              <ProtectedRoute>
                <AdminMercadoRelatorioFornecedores />
              </ProtectedRoute>
            }
          />
          <Route
            path="/adminmercado/relatorio-consumidores/resultado"
            element={
              <ProtectedRoute>
                <AdminMercadoRelatorioConsumidoresResultado />
              </ProtectedRoute>
            }
          />
          <Route
            path="/adminmercado/relatorio-consumidores/:cicloId"
            element={
              <ProtectedRoute>
                <AdminMercadoRelatorioConsumidores />
              </ProtectedRoute>
            }
          />
          <Route
            path="/adminmercado/relatorios/fornecedores-ciclo"
            element={
              <ProtectedRoute>
                <AdminMercadoRelatorioFornecedoresCiclo />
              </ProtectedRoute>
            }
          />
          <Route
            path="/adminmercado/relatorios/consumidores-ciclo"
            element={
              <ProtectedRoute>
                <AdminMercadoRelatorioConsumidoresCiclo />
              </ProtectedRoute>
            }
          />
          <Route
            path="/adminmercado/pontos-entrega"
            element={
              <ProtectedRoute>
                <AdminMercadoPontosEntrega />
              </ProtectedRoute>
            }
          />
          <Route
            path="/adminmercado/pontos-entrega/novo"
            element={
              <ProtectedRoute>
                <AdminMercadoPontoEntregaNovo />
              </ProtectedRoute>
            }
          />
          <Route
            path="/adminmercado/pontos-entrega/:id"
            element={
              <ProtectedRoute>
                <AdminMercadoPontoEntregaEditar />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/mercados"
            element={
              <ProtectedRoute>
                <AdminMercados />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/precos"
            element={
              <ProtectedRoute>
                <AdminPrecosLista />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/precos/:id"
            element={
              <ProtectedRoute>
                <AdminPrecos />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/categorias"
            element={
              <ProtectedRoute>
                <AdminCategorias />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/categorias/novo"
            element={
              <ProtectedRoute>
                <AdminCategoriaNovo />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/categorias/:id"
            element={
              <ProtectedRoute>
                <AdminCategoriaDados />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/produtos"
            element={
              <ProtectedRoute>
                <AdminProdutos />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/alimentos"
            element={
              <ProtectedRoute>
                <AdminProdutos />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/produto"
            element={
              <ProtectedRoute>
                <AdminProdutoNovo />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/alimento"
            element={
              <ProtectedRoute>
                <AdminProdutoNovo />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/produto/:id"
            element={
              <ProtectedRoute>
                <AdminProdutoEditar />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/alimento/:id"
            element={
              <ProtectedRoute>
                <AdminProdutoEditar />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/produtos-comercializaveis"
            element={
              <ProtectedRoute>
                <AdminProdutosComercializaveis />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/produto-comercializavel"
            element={
              <ProtectedRoute>
                <AdminProdutoComercializavelNovo />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/produto-comercializavel/:id"
            element={
              <ProtectedRoute>
                <AdminProdutoComercializavelEditar />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/ciclo-index"
            element={
              <ProtectedRoute>
                <AdminCicloIndex />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/ciclo"
            element={
              <ProtectedRoute>
                <AdminCiclo />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/ciclo/:id"
            element={
              <ProtectedRoute>
                <AdminCiclo />
              </ProtectedRoute>
            }
          />
          <Route
            path="/oferta/:id"
            element={
              <ProtectedRoute>
                <AdminOferta />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/composicao-cesta/:id"
            element={
              <ProtectedRoute>
                <AdminComposicaoCesta />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/composicao-lote/:id"
            element={
              <ProtectedRoute>
                <AdminComposicaoLote />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/composicao-venda-direta/:id"
            element={
              <ProtectedRoute>
                <AdminComposicaoVendaDiretaLiberar />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/composicao-venda-direta-liberar/:id"
            element={
              <ProtectedRoute>
                <AdminComposicaoVendaDiretaLiberar />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/liberar-venda-direta/:id"
            element={
              <ProtectedRoute>
                <AdminLiberarVendaDireta />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/entregas-fornecedores/:id"
            element={
              <ProtectedRoute>
                <AdminEntregasFornecedores />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/pedidos-consumidores/:id"
            element={
              <ProtectedRoute>
                <AdminPedidosConsumidores />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/relatorio-fornecedores"
            element={
              <ProtectedRoute>
                <AdminRelatorioFornecedores />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/relatorio-fornecedores/resultado"
            element={
              <ProtectedRoute>
                <AdminRelatorioFornecedoresResultado />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/relatorio-consumidores"
            element={
              <ProtectedRoute>
                <AdminRelatorioConsumidores />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/relatorio-consumidores/resultado"
            element={
              <ProtectedRoute>
                <AdminRelatorioConsumidoresResultado />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/migrar-ofertas/:destinoId"
            element={
              <ProtectedRoute>
                <AdminMigrarOfertas />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/pagamentos-gerar"
            element={
              <ProtectedRoute>
                <AdminPagamentosGerar />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/pagamentos-gerir"
            element={
              <ProtectedRoute>
                <AdminPagamentosGerir />
              </ProtectedRoute>
            }
          />
          <Route
            path="/usuario"
            element={
              <ProtectedRoute>
                <UsuarioNovo />
              </ProtectedRoute>
            }
          />
          <Route
            path="/usuarios"
            element={
              <ProtectedRoute>
                <Usuarios />
              </ProtectedRoute>
            }
          />
          <Route
            path="/usuario-index"
            element={
              <ProtectedRoute>
                <UsuarioIndex />
              </ProtectedRoute>
            }
          />
          <Route
            path="/usuario/:id"
            element={
              <ProtectedRoute>
                <UsuarioDados />
              </ProtectedRoute>
            }
          />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route
            path="*"
            element={
              <ProtectedRoute>
                <NotFound />
              </ProtectedRoute>
            }
          />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
