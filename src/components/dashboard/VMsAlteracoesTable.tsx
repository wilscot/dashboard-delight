import { useState, useMemo } from "react";
import { Search, ArrowUpDown, Eye, Server } from "lucide-react";

type SortKey = "vm" | "tipo" | "usuario" | "quando";
type SortDir = "asc" | "desc";

interface VMChange {
  vm: string;
  vmId: string;
  server: string;
  tipo: string;
  tipoColor: string;
  usuario: string;
  quando: string;
}

const mockData: VMChange[] = [
  { vm: "S1814 - SEJUSP SIGO APLICACAO PROD", vmId: "vm-111673", server: "S2000", tipo: "Snapshot Removido", tipoColor: "bg-destructive", usuario: "VSPHERE.LOCAL\\bkpexec", quando: "20/03, 15:25" },
  { vm: "S1182 - SEJUSP FARM API SIGO PROD", vmId: "vm-1917", server: "S2000", tipo: "Snapshot Criado", tipoColor: "bg-success", usuario: "VSPHERE.LOCAL\\bkpexec", quando: "20/03, 15:20" },
  { vm: "S1500 - SESP FIREWALL MGMT", vmId: "vm-2041", server: "S1110", tipo: "Reconfigurado", tipoColor: "bg-warning", usuario: "SYSTEM", quando: "20/03, 14:55" },
  { vm: "S0892 - SEFAZ ERP PRODUCAO", vmId: "vm-8921", server: "S1589", tipo: "Snapshot Removido", tipoColor: "bg-destructive", usuario: "VSPHERE.LOCAL\\bveeam", quando: "20/03, 14:30" },
  { vm: "S2100 - DETRAN PORTAL WEB", vmId: "vm-3310", server: "S2001", tipo: "Migrado", tipoColor: "bg-primary", usuario: "SYSTEM", quando: "20/03, 13:45" },
];

const VMsAlteracoesTable = () => {
  const [filter, setFilter] = useState("");
  const [sortKey, setSortKey] = useState<SortKey>("quando");
  const [sortDir, setSortDir] = useState<SortDir>("desc");

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  };

  const filtered = useMemo(() => {
    let items = mockData;
    if (filter) {
      const q = filter.toLowerCase();
      items = items.filter((i) => i.vm.toLowerCase().includes(q) || i.vmId.toLowerCase().includes(q));
    }
    return [...items].sort((a, b) => {
      const aVal = a[sortKey];
      const bVal = b[sortKey];
      const cmp = aVal.localeCompare(bVal, "pt-BR");
      return sortDir === "asc" ? cmp : -cmp;
    });
  }, [filter, sortKey, sortDir]);

  const columns: { key: SortKey; label: string; className?: string }[] = [
    { key: "vm", label: "VM", className: "flex-[2]" },
    { key: "tipo", label: "Tipo", className: "flex-1" },
    { key: "usuario", label: "Usuário", className: "flex-1" },
    { key: "quando", label: "Quando", className: "flex-[0.7]" },
  ];

  return (
    <div className="card-glow rounded-lg bg-card transition-all duration-300 animate-fade-up" style={{ animationDelay: "400ms" }}>
      <div className="flex items-center justify-between p-5 pb-4">
        <div className="flex items-center gap-2">
          <Server className="h-5 w-5 text-primary" />
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            VMs com Alterações Recentes
          </h3>
          <span className="text-xs text-muted-foreground ml-1">Últimas 50</span>
        </div>

        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Filtrar VM..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="h-8 rounded-md border border-border bg-secondary pl-8 pr-3 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring transition-colors w-48"
          />
        </div>
      </div>

      {/* Header */}
      <div className="flex items-center px-5 py-2 border-y border-border bg-muted/30">
        {columns.map((col) => (
          <button
            key={col.key}
            onClick={() => handleSort(col.key)}
            className={`flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors ${col.className}`}
          >
            {col.label}
            <ArrowUpDown className={`h-3 w-3 ${sortKey === col.key ? "text-primary" : ""}`} />
          </button>
        ))}
        <div className="w-10" />
      </div>

      {/* Rows */}
      <div className="divide-y divide-border">
        {filtered.map((row, i) => (
          <div
            key={i}
            className="flex items-center px-5 py-3 hover:bg-secondary/40 transition-colors group"
          >
            <div className="flex-[2] min-w-0">
              <p className="text-sm font-medium text-foreground truncate">{row.vm}</p>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-[10px] text-muted-foreground">({row.vmId})</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-secondary text-secondary-foreground font-medium">
                  {row.server}
                </span>
              </div>
            </div>
            <div className="flex-1">
              <span className={`inline-block px-2 py-0.5 rounded text-[11px] font-semibold ${row.tipoColor} text-foreground`}>
                {row.tipo}
              </span>
            </div>
            <div className="flex-1">
              <span className="text-sm text-secondary-foreground truncate">{row.usuario}</span>
            </div>
            <div className="flex-[0.7]">
              <span className="text-sm tabular-nums text-secondary-foreground">{row.quando}</span>
            </div>
            <div className="w-10 flex justify-end">
              <button className="p-1.5 rounded-md text-muted-foreground hover:text-primary hover:bg-secondary transition-colors opacity-0 group-hover:opacity-100">
                <Eye className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="px-5 py-8 text-center text-sm text-muted-foreground">
          Nenhuma VM encontrada com o filtro aplicado
        </div>
      )}
    </div>
  );
};

export default VMsAlteracoesTable;
