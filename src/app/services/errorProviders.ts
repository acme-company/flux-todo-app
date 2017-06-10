
import { ERROR_ACTION, ErrorActions, GeneralError, ErrorAction } from "./errorActions";
import { ErrorStore } from "./errorStore";
import { Dispatcher } from "../shared/dispatcher";

export function errorFactory() {
  return new Dispatcher<GeneralError, ErrorAction>();
}

export const ERROR_PROVIDERS = [ErrorActions, ErrorStore, { provide: ERROR_ACTION, useFactory: errorFactory }];
