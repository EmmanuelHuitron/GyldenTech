import { useState } from 'react'
import { useIntl } from 'react-intl'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { Input, Label, Button } from 'reactstrap'

import { useForm } from '../../hooks/useForm'
import Loader from '../../components/Loader'
import Message from '../../components/Message'
import { jobsObj } from '../../components/Modals/Modal-Work-With-Us/jobs'
import './work-with-us.css'
import './input-file.css'
const initialForm = {
  position: '',
  name: '',
  email: '',
  phone: '',
  linkedIn: '',
  file: null,
  message: '',
}

const validationsForm = value => {
  const intl = useIntl()
  const errors = {}
  const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
  const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/
  const regexUrl = /^(ftp|http|https):\/\/[^ "]+$/

  if (!value.position.trim()) {
    errors.position = intl.formatMessage({
      id: 'app.pages.work-with-us.label.select-option',
    })
  }
  if (!value.email.trim()) {
    errors.email = errors.position = intl.formatMessage({
      id: 'app.pages.contactUs.label.email-required',
    })
  } else if (!regexEmail.test(value.email.trim())) {
    errors.email = errors.position = intl.formatMessage({
      id: 'app.pages.contactUs.label.email-required2',
    })
  }
  if (!value.linkedIn.trim()) {
    errors.linkedIn = intl.formatMessage({
      id: 'app.pages.work-with-us.label.linkedIn-required',
    })
  } else if (!regexUrl.test(value.linkedIn.trim())) {
    errors.linkedIn = intl.formatMessage({
      id: 'app.pages.work-with-us.label.linkedIn-required2',
    })
  }
  if (!value.name.trim()) {
    errors.name = "El campo 'Nombre' es requerido"
  } else if (!regexName.test(value.name.trim())) {
    errors.name = "El campo 'Nombre' sólo acepta letras y espacios en blanco"
  }

  return errors
}

const urlSend = 'https://formsubmit.co/proyuo1000@gmail.com'

const styles = {
  fontWeight: 'bold',
  color: '#dc3545',
}

const WorkWithUs = () => {
  const intl = useIntl()
  const [value, SetValue] = useState('')
  const [valueFile, setValueFile] = useState('')
  const [files, setFiles] = useState(null)
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm, urlSend)

  const uploadFile = e => {
    setFiles(e)
  }
  console.log(files, form)
  return (
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
        <form onSubmit={handleSubmit}>
          <div className="form-inputs">
            <div className="form-left">
              <Label for="position">
                {intl.formatMessage({
                  id: 'app.pages.work-with-us.label.position',
                })}
              </Label>
              <Input
                id="position"
                name="position"
                type="select"
                placeholder="Selecciona una opción"
                required
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
              </Input>
              {errors.position && <p style={styles}>{errors.position}</p>}
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
              <Label for="linkedIn">
                {intl.formatMessage({
                  id: 'app.pages.work-with-us.label.linkedIn',
                })}
              </Label>
              <Input
                id="linkedIn"
                name="linkedIn"
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.enterprise}
                placeholder={intl.formatMessage({
                  id: 'app.pages.work-with-us.label.linkedIn',
                })}
                type="text"
                required
              />
              {errors.linkedIn && <p style={styles}>{errors.linkedIn}</p>}
            </div>
            <div className="form-right">
              <Label for="name">
                {intl.formatMessage({
                  id: 'app.pages.work-with-us.label.name-complete',
                })}
              </Label>
              <Input
                id="name"
                name="name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.name}
                placeholder="Nombre*"
                type="text"
                required
              />
              {errors.name && <p style={styles}>{errors.name}</p>}
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
              {errors.phone && <p style={styles}>{errors.phone}</p>}
              <div className="container-input">
                <input
                  id="cvFile"
                  className="inputfile inputfile-1"
                  name="file"
                  type="file"
                  onChangeCapture={setValueFile}
                  onChange={e => uploadFile(e.target.files)}
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
            <Input
              id="exampleText"
              name="message"
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.message}
              type="textarea"
              placeholder={intl.formatMessage({
                id: 'app.pages.work-with-us.label.more-of-you',
              })}
            />
            {errors.message && <p style={styles}>{errors.message}</p>}
          </div>
          <Button
            color="primary"
            id="btn-send"
            /* disabled={} */
          >
            {intl.formatMessage({
              id: 'app.pages.work-with-us.label.apply',
            })}
          </Button>
        </form>
        {loading && <Loader />}
        {response && (
          <Message
            msg={intl.formatMessage({
              id: 'app.pages.contactUs.label.send-message',
            })}
            bgColor="#198754"
          />
        )}
      </div>
      <p>
        {intl.formatMessage({
          id: 'app.pages.work-with-us.label.legend',
        })}
      </p>
    </div>
  )
}

export default WorkWithUs
