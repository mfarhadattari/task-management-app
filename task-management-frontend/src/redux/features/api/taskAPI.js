import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const taskAPI = createApi({
  reducerPath: "taskAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://task-management-app-kappa.vercel.app",
  }),
  endpoints: (build) => ({
    getTasks: build.query({
      query: () => "/tasks",
    }),
  }),
});

export const { useGetTasksQuery } = taskAPI;

export default taskAPI;
