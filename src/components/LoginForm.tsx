import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    emailOrUsername: "",
    password: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await axios.post("https://way-finder-edu-api.vercel.app/api/user/login", {
        emailOrUsername: form.emailOrUsername,
        password: form.password,
      });

      console.log("Login successful", res.data);
      const token = res.data.token;
      sessionStorage.setItem("token", JSON.stringify(token));

      const user = await axios.post(
        "https://way-finder-edu-api.vercel.app/api/user/userInfo",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(user.data);
      sessionStorage.setItem("user", JSON.stringify(user.data));
    } catch (err: any) {
      setError(err.response?.data?.message || "Login failed.");
    } finally {
      setLoading(false);
      window.location.reload();
    }
  };

  return (
    <div className="bg-custom-cream shadow-xl rounded-[2rem] px-12 py-16 w-full max-w-md mx-auto">
      <h2 className="text-5xl font-bold text-custom-dark-blue mb-10 text-center font-montserrat">
        Sign In
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="text-left space-y-2">
          <Label
            htmlFor="emailOrUsername"
            className="text-custom-dark-blue font-montserrat text-lg font-semibold"
          >
            Email or Username
          </Label>
          <Input
            id="emailOrUsername"
            name="emailOrUsername"
            type="text"
            value={form.emailOrUsername}
            onChange={handleChange}
            className="bg-white/70 text-custom-dark-blue border border-custom-dark-blue placeholder:text-custom-dark-blue/50 focus-visible:ring-custom-dark-blue"
            placeholder="Enter your email or username"
          />
        </div>

        <div className="text-left space-y-2">
          <Label
            htmlFor="password"
            className="text-custom-dark-blue font-montserrat font-semibold text-lg"
          >
            Password
          </Label>
          <Input
            id="password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            className="bg-white/70 text-custom-dark-blue border border-custom-dark-blue placeholder:text-custom-dark-blue/50 focus-visible:ring-custom-dark-blue"
            placeholder="Enter your password"
          />
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
          {loading ? "Logging in..." : "Login"}
        </Button>
      </form>
      <p className="font-semibold mt-6 text-center text-custom-dark-blue text-md font-montserrat">
        Don't have an account?{" "}
        <span
          className="text-blue-600 hover:underline cursor-pointer"
          onClick={() => navigate("/register")}
        >
          Register now
        </span>
      </p>
    </div>
  );
}
