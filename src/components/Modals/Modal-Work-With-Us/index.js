import { useState } from 'react'
import { ReactComponent as CloseIcon } from '../../../icons/X.svg'
import { ModalHeader, ModalBody} from 'reactstrap'
import { jobsObj } from './jobs'
const ModalWork = ({ handleClick, work, open }) => {
  const [findWork, setFindWork] = useState(
    jobsObj.find(job => job.name === work),
  )

  const limpiarObj = () => {
    setFindWork(null)
    handleClick()
  }

  return (
    <>
      <ModalHeader /* toggle={handleClick}  */>
        <CloseIcon onClick={limpiarObj} />
      </ModalHeader>
      <div className="modal-container">
        <ModalBody
          className={`modal-work modal-${findWork?.name?.split(' ').join('')}`}
        >
          <h2>{findWork?.name}</h2>
          {Array.isArray(findWork?.FuncionesConocimientos) ? (
            <ul>
              {findWork?.FuncionesConocimientos.map((funciones, index) => {
                return (
                  <li key={index} className={`list-func${index}`}>
                    {funciones}
                  </li>
                )
              })}
            </ul>
          ) : findWork?.FuncionesConocimientos !== '' ? (
            <div className="funciones">{findWork?.FuncionesConocimientos}</div>
          ) : (
            <></>
          )}

          <div className="skills">
            {window.screen.width > 900 ? (
              <>
                <div className="skills-left">
                  {findWork?.SoftSkills.length > 0 ? (
                    <>
                      <h4>SOFT SKILLS</h4>
                      <ul>
                        {findWork?.SoftSkills.map((sskills, i) => {
                          return <li key={i}>{sskills}</li>
                        })}
                      </ul>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
                <div className="skills-right">
                  {findWork?.TechSkills.length > 0 ? (
                    <>
                      <h4>TECH SKILLS</h4>
                      <ul>
                        {findWork?.TechSkills.map((tskills, i) => {
                          return <li key={i}>{tskills}</li>
                        })}
                      </ul>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </>
            ) : (
              <div className="skills-mobile">
                {findWork?.SoftSkills.length > 0 ? (
                  <>
                    <h4>SOFT SKILLS</h4>
                    <ul>
                      {findWork?.SoftSkills.map((sskills, i) => {
                        return <li key={i}>{sskills}</li>
                      })}
                    </ul>
                  </>
                ) : (
                  <></>
                )}
                {findWork?.TechSkills.length > 0 ? (
                  <>
                    <h4>TECH SKILLS</h4>
                    <ul>
                      {findWork?.TechSkills.map((tskills, i) => {
                        return <li key={i}>{tskills}</li>
                      })}
                    </ul>
                  </>
                ) : (
                  <></>
                )}
              </div>
            )}
          </div>
        </ModalBody>
      
      </div>
    </>
  )
}

export default ModalWork
