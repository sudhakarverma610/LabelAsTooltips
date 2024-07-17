import * as React from "react";
import {
  Label,
  makeStyles,
  mergeClasses,
  tokens,
  Tooltip,
  useId,
} from "@fluentui/react-components";
import { Info16Regular } from "@fluentui/react-icons";
import type { TooltipProps } from "@fluentui/react-components";
import { IInputs } from "../../../LabelToolTipControl/generated/ManifestTypes";
import { useState } from "react";

const useStyles = makeStyles({
  root: {
    display: "flex",
    columnGap: tokens.spacingVerticalS,
  },
  visible: {
    color: tokens.colorNeutralForeground2BrandSelected,
  },
});

export const ToolTips = (props:{
    context:ComponentFramework.Context<IInputs>,
    content:Partial<TooltipProps>
} ) => {
  const styles = useStyles();
  const contentId = useId("content");
  const [visible, setVisible] = useState(false);

  return (
    <div aria-owns={visible ? contentId : undefined} className={styles.root}>
      <Label>{props.context.parameters.controlLabel.attributes?.Description}</Label>
      <Tooltip
        content={{
          children: props.context.parameters.controlLabel.attributes?.DisplayName,
          id: contentId,
        }}
        positioning="above-start"
        withArrow
        relationship="label"
        onVisibleChange={(e, data) => setVisible(data.visible)}
        {...props.content}
      >
        <Info16Regular
          tabIndex={0}
          className={mergeClasses(visible && styles.visible)}
        />
      </Tooltip>
    </div>
  );
};
