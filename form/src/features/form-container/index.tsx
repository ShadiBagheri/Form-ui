import { Title } from "@mantine/core";
import classes from "./styles.module.css";
import { FormContainerProps } from "./types";

export const FormContainer: React.FC<FormContainerProps> = ({ children }) => {
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <Title className={classes.title}>Login Page</Title>
      </div>
      <div className={classes.child}>{children}</div>
    </div>
  );
};
