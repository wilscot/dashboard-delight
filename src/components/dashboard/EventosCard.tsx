import { Calendar, Clock, Activity } from "lucide-react";

const EventosCard = () => {
  return (
    <div className="card-glow rounded-lg bg-card p-6 transition-all duration-300 animate-fade-up">
      <div className="flex items-center gap-2 mb-5">
        <Activity className="h-5 w-5 text-primary" />
        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Eventos
        </h3>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-5">
        <div>
          <p className="text-xs text-muted-foreground mb-1">Hoje</p>
          <p className="text-3xl font-bold text-foreground tabular-nums">2.182</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-1">Total coletado</p>
          <p className="text-3xl font-bold text-foreground tabular-nums">112.149</p>
        </div>
      </div>

      <div className="border-t border-border pt-4 space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="flex items-center gap-1.5 text-muted-foreground">
            <Clock className="h-3.5 w-3.5" /> Última coleta
          </span>
          <span className="font-medium text-foreground tabular-nums">20/03, 15:25</span>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="flex items-center gap-1.5 text-muted-foreground">
            <Calendar className="h-3.5 w-3.5" /> Próxima coleta
          </span>
          <span className="font-medium text-primary tabular-nums">20/03, 16:09</span>
        </div>
      </div>
    </div>
  );
};

export default EventosCard;
