import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  User,
  Building2,
  Mail,
  Lock,
  Phone,
  MapPin,
  PawPrint,
  Chrome,
  Check,
  X,
} from "lucide-react";
import { Card } from "../components/Card";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useToast } from "../components/Toast";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { useNavigate } from "react-router-dom";
type AccountType = "adopter" | "shelter" | null;
export function SignUpPage() {
  const [accountType, setAccountType] = useState<AccountType>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    shelterName: "",
    address: "",
  });
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  // Password strength indicator
  const getPasswordStrength = (password: string) => {
    if (password.length === 0)
      return {
        strength: 0,
        label: "",
        color: "",
      };
    if (password.length < 6)
      return {
        strength: 1,
        label: "Weak",
        color: "var(--color-error)",
      };
    if (password.length < 10)
      return {
        strength: 2,
        label: "Medium",
        color: "var(--color-accent)",
      };
    return {
      strength: 3,
      label: "Strong",
      color: "var(--color-success)",
    };
  };
  const passwordStrength = getPasswordStrength(formData.password);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API
    await new Promise((resolve) => setTimeout(resolve, 1500));
    showToast("Account created! Please verify your email.", "success");
    setIsLoading(false);
    setTimeout(() => navigate("/verify-email"), 1000);
  };
  return (
    <div
      className="min-h-screen flex items-center justify-center py-12 px-4"
      style={{
        background: "var(--color-surface)",
      }}
    >
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left side - Illustration */}
        <motion.div
          initial={{
            opacity: 0,
            x: -50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="hidden lg:block"
        >
          <div className="space-y-6">
            <div className="relative">
              <div
                className="absolute inset-0 rounded-3xl opacity-20"
                style={{
                  background: "var(--color-secondary)",
                }}
              />
              <img
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=400&fit=crop"
                alt="Pet shelter"
                className="rounded-3xl shadow-2xl relative z-10"
                style={{
                  boxShadow: "var(--shadow-lg)",
                }}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.3,
                }}
                className="p-4 rounded-2xl"
                style={{
                  background: "var(--color-card)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="p-2 rounded-lg"
                    style={{
                      background: "var(--color-primary)",
                      opacity: 0.1,
                    }}
                  >
                    <User
                      className="w-5 h-5"
                      style={{
                        color: "var(--color-primary)",
                      }}
                    />
                  </div>
                  <div>
                    <p
                      className="font-bold text-lg"
                      style={{
                        color: "var(--color-text)",
                      }}
                    >
                      1000+
                    </p>
                    <p
                      className="text-xs"
                      style={{
                        color: "var(--color-text-light)",
                      }}
                    >
                      Adopters
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.4,
                }}
                className="p-4 rounded-2xl"
                style={{
                  background: "var(--color-card)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="p-2 rounded-lg"
                    style={{
                      background: "var(--color-secondary)",
                      opacity: 0.1,
                    }}
                  >
                    <Building2
                      className="w-5 h-5"
                      style={{
                        color: "var(--color-secondary)",
                      }}
                    />
                  </div>
                  <div>
                    <p
                      className="font-bold text-lg"
                      style={{
                        color: "var(--color-text)",
                      }}
                    >
                      25+
                    </p>
                    <p
                      className="text-xs"
                      style={{
                        color: "var(--color-text-light)",
                      }}
                    >
                      Shelters
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Right side - Sign Up Form */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="w-full max-w-md mx-auto"
        >
          <div className="text-center mb-8">
            <div
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4"
              style={{
                background: "var(--color-primary)",
              }}
            >
              <PawPrint className="w-8 h-8 text-white" />
            </div>
            <h1
              className="text-3xl font-bold mb-2"
              style={{
                color: "var(--color-text)",
              }}
            >
              Join PetMate
            </h1>
            <p
              style={{
                color: "var(--color-text-light)",
              }}
            >
              Create an account to start your journey
            </p>
          </div>

          <Card padding="lg">
            <AnimatePresence mode="wait">
              {!accountType ? (
                <motion.div
                  key="account-type"
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: 20,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                >
                  <h2
                    className="text-xl font-semibold mb-6 text-center"
                    style={{
                      color: "var(--color-text)",
                    }}
                  >
                    Choose your account type
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button
                      onClick={() => setAccountType("adopter")}
                      className="p-6 border-2 rounded-2xl transition-all group"
                      style={{
                        borderColor: "var(--color-border)",
                        background: "var(--color-card)",
                      }}
                    >
                      <div className="flex flex-col items-center text-center gap-3">
                        <div
                          className="w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform"
                          style={{
                            background: "var(--color-primary)",
                            opacity: 0.1,
                          }}
                        >
                          <User
                            className="w-8 h-8"
                            style={{
                              color: "var(--color-primary)",
                            }}
                          />
                        </div>
                        <div>
                          <h3
                            className="text-lg font-semibold mb-1"
                            style={{
                              color: "var(--color-text)",
                            }}
                          >
                            I'm an Adopter
                          </h3>
                          <p
                            className="text-sm"
                            style={{
                              color: "var(--color-text-light)",
                            }}
                          >
                            Looking to adopt a pet
                          </p>
                        </div>
                      </div>
                    </button>

                    <button
                      onClick={() => setAccountType("shelter")}
                      className="p-6 border-2 rounded-2xl transition-all group"
                      style={{
                        borderColor: "var(--color-border)",
                        background: "var(--color-card)",
                      }}
                    >
                      <div className="flex flex-col items-center text-center gap-3">
                        <div
                          className="w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform"
                          style={{
                            background: "var(--color-secondary)",
                            opacity: 0.1,
                          }}
                        >
                          <Building2
                            className="w-8 h-8"
                            style={{
                              color: "var(--color-secondary)",
                            }}
                          />
                        </div>
                        <div>
                          <h3
                            className="text-lg font-semibold mb-1"
                            style={{
                              color: "var(--color-text)",
                            }}
                          >
                            I'm a Shelter
                          </h3>
                          <p
                            className="text-sm"
                            style={{
                              color: "var(--color-text-light)",
                            }}
                          >
                            Managing pet adoptions
                          </p>
                        </div>
                      </div>
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="signup-form"
                  initial={{
                    opacity: 0,
                    x: 20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: -20,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <h2
                      className="text-xl font-semibold"
                      style={{
                        color: "var(--color-text)",
                      }}
                    >
                      {accountType === "adopter" ? "Adopter" : "Shelter"} Sign
                      Up
                    </h2>
                    <button
                      onClick={() => setAccountType(null)}
                      className="text-sm hover:underline"
                      style={{
                        color: "var(--color-primary)",
                      }}
                    >
                      Change type
                    </button>
                  </div>

                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <Input
                      type="text"
                      label="Full Name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      icon={<User className="w-5 h-5" />}
                      fullWidth
                      required
                    />

                    <Input
                      type="email"
                      label="Email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      icon={<Mail className="w-5 h-5" />}
                      fullWidth
                      required
                    />

                    <Input
                      type="tel"
                      label="Phone Number"
                      placeholder="+977 98XXXXXXXX"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      icon={<Phone className="w-5 h-5" />}
                      fullWidth
                      required
                    />

                    {accountType === "shelter" && (
                      <>
                        <Input
                          type="text"
                          label="Shelter Name"
                          placeholder="Enter shelter name"
                          value={formData.shelterName}
                          onChange={(e) =>
                            handleInputChange("shelterName", e.target.value)
                          }
                          icon={<Building2 className="w-5 h-5" />}
                          fullWidth
                          required
                        />

                        <Input
                          type="text"
                          label="Address"
                          placeholder="Shelter location"
                          value={formData.address}
                          onChange={(e) =>
                            handleInputChange("address", e.target.value)
                          }
                          icon={<MapPin className="w-5 h-5" />}
                          fullWidth
                          required
                        />
                      </>
                    )}

                    <div>
                      <Input
                        type="password"
                        label="Password"
                        placeholder="Create a strong password"
                        value={formData.password}
                        onChange={(e) =>
                          handleInputChange("password", e.target.value)
                        }
                        icon={<Lock className="w-5 h-5" />}
                        fullWidth
                        required
                      />
                      {formData.password && (
                        <div className="mt-2">
                          <div className="flex items-center gap-2 mb-1">
                            <div
                              className="flex-1 h-1 rounded-full"
                              style={{
                                background: "var(--color-border)",
                              }}
                            >
                              <div
                                className="h-full rounded-full transition-all duration-300"
                                style={{
                                  width: `${
                                    (passwordStrength.strength / 3) * 100
                                  }%`,
                                  background: passwordStrength.color,
                                }}
                              />
                            </div>
                            <span
                              className="text-xs font-medium"
                              style={{
                                color: passwordStrength.color,
                              }}
                            >
                              {passwordStrength.label}
                            </span>
                          </div>
                          <div className="space-y-1">
                            <div
                              className="flex items-center gap-2 text-xs"
                              style={{
                                color:
                                  formData.password.length >= 8
                                    ? "var(--color-success)"
                                    : "var(--color-text-light)",
                              }}
                            >
                              {formData.password.length >= 8 ? (
                                <Check className="w-3 h-3" />
                              ) : (
                                <X className="w-3 h-3" />
                              )}
                              <span>At least 8 characters</span>
                            </div>
                            <div
                              className="flex items-center gap-2 text-xs"
                              style={{
                                color: /[A-Z]/.test(formData.password)
                                  ? "var(--color-success)"
                                  : "var(--color-text-light)",
                              }}
                            >
                              {/[A-Z]/.test(formData.password) ? (
                                <Check className="w-3 h-3" />
                              ) : (
                                <X className="w-3 h-3" />
                              )}
                              <span>One uppercase letter</span>
                            </div>
                            <div
                              className="flex items-center gap-2 text-xs"
                              style={{
                                color: /[0-9]/.test(formData.password)
                                  ? "var(--color-success)"
                                  : "var(--color-text-light)",
                              }}
                            >
                              {/[0-9]/.test(formData.password) ? (
                                <Check className="w-3 h-3" />
                              ) : (
                                <X className="w-3 h-3" />
                              )}
                              <span>One number</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    <div
                      className="text-sm"
                      style={{
                        color: "var(--color-text-light)",
                      }}
                    >
                      <label className="flex items-start gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          className="w-4 h-4 mt-0.5 rounded"
                          style={{
                            accentColor: "var(--color-primary)",
                          }}
                          required
                        />
                        <span>
                          I agree to the Terms of Service and Privacy Policy
                        </span>
                      </label>
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      fullWidth
                      size="lg"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <LoadingSpinner size="sm" color="white" />
                      ) : (
                        "Create Account"
                      )}
                    </Button>

                    <div className="relative my-6">
                      <div className="absolute inset-0 flex items-center">
                        <div
                          className="w-full border-t"
                          style={{
                            borderColor: "var(--color-border)",
                          }}
                        ></div>
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span
                          className="px-4"
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
                        style={{
                          color: "var(--color-text)",
                        }}
                      />
                      <span
                        className="font-medium"
                        style={{
                          color: "var(--color-text)",
                        }}
                      >
                        Continue with Google
                      </span>
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>

            <p
              className="text-center text-sm mt-6"
              style={{
                color: "var(--color-text-light)",
              }}
            >
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium hover:underline"
                style={{
                  color: "var(--color-primary)",
                }}
              >
                Sign in
              </Link>
            </p>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
