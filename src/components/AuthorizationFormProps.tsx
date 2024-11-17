interface AuthorizationFormProps {
  initialFormType: "register" | "login";
  onSubmit: (formData: Record<string, string>) => void;
}

export {};
