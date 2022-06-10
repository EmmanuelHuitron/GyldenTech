import { useState } from 'react'
import { useIntl } from 'react-intl'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { Input, Label, Button } from 'reactstrap'

import { useForm } from '../../hooks/useForm'
import Loader from '../../components/Loader'
import Message from '../../components/Message'
import './contact-us.css'

const initialForm = {
  name: '',
  surname: '',
  email: '',
  phone: '',
  enterprise: '',
  job: '',
  message: '',
}

const validationsForm = value => {
  const errors = {}
  const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
  const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/
  const regexComments = /^.{1,255}$/

  if (!value.name.trim()) {
    errors.name = "El campo 'Nombre' es requerido"
  } else if (!regexName.test(value.name.trim())) {
    errors.name = "El campo 'Nombre' sólo acepta letras y espacios en blanco"
  }

  if (!value.email.trim()) {
    errors.email = "El campo 'Email' es requerido"
  } else if (!regexEmail.test(value.email.trim())) {
    errors.email = "El campo 'Email' es incorrecto"
  }

  if (!value.enterprise.trim()) {
    errors.enterprise = "El campo 'Empresa' es requerido"
  }

  if (!value.surname.trim()) {
    errors.surname = "El campo 'Apellido' es requerido"
  } else if (!regexComments.test(value.surname.trim())) {
    errors.message = "El campo 'Apellido' no debe exceder los 255 caracteres"
  }

  return errors
}

const styles = {
  fontWeight: 'bold',
  color: '#dc3545',
}

const ContactUs = () => {
  const intl = useIntl()
  const [value, SetValue] = useState('')
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm)

  return (
    <div className="contact-us">
      <div className="bar"></div>
      <div className="contact-us-content">
        <h2>
          {intl.formatMessage({
            id: 'app.pages.contactUs.label.title',
          })}
        </h2>
        <h4>
          {intl.formatMessage({
            id: 'app.pages.contactUs.label.subtitle',
          })}
        </h4>
        <form onSubmit={handleSubmit}>
          <div className="form-inputs">
            <div className="form-left">
              <Label for="name">
                {intl.formatMessage({
                  id: 'app.pages.contactUs.label.firstname',
                })}
              </Label>
              <Input
                id="name"
                placeholder={intl.formatMessage({
                  id: 'app.pages.contactUs.label.firstname',
                })}
                type="text"
                name="name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.name}
                required
              />
              {errors.name && <p style={styles}>{errors.name}</p>}
              <Label for="email">
                {intl.formatMessage({
                  id: 'app.pages.contactUs.label.email',
                })}
              </Label>
              <Input
                id="email"
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.email}
                placeholder={intl.formatMessage({
                  id: 'app.pages.contactUs.label.email',
                })}
                type="email"
                required
              />
              {errors.email && <p style={styles}>{errors.email}</p>}
              <Label for="enterprise">
                {intl.formatMessage({
                  id: 'app.pages.contactUs.label.enterprise',
                })}
              </Label>
              <Input
                id="enterprise"
                name="enterprise"
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.enterprise}
                placeholder={intl.formatMessage({
                  id: 'app.pages.contactUs.label.enterprise',
                })}
                type="text"
                required
              />
            </div>
            <div className="form-right">
              <Label for="surname">
                {intl.formatMessage({
                  id: 'app.pages.contactUs.label.surname',
                })}
              </Label>
              <Input
                id="surname"
                name="surname"
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.surname}
                placeholder="Apellido*"
                type="text"
                required
              />
              {errors.surname && <p style={styles}>{errors.surname}</p>}
              <Label for="telphone">
                {intl.formatMessage({
                  id: 'app.pages.contactUs.label.phone',
                })}
              </Label>
              <PhoneInput
                international
                name="phone"
                id="telphone"
                placeholder={intl.formatMessage({
                  id: 'app.pages.contactUs.label.phone',
                })}
                defaultCountry="MX"
                onChange={SetValue}
                onBlur={handleBlur}
                value={value}
              />
              {/* {errors.phone && <p style={styles}>{errors.phone}</p>} */}
              <Label for="job">
                {intl.formatMessage({
                  id: 'app.pages.contactUs.label.job',
                })}
              </Label>
              <Input
                id="job"
                name="job"
                placeholder={intl.formatMessage({
                  id: 'app.pages.contactUs.label.job',
                })}
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.job}
              />
              {errors.job && <p style={styles}>{errors.job}</p>}
            </div>
          </div>
          <div className="area-text">
            <Label for="exampleText">
              {intl.formatMessage({
                id: 'app.pages.contactUs.label.message',
              })}
            </Label>
            <Input
              id="exampleText"
              name="message"
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.message}
              type="textarea"
              placeholder={intl.formatMessage({
                id: 'app.pages.contactUs.label.message-opt',
              })}
            />
            {errors.message && <p style={styles}>{errors.message}</p>}
          </div>
          <Button color="primary" id="btn-send" /* disabled={} */>
            {intl.formatMessage({
              id: 'app.pages.contactUs.label.send',
            })}
          </Button>
        </form>
        {loading && <Loader />}
        {response && (
          <Message msg="Los datos han sido enviados" bgColor="#198754" />
        )}
      </div>
    </div>
  )
}

export default ContactUs
