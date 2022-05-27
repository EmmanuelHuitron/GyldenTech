import React from 'react'
import { ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap"

const ModalWork = ({open, handleClick, work}) => {
    if(work==='PMO'){
        return ( 
            <>
                <ModalHeader toggle={handleClick}>
                
                </ModalHeader>
                <div className="modal-container">
                    <ModalBody className="modal-work">
                        <h2>PMO</h2>
                        <h3>PROJECT MANAGEMENT OFFICE</h3>
                        Este candidato tiene la capacidad de planificación, organización, coordinación y control de trabajo. Alto conocimiento en Retail, eCommerce y omnicanalidad. Relación con el cliente y con el equipo de trabajo.
                        <div className="skills">
                            <div className="skills-left">
                                <h4>SOFT SKILLS</h4>
                                <ul>
                                    <li>Liderazgo </li>
                                    <li>Trabajo en equipo</li>
                                    <li>Organización </li>
                                    <li>Comunicación </li>
                                    <li>Capacidad de gestión de conflicto</li>
                                    <li>Capacidad de delegar</li>
                                </ul>
                            </div>
                            <div className="skills-left">
                                <h4>TECH SKILLS</h4>
                                <ul>
                                    <li>Metodología Agile </li>
                                    <li>Plataformas de ecommerce</li>
                                    <li>Jira </li>
                                    <li>Excel </li>
                                    <li>Proyect</li>
                                    <li>PPT</li>
                                </ul>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                    <Button
                        color="primary"
                        
                    >
                        Postularme
                    </Button>
                    </ModalFooter>
                </div>
            </>  
        )
    }else if(work==='QA'){
        return ( 
            <>
                <ModalHeader toggle={handleClick}>
                
                </ModalHeader>
                <div className="modal-container">
                    <ModalBody className="modal-work">
                        <h2>QA</h2>
                        <h3>QUALITY ASSURANCE</h3>
                        Este candidato tiene la capacidad de planificación, organización, coordinación y control de trabajo. Alto conocimiento en Retail, eCommerce y omnicanalidad. Relación con el cliente y con el equipo de trabajo.
                        <div className="skills">
                            <div className="skills-left">
                                <h4>SOFT SKILLS</h4>
                                <ul>
                                    <li>Liderazgo </li>
                                    <li>Trabajo en equipo</li>
                                    <li>Organización </li>
                                    <li>Comunicación </li>
                                    <li>Capacidad de gestión de conflicto</li>
                                    <li>Capacidad de delegar</li>
                                </ul>
                            </div>
                            <div className="skills-left">
                                <h4>TECH SKILLS</h4>
                                <ul>
                                    <li>Metodología Agile </li>
                                    <li>Plataformas de ecommerce</li>
                                    <li>Jira </li>
                                    <li>Excel </li>
                                    <li>Proyect</li>
                                    <li>PPT</li>
                                </ul>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                    <Button
                        color="primary"
                        
                    >
                        Postularme
                    </Button>
                    </ModalFooter>
                </div>
            </>  
        )
    }else if(work==='Comercial'){
        return ( 
            <>
               <ModalHeader toggle={handleClick}>
                
                </ModalHeader>
                <div className="modal-container">
                    <ModalBody className="modal-work">
                        <h2>Comercial</h2>
                        <h3>QUALITY ASSURANCE</h3>
                        Este candidato tiene la capacidad de planificación, organización, coordinación y control de trabajo. Alto conocimiento en Retail, eCommerce y omnicanalidad. Relación con el cliente y con el equipo de trabajo.
                        <div className="skills">
                            <div className="skills-left">
                                <h4>SOFT SKILLS</h4>
                                <ul>
                                    <li>Liderazgo </li>
                                    <li>Trabajo en equipo</li>
                                    <li>Organización </li>
                                    <li>Comunicación </li>
                                    <li>Capacidad de gestión de conflicto</li>
                                    <li>Capacidad de delegar</li>
                                </ul>
                            </div>
                            <div className="skills-left">
                                <h4>TECH SKILLS</h4>
                                <ul>
                                    <li>Metodología Agile </li>
                                    <li>Plataformas de ecommerce</li>
                                    <li>Jira </li>
                                    <li>Excel </li>
                                    <li>Proyect</li>
                                    <li>PPT</li>
                                </ul>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                    <Button
                        color="primary"
                        
                    >
                        Postularme
                    </Button>
                    </ModalFooter>
                </div>
            </>  
        )
    }
    
}

export default ModalWork
