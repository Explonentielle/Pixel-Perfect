import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Draggable } from 'react-beautiful-dnd';
import { registerPosition } from '../slices/index';

const Pieces = ({ id, name, description, className, bgColor, action, img, index }) => {

  return (
    <Draggable draggableId={String(id)} index={index}>
      {provider => (
        <div
          className="provider"
          ref={provider.innerRef}
          {...provider.draggableProps}
          {...provider.dragHandleProps}
        >
          <img  src={require(`../img/${img}`)} alt="" className={className} />
        </div>
      )}
    </Draggable>
  );
};

export default Pieces















// <div
//             className={className}
//             style={{  backgroundImage: `url(${process.env.PUBLIC_URL + img})`}}
//             onClick={handleClick(id)}
//           >
//             {/* {name} */}
//           </div>


  // const handleClick = (id) => {
  //   const piecesId = document.getElementById(id);

  //   if (piecesId) {
  //     const { top, left } = piecesId.getBoundingClientRect();
  //     let pos = { top, left }
  //     dispatch(registerPosition({ id, pos }));
  //   }
  //   // navigate(action);
  // };

























{/* <div id={id} className={className} onClick={action} style={{
  backgroundImage: `url(${process.env.PUBLIC_URL + img})`
}}>
  <img src={require(`../img/${img}`)} alt="" className="image"/>
  {/* <div className="pieces-text"> */}
{/* <p>{name}</p> */ }
{/* <p>{description}</p> */ }
{/* </div> */ }
// </div> */}