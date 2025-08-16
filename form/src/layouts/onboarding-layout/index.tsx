"use client";

import React, { PropsWithChildren } from "react";
import classes from "./styles.module.css";

export const OnboardingLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={classes.container}>
      <main>{children}</main>
    </div>
  );
};
