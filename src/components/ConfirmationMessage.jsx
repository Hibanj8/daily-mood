import React from 'react';

const ConfirmationMessage = ({ mood }) => {
  const getColormood = (mood) => {
    switch (mood) {
      case 'Heureux':
        return { color: '#F59E0B', image: 'joyeux.png' };
      case 'Triste':
        return { color: '#4A5568', image: 'triste.png' };
      case 'En colère':
        return { color: '#C53030', image: 'en_colere.png' };
      case 'Excité':
        return { color: '#38A169', image: 'excite.png' };
      case 'Calme':
        return { color: '#3182CE', image: 'calme.png' };
      default:
        return { color: '#000000', image: 'default.png' };
    }
  };

  const moodStyle = getColormood(mood);

  return (
    <div className="flex justify-center items-center h-screen font-mono">
      <div className="bg-white w-72 h-80 rounded-lg shadow-gray-500 shadow-lg justify-center items-center ml-6 mr-6">
        <div className="flex p-2 gap-1 justify-center items-center">
          <img src={require(`../Image/${moodStyle.image}`)} alt="Mood" className="w-8 h-8 rounded-full" style={{ backgroundColor: moodStyle.color }} />
        </div>
        <div className="card__content m-5">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-2">Merci pour votre retour !</h2>
            <p className="text-lg mb-4">Votre humeur du jour : <span className='font-bold text-xl' style={{ color: moodStyle.color }}>{mood}</span></p>
            <p className="text-gray-500">Votre réponse a été enregistrée avec succès.</p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationMessage;
