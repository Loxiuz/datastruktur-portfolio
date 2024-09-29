import Grid from "./grid.js";

const grid = new Grid(5, 5);
grid.set({ row: 0, col: 0 }, 1);
grid.set({ row: 1, col: 1 }, 2);
grid.set({ row: 2, col: 2 }, 3);
grid.set({ row: 3, col: 3 }, 4);
grid.set({ row: 4, col: 4 }, 5);
grid.dump();

window.grid = grid;
