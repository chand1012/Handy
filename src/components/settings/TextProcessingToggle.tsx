import React from "react";
import { useTranslation } from "react-i18next";
import { ToggleSwitch } from "../ui/ToggleSwitch";
import { useSettings } from "../../hooks/useSettings";

interface TextProcessingToggleProps {
  descriptionMode?: "inline" | "tooltip";
  grouped?: boolean;
}

export const TextProcessingToggle: React.FC<TextProcessingToggleProps> =
  React.memo(({ descriptionMode = "tooltip", grouped = false }) => {
    const { t } = useTranslation();
    const { getSetting, updateSetting, isUpdating } = useSettings();

    const enabled = getSetting("text_processing_enabled") || false;

    return (
      <ToggleSwitch
        checked={enabled}
        onChange={(enabled) =>
          updateSetting("text_processing_enabled", enabled)
        }
        isUpdating={isUpdating("text_processing_enabled")}
        label={t("settings.advanced.textProcessing.label")}
        description={t("settings.advanced.textProcessing.description")}
        descriptionMode={descriptionMode}
        grouped={grouped}
      />
    );
  });
