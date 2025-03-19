"use client";

import { useState } from "react";
import MessageDialog from "./MessageDialog/MessageDialog";

const items: any[] = [
  { id: 0, name: "- Please select -" },
  { id: 1, name: "GPS Tracker" },
  { id: 2, name: "Capacitive Fuel Level Sensor" },
  { id: 3, name: "Engine RPM Sensor" },
  { id: 4, name: "Axel Load Sensor" },
  { id: 5, name: "Angle and Tilt Sensor" },
  { id: 6, name: "TM Drum Rotation Sensor" },
  { id: 7, name: "Engine Temperature Sensor" },
];

const FormWithSelect = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    product: "",
    quantity: "",
    usage: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    product: "",
    quantity: "",
    usage: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error on change
  };


  const [successDialogOpen, setSuccessDialogOpen] = useState(false);
  const [errorDialogOpen, setErrorDialogOpen] = useState(false);

  const handleSuccessDialogOpen = () => {
    setSuccessDialogOpen(true);
  };

  const handleErrorDialogOpen = () => {
    setErrorDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setSuccessDialogOpen(false);
    setErrorDialogOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let hasErrors = false;
    const newErrors = { ...errors };

    // Validate each field
    Object.keys(formData).forEach((key) => {
      if (!formData[key as keyof typeof formData]) {
        newErrors[key as keyof typeof formData] = " ";
        handleErrorDialogOpen();
        hasErrors = true;
      }
      else{
        console.log("no data empty")
        handleSuccessDialogOpen();
      }
    });

    setErrors(newErrors);

    if (!hasErrors) {
      console.log("Form Data:", formData);
      // Reset form and errors
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        product: "",
        quantity: "",
        usage: "",
      });
      setErrors({
        firstName: "",
        lastName: "",
        email: "",
        product: "",
        quantity: "",
        usage: "",
      });
    }
    // if(hasErrors){
    //     console.log("all are filled")
    // }
  };

  return (
    <div className="contactform max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Fields */}
        <div className="flex space-x-4">
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-600">
              First Name <span className="text-red-500 text-sm">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              
              className={`mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300 ${
                errors.firstName ? "border-red-500" : ""
              }`}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
            )}
          </div>
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-600">
              Last Name <span className="text-red-500 text-sm">*</span>
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              
              className={`mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300 ${
                errors.lastName ? "border-red-500" : ""
              }`}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
            )}
          </div>
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Email <span className="text-red-500 text-sm">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            
            className={`mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300 ${
              errors.email ? "border-red-500" : ""
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Product Select */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Please select your product <span className="text-red-500 text-sm">*</span>
          </label>
          <select
            name="product"
            value={formData.product}
            onChange={handleChange}
            
            className={`mt-1 p-2 w-full border rounded-md bg-white focus:ring focus:ring-blue-300 ${
              errors.product ? "border-red-500" : ""
            }`}
          >
            {items.map((item) => (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
          {errors.product && (
            <p className="text-red-500 text-sm mt-1">{errors.product}</p>
          )}
        </div>

        {/* Quantity */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Quantity <span className="text-red-500 text-sm">*</span>
          </label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            
            className={`mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300 ${
              errors.quantity ? "border-red-500" : ""
            }`}
          />
          {errors.quantity && (
            <p className="text-red-500 text-sm mt-1">{errors.quantity}</p>
          )}
        </div>

        {/* Usage Scenario */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Describe your usage scenario to understand your requirements better{" "}
            <span className="text-red-500 text-sm">*</span>
          </label>
          <textarea
            name="usage"
            value={formData.usage}
            onChange={handleChange}
            
            rows={3}
            className={`mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300 ${
              errors.usage ? "border-red-500" : ""
            }`}
          />
          {errors.usage && (
            <p className="text-red-500 text-sm mt-1">{errors.usage}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          style={{ backgroundColor: "#70d628" }}
          className="w-1/5 bg-green-500 text-white py-2 hover:bg-green-600 transition"
        >
          Submit
        </button>
        {/* <MessageDialog
        open={successDialogOpen}
        onClose={handleCloseDialog}
        title="Success"
        message="Operation completed successfully."
        isSuccess={true}
      />

      <MessageDialog
        open={errorDialogOpen}
        onClose={handleCloseDialog}
        title="Error"
        message="An error occurred during the operation."
        isSuccess={false}
      /> */}
      </form>
    </div>
  );
};

export default FormWithSelect;