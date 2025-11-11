import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
  LogOut
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const apps = [
  {
    id: "dashboard",
    title: "Dashboard",
    description: "Panel de control principal",
    icon: LayoutDashboard,
    color: "from-blue-500/20 to-blue-600/20",
    iconColor: "text-blue-500"
  },
  {
    id: "users",
    title: "Usuarios",
    description: "Gestión de usuarios",
    icon: Users,
    color: "from-purple-500/20 to-purple-600/20",
    iconColor: "text-purple-500"
  },
  {
    id: "documents",
    title: "Documentos",
    description: "Gestión documental",
    icon: FileText,
    color: "from-amber-500/20 to-amber-600/20",
    iconColor: "text-amber-500"
  },
  {
    id: "analytics",
    title: "Análisis",
    description: "Reportes y estadísticas",
    icon: BarChart3,
    color: "from-emerald-500/20 to-emerald-600/20",
    iconColor: "text-emerald-500"
  },
  {
    id: "calendar",
    title: "Calendario",
    description: "Agenda y eventos",
    icon: Calendar,
    color: "from-rose-500/20 to-rose-600/20",
    iconColor: "text-rose-500"
  },
  {
    id: "messages",
    title: "Mensajes",
    description: "Comunicación interna",
    icon: MessageSquare,
    color: "from-cyan-500/20 to-cyan-600/20",
    iconColor: "text-cyan-500"
  },
  {
    id: "sales",
    title: "Ventas",
    description: "Sistema de ventas",
    icon: ShoppingCart,
    color: "from-indigo-500/20 to-indigo-600/20",
    iconColor: "text-indigo-500"
  },
  {
    id: "settings",
    title: "Configuración",
    description: "Ajustes del sistema",
    icon: Settings,
    color: "from-slate-500/20 to-slate-600/20",
    iconColor: "text-slate-500"
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
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Suite Empresarial</h1>
              <p className="text-sm text-muted-foreground">Selecciona una aplicación para continuar</p>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="hover:bg-primary/10"
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <Button
                variant="outline"
                onClick={handleLogout}
                className="gap-2"
              >
                <LogOut className="h-4 w-4" />
                Cerrar Sesión
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Apps Grid */}
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <h2 className="text-3xl font-bold text-foreground mb-2">Tus Aplicaciones</h2>
            <p className="text-muted-foreground">Accede a todas las herramientas de tu suite empresarial</p>
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
