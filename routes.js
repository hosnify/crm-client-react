import { Navigate } from "react-router-dom";

const routes = (user) => {
  return [
    {
      path: "/",
      element: user ? <Dashboard /> : <Navigate to="/login" />,
    },
    {
      path: "/leaderboard",
      element: user ? <Leaderboard /> : <Navigate to="/login" />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ];
};
export default routes;
