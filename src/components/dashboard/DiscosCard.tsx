import { HardDrive, Calendar, Clock, TrendingUp } from "lucide-react";

const DiscosCard = () => {
  return (
    <div className="card-glow rounded-lg bg-card p-6 transition-all duration-300 animate-fade-up" style={{ animationDelay: "80ms" }}>
      <div className="flex items-center gap-2 mb-5">
        <HardDrive className="h-5 w-5 text-primary" />
        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Discos
        </h3>
      </div>

      <div className="mb-5">
        <p className="text-xs text-muted-foreground mb-1">Expansões (30d)</p>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-foreground tabular-nums">19</span>
          <span className="flex items-center gap-1 text-xs font-medium text-warning">
            <TrendingUp className="h-3 w-3" />
            +4.16 TB
          </span>
        </div>
      </div>

      <div className="border-t border-border pt-4 space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="flex items-center gap-1.5 text-muted-foreground">
            <Clock className="h-3.5 w-3.5" /> Última coleta
          </span>
          <span className="font-medium text-foreground tabular-nums">19/03, 20:06</span>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="flex items-center gap-1.5 text-muted-foreground">
            <Calendar className="h-3.5 w-3.5" /> Próxima coleta
          </span>
          <span className="font-medium text-primary tabular-nums">20/03, 20:00</span>
        </div>
      </div>
    </div>
  );
};

export default DiscosCard;
