'use client';

import { type RefObject, useEffect, useLayoutEffect, useRef } from 'react';

// MediaQueryList Event based useEventListener interface
export function useEventListener<K extends keyof MediaQueryListEventMap>(
  eventName: K,
  handler: (event: MediaQueryListEventMap[K]) => void,
  element: RefObject<MediaQueryList>,
  options?: AddEventListenerOptions | boolean
): void;

// Window Event based useEventListener interface
export function useEventListener<K extends keyof WindowEventMap>(
  eventName: K,
  handler: (event: WindowEventMap[K]) => void,
  element?: undefined,
  options?: AddEventListenerOptions | boolean
): void;

// Element Event based useEventListener interface
export function useEventListener<K extends keyof HTMLElementEventMap, T extends HTMLElement = HTMLDivElement>(
  eventName: K,
  handler: (event: HTMLElementEventMap[K]) => void,
  element: RefObject<T>,
  options?: AddEventListenerOptions | boolean
): void;

// Document Event based useEventListener interface
export function useEventListener<K extends keyof DocumentEventMap>(
  eventName: K,
  handler: (event: DocumentEventMap[K]) => void,
  element: RefObject<Document>,
  options?: AddEventListenerOptions | boolean
): void;

export function useEventListener<
  KW extends keyof WindowEventMap,
  KH extends keyof HTMLElementEventMap,
  KM extends keyof MediaQueryListEventMap,
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  T extends HTMLElement | MediaQueryList | void = void
>(
  eventName: KH | KM | KW,
  handler: (event: Event | HTMLElementEventMap[KH] | MediaQueryListEventMap[KM] | WindowEventMap[KW]) => void,
  element?: RefObject<T>,
  options?: AddEventListenerOptions | boolean
) {
  // Create a ref that stores handler
  const savedHandler = useRef(handler);

  useLayoutEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    // Define the listening target
    const targetElement: T | Window = element?.current ?? window;

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (!(targetElement && targetElement.addEventListener)) return;

    // Create event listener that calls handler function stored in ref
    const listener: typeof handler = (event) => {
      savedHandler.current(event);
    };

    targetElement.addEventListener(eventName, listener, options);

    // Remove event listener on cleanup
    return () => {
      targetElement.removeEventListener(eventName, listener, options);
    };
  }, [eventName, element, options]);
}
