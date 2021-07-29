import { addNewTask, updateTask } from "./server";

(async function mySpec() {
  await addNewTask({ name: "Will Task", id: "1234567" });
  await updateTask({ name: "Will Task updated", id: "1234567" });
})();
