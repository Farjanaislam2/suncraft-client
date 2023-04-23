import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import tw from "twin.macro";

const LoginContainer = tw.div`min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8`;

const LoginFormContainer = tw.div`max-w-md w-full space-y-8`;

const LoginForm = tw.form`mt-8 space-y-6`;

const EmailInput = tw.input`appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`;

const PasswordInput = tw.input`appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`;

const LoginButton = tw.button`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`;

const AdminDashboardContainer = tw.div`min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8`;

const AdminDashboard = tw.div`max-w-md w-full space-y-8`;

const AdminWelcomeMessage = tw.h2`mt-6 text-center text-3xl font-extrabold text-gray-900`;

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // perform login validation here
    setIsLoggedIn(true);
  };

  if (isLoggedIn) {
    return (
      <AdminDashboardContainer>
        <AdminDashboard>
          <AdminWelcomeMessage>Welcome, Admin!</AdminWelcomeMessage>
          {/* add other components for the admin dashboard here */}
        </AdminDashboard>
      </AdminDashboardContainer>
    );
  }

  return (
    <LoginContainer>
      <LoginFormContainer>
        <LoginForm onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <EmailInput
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <PasswordInput
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <LoginButton type="submit">Sign in</LoginButton>
          </div>
        </LoginForm>
      </LoginFormContainer>
    </LoginContainer>
  );
};

export default Admin;
