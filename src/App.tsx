import { useState } from "react";
import "./App.css";
import InvoiceCanvas from "./components/invoice-html2canvas/invoice-canvas";
import InvoiceRectRenderer from "./components/invoice-rect-renderer/invoice-react-renderer";

function App() {
  const [showCanvas, setShowCanvas] = useState(false);

  return (
    <>
      <main className="flex flex-col items-center h-screen">
        <div className="mt-10">
          <button
            onClick={() => setShowCanvas(!showCanvas)}
            className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition-colors"
          >
            Switch to {showCanvas ? "React Renderer" : "Canvas Renderer"}
          </button>
        </div>

        {showCanvas ? <InvoiceCanvas /> : <InvoiceRectRenderer />}
      </main>
    </>
  );
}

export default App;
