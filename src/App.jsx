import { useState } from 'react';
import './App.css';
import PollOption from './PollOption';

function App() {
  const [pets, setPets] = useState([
    { option: "Dog", count: 0 },
    { option: "Cat", count: 0 },
    { option: "Rat", count: 0 }
  ]);

  const handleVote = (index) => {
    const updatedPets = [...pets];
    updatedPets[index].count += 1;
    setPets(updatedPets);
  };

  const getLeader = () => {
    let leader = pets[0];
    for (let i = 1; i < pets.length; i++) {
      if (pets[i].count > leader.count) leader = pets[i];
    }
    return leader;
  };

  const leader = getLeader();

  return (
    <div className="App">
      <h1>Vote for the Best Pet!</h1>
      
      <div className="options-container">
        {pets.map((pet, index) => (
          <PollOption 
            key={index}
            label={pet.option}
            count={pet.count}
            onVote={() => handleVote(index)}
          />
        ))}
      </div>
      
      <div className="leader-section">
        <h2>Current Leader:</h2>
        <p>{leader.option} with {leader.count} votes!</p>
      </div>
    </div>
  );
}

export default App;