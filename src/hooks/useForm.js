import { useState } from 'react'
import { helpHttp } from '../helpers/helpHttp'

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState(null)

  const handleChange = e => {
    const { name, value } = e.target

    setForm({
      ...form,
      [name]: value,
    })
  }
  const handleBlur = e => {
    handleChange(e)
    setErrors(validateForm(form))
  }

  const handleSubmit = e => {
    e.preventDefault()
    setErrors(validateForm(form))

    if (Object.keys(errors).length === 0) {
      setLoading(true)
      helpHttp()
        .post(
          'https://api.vinneren.com.mx/forms-v1/vinnerenContact/contactUs',
          {
            body: JSON.stringify(form),
            headers: {
              'Content-Type': 'application/json',
              'Accept-Encoding': 'gzip, deflate, br',
              Connection: 'keep-alive',
              ApiKey:
                'TpQFV1OVMGg7HwnSMZ9IPXtZUBt7wVoTWp1mTL9W3Skiu3qrghAErESRemSAW6oj',
            },
          },
        )
        .then(res => {
          setLoading(false)
          setResponse(true)
          setForm(initialForm)
          setTimeout(() => setResponse(false), 5000)
        })
    } else {
      return 0
    }
  }

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  }
}
