import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { SignUpPage } from "./pages/SignUpPage";
import { SearchPage } from "./pages/SearchPage";
import { AboutPage } from "./pages/AboutPage";
import { FavouritesPage } from "./pages/FavouritesPage";
import { PetDetailPage } from "./pages/PetDetailPage";
import { DonatePage } from "./pages/DonatePage";
import { ShelterDashboard } from "./pages/ShelterDashboard";
import { AddPetPage } from "./pages/AddPetPage";
import { SettingsPage } from "./pages/SettingsPage";
import { PetsManagementPage } from "./pages/PetsManagementPage";
import { ApplicationsPage } from "./pages/ApplicationsPage";
import { ApplicationDetailPage } from "./pages/ApplicationDetailPage";
import { MessagesPage } from "./pages/MessagesPage";
import { AdoptionRequestPage } from "./pages/AdoptionRequestPage";
import { ApplicationTrackingPage } from "./pages/ApplicationTrackingPage";
import { AdminDashboard } from "./pages/AdminDashboard";
import { AdminSheltersPage } from "./pages/AdminSheltersPage";
export function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes with Navbar + Footer */}
        <Route
          path="/"
          element={
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-1">
                <HomePage />
              </main>
              <Footer />
            </div>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route
          path="/search"
          element={
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-1">
                <SearchPage />
              </main>
              <Footer />
            </div>
          }
        />
        <Route
          path="/about"
          element={
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-1">
                <AboutPage />
              </main>
              <Footer />
            </div>
          }
        />
        <Route
          path="/favourites"
          element={
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-1">
                <FavouritesPage />
              </main>
              <Footer />
            </div>
          }
        />
        <Route
          path="/donate"
          element={
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-1">
                <DonatePage />
              </main>
              <Footer />
            </div>
          }
        />
        <Route
          path="/pet/:id"
          element={
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-1">
                <PetDetailPage />
              </main>
              <Footer />
            </div>
          }
        />

        {/* Adoption Request Flow */}
        <Route path="/adopt/:petId" element={<AdoptionRequestPage />} />
        <Route
          path="/application-tracking/:applicationId"
          element={<ApplicationTrackingPage />}
        />

        {/* Shelter Routes (No Navbar/Footer - has sidebar) */}
        <Route path="/shelter/dashboard" element={<ShelterDashboard />} />
        <Route path="/shelter/add-pet" element={<AddPetPage />} />
        <Route path="/shelter/manage-pets" element={<PetsManagementPage />} />
        <Route path="/shelter/applications" element={<ApplicationsPage />} />
        <Route
          path="/shelter/applications/:applicationId"
          element={<ApplicationDetailPage />}
        />
        <Route path="/shelter/messages" element={<MessagesPage />} />
        <Route path="/shelter/settings" element={<SettingsPage />} />

        {/* Admin Routes (No Navbar/Footer - has admin sidebar) */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/shelters" element={<AdminSheltersPage />} />
      </Routes>
    </BrowserRouter>
  );
}
