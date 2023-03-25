import React from "react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Login from "../src/Views/Login";
import Dashboard from "./Views/Dashboard";
import AuthProvider from "../src/context/AuthContext";
import UserDetail from "./Views/UserDetail";

test("Login", () => {
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );
  const loginText = screen.getByText(/LOG IN/i);
  expect(loginText).toBeInTheDocument();
});
test("Dashboard", async () => {
  render(
    <AuthProvider>
      <MemoryRouter>
        <Dashboard />
      </MemoryRouter>
    </AuthProvider>
  );
  const loadingElement = screen.getAllByText(/Loading.../i);
  expect(loadingElement[0]).toBeInTheDocument();
  let userList = await screen.findByRole("table");
  expect(userList).toBeInTheDocument();
});
// test("UserDetail", async () => {
//   render(
//     <AuthProvider>
//       <MemoryRouter>
//         <Routes>
//           <Route path="/user/1" element={<UserDetail />} />
//         </Routes>
//       </MemoryRouter>
//     </AuthProvider>
//   );

//   // element is initially not present...

//   // wait for appearance inside an assertion
//   // let userList = await screen.findByRole("table");
//   const fullname =   screen.getAllByText(/User Details/i);
//   expect(fullname).toBeInTheDocument();


//   // await waitFor(() => {
//   //   const fullname = screen.getByText(/full/i);

//   //   expect(fullname).toBeInTheDocument();
//   // });

//   // const linkElement = await screen.getAllByText(/FULL NAME/i);
//   // expect(linkElement[0]).toBeInTheDocument();
//   // let userList = await screen.findByRole("table");
//   // expect(userList).toBeInTheDocument();
// });
