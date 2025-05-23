import { Envelope, Lock } from "@phosphor-icons/react";
import Logo from "./Logo";
import { Button } from "./components/Button";
import { Checkbox } from "./components/Checkbox";
import { Heading } from "./components/Heading";
import { Text } from "./components/Text";
import { TextInput } from "./components/TextInput";


export function App() {
  return (
    <div className="w-screen h-screen flex-col bg-gray-900 flex items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
      <Logo/>
      <Heading size="lg" className="mt-4">
        Ignite Lab
      </Heading>
      <Text size="sm" className="text-gray-400 mt-1">
        Faça login e comece a usar!
      </Text>
      </header>

      <form action="" className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text size="sm"  className="font-semibold">
            Email
          </Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope/>
            </TextInput.Icon>
            <TextInput.Input id="email" type="email" placeholder="Digite seu e-mail"/>
          </TextInput.Root>
        </label>

        <label htmlFor="email" className="flex flex-col gap-3">
          <Text size="sm"  className="font-semibold">
            Sua senha
          </Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock/>
            </TextInput.Icon>
            <TextInput.Input id="password" type="password" placeholder="********"/>
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id="remember"/>
          <Text size="sm" className="text-gray-300">
            Lembrar de mim por 30 dias
          </Text>
        </label>

        <Button type="submit" className="mt-4">Entrar na plataforma</Button>
      </form>
     

     <footer className="flex flex-col items-center gap-4 mt-8">
        <Text asChild size="sm">
        {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
          <a href="" className="text-gray-300 underline hover:text-gray-400">Esqueceu sua senha?</a>
        </Text>
        <Text asChild size="sm">
        {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
          <a href="#" className="text-gray-300 underline hover:text-gray-400">Não possui conta? Crie uma agora!</a>
        </Text>
     </footer>
    </div>
  )
}