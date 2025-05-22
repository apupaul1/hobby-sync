import { useEffect, useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const theme = isDark ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [isDark]);

  const handleToggle = (e) => {
    setIsDark(e.target.checked);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-6">
      <h1 className="text-2xl font-bold">React Theme Toggle</h1>
      <label className="flex items-center gap-3 cursor-pointer">
        <span>🌞</span>
        <input
          type="checkbox"
          className="toggle"
          checked={isDark}
          onChange={handleToggle}
        />
        <span>🌙</span>
      </label>
      <p className="text-base">
        Current theme: <strong>{isDark ? "Dark" : "Light"}</strong>
      </p>
    </div>
  );
}

export default App;
