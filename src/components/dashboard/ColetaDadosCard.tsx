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
    <div className="card-glow rounded-lg bg-card p-5 transition-all duration-300 animate-fade-up" style={{ animationDelay: "240ms" }}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Database className="h-5 w-5 text-primary" />
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Coleta de Dados
          </h3>
        </div>
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" /> Última: <strong className="text-foreground">20/03, 15:25</strong>
          </span>
          <span>
            Próxima: <strong className="text-primary">16:09</strong>
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2 flex-wrap">
        <button
          onClick={handleCollectAll}
          disabled={collectingAll}
          className="inline-flex items-center gap-2 rounded-md bg-success px-4 py-2 text-sm font-semibold text-success-foreground transition-all duration-200 hover:brightness-110 active:scale-[0.97] disabled:opacity-60 disabled:pointer-events-none"
        >
          {collectingAll ? (
            <RefreshCw className="h-4 w-4 animate-spin" />
          ) : (
            <Play className="h-4 w-4" />
          )}
          Coletar Todos
        </button>

        <div className="h-6 w-px bg-border mx-1" />

        {servers.map((server) => (
          <button
            key={server}
            onClick={() => handleCollect(server)}
            disabled={collecting === server || collectingAll}
            className="inline-flex items-center gap-1.5 rounded-md border border-border bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground transition-all duration-200 hover:border-primary/40 hover:bg-secondary/80 active:scale-[0.97] disabled:opacity-50 disabled:pointer-events-none"
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
