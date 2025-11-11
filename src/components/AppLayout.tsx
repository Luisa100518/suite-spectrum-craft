import { ReactNode } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  Users,
  FileText,
  Settings,
  BarChart3,
  Calendar,
  MessageSquare,
  ShoppingCart,
  Moon,
  Sun,
  LogOut,
  Grid3x3,
  User as UserIcon,
  ChevronLeft,
} from "lucide-react";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { toast } from "sonner";

interface AppLayoutProps {
  children: ReactNode;
}

const appIcons: Record<string, typeof LayoutDashboard> = {
  capacitaciones: LayoutDashboard,
  matriz: Users,
  requisicion: FileText,
  evaluacion: BarChart3,
  nomina: ShoppingCart,
  reportes: BarChart3,
};

const appNames: Record<string, string> = {
  capacitaciones: "Capacitaciones",
  matriz: "Matriz de Cargos",
  requisicion: "Requisición",
  evaluacion: "Evaluación",
  nomina: "Nómina",
  reportes: "Reportes",
};

const appModules: Record<string, Array<{ name: string; icon: any }>> = {
  capacitaciones: [
    { name: "Cursos", icon: FileText },
    { name: "Asistencias", icon: Users },
    { name: "Certificados", icon: FileText },
    { name: "Calendario", icon: Calendar },
  ],
  matriz: [
    { name: "Cargos", icon: Users },
    { name: "Competencias", icon: BarChart3 },
    { name: "Evaluaciones", icon: FileText },
  ],
  requisicion: [
    { name: "Solicitudes", icon: FileText },
    { name: "Aprobaciones", icon: Settings },
    { name: "Historial", icon: BarChart3 },
  ],
  evaluacion: [
    { name: "Evaluaciones", icon: BarChart3 },
    { name: "Resultados", icon: FileText },
    { name: "Reportes", icon: BarChart3 },
  ],
  nomina: [
    { name: "Empleados", icon: Users },
    { name: "Pagos", icon: ShoppingCart },
    { name: "Reportes", icon: BarChart3 },
  ],
  reportes: [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Análisis", icon: BarChart3 },
    { name: "Exportar", icon: FileText },
  ],
};

const AppLayout = ({ children }: AppLayoutProps) => {
  const navigate = useNavigate();
  const { appId } = useParams();
  const [isDark, setIsDark] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const handleLogout = () => {
    toast.success("Sesión cerrada");
    setTimeout(() => navigate("/"), 500);
  };

  const CurrentIcon = appId ? appIcons[appId] : LayoutDashboard;
  const currentAppName = appId ? appNames[appId] : "Aplicación";

  return (
    <div className="min-h-screen w-full flex bg-background">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarCollapsed ? "w-20" : "w-64"
        } bg-card border-r border-border transition-all duration-300 flex flex-col`}
      >
        {/* Sidebar Header */}
        <div className="p-4 border-b border-border">
          <div className="flex items-center justify-between">
            {!sidebarCollapsed && (
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <Grid3x3 className="h-4 w-4 text-primary-foreground" />
                </div>
                <span className="font-bold text-foreground">Suite</span>
              </div>
            )}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="hover:bg-accent"
            >
              <ChevronLeft className={`h-4 w-4 transition-transform ${sidebarCollapsed ? "rotate-180" : ""}`} />
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {/* Current App Info */}
          <div className={`px-3 py-2 mb-4 ${sidebarCollapsed ? "text-center" : ""}`}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                <CurrentIcon className="h-5 w-5 text-primary-foreground" />
              </div>
              {!sidebarCollapsed && (
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-foreground truncate">{currentAppName}</p>
                  <p className="text-xs text-muted-foreground">Aplicación actual</p>
                </div>
              )}
            </div>
          </div>

          <Separator className="my-3" />

          {/* Navigation Modules */}
          <div className="space-y-1">
            <p className={`text-xs font-semibold text-muted-foreground px-3 py-2 ${sidebarCollapsed ? "text-center" : ""}`}>
              {!sidebarCollapsed && "MÓDULOS"}
            </p>
            {appId && appModules[appId]?.map((module) => {
              const ModuleIcon = module.icon;
              return (
                <Button
                  key={module.name}
                  variant="ghost"
                  className="w-full justify-start gap-3 text-muted-foreground hover:text-foreground hover:bg-accent"
                >
                  <ModuleIcon className="h-4 w-4" />
                  {!sidebarCollapsed && <span>{module.name}</span>}
                </Button>
              );
            })}
          </div>
        </nav>

        {/* Sidebar Footer */}
        <div className="p-3 border-t border-border space-y-2">
          {/* User Info */}
          <div className={`px-2 py-2 rounded-lg bg-accent/50 ${sidebarCollapsed ? "text-center" : ""}`}>
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8 flex-shrink-0">
                <AvatarFallback className="bg-primary text-primary-foreground text-xs font-semibold">
                  JD
                </AvatarFallback>
              </Avatar>
              {!sidebarCollapsed && (
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">John Doe</p>
                  <p className="text-xs text-muted-foreground truncate">john@empresa.com</p>
                </div>
              )}
            </div>
          </div>

          {/* Change App Button */}
          <Button
            variant="ghost"
            size={sidebarCollapsed ? "icon" : "sm"}
            onClick={() => navigate("/apps")}
            className="w-full justify-start gap-2 text-xs text-muted-foreground hover:text-foreground"
          >
            <Grid3x3 className="h-3 w-3" />
            {!sidebarCollapsed && <span>Cambiar aplicación</span>}
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-16 border-b border-border bg-card backdrop-blur-sm flex items-center justify-between px-6 flex-shrink-0 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-primary flex items-center justify-center">
                <CurrentIcon className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-foreground">{currentAppName}</h1>
                <p className="text-xs text-muted-foreground">Sistema de Gestión</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hover:bg-accent"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>

            <Separator orientation="vertical" className="h-6" />

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-2 hover:bg-accent">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-primary text-primary-foreground text-xs font-semibold">
                      JD
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <p className="text-sm font-medium text-foreground">John Doe</p>
                    <p className="text-xs text-muted-foreground">Administrador</p>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate("/profile")}>
                  <UserIcon className="mr-2 h-4 w-4" />
                  <span>Editar Perfil</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="text-destructive">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Cerrar Sesión</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto bg-gradient-surface">
          <div className="p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
