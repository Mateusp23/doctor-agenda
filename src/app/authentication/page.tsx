"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { SignupForm } from "./components/sign-up-form";

export default function AuthenticationPage() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Tabs defaultValue="signin" className="w-[400px]">
        <TabsList className="w-full">
          <TabsTrigger className="w-full" value="signin">
            Entrar
          </TabsTrigger>
          <TabsTrigger className="w-full" value="signup">
            Criar Conta
          </TabsTrigger>
        </TabsList>
        <TabsContent value="signin">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>Faça login para continuar.</CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm">
              You have 12 active projects and 3 pending tasks.
            </CardContent>
            <CardFooter>
              <Button>Entrar</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="signup">
          <SignupForm />
        </TabsContent>
      </Tabs>
    </div>
  );
}
