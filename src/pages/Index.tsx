import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import EventosCard from "@/components/dashboard/EventosCard";
import DiscosCard from "@/components/dashboard/DiscosCard";
import VMsToolsCard from "@/components/dashboard/VMsToolsCard";
import ColetaDadosCard from "@/components/dashboard/ColetaDadosCard";
import AlteracoesPorUsuarioCard from "@/components/dashboard/AlteracoesPorUsuarioCard";
import VMsAlteracoesTable from "@/components/dashboard/VMsAlteracoesTable";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />
      <div className="lg:ml-52">
        <DashboardHeader />
        <main className="p-6 space-y-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <EventosCard />
            <DiscosCard />
            <VMsToolsCard />
          </div>

          {/* Coleta + Alterações por Usuário */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
            <div className="lg:col-span-3">
              <ColetaDadosCard />
            </div>
            <div className="lg:col-span-2">
              <AlteracoesPorUsuarioCard />
            </div>
          </div>

          {/* Table */}
          <VMsAlteracoesTable />
        </main>
      </div>
    </div>
  );
};

export default Index;
