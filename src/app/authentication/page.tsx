"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { SigninForm } from "./components/sign-in-form";
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
          <SigninForm />
        </TabsContent>
        <TabsContent value="signup">
          <SignupForm />
        </TabsContent>
      </Tabs>
    </div>
  );
}
