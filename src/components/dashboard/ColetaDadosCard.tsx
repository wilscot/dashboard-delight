import { useState } from "react";
import { Play, RefreshCw, Clock, Database } from "lucide-react";

const servers = ["S1110.ms", "S1589.ms", "S2000.ms", "S2001.ms"];

const ColetaDadosCard = () => {
  const [collecting, setCollecting] = useState<string | null>(null);
  const [collectingAll, setCollectingAll] = useState(false);

  const handleCollect = (server: string) => {
    setCollecting(server);
    setTimeout(() => setCollecting(null), 2000);
  };

  const handleCollectAll = () => {
    setCollectingAll(true);
    setTimeout(() => setCollectingAll(false), 3000);
  };

  return (
    <div className="card-glow rounded-lg bg-card p-5 transition-all duration-300 animate-fade-up flex flex-col h-full" style={{ animationDelay: "240ms" }}>
      {/* Header */}
      <div className="flex items-center gap-2 mb-1">
        <Database className="h-5 w-5 text-primary" />
        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Coleta de Dados
        </h3>
      </div>

      {/* Schedule info */}
      <div className="flex flex-col gap-0.5 text-xs text-muted-foreground mb-4">
        <span className="flex items-center gap-1">
          <Clock className="h-3 w-3" /> Última: <strong className="text-foreground">20/03, 15:25</strong>
        </span>
        <span className="ml-4">
          Próxima: <strong className="text-primary">16:09</strong>
        </span>
      </div>

      {/* Collect All button */}
      <button
        onClick={handleCollectAll}
        disabled={collectingAll}
        className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-success px-4 py-2.5 text-sm font-semibold text-success-foreground transition-all duration-200 hover:brightness-110 active:scale-[0.97] disabled:opacity-60 disabled:pointer-events-none mb-3"
      >
        {collectingAll ? (
          <RefreshCw className="h-4 w-4 animate-spin" />
        ) : (
          <Play className="h-4 w-4" />
        )}
        Coletar Todos
      </button>

      {/* Individual server buttons */}
      <div className="grid grid-cols-2 gap-2 mt-auto">
        {servers.map((server) => (
          <button
            key={server}
            onClick={() => handleCollect(server)}
            disabled={collecting === server || collectingAll}
            className="inline-flex items-center justify-center gap-1.5 rounded-md border border-border bg-secondary px-2 py-1.5 text-[11px] font-medium text-secondary-foreground transition-all duration-200 hover:border-primary/40 hover:bg-secondary/80 active:scale-[0.97] disabled:opacity-50 disabled:pointer-events-none"
          >
            {collecting === server ? (
              <RefreshCw className="h-3 w-3 animate-spin" />
            ) : (
              <RefreshCw className="h-3 w-3" />
            )}
            {server}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColetaDadosCard;
