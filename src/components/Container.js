import React, { useEffect, useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd';
import Puzzle from './Puzzle';
import VictoryMessage from './VictoryMessage';

const Container = ({ content }) => {
    const [pieces, setPieces] = useState(content);
    const [initialPieces, setInitialPieces] = useState(content); 
    const [hasMoved, setHasMoved] = useState(false); 
    const [itsWin, setItsWin] = useState(false);



    const onDragEnd = (result) => {
        const { destination, source } = result;
    
        if (
          !destination ||
          (destination.droppableId === source.droppableId &&
            destination.index === source.index)
        ) {
          return;
        }
    
        const movedPiece = pieces[source.index];
    
        const updatedPieces = [...pieces];
        updatedPieces.splice(source.index, 1);
        updatedPieces.splice(destination.index, 0, movedPiece);
    
        setPieces(updatedPieces);
        setHasMoved(true);
      };
    


      useEffect(() => {
        if (hasMoved) {
          checkIfWon();
        }
      }, [pieces, hasMoved]);
    


      const checkIfWon = () => {
        let isWon = true;
    
        for (let i = 0; i < pieces.length; i++) {
          if (pieces[i].id !== initialPieces[i].id) {
            isWon = false;
            break;
          }
        }
        if (isWon) {
            setItsWin(true)
        }
      };

    return (
            <DragDropContext onDragEnd={onDragEnd}>
                <Puzzle pieces={pieces} initialState={initialPieces} setPieces={setPieces} />
                <VictoryMessage itsWin={itsWin} setItsWin={setItsWin} />
            </DragDropContext>
    );
};

export default Container