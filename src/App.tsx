interface ButtonProps {
  text?: string;
}

function Button(Props: ButtonProps) {
  return (
    <button className="button">
      {Props.text ?? "Text"}
    </button>
  );
}

function App() {
  return (
    <div className="flex gap-2">
      <Button text="Enviar" />
    </div>
  );
}

export default App;
