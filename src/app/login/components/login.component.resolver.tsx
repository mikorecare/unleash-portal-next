"use client";
import { useState } from "react";

import { formMap, FormType } from "../login.type";

const LoginComponentResolver = () => {
  const [formType, setFormType] = useState<FormType>("LOGIN");
  const Form = formMap[formType];

  return (
    <div>
      <Form onSwitchForm={setFormType} />
    </div>
  );
};

export default LoginComponentResolver;