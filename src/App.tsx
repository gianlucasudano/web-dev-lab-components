import "./App.css";

import { StackedCard } from "../";

function App() {
  return (
    <>
      <div className="cardsContainer">
        <StackedCard variant="outlined" draggable>Pippo</StackedCard>
        <StackedCard variant="elevated" />
        <StackedCard variant="filled" />
      </div>
    </>
  );
}

export default App;
