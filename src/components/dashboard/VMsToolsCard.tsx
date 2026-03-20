import { Wrench } from "lucide-react";

const VMsToolsCard = () => {
  return (
    <div className="card-glow rounded-lg bg-card p-6 transition-all duration-300 animate-fade-up" style={{ animationDelay: "160ms" }}>
      <div className="flex items-center gap-2 mb-5">
        <Wrench className="h-5 w-5 text-primary" />
        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          VMs sem Tools
        </h3>
      </div>

      <div className="mb-5">
        <p className="text-xs text-muted-foreground mb-1">Total</p>
        <span className="text-3xl font-bold text-warning tabular-nums">23</span>
      </div>

      <div className="border-t border-border pt-4">
        <p className="text-xs text-muted-foreground italic">
          Mais informações em breve
        </p>
      </div>
    </div>
  );
};

export default VMsToolsCard;
