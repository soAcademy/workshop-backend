// เข้ามาจัดการตัวสุดท้าย
import {createManyTasksHandler, createTaskHandler, deleteTasksHandler, findThrowHandler, getTaskHandler, updateTaskStatusHandler} from './todoList'

export const AppRoutes = [
  { 
    path: "/todoList/createTask", 
    method: "post", 
    action: createTaskHandler
  },
  { 
    path: "/todoList/getTasks", 
    method: "post", 
    action: getTaskHandler
  },
  { 
    path: "/todoList/updateTaskStatus", 
    method: "post", 
    action: updateTaskStatusHandler
  },
  { 
    path: "/todoList/createManyTasks", 
    method: "post", 
    action: createManyTasksHandler
  },
  { 
    path: "/todoList/deleteTasks", 
    method: "post", 
    action: deleteTasksHandler
  },
  { 
    path: "/todoList/findThrow", 
    method: "post", 
    action: findThrowHandler
  },

];