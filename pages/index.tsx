import ThemeProvider from "../src/theme/theme-provider";
import Button from "../src/components/button/button";

export default function HomeScreen() {
  return (
    <ThemeProvider>
      <div>
        <h1>Home Page!</h1>
        <Button variant="accent">Botão simplão</Button>
      </div>
    </ThemeProvider>
  );
}
