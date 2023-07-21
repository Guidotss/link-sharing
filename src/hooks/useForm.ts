"use client";
import { AuthContext } from "@/context";
import { useState, useContext, useEffect } from "react";

export const useForm = () => {
  const { user, updateUserInfo } = useContext(AuthContext);
  const [form, setForm] = useState({
    firstName: {
      value: user?.firstName || "",
      error: false,
    },
    lastName: {
      value: user?.lastName || "",
      error: false,
    },
    email: {
      value: user?.email || "",
      error: false,
    },
  });

  useEffect(() => {
    setForm({
      firstName: {
        value: user?.firstName || "",
        error: false,
      },
      lastName: {
        value: user?.lastName || "",
        error: false,
      },
      email: {
        value: user?.email || "",
        error: false,
      },
    });
  }, [user?.firstName, user?.lastName, user?.email]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.firstName.value) {
      setForm({
        ...form,
        firstName: {
          ...form.firstName,
          error: true,
        },
      });
      return;
    }

    if (!form.lastName.value) {
      setForm({
        ...form,
        lastName: {
          ...form.lastName,
          error: true,
        },
      });
      return;
    }

    if (!form.lastName.value && !form.firstName.value) {
      setForm({
        ...form,
        lastName: {
          ...form.lastName,
          error: true,
        },
        firstName: {
          ...form.firstName,
          error: true,
        },
      });
      return;
    }

    if (form.email.value != user?.email) {
      updateUserInfo(
        form.firstName.value,
        form.lastName.value,
        form.email.value
      );
      return;
    }

    if (
      form.firstName.value === user?.firstName &&
      form.lastName.value === user?.lastName
    ) {
      setForm({
        ...form,
        firstName: {
          ...form.firstName,
          error: true,
        },
        lastName: {
          ...form.lastName,
          error: true,
        },
      });
      return;
    }

    updateUserInfo(form.firstName.value, form.lastName.value);
  };

  return {
    form,

    setForm,
    handleSubmit,
  };
};
