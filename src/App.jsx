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
      <label className="flex items-center gap-3 cursor-pointer">
        <input
          type="checkbox"
          className="toggle"
          checked={isDark}
          onChange={handleToggle}
        />
      </label>
    </div>
  );
}

export default App;
