import React from 'react'
import { ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap"

const ModalWork = ({open, handleClick, work}) => {
    if(work==='PMO'){
        return ( 
            <>
                <ModalHeader toggle={handleClick}>
                PMO
                </ModalHeader>
                <ModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </ModalBody>
                <ModalFooter>
                <Button
                    color="primary"
                    onClick={handleClick}
                >
                    Do Something
                </Button>
                {' '}
                <Button onClick={handleClick}>
                    Cancel
                </Button>
                </ModalFooter>
            </>  
        )
    }else if(work==='QA'){
        return ( 
            <>
                <ModalHeader toggle={handleClick}>
                QA
                </ModalHeader>
                <ModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </ModalBody>
                <ModalFooter>
                <Button
                    color="primary"
                    onClick={handleClick}
                >
                    Do Something
                </Button>
                {' '}
                <Button onClick={handleClick}>
                    Cancel
                </Button>
                </ModalFooter>
            </>  
        )
    }else if(work==='Comercial'){
        return ( 
            <>
               <ModalHeader toggle={handleClick}>
                Comercial
                </ModalHeader>
                <ModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </ModalBody>
                <ModalFooter>
                <Button
                    color="primary"
                    onClick={handleClick}
                >
                    Do Something
                </Button>
                {' '}
                <Button onClick={handleClick}>
                    Cancel
                </Button>
                </ModalFooter> 
            </>  
        )
    }
    
}

export default ModalWork