import { writable } from "svelte/store";

interface Toast {
    id: number;
    title: string;
    subtitle: string;
    caption: string;
    kind: string;
}

// Generate unique IDs for the toasts
let toastId = 0;

export type ToastType = "info" | "success" | "warning" | "error";

// Create a writable store to hold the toasts
export const toasts = writable<Toast[]>([]);

export function showToast(kind: ToastType, title: string, subtitle: string, caption: string): void {
    const id = toastId++;
    const toast: Toast = { id, kind, title, subtitle, caption };
    toasts.update((currentToasts) => [...currentToasts, toast]);

    // Automatically remove the toast after 3 seconds
    setTimeout(() => {
        toasts.update((currentToasts) =>
            currentToasts.filter((t) => t.id !== id)
        );
    }, 3000);
}