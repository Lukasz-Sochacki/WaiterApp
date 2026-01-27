import { API_URL } from '../config';

//selectors
export const getAllTables = (state) => state.tables;
export const getTableById = ({ tables }, tableId) =>
  tables.find((table) => table.id === tableId);

//actions
const createActionName = (actionName) => `app/tables/${actionName}`;
const UPDATE_TABLE = createActionName('UPDATE_TABLE');
const EDIT_TABLE = createActionName('EDIT_TABLE');
const REMOVE_TABLE = createActionName('REMOVE_TABLE');

//action creators

export const updateTables = (payload) => ({ type: UPDATE_TABLE, payload });
export const editTables = (payload) => ({ type: EDIT_TABLE, payload });
export const removeTable = (payload) => ({
  type: REMOVE_TABLE,
  payload,
});

export const fetchTables = () => {
  return (dispatch) => {
    fetch(API_URL + '/tables')
      .then((res) => res.json())
      .then((tables) => dispatch(updateTables(tables)));
  };
};

export const editTablesRequest = (editedTable) => {
  return (dispatch) => {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editedTable),
    };
    fetch(`http://localhost:3131/api/tables/${editedTable.id}`, options).then(
      () => dispatch(editTables(editedTable)),
    );
  };
};

export const removeTableRequest = (removedTable) => {
  return (dispatch) => {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    fetch(`http://localhost:3131/api/tables/${removedTable}`, options).then(
      () => dispatch(removeTable(removedTable)),
    );
  };
};

const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLE:
      return [...action.payload];
    case EDIT_TABLE:
      return statePart.map((table) =>
        table.id === action.payload.id
          ? { ...table, ...action.payload }
          : table,
      );
    case REMOVE_TABLE:
      return statePart.filter((table) => table.id !== action.payload);
    default:
      return statePart;
  }
};

export default tablesReducer;
