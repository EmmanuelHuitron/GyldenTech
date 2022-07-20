import { useState } from 'react'
import { useIntl } from 'react-intl'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { Input, Label, Button } from 'reactstrap'

/* import Loader from '../../components/Loader'
import Message from '../../components/Message' */
import './contact-us.css'

const ContactUs = () => {
  const intl = useIntl()
  const [value, SetValue] = useState({})
  const [valuePhone, setValuePhone] = useState('')
  const handleSubmit = e => {
    e.preventDefault()
    console.log(value)
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ApiKey:
          'TpQFV1OVMGg7HwnSMZ9IPXtZUBt7wVoTWp1mTL9W3Skiu3qrghAErESRemSAW6oj',
        Accept: '*/*',
        'Accept-Encoding': 'keep-alive',
      },
      body: JSON.stringify(value),
    }
    fetch(
      'https://api.vinneren.com.mx/forms-v1/vinnerenContact/contactUs',
      requestOptions,
    )
      .then(response => response.json())
      .then(data => console.log(data))
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
        <form onSubmit={handleSubmit}>
          <div className="form-inputs">
            <div className="form-left">
              <Label for="firstName">
                {intl.formatMessage({
                  id: 'app.pages.contactUs.label.firstname',
                })}
              </Label>
              <Input
                id="firstName"
                placeholder={intl.formatMessage({
                  id: 'app.pages.contactUs.label.firstname',
                })}
                type="text"
                name="firstName"
                /* onBlur={handleBlur} */
                onChange={e => {
                  SetValue({ ...value, firstName: e.target.value })
                }}
                value={value.firstName}
                required
              />
              {/* errors.firstName && <p style={styles}>{errors.firstName}</p> */}
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
