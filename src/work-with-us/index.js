import { useState } from 'react'
import { useIntl } from 'react-intl'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { Label, Button } from 'reactstrap'

import { useForm } from 'react-hook-form'
import { jobsObj } from '../components/Modals/Modal-Work-With-Us/jobs'
import './work-with-us.css'
import './input-file.css'

const WorkWithUs = () => {
  const intl = useIntl()
  const { register, handleSubmit } = useForm()
  const [value, SetValue] = useState('')
  const [valueFile, setValueFile] = useState('')
  const [message, setMessage] = useState(null)

  const onSubmit = data => {
    console.log(data.cvFile[0])
    const formData = new FormData()
    formData.set('email', data.email)
    formData.set('fullName', data.fullName)
    formData.set('cvFile', data.cvFile[0])
    formData.set('linkedIn', data.linkedIn)
    formData.set('moreAboutYou', data.moreAboutYou)
    formData.set('phoneNumber', data.phoneNumber)
    formData.set('requiredPosition', data.requiredPosition)

    try {
      fetch(
        'https://api.vinneren.com.mx/forms-v1/vinnerenContact/jobApplication',
        {
          method: 'POST',
          body: formData,
          headers: {
            'Content-Type':
              'multipart/form-data; boundary=<calculated when request is sent>',
            ApiKey:
              'TpQFV1OVMGg7HwnSMZ9IPXtZUBt7wVoTWp1mTL9W3Skiu3qrghAErESRemSAW6oj',
          },
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
    <>
      <div className="work-with-us">
        <div className="work-with-us-content">
          <h2>
            {intl.formatMessage({
              id: 'app.pages.work-with-us.label.title',
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
                <Label for="position">
                  {intl.formatMessage({
                    id: 'app.pages.work-with-us.label.position',
                  })}
                </Label>
                <select
                  className="select-jobs"
                  id="position"
                  name="requiredPosition"
                  placeholder="Selecciona una opción"
                  {...register('requiredPosition', { required: true })}
                >
                  {jobsObj.map(({ name }, i) => {
                    return (
                      <>
                        <option key={i} value={name}>
                          {name}
                        </option>
                      </>
                    )
                  })}
                </select>

                <Label for="email">
                  {intl.formatMessage({
                    id: 'app.pages.contactUs.label.email',
                  })}
                </Label>
                <input
                  id="email"
                  name="email"
                  {...register('email', { required: true })}
                  placeholder={intl.formatMessage({
                    id: 'app.pages.contactUs.label.email',
                  })}
                  type="email"
                  required
                />
                {/* errors.email && <p style={styles}>{errors.email}</p> */}
                <Label for="linkedIn">
                  {intl.formatMessage({
                    id: 'app.pages.work-with-us.label.linkedIn',
                  })}
                </Label>
                <input
                  id="linkedIn"
                  name="linkedIn"
                  placeholder={intl.formatMessage({
                    id: 'app.pages.work-with-us.label.linkedIn',
                  })}
                  type="text"
                  {...register('linkedIn', { required: true })}
                  required
                />
                {/* errors.linkedIn && <p style={styles}>{errors.linkedIn}</p> */}
              </div>
              <div className="form-right">
                <Label for="name">
                  {intl.formatMessage({
                    id: 'app.pages.work-with-us.label.name-complete',
                  })}
                </Label>
                <input
                  id="name"
                  name="fullName"
                  placeholder="Nombre*"
                  type="text"
                  {...register('fullName', { required: true })}
                  required
                />
                {/* errors.name && <p style={styles}>{errors.name}</p> */}
                <Label for="telphone">
                  {intl.formatMessage({
                    id: 'app.pages.contactUs.label.phone',
                  })}
                </Label>
                <PhoneInput
                  international
                  name="phoneNumber"
                  id="telphone"
                  placeholder={intl.formatMessage({
                    id: 'app.pages.contactUs.label.phone',
                  })}
                  defaultCountry="MX"
                  onChange={SetValue}
                  value={value}
                  {...register('phoneNumber', { required: true })}
                />
                {/* errors.phone && <p style={styles}>{errors.phone}</p> */}
                <div className="container-input">
                  <input
                    id="cvFile"
                    className="inputfile inputfile-1"
                    name="cvFile"
                    type="file"
                    {...register('cvFile')}
                    onChangeCapture={setValueFile}
                  />
                  <label htmlFor="cvFile">
                    {valueFile?.target?.files[0]?.name || (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="iborrainputfile"
                          width="20"
                          height="17"
                          viewBox="0 0 20 17"
                        >
                          <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path>
                        </svg>
                        <span className="iborrainputfile">
                          {intl.formatMessage({
                            id: 'app.pages.work-with-us.label.select-file',
                          })}
                        </span>
                      </>
                    )}
                  </label>
                </div>
              </div>
            </div>
            <div className="area-text">
              <Label for="exampleText">
                {intl.formatMessage({
                  id: 'app.pages.work-with-us.label.more',
                })}
              </Label>
              <input
                id="exampleText"
                name="moreAboutYou"
                placeholder={intl.formatMessage({
                  id: 'app.pages.work-with-us.label.more-of-you',
                })}
                {...register('moreAboutYou', { required: true })}
              />
              {/* errors.message && <p style={styles}>{errors.message}</p> */}
            </div>
            <Button color="primary" id="btn-send">
              {intl.formatMessage({
                id: 'app.pages.work-with-us.label.apply',
              })}
            </Button>
          </form>
          {/* {loading && <Loader />}
          {response && (
            <Message
              msg={intl.formatMessage({
                id: 'app.pages.contactUs.label.send-message',
              })}
              bgColor="#198754"
            />
          )} */}
        </div>
        {message && <p>{message}</p>}
      </div>
    </>
  )
}

export default WorkWithUs
