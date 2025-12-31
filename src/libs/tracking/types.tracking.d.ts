// src/libs/tracking/types.tracking.d.ts

export type GtagEvent = {
  action: Gtag.EventName;
  category: string;
  label?: string;
  value?: number;
};

// Extend the global namespace to recognize GTM-related properties
declare global {
  interface Window {
    gtag?: Gtag.Gtag;
  }
}

export namespace Gtag {
  interface Gtag {
    (...args: GtagFunctionArgs): void;
  }

  type GtagFunctionArgs =
    | [GtagCommand, EventName | EventParams | CustomParams]
    | [GtagCommand, string, EventParams | CustomParams];

  type GtagCommand = 'config' | 'set' | 'js' | 'event' | 'consent';

  interface EventParams {
    [key: string]: unknown;
  }

  interface CustomParams {
    [key: string]: unknown;
  }

  type EventName = 'click' | 'submit' | 'purchase' | 'page_view' | 'screen_view';
}
