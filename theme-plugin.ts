import plugin from "tailwindcss/plugin";

export const themePlugin = plugin(
  // Add css variable definitions to base layer
  function ({ addBase }) {
    addBase({
      ":root": {
        "--background": "0 0% 100%",
        "--foreground": "240 10% 3.9%",
        "--card": "0 0% 100%",
        "--card-foreground": "240 10% 3.9%",
        "--popover": "0 0% 100%",
        "--popover-foreground": "240 10% 3.9%",
        "--primary": "346.8 77.2% 49.8%",
        "--primary-foreground": "355.7 100% 97.3%",
        "--secondary": "240 4.8% 95.9%",
        "--secondary-foreground": "240 5.9% 10%",
        "--muted": "240 4.8% 95.9%",
        "--muted-foreground": "240 3.8% 46.1%",
        "--accent": "240 4.8% 95.9%",
        "--accent-foreground": "240 5.9% 10%",
        "--destructive": "0 84.2% 60.2%",
        "--destructive-foreground": "0 0% 98%",
        "--border": "240 5.9% 90%",
        "--input": "240 5.9% 90%",
        "--ring": "346.8 77.2% 49.8%",
        "--radius": "0.5rem",
        "--navigation-height": "2.8rem",
      },
      ".dark": {
        "--background": "20 14.3% 4.1%",
        "--foreground": "0 0% 95%",
        "--card": "24 9.8% 10%",
        "--card-foreground": "0 0% 95%",
        "--popover": "0 0% 9%",
        "--popover-foreground": "0 0% 95%",
        "--primary": "346.8 77.2% 49.8%",
        "--primary-foreground": "355.7 100% 97.3%",
        "--secondary": "240 3.7% 15.9%",
        "--secondary-foreground": "0 0% 98%",
        "--muted": "0 0% 15%",
        "--muted-foreground": "240 5% 64.9%",
        "--accent": "12 6.5% 15.1%",
        "--accent-foreground": "0 0% 98%",
        "--destructive": "0 62.8% 30.6%",
        "--destructive-foreground": "0 85.7% 97.3%",
        "--border": "240 3.7% 15.9%",
        "--input": "240 3.7% 15.9%",
        "--ring": "346.8 77.2% 49.8%",
      },
    });

    addBase({
      " * ": {
        "@apply border-border": {},
      },
      ".grainy": {
        "background-image":
          "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAElBMVEUAAAD8/vz08vT09vT8+vzs7uxH16TeAAAAAXRSTlMAQObYZgAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAuFJREFUOI0Vk+3NLiEIRG1B8ClAYAsQ2AIEt4D9ePtv5Xp/mZgYJ2fOFJKEfInkVWY2aglmQFkimRTV7MblYyVqD7HXyhKsSuPX12MeDhRHLtGvRG+P+B/S0Vu4OswR9tmvwNPyhdCDbVayJGads/WiUWcjCvCnruTBNHS9gmX2VzVbk7ZvB1gb1hkWFGl+A/n+/FowcO34U/XvKqZ/fHY+6vgRfU92XrOBUbGeeDfQmjWjdrK+frc6FdGReQhfSF5JvR29O2QrfNw1huTwlgsyXLo0u+5So82sgv7tsFZR2nxB6lXiquHrfD8nfYZ9SeT0LiuvSoVrxGY16pCNRZKqvwWsn5OHypPBELzohMCaRaa0ceTHYqe7X/gfJEEtKFbJpWoNqO+aS1cuTykGPpK5Ga48m6L3NefTr013KqYBQu929iP1oQ/7UwSR+i3zqruUmT84qmhzLpxyj7pr9kg7LKvqaXxZmdpn+6o8sHqSqojy02gU3U8q9PnpidiaLks0mbMYz+q2uVXsoBQ8bfURULYxRgZVYCHMv9F4OA7qxT2NPPpvGQ/sTDH2yznKh7E2AcErfcNsaIoN1izzbJiaY63x4QjUFdBSvDCvugPpu5xDny0jzEeuUQbcP1aGT9V90uixngTRLYNEIIZ6yOF1H8tm7rj2JxiefsVy53zGVy3ag5uuPsdufYOzYxLRxngKe7nhx3VAq54pmz/DK9/Q3aDam2Yt3hNXB4HuU87jKNd/CKZn77Qdn5QkXPfqSkhk7hGOXXB+7v09KbBbqdvxGqa0AqfK/atIrL2WXdAgXAJ43Wtwe/aIoacXezeGPMlhDOHDbSfHnaXsL2QzbT82GRwZuezdwcoWzx5pnOnGMUdHuiY7lhdyWzWiHnucLZQxYStMJbtcydHaQ6vtMbe0AcDbxG+QG14AL94xry4297xpy9Cpf1OoxZ740gHDfrK+gtsy0xabwJmfgtCeii79B6aj0SJeLbd7AAAAAElFTkSuQmCC)",
      },
      body: {
        "@apply bg-background text-foreground": {},
      },
    });
  },
  {
    theme: {
      fontFamily: {
        sans: '"SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu, Cantarell,"Open Sans","Helvetica Neue",sans-serif',
      },
      container: {
        padding: "2rem",

        screens: {
          DEFAULT: "1200px",
          "2xl": "1400px",
          xl: "1280px",
          lg: "1024px",
          md: "768px",
          sm: "640px",
        },
      },

      boxShadow: {
        primary: "rgb(80 63 205 / 50%) 0px 1px 40px",
      },

      extend: {
        spacing: {
          "navigation-height": "var(--navigation-height)",
        },

        transitionDelay: {
          0: "0ms",
        },
        keyframes: {
          "fade-in": {
            from: { opacity: "0", transform: "translateY(-10px)" },
            to: { opacity: "1", transform: "none" },
          },
          "image-rotate": {
            "0%": { transform: "rotateX(25deg)" },
            "25%": { transform: "rotateX(25deg) scale(0.9)" },
            "60%": { transform: "none" },
            "100%": { transform: "none" },
          },
          "image-glow": {
            "0%": {
              opacity: "0",
              "animation-timing-function": "cubic-bezier(0.74,0.25,0.76,1)",
            },
            "10%": {
              opacity: "1",
              "animation-timing-function": "cubic-bezier(0.12,0.01,0.08,0.99)",
            },
            "100%": {
              opacity: "0.2",
            },
          },
          "sketch-lines": {
            "0%": { "stroke-dashoffset": "1" },
            "50%": { "stroke-dashoffset": "0" },
            "99%": { "stroke-dashoffset": "0" },
            "100%": { visiblity: "hidden" },
          },
          "glow-line-horizontal": {
            "0%": { opacity: "0", transform: "translateX(0)" },
            "5%": { opacity: "1", transform: "translateX(0)" },
            "90%": { opacity: "1" },
            "100%": { opacity: "0", transform: "translateX(min(60vw, 45rem))" },
          },
          "glow-line-vertical": {
            "0%": { opacity: "0", transform: "translateY(0)" },
            "5%": { opacity: "1", transform: "translateY(0)" },
            "90%": { opacity: "1" },
            "100%": { opacity: "0", transform: "translateY(min(21vw, 45rem))" },
          },
          zap: {
            "0%, 9%, 11%, 100% ": {
              fill: "transparent",
            },
            "10%": {
              fill: "white",
            },
          },
          bounce: {
            "50%": {
              transform: "scale(0.98)",
            },
          },
          "accordion-down": {
            from: { height: "0" },
            to: { height: "var(--radix-accordion-content-height)" },
          },
          "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: "0" },
          },
        },

        animation: {
          "fade-in": "fade-in 1000ms var(--animation-delay, 0ms) ease forwards",
          "image-rotate": "image-rotate 1400ms ease forwards",
          "image-glow": "image-glow 4100ms 600ms ease-out forwards",
          "sketch-lines": "sketch-lines 1200ms ease-out forwards",
          "glow-line-horizontal":
            "glow-line-horizontal var(--animation-duration) ease-in forwards",
          "glow-line-vertical":
            "glow-line-vertical var(--animation-duration) ease-in forwards",
          zap: "zap 2250ms calc(var(--index) * 20ms) linear infinite",
          bounce: "240ms ease 0s 1 running bounce",
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
        },

        colors: {
          border: "hsl(var(--border))",
          input: "hsl(var(--input))",
          ring: "hsl(var(--ring))",
          background: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
          primary: {
            DEFAULT: "hsl(var(--primary))",
            foreground: "hsl(var(--primary-foreground))",
          },
          secondary: {
            DEFAULT: "hsl(var(--secondary))",
            foreground: "hsl(var(--secondary-foreground))",
          },
          destructive: {
            DEFAULT: "hsl(var(--destructive))",
            foreground: "hsl(var(--destructive-foreground))",
          },
          muted: {
            DEFAULT: "hsl(var(--muted))",
            foreground: "hsl(var(--muted-foreground))",
          },
          accent: {
            DEFAULT: "hsl(var(--accent))",
            foreground: "hsl(var(--accent-foreground))",
          },
          popover: {
            DEFAULT: "hsl(var(--popover))",
            foreground: "hsl(var(--popover-foreground))",
          },
          card: {
            DEFAULT: "hsl(var(--card))",
            foreground: "hsl(var(--card-foreground))",
          },
        },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
      },
    },
  }
);
