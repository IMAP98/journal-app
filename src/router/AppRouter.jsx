import { JournalRoutes } from "../journal/routes/JournalRoutes";
import { AuthRoutes } from "../auth/routes/AuthRoutes";

export const AppRouter = [

  {
    path: "/auth/*",
    children: AuthRoutes,
  },
  {
    path: "/",
    children: JournalRoutes,
  },

];

