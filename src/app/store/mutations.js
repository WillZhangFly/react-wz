export const REQUEST_TASK_CREATION = `REQUEST_TASK_CREATION`;
export const CREATE_TASK = `CREATE_TASK`;
export const SET_TASK_COMPLETE = `SET_TASK_COMPLETE`;
export const SET_TASK_GROUP = `SET_TASK_GROUP`;
export const SET_TASK_NAME = `SET_TASK_NAME`;
export const REQUEST_AUTHENTICATE_USER = `REQUEST_AUTHENTICATE_USER`;
export const REQUEST_SIGNUP_USER = `REQUEST_SIGNUP_USER`;
export const PROCESSING_AUTHENTICATE_USER = `PROCESSING_AUTHENTICATE_USER`;
export const AUTHENTICATING = `AUTHENTICATING`;
export const AUTHENTICATED = `AUTHENTICATED`;
export const NOT_AUTHENTICATED = `NOT_AUTHENTICATED`;
export const SET_STATE = `SET_STATE`;
export const USERNAME_RESERVED = `USERNAME_RESERVED`;
export const REQUEST_USER_ACCOUNT_CREATION = `REQUEST_USER_ACCOUNT_CREATION`;

export const requestTaskCreation = (groupID) => ({
  type: REQUEST_TASK_CREATION,
  groupID,
});

export const createTask = (taskID, groupID, ownerID) => ({
  type: CREATE_TASK,
  taskID,
  groupID,
  ownerID,
});

export const setTaskGroup = (taskID, groupID) => ({
  type: SET_TASK_GROUP,
  taskID,
  groupID,
});

export const setTaskName = (taskID, name) => ({
  type: SET_TASK_NAME,
  taskID,
  name,
});

export const setTaskCompletion = (id, isComplete) => ({
  type: SET_TASK_COMPLETE,
  taskID: id,
  isComplete,
});

export const requestAuthenticateUser = (username, password) => ({
  type: REQUEST_AUTHENTICATE_USER,
  username,
  password,
});

export const requestSignUpUser = (username, password) => ({
  type: REQUEST_SIGNUP_USER,
  username,
  password,
});

export const processAuthenticateUser = (
  status = AUTHENTICATING,
  session = null
) => ({
  type: PROCESSING_AUTHENTICATE_USER,
  session,
  authenticated: status,
});

export const setState = (state = {}) => ({
  type: SET_STATE,
  state,
});

export const requestCreateUserAccount = (username, password) => ({
  type: REQUEST_USER_ACCOUNT_CREATION,
  username,
  password,
});
