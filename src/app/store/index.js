import { applyMiddleware, combineReducers, createStore } from "redux";
import { defaultState } from "../../server/defaultState";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import * as sagas from "./sagas.mock";
import * as mutations from "./mutations";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  combineReducers({
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
