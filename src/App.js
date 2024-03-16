// App.js
import React, { useState } from 'react';
import MoodSelector from './components/MoodSelector';
import SubmitButton from './components/SubmitButton';
import ConfirmationMessage from './components/ConfirmationMessage';

function App() {
  const [selectedMood, setSelectedMood] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
  };

  const handleSubmit = () => {
    // Vérifier si une humeur a été sélectionnée avant de soumettre
    if (selectedMood) {
      // Vous pouvez traiter la soumission des données ici
      setSubmitted(true);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="container mx-auto px-4">
        {!submitted ? (
          <div>
            <h1 className="text-3xl font-bold font-mono mb-4">Daily Mood Tracker</h1>
            <MoodSelector onSelect={handleMoodSelect} />
            {/* Passer la fonction handleSubmit comme prop onSubmit */}
            <SubmitButton onSubmit={handleSubmit} />
          </div>
        ) : (
          <ConfirmationMessage mood={selectedMood} />
        )}
      </div>
    </div>
  );
}

export default App;
