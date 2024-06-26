'use client';

import * as Switch from '@radix-ui/react-switch';
import { useState } from 'react';

export default function SwitchDemo() {
  let [switchStatus, setSwitchStatus] = useState(false);
  return (
    <label className="flex gap-4">
      <span>Switch</span>
      <Switch.Root
        checked={switchStatus}
        onCheckedChange={setSwitchStatus}
        className="flex items-center data-[state=checked]:bg-sky-500 h-6 w-11 px-[2px] bg-gray-800 rounded-full transition hover:bg-opacity-90 data-[state=checked]:hover:bg-opacity-95 shadow-inner shadow-black/20 overflow-hidden focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-white"
      >
        <Switch.Thumb className="block shadow-sm rounded-2xl w-5 h-5 bg-white hover:w-[22px] transition-all duration-200 data-[state=checked]:translate-x-5 data-[state=checked]:hover:-ms-0.5 active:scale-90 active:-translate-x-2 data-[state=checked]:active:translate-x-7" />
      </Switch.Root>
    </label>
  );
}
