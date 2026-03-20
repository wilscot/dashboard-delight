import { Search, Menu } from "lucide-react";

const DashboardHeader = () => {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between h-14 px-6 border-b border-border bg-background/80 backdrop-blur-sm">
      <button className="lg:hidden p-2 rounded-md text-muted-foreground hover:bg-secondary transition-colors">
        <Menu className="h-5 w-5" />
      </button>

      <div className="relative flex-1 max-w-md mx-auto lg:mx-0">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Buscar VM por SID ou nome (ex: S0008)"
          className="w-full h-9 rounded-lg border border-border bg-secondary pl-9 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring transition-colors"
        />
      </div>

      <div className="flex items-center gap-3 ml-4">
        <span className="text-sm font-medium text-foreground">wfrancischini</span>
        <span className="text-[10px] px-2 py-0.5 rounded bg-primary/20 text-primary font-semibold uppercase">
          Admin
        </span>
        <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center text-xs font-bold text-foreground">
          W
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
