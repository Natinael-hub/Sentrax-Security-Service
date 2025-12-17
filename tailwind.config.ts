import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B0F14",
        slateink: "#0E141B",
        steel: "#C6CFDA",
        fog: "#97A3B3",
        line: "rgba(255,255,255,0.10)",
        accent: "#8BD3FF"
      },
      boxShadow: {
        soft: "0 12px 40px rgba(0,0,0,0.35)",
      },
      backgroundImage: {
        hero:
          "radial-gradient(900px 500px at 20% 10%, rgba(139,211,255,0.18), transparent 60%), radial-gradient(700px 400px at 85% 25%, rgba(198,207,218,0.12), transparent 55%), linear-gradient(180deg, #0B0F14 0%, #0E141B 55%, #0B0F14 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
