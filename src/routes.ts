export const AppRoutes = [
  { 
    path: "/getTeachers", 
    method: "post", 
    action: getTeachersHandler
  },
  {
    path: "/getTeachersByAge",
    method: "post",
    action: getTeachersByAgeHandler
  },
  {
    path: "/getTeachersByName",
    method: "post",
    action: getTeachersByNameHandler
  },
];