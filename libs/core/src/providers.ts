import { ListCommands, InitApplicationSetup } from './console';
import { HttpExplorer } from './http';
import { BaseValidator } from './validator';
import { IsValueFromConfigConstraint } from './validator/decorators/isValueFromConfig';

const providers = [
  // commands
  ListCommands,
  InitApplicationSetup,

  // custom base validator
  BaseValidator,

  // http providers
  HttpExplorer,

  // custom validator decorators
  IsValueFromConfigConstraint,
];

const getProviders = function (): any {
  return providers;
};

export { getProviders };
