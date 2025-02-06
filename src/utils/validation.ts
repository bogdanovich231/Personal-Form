interface IFormData {
  firstname: string
  lastname: string
  email: string
}

interface IValidation {
  isValid: boolean
  errors: Record<string, string>
}

export const validation = (formData: IFormData): IValidation => {
  const errors: Record<string, string> = {}
  let isValid = true

  if (!formData.firstname) {
    errors.firstname = 'First Name is required.'
    isValid = false
  } else if (formData.firstname[0] !== formData.firstname[0].toUpperCase()) {
    errors.firstname = 'First Name should start with an uppercase letter.'
    isValid = false
  }

  if (!formData.lastname) {
    errors.lastname = 'Last Name is required.'
    isValid = false
  } else if (formData.lastname[0] !== formData.lastname[0].toUpperCase()) {
    errors.lastname = 'Last Name should start with an uppercase letter.'
    isValid = false
  }

  if (!formData.email) {
    errors.email = 'Email is required.'
    isValid = false
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = 'Email is not valid.'
    isValid = false
  }

  return { isValid, errors }
}
