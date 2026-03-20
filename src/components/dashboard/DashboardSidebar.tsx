import { useState } from "react";
import {
  LayoutDashboard,
  Monitor,
  FileText,
  HardDrive,
  Wrench,
  ArrowLeftRight,
  BoxSelect,
  Bell,
  Search,
  Settings,
  ChevronDown,
  ArrowLeft,
} from "lucide-react";

interface NavItem {
  label: string;
  icon: React.ElementType;
  active?: boolean;
  children?: { label: string; icon: React.ElementType }[];
}

const navItems: NavItem[] = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  {
    label: "Monitoramento",
    icon: Monitor,
    children: [
      { label: "Eventos", icon: FileText },
      { label: "Análise de Disco", icon: HardDrive },
      { label: "VMware Tools", icon: Wrench },
      { label: "Migrações", icon: ArrowLeftRight },
      { label: "VMs Excluídas", icon: BoxSelect },
    ],
  },
  { label: "Alertas", icon: Bell },
  { label: "Busca por Usuário", icon: Search },
  { label: "Administração", icon: Settings },
];

const DashboardSidebar = () => {
  const [expanded, setExpanded] = useState<string | null>("Monitoramento");

  return (
    <aside className="fixed left-0 top-0 h-screen w-52 bg-sidebar border-r border-sidebar-border flex flex-col z-30">
      <div className="p-5 pb-4">
        <h1 className="text-lg font-bold text-foreground tracking-tight">vTracer</h1>
      </div>

      <button className="flex items-center gap-2 mx-3 mb-2 px-3 py-1.5 rounded-md text-xs font-medium text-primary hover:bg-sidebar-accent transition-colors">
        <ArrowLeft className="h-3.5 w-3.5" />
        Portal
      </button>

      <nav className="flex-1 px-2 space-y-0.5 overflow-y-auto">
        {navItems.map((item) => (
          <div key={item.label}>
            <button
              onClick={() => {
                if (item.children) {
                  setExpanded((e) => (e === item.label ? null : item.label));
                }
              }}
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 active:scale-[0.97] ${
                item.active
                  ? "bg-primary text-primary-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent"
              }`}
            >
              <item.icon className="h-4 w-4 shrink-0" />
              <span className="flex-1 text-left">{item.label}</span>
              {item.children && (
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    expanded === item.label ? "rotate-180" : ""
                  }`}
                />
              )}
            </button>

            {item.children && expanded === item.label && (
              <div className="ml-4 mt-0.5 space-y-0.5 border-l border-sidebar-border pl-3">
                {item.children.map((child) => (
                  <button
                    key={child.label}
                    className="w-full flex items-center gap-2 px-2 py-1.5 rounded-md text-xs text-sidebar-foreground hover:bg-sidebar-accent hover:text-foreground transition-colors active:scale-[0.97]"
                  >
                    <child.icon className="h-3.5 w-3.5" />
                    {child.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default DashboardSidebar;
