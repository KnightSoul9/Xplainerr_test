import { submitFormData } from "@/src/api";
import useAuthService from "@/src/hooks/auth/useAuthService";
import { useRouter } from "next/router";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import toast from "react-hot-toast";

const ApplicationForm = () => {
  const { currentUser } = useAuthService();
  const router = useRouter();

  const initialName = currentUser?.displayName || "";
  const initialEmail = currentUser?.email || "";

  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);
  const [whatsapp, setWhatsapp] = useState("");
  const [linkedInProfile, setLinkedInProfile] = useState("");
  const [yearsOfExperience, setYearsOfExperience] = useState("");
  const [learningObjectives, setLearningObjectives] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [errors, setErrors] = useState({});

  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";
  const currentURL = origin + router.asPath;

  const validateForm = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = "Name is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "This doesn’t seem like the right email";
    } else if (email.slice(-1) === ".") {
      newErrors.email = "Email should not end with a full stop";
    }
    if (!whatsapp.trim()) newErrors.whatsapp = "WhatsApp number is required";
    if (!linkedInProfile.trim())
      newErrors.linkedInProfile = "LinkedIn profile is required";
    if (!yearsOfExperience.trim())
      newErrors.yearsOfExperience = "Years of experience is required";
    if (!learningObjectives.trim())
      newErrors.learningObjectives = "Learning objectives are required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const source = localStorage.getItem("source") || "Direct";
    const device =
      window.innerWidth > 1024
        ? "Desktop"
        : window.innerWidth > 600
        ? "Tablet"
        : "Mobile";

    const payload = {
      name,
      email,
      whatsapp,
      linkedInProfile,
      yearsOfExperience,
      learningObjectives,
      url: currentURL,
      source,
      device,
    };

    setIsSubmitting(true);
    try {
      await submitFormData(payload);
      toast.success(
        "Thank you for applying to the Tech for PM cohort."
      );
      localStorage.setItem("applicantName", name);
      router.push("/cohorts/api-for-pms/payment");
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while submitting the form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen px-5 py-8 lg:px-8 lg:py-12" id="applicationFormMobile">
      <form onSubmit={handleSubmit} className="mx-auto max-w-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block pb-1 text-sm font-medium text-gray-700">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg border bg-white px-4 py-3 shadow-sm"
          />
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block pb-1 text-sm font-medium text-gray-700">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border bg-white px-4 py-3 shadow-sm"
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block pb-1 text-sm font-medium text-gray-700">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <PhoneInput
            country="in"
            value={whatsapp}
            onChange={(value) => setWhatsapp(value)}
          />
          {errors.whatsapp && <p className="mt-1 text-sm text-red-500">{errors.whatsapp}</p>}
        </div>

        <div className="mb-4">
          <label
            htmlFor="linkedInProfile"
            className="block pb-1 text-sm font-medium text-gray-700"
          >
            LinkedIn Profile <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="linkedInProfile"
            value={linkedInProfile}
            onChange={(e) => setLinkedInProfile(e.target.value)}
            className="w-full rounded-lg border bg-white px-4 py-3 shadow-sm"
          />
          {errors.linkedInProfile && (
            <p className="mt-1 text-sm text-red-500">{errors.linkedInProfile}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="yearsOfExperience"
            className="block pb-1 text-sm font-medium text-gray-700"
          >
            Years of Experience <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="yearsOfExperience"
            value={yearsOfExperience}
            onChange={(e) => setYearsOfExperience(e.target.value)}
            className="w-full rounded-lg border bg-white px-4 py-3 shadow-sm"
          />
          {errors.yearsOfExperience && (
            <p className="mt-1 text-sm text-red-500">{errors.yearsOfExperience}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="learningObjectives"
            className="block pb-1 text-sm font-medium text-gray-700"
          >
            Learning Objectives <span className="text-red-500">*</span>
          </label>
          <select
            id="learningObjectives"
            value={learningObjectives}
            onChange={(e) => setLearningObjectives(e.target.value)}
            className="w-full rounded-lg border bg-white px-3 py-3 shadow-sm"
          >
            <option value="" disabled>
              Choose your learning objective
            </option>
            <option value="Crack tech round of PM interviews">
              Crack tech round of PM interviews
            </option>
            <option value="I am a non techie. I want to learn tech from 0 to 1">
              I am a non-techie. I want to learn tech from 0 to 1
            </option>
            <option value="Upskill in my role as a PM">
              Upskill in my role as a PM
            </option>
            <option value="Learning just for curiosity and fun">
              Learning just for curiosity and fun
            </option>
          </select>
          {errors.learningObjectives && (
            <p className="mt-1 text-sm text-red-500">{errors.learningObjectives}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-primary px-2 py-3 font-medium text-white hover:bg-primary_bold"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ApplicationForm;
