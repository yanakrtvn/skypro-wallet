import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import MainPage from '../pages/MainPage/MainPage';
import SpendingAnalysisPage from '../pages/SpendingAnalysisPage/SpendingAnalysisPage';
import SignInPage from '../pages/SignIn/SignInPage';
import SignUpPage from '../pages/SignUp/SignUpPage';
import NotFoundPage from '../pages/NotFound/NotFoundPage';
import ProtectedRoute from '../components/ProtectedRoute';

function AppRoutes() {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route 
        path="/sign-in" 
        element={!isAuthenticated ? <SignInPage /> : <Navigate to="/" />} 
      />
      <Route 
        path="/sign-up" 
        element={!isAuthenticated ? <SignUpPage /> : <Navigate to="/" />} 
      />
      <Route 
        path="/" 
        element={
          <ProtectedRoute>
            <MainPage />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/spending-analysis" 
        element={
          <ProtectedRoute>
            <SpendingAnalysisPage />
          </ProtectedRoute>
        } 
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;