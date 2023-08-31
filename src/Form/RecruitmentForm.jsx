import { useEffect, useState } from "react";

import { Form, FormList } from "./Recruitment.styled";

const RecruitmentForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    code: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevData) => ({
      ...prevData,
      [name]: "",
    }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors(handleValidate(name, value));
  };

  const handleValidate = (fieldName, value) => {
    const newErrors = { ...errors };
    switch (fieldName) {
      case "name":
        if (!value) {
          newErrors.name = "Name is required";
        } else {
          newErrors[fieldName] = "";
        }
        break;
      case "email":
        if (!value) {
          newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
          newErrors.email = "Email is invalid";
        } else {
          newErrors[fieldName] = "";
        }

        break;
      case "code":
        if (!value) {
          newErrors.code = "Student ID is required";
        } else {
          newErrors[fieldName] = "";
        }

        break;
      case "phone":
        if (!value) {
          newErrors.phone = "Phone is required";
        } else {
          newErrors[fieldName] = "";
        }
    }
    return newErrors;
  };

  useEffect(() => {
    console.log("after set error:" + JSON.stringify(errors));
  }, [errors]);

  const onSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    for (const field in form) {
      const error = handleValidate(field, form[field]);
      newErrors[field] = error[field];
    }
    if (Object.values(newErrors).every((error) => error === "")) {
      // Handle successful registration here
      alert(JSON.stringify(form));
    } else {
      setErrors(newErrors);
    }
  };
  return (
    <Form onSubmit={onSubmit}>
      <FormList>
        <label>Student Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          onBlur={handleBlur}
        ></input>
        {errors.name && <span className="error">{errors.name}</span>}
      </FormList>

      <FormList>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          onBlur={handleBlur}
        ></input>
        {errors.email && <span className="error">{errors.email}</span>}
      </FormList>

      <FormList>
        <label>Student ID</label>
        <input
          type="text"
          name="code"
          value={form.code}
          onChange={handleChange}
          onBlur={handleBlur}
        ></input>
        {errors.code && <span className="error">{errors.code}</span>}
      </FormList>

      <FormList>
        <label>Phone Number</label>
        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          onBlur={handleBlur}
        ></input>
        {errors.phone && <span className="error">{errors.phone}</span>}
      </FormList>
      <input type="submit" value="Submit" />
    </Form>
  );
};

export default RecruitmentForm;
