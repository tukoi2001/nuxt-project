import { ToastEnum } from "@/enums/app";

export function showSuccess(
  message: string | VNode,
  title?: string,
  props?: App.ToastProps,
) {
  toast({ message, title }, ToastEnum.SUCCESS, props);
}

export function showError(
  message: string | VNode,
  title?: string,
  props?: App.ToastProps,
) {
  toast({ message, title }, ToastEnum.ERROR, props);
}

export function showInfo(
  message: string | VNode,
  title?: string,
  props?: App.ToastProps,
) {
  toast({ message, title }, ToastEnum.INFO, props);
}

export function showWarning(
  message: string | VNode,
  title?: string,
  props?: App.ToastProps,
) {
  toast({ message, title }, ToastEnum.WARNING, props);
}

export function toast(
  { message, title }: { message: string | VNode; title?: string },
  type: ToastEnum,
  props: App.ToastProps = {},
) {
  const config = { duration: 5000, ...props };
  ElNotification({
    ...config,
    type,
    message,
    title,
    customClass: `el-notification__${type}`,
  });
}
