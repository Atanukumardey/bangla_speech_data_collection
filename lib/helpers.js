import { NextResponse } from "next/server"
import toast from "react-hot-toast"

export function getEnvVariable(key) {
  const value = process.env[key]

  if (!value || value.length === 0) {
    console.error(`The environment variable ${key} is not set.`)
    throw new Error(`The environment variable ${key} is not set.`)
  }

  return value
}

export function getErrorResponse(status = 500, message, errors = null) {
  return new NextResponse(
    JSON.stringify({
      status: status < 500 ? "fail" : "error",
      message,
      errors: errors ? errors.flatten() : null
    }),
    {
      status,
      headers: { "Content-Type": "application/json" }
    }
  )
}

export function handleApiError(error) {
  try {
    let errorData
    try {
      errorData = JSON.parse(error.message)
    } catch (parseError) {
      // Treat error.message as a plain error message
      // console.log("Error message:", error.message);
      toast.error(error.message)
      return
    }

    if (
      typeof errorData === "object" &&
      errorData !== null &&
      "fieldErrors" in errorData
    ) {
      const fieldErrors = errorData.fieldErrors
      Object.keys(fieldErrors).forEach(fieldName => {
        const validationMessages = fieldErrors[fieldName]
        if (validationMessages.length > 0) {
          const firstValidationMessage = validationMessages[0]
          toast.error(firstValidationMessage)
          // console.log(
          //   `Validation error for ${fieldName}:`,
          //   firstValidationMessage
          // );
        }
      })
    }
  } catch (error) {
    // console.log("Original error message:", error);
    toast.error(error)
  }
}
