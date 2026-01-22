//selectors

export const getAllTableStatus = (state) => state.status;

//actions

const createActionName = (actionName) => `app/status/${actionName}`;
const UPDATE_TABLE_STATUS = createActionName('UPDATE_TABLE_STATUS');

//action creators

export const updateTableStatus = (payload) => ({
  type: UPDATE_TABLE_STATUS,
  payload,
});

export const fetchTableStatus = () => {
  return (dispatch) => {
    fetch('http://localhost:3131/api/status')
      .then((res) => res.json())
      .then((tableStatus) => dispatch(updateTableStatus(tableStatus)));
  };
};

const tablesStatusReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLE_STATUS:
      return [...action.payload];
    default:
      return statePart;
  }
};

export default tablesStatusReducer;
