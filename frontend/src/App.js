import React from "react";
import KanbanBoard from "./components/KanbanBoard";

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-600 text-white text-center py-4 text-2xl">
        Zidio Task Management
      </header>
      <main className="container mx-auto p-4">
        <KanbanBoard />
      </main>
    </div>
  );
};

export default App;
