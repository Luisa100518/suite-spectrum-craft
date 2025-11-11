import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  BarChart3, 
  ShoppingCart,
  Moon,
  Sun,
  LogOut,
  User,
  Grid3x3
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const apps = [
  {
    id: "capacitaciones",
    title: "Capacitaciones",
    description: "Sistema de gestión de capacitaciones y certificados",
    icon: LayoutDashboard,
    color: "from-blue-500/20 to-blue-600/20",
    iconColor: "text-blue-500"
  },
  {
    id: "matriz",
    title: "Matriz de Cargos",
    description: "Gestión de perfiles y competencias laborales",
    icon: Users,
    color: "from-purple-500/20 to-purple-600/20",
    iconColor: "text-purple-500"
  },
  {
    id: "requisicion",
    title: "Requisición",
    description: "Sistema de requisiciones y aprobaciones",
    icon: FileText,
    color: "from-amber-500/20 to-amber-600/20",
    iconColor: "text-amber-500"
  },
  {
    id: "evaluacion",
    title: "Evaluación",
    description: "Evaluación de desempeño del personal",
    icon: BarChart3,
    color: "from-emerald-500/20 to-emerald-600/20",
    iconColor: "text-emerald-500"
  },
  {
    id: "nomina",
    title: "Nómina",
    description: "Gestión de nómina y pagos",
    icon: ShoppingCart,
    color: "from-rose-500/20 to-rose-600/20",
    iconColor: "text-rose-500"
  },
  {
    id: "reportes",
    title: "Reportes",
    description: "Centro de reportes y análisis",
    icon: BarChart3,
    color: "from-cyan-500/20 to-cyan-600/20",
    iconColor: "text-cyan-500"
  }
];

const Apps = () => {
  const navigate = useNavigate();
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const handleLogout = () => {
    toast.success("Sesión cerrada");
    setTimeout(() => navigate("/"), 500);
  };

  const handleAppClick = (appId: string) => {
    navigate(`/app/${appId}`);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-surface">
      {/* Header */}
      <header className="border-b border-border bg-card backdrop-blur-sm sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center shadow-glow">
                <Grid3x3 className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Suite Empresarial</h1>
                <p className="text-sm text-muted-foreground">Selecciona una aplicación para comenzar</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" onClick={toggleTheme} className="hover:bg-accent">
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <Separator orientation="vertical" className="h-6" />
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
                    <User className="mr-2 h-4 w-4" />
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
          </div>
        </div>
      </header>

      {/* Apps Grid */}
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <h2 className="text-3xl font-bold text-foreground mb-2">Aplicaciones</h2>
            <p className="text-muted-foreground">Gestiona diferentes áreas de tu empresa con nuestras aplicaciones especializadas</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {apps.map((app, index) => {
              const Icon = app.icon;
              return (
                <Card
                  key={app.id}
                  className="group cursor-pointer hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 bg-card border-border animate-slide-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => handleAppClick(app.id)}
                >
                  <CardHeader>
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${app.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`h-7 w-7 ${app.iconColor}`} />
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {app.title}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {app.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Abrir aplicación →
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Apps;
