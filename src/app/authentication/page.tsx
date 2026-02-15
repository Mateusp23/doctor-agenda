import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { auth } from "@/lib/auth";

import { SigninForm } from "./components/sign-in-form";
import { SignupForm } from "./components/sign-up-form";

const AuthenticationPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session?.user) {
    redirect("/dashboard");
  }

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
};

export default AuthenticationPage;
