import React, { useEffect, useState } from 'react'
import Pieces from './Pieces';
import { Droppable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { registerInitPosition } from '../slices/index';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)



const Puzzle = ({ pieces, initialState, setPieces }) => {

    useEffect(() => {
     console.log(pieces)
    }, [pieces]);

    const switchPositions = () => {
      const disperseElements = () => {
        const shuffledPieces = [...pieces];
        for (let i = shuffledPieces.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffledPieces[i], shuffledPieces[j]] = [shuffledPieces[j], shuffledPieces[i]];
        }
        setPieces(shuffledPieces);
      };
  
      const disperseTimeout = setTimeout(() => {
        disperseElements();
        onLoad()
        
      }, 100);
  
      return () => {
        clearTimeout(disperseTimeout);
      };
    };
    


    const resetPositions = () => {
      setPieces(initialState);
      onLoad()
    };

    const onLoad = () => {
      gsap.timeline().fromTo(".pieces",
          {
              opacity: 0,
              y: -200,
          },
          {
              y: 0,
              opacity: 1,
              stagger: 0.1,
              delay: 0.1,
              duration: 0.3,
          })
  }


    return (
      <div>
        <button className='button green' onClick={resetPositions}>Réinitialiser</button>
        <button className='button red' onClick={switchPositions}> Start </button>
        <Droppable droppableId="puzzle">
            {provider => (
                <div
                    ref={provider.innerRef}
                    {...provider.droppableProps}
                    className="puzzle"
                >
                    {pieces.map((piece, index) => (
                       <Pieces
                       key={piece.id}
                       index={index}
                       piece={piece}
                       className={ 'pieces'}
                     />
                    ))}
                </div>
            )}
        </Droppable>
        </div>
    );
};

export default Puzzle



// useEffect(() => {
//   const disperseElements = () => {
//     const shuffledPieces = [...pieces];
//     for (let i = shuffledPieces.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [shuffledPieces[i], shuffledPieces[j]] = [shuffledPieces[j], shuffledPieces[i]]; 
//     }
//     setPieces(shuffledPieces); 
//   };

//   const disperseTimeout = setTimeout(() => {
//     disperseElements();
//   }, 2000);

//   return () => {
//     clearTimeout(disperseTimeout);
//   };
// }, []);