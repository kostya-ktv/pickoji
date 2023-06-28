"use client";

import { memo } from "react";

const Footer = () => {
  return (
    <div
      className="
    fixed
    text-[10px]
    text-[color:var(--fontColor)]
    bottom-0"
    >
      © Kostya Kotov. All rights reserved.
    </div>
  );
};
export default memo(Footer);
