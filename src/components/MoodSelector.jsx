import React from 'react';
import triste from "../Image/triste.png"
import joyeux from "../Image/joyeux.png"
import calme from "../Image/calme.png"
import excite from "../Image/excite.png"
import encolere from "../Image/en-colere.png"

const MoodSelector = ({ onSelect }) => {
    const moods = ['Heureux', 'Triste', 'En colère', 'Excité', 'Calme'];

    const getBackgroundColor = (mood) => {
        switch (mood) {
            case 'Heureux':
                return { backgroundColor: '#FCD34D', ringColor: '#F59E0B' };
            case 'Triste':
                return { backgroundColor: '#718096', ringColor: '#4A5568' };
            case 'En colère':
                return { backgroundColor: '#F56565', ringColor: '#C53030' };
            case 'Excité':
                return { backgroundColor: '#68D391', ringColor: '#38A169' };
            case 'Calme':
                return { backgroundColor: '#63B3ED', ringColor: '#3182CE' };
            default:
                return { backgroundColor: '#FFFFFF', ringColor: '#000000' }; // Default to white color
        }
    };

    return (
        <div className="flex-col gap-4 overflow-hidden rounded-md p-6 shadow-lg shadow-[#00000050] inline-block justify-center items-center ">
            <span className="text-center font-mono text-base font-black uppercase text-neutral-600">
                Please select your mood
            </span>
            <div className="flex items-center gap-4">
                {moods.map((mood, index) => (
                    <div className="relative flex h-[50px] w-[50px] items-center justify-center" key={index}>
                        <input
                            type="radio"
                            id={`radio-${index}`}
                            name="mood"
                            value={mood}
                            className="peer z-10 h-full w-full cursor-pointer opacity-0"
                            onClick={() => onSelect(mood)}
                            data-testid={`radio-${index}`}
                        />
                        <div className="absolute h-full w-full rounded-full  p-2 shadow-sm shadow-[#00000050] duration-300 peer-checked:scale-110 peer-checked:ring-2"></div>
                       <div className="absolute -z-10 h-full w-full scale-0 rounded-full duration-500 peer-checked:scale-[500%]" style={getBackgroundColor(mood)}></div>
                        
                        <div
                            className="absolute h-full w-full rounded-full p-2 shadow-sm duration-300"
                            style={getBackgroundColor(mood)}
                        ></div>
                        <div
                            className="absolute -z-10 h-full w-full scale-0 rounded-full duration-500"
                            style={{ backgroundColor: getBackgroundColor(mood).ringColor }}
                        ></div>
                        {mood === 'Heureux' && (
                            <img
                                src={joyeux}
                                alt="Heureux"
                                className="absolute"
                                style={{ width: '50px', height: '50px' }}
                            />
                        )}
                        {mood === 'Triste' && (
                            <img
                                src={triste}
                                alt="Triste"
                                className="absolute"
                                style={{ width: '50px', height: '50px' }}
                            />
                        )}
                        {mood === 'En colère' && (
                            <img
                                src={encolere}
                                alt="En colère"
                                className="absolute"
                                style={{ width: '50px', height: '50px' }}
                            />
                        )}
                        {mood === 'Excité' && (
                            <img
                                src={excite}
                                alt="Excité"
                                className="absolute"
                                style={{ width: '50px', height: '50px' }}
                            />
                        )}
                        {mood === 'Calme' && (
                            <img
                                src={calme}
                                alt="Calme"
                                className="absolute"
                                style={{ width: '50px', height: '50px' }}
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MoodSelector;
