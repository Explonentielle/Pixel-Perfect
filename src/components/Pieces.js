import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Draggable } from 'react-beautiful-dnd';
import { registerPosition } from '../slices/index';

const Pieces = ({ piece, className, index }) => {

  return (
    <Draggable draggableId={String(piece.id)} index={index}>
      {provider => (
        <div
          className="provider"
          ref={provider.innerRef}
          {...provider.draggableProps}
          {...provider.dragHandleProps}
        >
          <img  src={require(`../img/${piece.img}`)} alt="" className={className} />
        </div>
      )}
    </Draggable>
  );
};

export default Pieces
