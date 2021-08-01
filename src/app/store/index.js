import { applyMiddleware, combineReducers, createStore } from "redux";
import { defaultState } from "../../server/defaultState";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import * as sagas from "./sagas";
import * as mutations from "./mutations";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  combineReducers({
    session(userSession = defaultState.session || {}, action) {
      let { type, authenticated } = action;
      switch (type) {
        case mutations.REQUEST_AUTHENTICATE_USER:
          return {
            ...userSession,
            authenticated: mutations.AUTHENTICATING,
          };
        case mutations.PROCESSING_AUTHENTICATE_USER:
          return { ...userSession, authenticated };
        default:
          return userSession;
      }
    },
    tasks(tasks = defaultState.tasks, action) {
      switch (action.type) {
        case mutations.CREATE_TASK:
          const { taskID, groupID, ownerID } = action;
          return [
            ...tasks,
            {
              id: taskID,
              name: "New Task",
              group: groupID,
              owner: ownerID,
              isComplete: false,
            },
          ];
        case mutations.SET_TASK_COMPLETE:
          return tasks.map((task) => {
            return task.id === action.taskID
              ? {
                  ...task,
                  isComplete: action.isComplete,
                }
              : task;
          });
        case mutations.SET_TASK_NAME:
          return tasks.map((task) => {
            return task.id === action.taskID
              ? {
                  ...task,
                  name: action.name,
                }
              : task;
          });
        case mutations.SET_TASK_GROUP:
          return tasks.map((task) => {
            return task.id === action.taskID
              ? {
                  ...task,
                  group: action.groupID,
                }
              : task;
          });
      }
      return tasks;
    },
    comments(comments = defaultState.comments, action) {
      return comments;
    },
    groups(groups = defaultState.groups, action) {
      return groups;
    },
    users(users = defaultState.users, action) {
      return users;
    },
  }),
  applyMiddleware(createLogger(), sagaMiddleware)
);

for (let saga in sagas) {
  sagaMiddleware.run(sagas[saga]);
}
