import React from 'react';

export function useMountEffect(callback: React.EffectCallback): void {
  React.useEffect(callback, []); // eslint-disable-line
}
