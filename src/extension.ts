import * as vscode from 'vscode';
import { Logger } from './Logger';
//import { ToolbarView } from './ToolbarView';
import { StatusBarItem } from './StatusBarItem';
import { CreateTestFolder } from './CreateTestFolder';
import { InstructionsEditorProvider } from './InstructionsEditorProvider';
import { ExtJSEditorProvider } from './ExtJSEditorProvider';
import { WelcomeDialog } from './WelcomeDialog'

export function activate(context: vscode.ExtensionContext) {
  Logger.channel = vscode.window.createOutputChannel("Ext JS Designer");
  context.subscriptions.push(Logger.channel);
  Logger.log('Ext JS Designer extension is now active!');
  vscode.commands.executeCommand("workbench.view.explorer")

  //new ToolbarView();
  context.subscriptions.push(StatusBarItem.register(context));
  context.subscriptions.push(CreateTestFolder.register());
  context.subscriptions.push(InstructionsEditorProvider.register(context));
  context.subscriptions.push(ExtJSEditorProvider.register(context));

  WelcomeDialog.execute()
}
export function deactivate() {}
