import logo from "./logo.svg";
import "./App.css";
import ContentLayout from "./layout";
import AppBar from "./header";
import UsersTable from "./compenants/user/usersTable";
import UserCard from "./compenants/user/ShowUser";
import AddUser from "./compenants/user/AddUser";

function App() {
  return (
    <div className="App">
      <AppBar />
      <ContentLayout>
        <UsersTable></UsersTable>
        <UserCard />
        <AddUser />
      </ContentLayout>
    </div>
  );
}

export default App;
