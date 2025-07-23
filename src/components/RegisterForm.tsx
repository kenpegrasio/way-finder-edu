import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    name: "",
    school: "",
    password: "",
    phone_number: "",
    gender: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const validateEmail = (email: string) =>
    /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email);

  const validatePassword = (password: string) =>
    /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/.test(password);

  const validateForm = () => {
    for (const key in form) {
      if ((form as any)[key].trim() === "") {
        setError("All fields are required.");
        return false;
      }
    }

    if (!validateEmail(form.email)) {
      setError("Invalid email address.");
      return false;
    }

    if (!validatePassword(form.password)) {
      setError(
        "Password must be at least 8 characters, include 1 uppercase letter and 1 special character."
      );
      return false;
    }

    return true;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!validateForm()) {
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post("https://way-finder-edu-api.vercel.app/api/user/register", form);
      console.log("Registration successful", res.data);
      navigate("/account");
    } catch (err: any) {
      setError(err.response?.data?.message || "Registration failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-custom-cream shadow-xl rounded-[2rem] px-12 py-16 w-full max-w-md mx-auto">
      <h2 className="text-4xl font-bold text-custom-dark-blue mb-8 text-center font-montserrat">
        Register
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {[
          { id: "username", label: "Username" },
          { id: "email", label: "Email" },
          { id: "name", label: "Full Name" },
          { id: "school", label: "School" },
          { id: "password", label: "Password", type: "password" },
          { id: "phone_number", label: "Phone Number" },
        ].map(({ id, label, type = "text" }) => (
          <div key={id} className="text-left space-y-2">
            <Label
              htmlFor={id}
              className="text-custom-dark-blue font-montserrat text-lg font-semibold"
            >
              {label}
            </Label>
            <Input
              id={id}
              name={id}
              type={type}
              value={(form as any)[id]}
              onChange={handleChange}
              className="bg-white/70 text-custom-dark-blue border border-custom-dark-blue placeholder:text-custom-dark-blue/50 focus-visible:ring-custom-dark-blue"
              placeholder={`Enter your ${label.toLowerCase()}`}
              required
            />
          </div>
        ))}

        {/* Gender dropdown */}
        <div className="text-left space-y-2">
          <Label
            htmlFor="gender"
            className="text-custom-dark-blue font-montserrat text-lg font-semibold"
          >
            Gender
          </Label>
          <select
            id="gender"
            name="gender"
            value={form.gender}
            onChange={handleChange}
            className="w-full bg-white/70 text-custom-dark-blue border border-custom-dark-blue px-4 py-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-custom-dark-blue"
            required
          >
            <option value="">Select your gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Rather not say">Rather not say</option>
          </select>
        </div>

        {error && (
          <p className="text-red-500 text-md font-montserrat text-center">
            {error}
          </p>
        )}

        <Button
          type="submit"
          disabled={loading}
          className="text-lg w-full bg-custom-dark-blue text-custom-cream font-semibold font-montserrat hover:bg-custom-dark-blue/90 transition-all"
        >
          {loading ? "Registering..." : "Register"}
        </Button>
      </form>

      <p className="font-semibold mt-6 text-center text-custom-dark-blue text-md font-montserrat">
        Already have an account?{" "}
        <span
          className="text-blue-600 hover:underline cursor-pointer"
          onClick={() => navigate("/account")}
        >
          Login here
        </span>
      </p>
    </div>
  );
}
