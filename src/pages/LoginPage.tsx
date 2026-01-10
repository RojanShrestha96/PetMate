import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, PawPrint, Chrome } from "lucide-react";
import { Card } from "../components/Card";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useAuth } from "../context/AuthContext"; // <-- import AuthContext

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth(); // <-- get login function from context

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Email and password are required");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      alert(data.message);

      if (res.ok) {
        login(data.user); // <-- set the user in AuthContext
        // Redirect based on account type
        if (data.user.accountType === "shelter") {
          navigate("/shelter/dashboard");
        } else {
          navigate("/"); // <-- home page
        }
      }
    } catch (error) {
      console.error(error);
      alert("Login failed");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center py-12 px-4"
      style={{ background: "var(--color-surface)" }}
    >
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left side - Illustration */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden lg:block"
        >
          <div className="relative">
            <div
              className="absolute inset-0 rounded-3xl opacity-20"
              style={{ background: "var(--color-primary)" }}
            />
            <img
              src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=600&h=700&fit=crop"
              alt="Happy pets"
              className="rounded-3xl shadow-2xl relative z-10"
              style={{ boxShadow: "var(--shadow-lg)" }}
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 p-6 rounded-2xl z-20"
              style={{
                background: "var(--color-card)",
                boxShadow: "var(--shadow-lg)",
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="p-3 rounded-xl"
                  style={{ background: "var(--color-primary)" }}
                >
                  <PawPrint className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p
                    className="font-bold text-2xl"
                    style={{ color: "var(--color-text)" }}
                  >
                    50 Billion+
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: "var(--color-text-light)" }}
                  >
                    Happy Adoptions
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right side - Login Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md mx-auto"
        >
          <div className="text-center mb-8">
            <div
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4"
              style={{ background: "var(--color-primary)" }}
            >
              <PawPrint className="w-8 h-8 text-white" />
            </div>
            <h1
              className="text-3xl font-bold mb-2"
              style={{ color: "var(--color-text)" }}
            >
              Welcome Back
            </h1>
            <p style={{ color: "var(--color-text-light)" }}>
              Sign in to continue your adoption journey
            </p>
          </div>

          <Card padding="lg">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <Input
                type="email"
                label="Email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                icon={<Mail className="w-5 h-5" />}
                fullWidth
                required
              />
              <Input
                type="password"
                label="Password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                icon={<Lock className="w-5 h-5" />}
                fullWidth
                required
              />

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded focus:ring-2"
                    style={{
                      accentColor: "var(--color-primary)",
                      borderColor: "var(--color-border)",
                    }}
                  />
                  <span style={{ color: "var(--color-text)" }}>
                    Remember me
                  </span>
                </label>
                <a
                  href="#"
                  className="hover:underline"
                  style={{ color: "var(--color-primary)" }}
                >
                  Forgot password?
                </a>
              </div>

              <Button type="submit" variant="primary" fullWidth size="lg">
                Sign In
              </Button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div
                    className="w-full border-t"
                    style={{ borderColor: "var(--color-border)" }}
                  ></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span
                    className="px-4 text-sm"
                    style={{
                      background: "var(--color-card)",
                      color: "var(--color-text-light)",
                    }}
                  >
                    Or continue with
                  </span>
                </div>
              </div>

              <button
                type="button"
                className="w-full flex items-center justify-center gap-3 px-6 py-3 border-2 rounded-xl transition-all hover:scale-[1.02]"
                style={{
                  borderColor: "var(--color-border)",
                  background: "var(--color-card)",
                }}
              >
                <Chrome
                  className="w-5 h-5"
                  style={{ color: "var(--color-text)" }}
                />
                <span
                  className="font-medium"
                  style={{ color: "var(--color-text)" }}
                >
                  Continue with Google
                </span>
              </button>
            </form>

            <p
              className="text-center text-sm mt-6"
              style={{ color: "var(--color-text-light)" }}
            >
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="font-medium hover:underline"
                style={{ color: "var(--color-primary)" }}
              >
                Sign up
              </Link>
            </p>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
