import { FluentProvider, webLightTheme } from '@fluentui/react-components';
 import * as React from 'react';
import { ToolTips } from './tooltips/ToolTips';
import { IInputs } from '../../LabelToolTipControl/generated/ManifestTypes';
export interface IAppProps{
    context:ComponentFramework.Context<IInputs>
}
const App = (props:IAppProps) => {
    return (
      <FluentProvider theme={webLightTheme}>
        <ToolTips context={props.context} content={{}} />
      </FluentProvider>
    );
};

export default App;