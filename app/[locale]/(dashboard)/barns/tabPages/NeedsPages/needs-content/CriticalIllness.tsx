"use client";

import React from "react";
import { Controller, Control, FieldErrors } from "react-hook-form";
import { FormInput, FormSelect } from "@/components/common/FormInput";

type Option = { label: string; value: string };

const beneficiaryOptions: Option[] = [
  { label: "Myself", value: "self" },
  { label: "Spouse", value: "spouse" },
  { label: "Children", value: "children" },
];

const calculationOptions: Option[] = [
  { label: "Simple Interest", value: "simple" },
  { label: "Compound Interest", value: "compound" },
];

type FormValues = {
  beneficiary: string;
  calculationType: string;
  amountNeeded: number;
  yearsNeeded: number;
  liabilities: string;
  existingSupport: string;
  totalAmountNeeded: number;
};

type Props = {
  control: Control<FormValues>;
  errors: FieldErrors<FormValues>;
};

const CriticalIllness = ({ control, errors }: Props) => {
  return (
    <div className="space-y-4">
      {/* Beneficiary */}
      <Controller
        name="beneficiary"
        control={control}
        rules={{ required: "Please select a beneficiary" }}
        render={({ field }) => (
          <FormSelect
            label="Who is the Beneficiary?"
            options={beneficiaryOptions}
            {...field}
            error={errors.beneficiary}
          />
        )}
      />

      {/* Years Needed for Funds */}
      <Controller
        name="amountNeeded"
        control={control}
        rules={{
          required: "Please enter the amount",
          min: { value: 1, message: "Amount must be at least 1" },
        }}
        render={({ field }) => (
          <FormInput
            label="Years needed for this funds?"
            type="number"
            placeholder="Enter amount"
            {...field}
            error={errors.amountNeeded}
          />
        )}
      />

      {/* Calculation Type */}
      <Controller
        name="calculationType"
        control={control}
        rules={{ required: "Please select a calculation type" }}
        render={({ field }) => (
          <FormSelect
            label="Choice of Calculation"
            options={calculationOptions}
            {...field}
            error={errors.calculationType}
          />
        )}
      />

      {/* Annual Amount Needed */}
      <Controller
        name="amountNeeded"
        control={control}
        rules={{
          required: "Please enter the amount",
          min: { value: 1, message: "Amount must be at least 1" },
        }}
        render={({ field }) => (
          <FormInput
            label="Annual Amount Needed"
            type="number"
            placeholder="Enter amount"
            {...field}
            error={errors.amountNeeded}
          />
        )}
      />

      {/* Years Needed */}
      <Controller
        name="yearsNeeded"
        control={control}
        rules={{
          required: "Please enter the number of years",
          min: { value: 1, message: "Must be at least 1 year" },
        }}
        render={({ field }) => (
          <FormInput
            label="Number of Years Needed"
            type="number"
            placeholder="Enter number of years"
            {...field}
            error={errors.yearsNeeded}
          />
        )}
      />

      {/* Liabilities */}
      <Controller
        name="liabilities"
        control={control}
        rules={{ required: "Please enter any liabilities." }}
        render={({ field }) => (
          <FormInput
            label="Liabilities"
            type="text"
            placeholder="Enter liabilities"
            {...field}
            error={errors.liabilities}
          />
        )}
      />

      {/* Existing Support */}
      <Controller
        name="existingSupport"
        control={control}
        rules={{
          required: "Please enter any support",
        }}
        render={({ field }) => (
          <FormInput
            label="Existing CI Support"
            type="text"
            placeholder=""
            {...field}
            error={errors.existingSupport}
          />
        )}
      />

      {/* Total Amount Needed */}
      <Controller
        name="totalAmountNeeded"
        control={control}
        rules={{
          required: "Please enter the amount",
          min: { value: 1, message: "Amount must be at least 1" },
        }}
        render={({ field }) => (
          <FormInput
            label="Total Amount Needed"
            type="number"
            placeholder="Enter amount"
            {...field}
            error={errors.totalAmountNeeded}
          />
        )}
      />
    </div>
  );
};

export default CriticalIllness;
