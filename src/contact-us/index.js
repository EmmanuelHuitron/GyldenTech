import { useState } from 'react'
import { useIntl } from 'react-intl'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { Input, Label, Button } from 'reactstrap'
import { useForm } from 'react-hook-form'
/* import Loader from '../../components/Loader'
import Message from '../../components/Message' */
import './contact-us.css'

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const intl = useIntl()
  const [value, SetValue] = useState({})
  const [valuePhone, setValuePhone] = useState('')

  const onSubmit = data => console.log(data)
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-inputs">
            <div className="form-left">
              <div>
                <Label for="firstName">
                  {intl.formatMessage({
                    id: 'app.pages.contactUs.label.firstname',
                  })}
                </Label>
                <input
                  id="firstName"
                  placeholder={intl.formatMessage({
                    id: 'app.pages.contactUs.label.firstname',
                  })}
                  type="text"
                  {...register('firstName', { required: true })}
                />
                {errors.firstName && (
                  <span style={{ color: '#F00' }}>Este campo es Requerido</span>
                )}
              </div>
              <Label for="email">
                {intl.formatMessage({
                  id: 'app.pages.contactUs.label.email',
                })}
              </Label>
              <Input
                id="email"
                name="email"
                /* onBlur={handleBlur} */
                onChange={e => {
                  SetValue({ ...value, email: e.target.value })
                }}
                value={value.email}
                placeholder={intl.formatMessage({
                  id: 'app.pages.contactUs.label.email',
                })}
                type="email"
                required
              />
              {/* errors.email && <p style={styles}>{errors.email}</p> */}
              <Label for="company">
                {intl.formatMessage({
                  id: 'app.pages.contactUs.label.enterprise',
                })}
              </Label>
              <Input
                id="company"
                name="company"
                /* onBlur={handleBlur} */
                onChange={e => {
                  SetValue({ ...value, company: e.target.value })
                }}
                value={value.company}
                placeholder={intl.formatMessage({
                  id: 'app.pages.contactUs.label.enterprise',
                })}
                type="text"
                required
              />
            </div>
            <div className="form-right">
              <Label for="lastName">
                {intl.formatMessage({
                  id: 'app.pages.contactUs.label.surname',
                })}
              </Label>
              <Input
                id="lastName"
                name="lastName"
                /* onBlur={handleBlur} */
                onChange={e => {
                  SetValue({ ...value, lastName: e.target.value })
                }}
                value={value.lastName}
                placeholder="Apellido*"
                type="text"
                required
              />
              {/* errors.lastName && <p style={styles}>{errors.lastName}</p> */}
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
                onBlur={e =>
                  SetValue({ ...value, phoneNumber: e.target.value })
                }
                value={valuePhone}
              />
              {/* {errors.phone && <p style={styles}>{errors.phone}</p>} */}
              <Label for="position">
                {intl.formatMessage({
                  id: 'app.pages.contactUs.label.job',
                })}
              </Label>
              <Input
                id="position"
                name="position"
                placeholder={intl.formatMessage({
                  id: 'app.pages.contactUs.label.job',
                })}
                type="text"
                /* onBlur={handleBlur} */
                onChange={e => {
                  SetValue({ ...value, position: e.target.value })
                }}
                value={value.position}
              />
              {/* errors.position && <p style={styles}>{errors.position}</p> */}
            </div>
          </div>
          <div className="area-text">
            <Label for="message">
              {intl.formatMessage({
                id: 'app.pages.contactUs.label.message',
              })}
            </Label>
            <Input
              id="message"
              name="message"
              /* onBlur={handleBlur} */
              onChange={e => {
                SetValue({ ...value, message: e.target.value })
              }}
              value={value.message}
              type="textarea"
              placeholder={intl.formatMessage({
                id: 'app.pages.contactUs.label.message-opt',
              })}
            />
            {/* errors.message && <p style={styles}>{errors.message}</p> */}
          </div>
          <Button color="primary" id="btn-send" /* disabled={} */>
            {intl.formatMessage({
              id: 'app.pages.contactUs.label.send',
            })}
          </Button>
        </form>
        {/* {loading && <Loader />}
        {response && (
          <Message
            msg={intl.formatMessage({
              id: 'app.pages.contactUs.label.send-message',
            })}
            bgColor="#01c268"
          />
        )} */}
      </div>
    </div>
  )
}

export default ContactUs
