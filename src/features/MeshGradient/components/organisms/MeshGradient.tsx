// Constants
import { customDarkConfig, customLightConfig } from "../constants/customConfig";

// Hooks
import { useTheme } from "@/src/hooks/useTheme";

// CSS Mesh
import { MeshGradient as MeshGradientModel } from "css-mesh";

const MeshGradient = () => {
  const { isDarkMode } = useTheme();

  return (
    <MeshGradientModel
      customConfig={isDarkMode ? customDarkConfig : customLightConfig}
      animated
      animationType="morph"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100vh",
        zIndex: 9999,
        pointerEvents: "none",
        background: "transparent",
      }}
    />
  );
};

export default MeshGradient;
