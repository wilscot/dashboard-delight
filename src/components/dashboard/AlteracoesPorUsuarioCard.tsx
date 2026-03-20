import { useState } from "react";
import { Users } from "lucide-react";

type Period = "7d" | "30d" | "12m";

const userData = [
  { user: "SYSTEM", count: 9999, color: "bg-warning" },
  { user: "VSPHERE.LOCAL\\bveeam", count: 9999, color: "bg-primary" },
  { user: "VSPHERE.LOCAL\\bkpexec", count: 1311, color: "bg-destructive" },
];

const AlteracoesPorUsuarioCard = () => {
  const [period, setPeriod] = useState<Period>("30d");

  const periods: { value: Period; label: string }[] = [
    { value: "7d", label: "7 dias" },
    { value: "30d", label: "30 dias" },
    { value: "12m", label: "12 meses" },
  ];

  const maxCount = Math.max(...userData.map((u) => u.count));

  return (
    <div className="card-glow rounded-lg bg-card p-5 transition-all duration-300 animate-fade-up" style={{ animationDelay: "320ms" }}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Users className="h-5 w-5 text-primary" />
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Alterações por Usuário
          </h3>
        </div>
        <button className="text-xs font-medium text-primary hover:underline transition-colors">
          Ver todos
        </button>
      </div>

      <div className="flex gap-1 mb-5 p-0.5 rounded-md bg-secondary w-fit">
        {periods.map((p) => (
          <button
            key={p.value}
            onClick={() => setPeriod(p.value)}
            className={`px-3 py-1 text-xs font-medium rounded transition-all duration-200 ${
              period === p.value
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {userData.map((item) => (
          <button
            key={item.user}
            className="w-full flex items-center gap-3 group hover:bg-secondary/60 rounded-md px-2 py-1.5 -mx-2 transition-colors"
          >
            <div className={`h-8 w-8 rounded-full ${item.color} flex items-center justify-center text-xs font-bold text-foreground shrink-0`}>
              {item.user.charAt(0).toUpperCase()}
            </div>
            <div className="flex-1 min-w-0 text-left">
              <p className="text-sm font-medium text-foreground truncate">{item.user}</p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <div className="w-20 h-1.5 rounded-full bg-secondary overflow-hidden">
                <div
                  className={`h-full rounded-full ${item.color} transition-all duration-500`}
                  style={{ width: `${(item.count / maxCount) * 100}%` }}
                />
              </div>
              <span className="text-xs font-bold text-foreground tabular-nums min-w-[40px] text-right">
                {item.count >= 9999 ? "9999+" : item.count.toLocaleString("pt-BR")}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default AlteracoesPorUsuarioCard;
