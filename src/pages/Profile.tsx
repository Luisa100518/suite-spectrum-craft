import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppLayout from "@/components/AppLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { Camera, Save } from "lucide-react";

const Profile = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@empresa.com",
    phone: "+1 234 567 8900",
    department: "Desarrollo",
    position: "Desarrollador Senior"
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Perfil actualizado correctamente");
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
        {/* Page Header */}
        <div>
          <h2 className="text-3xl font-bold text-foreground">Mi Perfil</h2>
          <p className="text-muted-foreground mt-1">Gestiona tu información personal y preferencias</p>
        </div>

        {/* Profile Card */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle>Información Personal</CardTitle>
            <CardDescription>Actualiza tu información de perfil</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Avatar Section */}
            <div className="flex items-center gap-6">
              <div className="relative group">
                <Avatar className="h-24 w-24 border-4 border-primary/20">
                  <AvatarFallback className="bg-gradient-primary text-primary-foreground text-2xl font-bold">
                    JD
                  </AvatarFallback>
                </Avatar>
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute bottom-0 right-0 rounded-full h-8 w-8 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Camera className="h-4 w-4" />
                </Button>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {formData.firstName} {formData.lastName}
                </h3>
                <p className="text-sm text-muted-foreground">{formData.position}</p>
                <p className="text-sm text-muted-foreground">{formData.department}</p>
              </div>
            </div>

            <Separator />

            {/* Profile Form */}
            <form onSubmit={handleSave} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Nombre</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleChange("firstName", e.target.value)}
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Apellido</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleChange("lastName", e.target.value)}
                    className="bg-background"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Correo Electrónico</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className="bg-background"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="department">Departamento</Label>
                  <Input
                    id="department"
                    value={formData.department}
                    onChange={(e) => handleChange("department", e.target.value)}
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="position">Posición</Label>
                  <Input
                    id="position"
                    value={formData.position}
                    onChange={(e) => handleChange("position", e.target.value)}
                    className="bg-background"
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Button type="submit" variant="premium" className="gap-2">
                  <Save className="h-4 w-4" />
                  Guardar Cambios
                </Button>
                <Button type="button" variant="outline" onClick={() => navigate("/apps")}>
                  Cancelar
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Security Card */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle>Seguridad</CardTitle>
            <CardDescription>Gestiona tu contraseña y opciones de seguridad</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline">
              Cambiar Contraseña
            </Button>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default Profile;
