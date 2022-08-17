import { useState } from 'react'
import { useIntl } from 'react-intl'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { Label, Button } from 'reactstrap'
import { useForm } from 'react-hook-form'
import './contact-us.css'

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const intl = useIntl()
  const [valuePhone, setValuePhone] = useState('')
  const [message, setMessage] = useState(null)
  const onSubmit = async data => {
    try {
      await fetch(
        'https://api.vinneren.com.mx/forms-v1/vinnerenContact/contactUs',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ApiKey:
              'TpQFV1OVMGg7HwnSMZ9IPXtZUBt7wVoTWp1mTL9W3Skiu3qrghAErESRemSAW6oj',
          },
          body: JSON.stringify(data),
        },
      )
        .then(response => response.json())
        .then(data => {
          const { hasError, message } = data
          setMessage(message)
          if (!hasError) {
            setTimeout(() => {
              window.location.reload()
            }, 2000)
          }
        })
    } catch (error) {
      console.log(error)
    }
  }

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
        {window.screen.width > 768 ? (
          <>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-inputs">
                <div className="form-left">
                  <Label for="firstName">
                    {intl.formatMessage({
                      id: 'app.pages.contactUs.label.firstname',
                    })}
                  </Label>
                  <input
                    className="form-input"
                    id="firstName"
                    placeholder={intl.formatMessage({
                      id: 'app.pages.contactUs.label.firstname',
                    })}
                    type="text"
                    {...register('firstName', { required: true })}
                  />
                  {errors.firstName && (
                    <span style={{ color: '#F00' }}>
                      {intl.formatMessage({
                        id: 'app.pages.contactUs.label.input-required',
                      })}
                    </span>
                  )}

                  <Label for="email">
                    {intl.formatMessage({
                      id: 'app.pages.contactUs.label.email',
                    })}
                  </Label>
                  <input
                    className="form-input"
                    id="email"
                    name="email"
                    placeholder={intl.formatMessage({
                      id: 'app.pages.contactUs.label.email',
                    })}
                    type="email"
                    {...register('email', { required: true })}
                  />
                  {errors.email && (
                    <span style={{ color: '#F00' }}>
                      {intl.formatMessage({
                        id: 'app.pages.contactUs.label.input-required',
                      })}
                    </span>
                  )}
                  <Label for="company">
                    {intl.formatMessage({
                      id: 'app.pages.contactUs.label.enterprise',
                    })}
                  </Label>
                  <input
                    className="form-input"
                    id="company"
                    name="company"
                    placeholder={intl.formatMessage({
                      id: 'app.pages.contactUs.label.enterprise',
                    })}
                    {...register('company', { required: true })}
                    type="text"
                  />
                  {errors.company && (
                    <span style={{ color: '#F00' }}>
                      {intl.formatMessage({
                        id: 'app.pages.contactUs.label.input-required',
                      })}
                    </span>
                  )}
                </div>
                <div className="form-right">
                  <Label for="lastName">
                    {intl.formatMessage({
                      id: 'app.pages.contactUs.label.surname',
                    })}
                  </Label>
                  <input
                    className="form-input"
                    id="lastName"
                    name="lastName"
                    placeholder="Apellido*"
                    type="text"
                    {...register('lastName', { required: true })}
                  />
                  {errors.lastName && (
                    <span style={{ color: '#F00' }}>
                      {intl.formatMessage({
                        id: 'app.pages.contactUs.label.input-required',
                      })}
                    </span>
                  )}
                  <Label for="phoneNumber">
                    {intl.formatMessage({
                      id: 'app.pages.contactUs.label.phone',
                    })}
                  </Label>
                  <PhoneInput
                    international
                    name="phoneNumber"
                    id="phoneNumber"
                    placeholder={intl.formatMessage({
                      id: 'app.pages.contactUs.label.phone',
                    })}
                    defaultCountry="MX"
                    onChange={setValuePhone}
                    value={valuePhone}
                    {...register('phoneNumber', { required: true })}
                  />
                  {errors.phoneNumber && (
                    <span style={{ color: '#F00' }}>
                      {intl.formatMessage({
                        id: 'app.pages.contactUs.label.input-required',
                      })}
                    </span>
                  )}
                  <Label for="position">
                    {intl.formatMessage({
                      id: 'app.pages.contactUs.label.job',
                    })}
                  </Label>
                  <input
                    className="form-input"
                    id="position"
                    name="position"
                    placeholder={intl.formatMessage({
                      id: 'app.pages.contactUs.label.job',
                    })}
                    type="text"
                    {...register('position', { required: true })}
                  />
                </div>
              </div>
              <div className="area-text">
                <Label for="message">
                  {intl.formatMessage({
                    id: 'app.pages.contactUs.label.message',
                  })}
                </Label>
                <textarea
                  className="form-input"
                  id="message"
                  name="message"
                  type="textarea"
                  placeholder={intl.formatMessage({
                    id: 'app.pages.contactUs.label.message-opt',
                  })}
                  {...register('message', { required: true })}
                />
              </div>
              <Button color="primary" id="btn-send" /* disabled={} */>
                {intl.formatMessage({
                  id: 'app.pages.contactUs.label.send',
                })}
              </Button>
            </form>
          </>
        ) : (
          <>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-inputs">
                <div className="form-left">
                  <Label for="firstName">
                    {intl.formatMessage({
                      id: 'app.pages.contactUs.label.firstname',
                    })}
                  </Label>
                  <input
                    className="form-input"
                    id="firstName"
                    placeholder={intl.formatMessage({
                      id: 'app.pages.contactUs.label.firstname',
                    })}
                    type="text"
                    {...register('firstName', { required: true })}
                  />
                  {errors.firstName && (
                    <span style={{ color: '#F00' }}>
                      {intl.formatMessage({
                        id: 'app.pages.contactUs.label.input-required',
                      })}
                    </span>
                  )}
                  <Label for="lastName">
                    {intl.formatMessage({
                      id: 'app.pages.contactUs.label.surname',
                    })}
                  </Label>
                  <input
                    className="form-input"
                    id="lastName"
                    name="lastName"
                    placeholder={intl.formatMessage({
                      id: 'app.pages.contactUs.label.surname',
                    })}
                    type="text"
                    {...register('lastName', { required: true })}
                  />
                  {errors.lastName && (
                    <span style={{ color: '#F00' }}>
                      {intl.formatMessage({
                        id: 'app.pages.contactUs.label.input-required',
                      })}
                    </span>
                  )}
                  <Label for="email">
                    {intl.formatMessage({
                      id: 'app.pages.contactUs.label.email',
                    })}
                  </Label>
                  <input
                    className="form-input"
                    id="email"
                    name="email"
                    placeholder={intl.formatMessage({
                      id: 'app.pages.contactUs.label.email',
                    })}
                    type="email"
                    {...register('email', { required: true })}
                  />
                  {errors.email && (
                    <span style={{ color: '#F00' }}>
                      {intl.formatMessage({
                        id: 'app.pages.contactUs.label.input-required',
                      })}
                    </span>
                  )}
                </div>
                <div className="form-right">
                  <Label for="phoneNumber">
                    {intl.formatMessage({
                      id: 'app.pages.contactUs.label.phone',
                    })}
                  </Label>
                  <PhoneInput
                    international
                    name="phoneNumber"
                    id="phoneNumber"
                    placeholder={intl.formatMessage({
                      id: 'app.pages.contactUs.label.phone',
                    })}
                    defaultCountry="MX"
                    onChange={setValuePhone}
                    value={valuePhone}
                    {...register('phoneNumber', { required: true })}
                  />
                  {errors.phoneNumber && (
                    <span style={{ color: '#F00' }}>
                      {intl.formatMessage({
                        id: 'app.pages.contactUs.label.input-required',
                      })}
                    </span>
                  )}
                  <Label for="company">
                    {intl.formatMessage({
                      id: 'app.pages.contactUs.label.enterprise',
                    })}
                  </Label>
                  <input
                    className="form-input"
                    id="company"
                    name="company"
                    placeholder={intl.formatMessage({
                      id: 'app.pages.contactUs.label.enterprise',
                    })}
                    {...register('company', { required: true })}
                    type="text"
                  />
                  {errors.company && (
                    <span style={{ color: '#F00' }}>
                      {intl.formatMessage({
                        id: 'app.pages.contactUs.label.input-required',
                      })}
                    </span>
                  )}
                  <Label for="position">
                    {intl.formatMessage({
                      id: 'app.pages.contactUs.label.job',
                    })}
                  </Label>
                  <input
                    className="form-input"
                    id="position"
                    name="position"
                    placeholder={intl.formatMessage({
                      id: 'app.pages.contactUs.label.job',
                    })}
                    type="text"
                    {...register('position', { required: true })}
                  />
                </div>
              </div>
              <div className="area-text">
                <Label for="message">
                  {intl.formatMessage({
                    id: 'app.pages.contactUs.label.message',
                  })}
                </Label>
                <textarea
                  className="form-input"
                  id="message"
                  name="message"
                  type="textarea"
                  placeholder={intl.formatMessage({
                    id: 'app.pages.contactUs.label.message-opt',
                  })}
                  {...register('message', { required: true })}
                />
              </div>
              <Button color="primary" id="btn-send" /* disabled={} */>
                {intl.formatMessage({
                  id: 'app.pages.contactUs.label.send',
                })}
              </Button>
            </form>
          </>
        )}

        {/* loading && <Loader /> */}
        {message && <p bgColor="#01c268">{message}</p>}
      </div>
    </div>
  )
}

export default ContactUs
