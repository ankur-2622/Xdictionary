import React, { useState } from "react";
function Xdictionary(){
    const dictionary = [
        { word: "React", meaning: "A JavaScript library for building user interfaces." },
        { word: "Component", meaning: "A reusable building block in React." },
        { word: "State", meaning: "An object that stores data for a component." }
      ];
    
      const [searchTerm, setSearchTerm] = useState("");
      const [definition, setDefinition] = useState(null);
    
      
      const handleSearch = () => {
        const foundWord = dictionary.find(
          (item) => item.word.toLowerCase() === searchTerm.toLowerCase()
        );
        
        if (foundWord) {
          setDefinition(foundWord.meaning);
        } else {
          setDefinition("Word not found in the dictionary.");
        }
      };
    
      return (
        <div style={{ textAlign: "center", padding: "20px" }}>
          <h1>Dictionary App</h1>
          <input
            type="text"
            placeholder="Search for a word..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ padding: "8px", marginRight: "10px" }}
          />
          <button onClick={handleSearch} style={{ padding: "8px" }}>Search</button>
          
         
                <div style={{ marginTop: "20px" }}>
                <h3>Definition:</h3>
                <p>{definition}</p>
              </div>
              
            
          
        </div>
      );
    };

   

export default Xdictionary;