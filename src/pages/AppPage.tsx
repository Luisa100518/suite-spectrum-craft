import { useParams } from "react-router-dom";
import AppLayout from "@/components/AppLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const appContent: Record<string, { title: string; description: string }> = {
  capacitaciones: {
    title: "Capacitaciones",
    description: "Sistema de gestión de capacitaciones y certificados"
  },
  matriz: {
    title: "Matriz de Cargos",
    description: "Gestión de perfiles y competencias laborales"
  },
  requisicion: {
    title: "Requisición",
    description: "Sistema de requisiciones y aprobaciones"
  },
  evaluacion: {
    title: "Evaluación",
    description: "Evaluación de desempeño del personal"
  },
  nomina: {
    title: "Nómina",
    description: "Gestión de nómina y pagos"
  },
  reportes: {
    title: "Reportes",
    description: "Centro de reportes y análisis"
  }
};

const AppPage = () => {
  const { appId } = useParams();
  const content = (appId && appContent[appId]) ? appContent[appId] : { title: "Aplicación", description: "Selecciona una aplicación válida" };

  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto space-y-6 animate-fade-in">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-foreground">{content.title}</h2>
            <p className="text-muted-foreground mt-1">{content.description}</p>
          </div>
          <Button variant="premium" className="gap-2">
            <Plus className="h-4 w-4" />
            Nuevo
          </Button>
        </div>

        {/* Content Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Card key={item} className="hover:shadow-elevated transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-lg">Elemento {item}</CardTitle>
                <CardDescription>
                  Contenido de ejemplo para la aplicación
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-32 bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground text-sm">Contenido aquí</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Info Message */}
        <Card className="border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Área de Trabajo
            </CardTitle>
            <CardDescription>
              Este es un espacio de trabajo de ejemplo. Los componentes de tablas, formularios y funcionalidad específica se implementarán según tus necesidades.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </AppLayout>
  );
};

export default AppPage;
