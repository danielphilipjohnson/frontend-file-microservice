/**
 * Color Token System for Cyberpunk Design System
 *
 * This system provides a centralized, scalable approach to color management
 * Enables easy theme customization and maintains visual consistency
 */

export const ColorTokens = {
  // Base Colors
  base: {
    background: {
      primary: "#0a0a1a", // Deep, dark background
      secondary: "#111827", // Slightly lighter background
      tertiary: "#1f2937", // Accent background
    },

    text: {
      primary: "#e5e7eb", // Primary text color
      secondary: "#9ca3af", // Secondary text color
      tertiary: "#6b7280", // Tertiary text color
    },
  },

  // Cyberpunk Color Palette
  cyberpunk: {
    cyan: {
      50: "#e0f8ff",
      100: "#b3ebff",
      400: "#06b6d4", // Primary accent color
      500: "#0891b2",
      900: "#164e63",
    },

    pink: {
      50: "#fdf2f8",
      100: "#fce7f3",
      400: "#ec4899", // Secondary accent color
      500: "#db2777",
      900: "#831843",
    },

    green: {
      50: "#f0fdf4",
      100: "#dcfce7",
      400: "#4ade80", // Success color
      500: "#22c55e",
      900: "#14532d",
    },

    red: {
      50: "#fef2f2",
      100: "#fee2e2",
      400: "#f87171", // Error color
      500: "#ef4444",
      900: "#7f1d1d",
    },
  },

  // Status Colors
  status: {
    success: "#4ade80",
    error: "#f87171",
    warning: "#facc15",
    info: "#06b6d4",
  },

  // Border Colors
  border: {
    primary: "rgba(6, 182, 212, 0.2)", // Cyan with opacity
    secondary: "rgba(236, 72, 153, 0.2)", // Pink with opacity
  },

  // Overlay Colors
  overlay: {
    light: "rgba(255, 255, 255, 0.1)",
    dark: "rgba(0, 0, 0, 0.5)",
  },
};

// Derived Theme Tokens
export const ThemeTokens = {
  // UI Element Specific Tokens
  ui: {
    background: {
      body: ColorTokens.base.background.primary,
      panel: ColorTokens.base.background.secondary,
      accent: ColorTokens.base.background.tertiary,
    },

    text: {
      body: ColorTokens.base.text.primary,
      muted: ColorTokens.base.text.secondary,
      subtle: ColorTokens.base.text.tertiary,
    },

    accent: {
      primary: ColorTokens.cyberpunk.cyan[400],
      secondary: ColorTokens.cyberpunk.pink[400],
    },

    state: {
      hover: ColorTokens.cyberpunk.cyan[500],
      active: ColorTokens.cyberpunk.cyan[400],
      focus: ColorTokens.cyberpunk.cyan[400],
    },
  },
};

// Color Utility Functions
export const colorUtils = {
  /**
   * Adjust color opacity
   * @param hexColor - Hex color code
   * @param opacity - Opacity value (0-1)
   * @returns CSS rgba color string
   */
  withOpacity: (hexColor: string, opacity: number): string => {
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  },
};
