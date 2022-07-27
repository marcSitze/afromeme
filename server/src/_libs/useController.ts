import { useController as ControllerAdapter, IOptions } from "apitoolz";

const onResult = (data: any, success: boolean) => ({ data, success });

export function useController(task: Function, options: IOptions) {
  return ControllerAdapter(task, options, onResult);
}
