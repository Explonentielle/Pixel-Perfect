import { createSlice } from "@reduxjs/toolkit";
import content from '../piecesContent';
const initialState = {
    positions: [],
    initialPositions: JSON.parse(localStorage.getItem('initialPositions')) || [],
};
// JSON.parse(localStorage.getItem('positions'))
export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        registerInitPosition: (state, { payload }) => {
            const { id, pos } = payload;
            payload.forEach(({ id }) => {
                const piecesId = document.getElementById(id);
                if (piecesId) {
                    const { top, left } = piecesId.getBoundingClientRect();

                    const piecesPos = {
                        id,
                        pos: { top, left }
                    };

                    // localStorage.setItem('initialPositions', JSON.stringify([...state.initialPositions, piecesPos]));
                    state.initialPositions.push(piecesPos);
                }
            });
        },
        registerPosition: (state, { payload }) => {

            const { id, pos } = payload;
            const existingPositionIndex = state.positions.findIndex((positionItem) => positionItem.id === id);
            if (existingPositionIndex !== -1) {
                state.positions[existingPositionIndex] = { id, pos };
            } else {
                state.positions.push({ id, pos });
            }

            // localStorage.setItem('positions', JSON.stringify(state.positions));
        },
    }
});

export const { registerPosition, registerInitPosition } = dataSlice.actions;

export default dataSlice.reducer;