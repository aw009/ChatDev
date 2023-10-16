import React, { useState } from 'react';
import axios from 'axios';
function App() {
  const [description, setDescription] = useState('');
  const [diagram, setDiagram] = useState('');
  const [processId, setProcessId] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/process', { description });
      console.log(response.data);
      setProcessId(response.data.process_id);
    } catch (error) {
      console.error(error);
    }
  };
  const handleGetDiagram = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`/diagram/${processId}`);
      setDiagram(response.data.diagram);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <button onClick={handleGetDiagram}>Get Diagram</button>
      {diagram && <img src={diagram} alt="Mermaid Diagram" />}
    </div>
  );
}
export default App;