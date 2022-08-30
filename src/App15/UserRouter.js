import { Route, Routes } from "react-router-dom";
import NewUser from "./NewUser";
import User from "./User";

export const UserRouter = () => {
  return (
    <Routes>
      <Route path="/:id" element={<User />} />
      <Route path="/new" element={<NewUser />} />
    </Routes>
  );
};
