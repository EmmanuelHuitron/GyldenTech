import * as React from 'react';
import { useIntl } from 'react-intl'
import {setCookie, getCookie} from '../../utils/cookie'
import { Button } from 'react-bootstrap'
import "./header.css"

import Hamburger from './hamburger';
import NavBar from './navBar'
const Header = () => {
    const intl = useIntl()
    const urlParams = new URLSearchParams('services');
    const [value, setValue] = React.useState('');
    const [open, setOpen] = React.useState(false)
    console.log(urlParams);
    const handleClick = () => {
        setOpen(!open)
    }
    const handleChange = (newValue) => {
      setValue(newValue);
      setCookie('lang',newValue);
      setTimeout(function(){
        // eslint-disable-next-line no-restricted-globals
        location.reload()
    }, 1000);
      console.log(value);
    };
    
    return (
        <div className='header-content'>   
            <div className="logo">
            <svg width="136" height="34" viewBox="0 0 136 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_286_13570)">
                <path d="M6.77952 18.4952L3.37952 8.09036H0L4.52651 21.9976H6.77952H9.03253L13.559 8.09036H10.1795L6.77952 18.4952Z" fill="white"/>
                <path d="M19.1916 8.09036H15.853V21.9976H19.1916V8.09036Z" fill="white"/>
                <path d="M32.6277 9.91324C32.1976 9.36022 31.706 8.95059 31.194 8.64336C30.6819 8.35661 30.1904 8.13131 29.7397 8.00842C29.2891 7.86504 28.8795 7.8036 28.5518 7.78312C28.2036 7.76263 28.0193 7.76263 27.9578 7.76263C27.8964 7.76263 27.6916 7.76263 27.3638 7.78312C27.0361 7.8036 26.647 7.88553 26.1759 8.00842C25.7253 8.15179 25.2337 8.35661 24.7217 8.64336C24.2096 8.9301 23.7385 9.36022 23.2879 9.91324C22.8373 10.4662 22.4891 11.1626 22.2024 11.9819C21.9157 12.8217 21.7723 13.8458 21.7723 15.0747V22.0181H25.1108V15.0747C25.1108 14.665 25.1518 14.2554 25.2132 13.8458C25.2952 13.4156 25.4181 13.047 25.6229 12.6988C25.8277 12.3506 26.1144 12.0638 26.4831 11.8385C26.8518 11.6132 27.3229 11.4903 27.9373 11.4903C28.5313 11.4903 29.0229 11.6132 29.3916 11.8385C29.7602 12.0638 30.047 12.3506 30.2313 12.6988C30.4361 13.047 30.5795 13.4361 30.641 13.8458C30.7024 14.2759 30.7434 14.6855 30.7434 15.0747V22.0181H34.0819V15.0747C34.0819 13.8458 33.9385 12.8217 33.6518 11.9819C33.4265 11.1422 33.0578 10.4662 32.6277 9.91324Z" fill="white"/>
                <path d="M47.4361 9.91324C47.006 9.36022 46.5145 8.95059 46.0024 8.64336C45.4904 8.35661 44.9988 8.13131 44.5482 8.00842C44.0976 7.86504 43.6879 7.8036 43.3602 7.78312C43.012 7.76263 42.8277 7.76263 42.7663 7.76263C42.7048 7.76263 42.5 7.76263 42.1723 7.78312C41.8446 7.8036 41.4554 7.88553 40.9843 8.00842C40.5337 8.15179 40.0422 8.35661 39.5301 8.64336C39.0181 8.9301 38.547 9.36022 38.0964 9.91324C37.6458 10.4662 37.2976 11.1626 37.0108 11.9819C36.7241 12.8217 36.5807 13.8458 36.5807 15.0747V22.0181H39.9398V15.0747C39.9398 14.665 39.9807 14.2554 40.0422 13.8458C40.1241 13.4156 40.247 13.047 40.4518 12.6988C40.6566 12.3506 40.9434 12.0638 41.312 11.8385C41.6807 11.6132 42.1518 11.4903 42.7663 11.4903C43.3602 11.4903 43.8518 11.6132 44.2205 11.8385C44.5891 12.0638 44.8759 12.3506 45.0602 12.6988C45.2651 13.047 45.4084 13.4361 45.4699 13.8458C45.5518 14.2759 45.5723 14.6855 45.5723 15.0747V22.0181H48.9518V15.0747C48.9518 13.8458 48.8084 12.8217 48.5217 11.9819C48.2349 11.1422 47.8663 10.4662 47.4361 9.91324Z" fill="white"/>
                <path d="M64.3337 13.2723C64.2313 12.5554 64.047 11.941 63.8012 11.3879C63.5554 10.8554 63.2687 10.3843 62.9614 9.99517C62.6337 9.60602 62.2855 9.27831 61.9169 9.01204C61.5482 8.74578 61.1795 8.54096 60.8108 8.35662C59.9301 7.96746 58.9879 7.76264 57.9843 7.72168C56.7554 7.76264 55.6699 8.02891 54.7277 8.54096C54.3181 8.76626 53.9289 9.053 53.5398 9.4012C53.1506 9.74939 52.8024 10.1795 52.4952 10.712C52.1879 11.2241 51.9422 11.859 51.7578 12.5554C51.5735 13.2723 51.4916 14.0916 51.4916 15.0542C51.4916 15.9964 51.5735 16.8361 51.7578 17.553C51.9422 18.2699 52.1879 18.8843 52.4952 19.3964C52.8024 19.9084 53.1506 20.3385 53.5398 20.6663C53.9289 21.0144 54.3386 21.2807 54.7277 21.506C55.6699 21.9976 56.7759 22.2638 57.9843 22.2638C58.9265 22.2638 59.8072 22.1 60.647 21.7723C60.9952 21.6289 61.3434 21.4446 61.712 21.2193C62.0807 20.994 62.4289 20.7072 62.7361 20.359C63.0638 20.0108 63.3506 19.6012 63.6169 19.1301C63.8831 18.659 64.0879 18.106 64.2313 17.4506H60.6675C60.4626 17.9217 60.1554 18.3518 59.7253 18.7205C59.3157 19.0891 58.7217 19.2735 57.9639 19.2735C57.206 19.2735 56.6325 19.0891 56.2024 18.7205C55.7928 18.3518 55.4651 17.9422 55.2807 17.4506C55.1578 17.1434 55.0554 16.8157 55.0145 16.5084C54.953 16.1807 54.912 15.8735 54.8711 15.5663H64.4771V15.0747C64.4771 14.747 64.4566 14.4397 64.4361 14.1325C64.4157 13.8458 64.3747 13.559 64.3337 13.2723ZM55.0554 13.2723C55.1373 12.9855 55.2398 12.6783 55.3831 12.3916C55.5265 12.1048 55.7313 11.8385 55.9566 11.5928C56.2024 11.347 56.4687 11.1626 56.7964 11.0398C57.1241 10.8964 57.5132 10.8349 57.9434 10.8349C58.394 10.8349 58.7626 10.8964 59.0904 11.0398C59.4181 11.1831 59.7048 11.3675 59.9506 11.5928C60.1964 11.8385 60.3807 12.1048 60.5036 12.3916C60.647 12.6783 60.7494 12.9855 60.8518 13.2723H55.0554Z" fill="white"/>
                <path d="M68.9422 8.70482C68.4711 8.97109 68.0205 9.38072 67.6313 9.93374C67.2217 10.4663 67.0373 11.2241 67.0373 12.1663V22.0181H70.4169V12.6169C70.4783 12.3916 70.5807 12.1867 70.7241 12.0229C70.847 11.8795 71.0313 11.7361 71.2566 11.6133C71.4819 11.4904 71.7892 11.4289 72.1374 11.4289H74.7181V8.09036H70.8675C70.1506 8.17229 69.5157 8.37711 68.9422 8.70482Z" fill="white"/>
                <path d="M89.1374 13.2723C89.0349 12.5554 88.8506 11.941 88.6048 11.3879C88.359 10.8554 88.0723 10.3843 87.7651 9.99517C87.4374 9.60602 87.0892 9.27831 86.7205 9.01204C86.3518 8.74578 85.9627 8.54096 85.6145 8.35662C84.7337 7.96746 83.7916 7.76264 82.788 7.72168C81.559 7.76264 80.4735 8.02891 79.5108 8.54096C79.1012 8.76626 78.712 9.053 78.3229 9.4012C77.9337 9.74939 77.5855 10.1795 77.2783 10.712C76.9711 11.2241 76.7253 11.859 76.5614 12.5554C76.3771 13.2723 76.2952 14.0916 76.2952 15.0542C76.2952 15.9964 76.3771 16.8361 76.5614 17.553C76.7458 18.2699 76.9916 18.8843 77.2783 19.3964C77.5855 19.9084 77.9337 20.3385 78.3229 20.6663C78.712 21.0144 79.1217 21.2807 79.5108 21.506C80.453 21.9976 81.559 22.2638 82.788 22.2638C83.7096 22.2638 84.6108 22.1 85.4506 21.7723C85.7988 21.6289 86.147 21.4446 86.5157 21.2193C86.8843 20.994 87.2325 20.7072 87.5398 20.359C87.8675 20.0108 88.1542 19.6012 88.4205 19.1301C88.6868 18.659 88.8916 18.106 89.0349 17.4506H85.4711C85.2663 17.9217 84.959 18.3518 84.5289 18.7205C84.0988 19.0891 83.5253 19.2735 82.7675 19.2735C82.0096 19.2735 81.4361 19.0891 81.006 18.7205C80.5759 18.3518 80.2687 17.9422 80.0639 17.4506C79.941 17.1434 79.8386 16.8157 79.7976 16.5084C79.7361 16.1807 79.6952 15.8735 79.6542 15.5663H89.2602V15.0747C89.2602 14.747 89.2398 14.4397 89.2193 14.1325C89.1988 13.8458 89.1783 13.559 89.1374 13.2723ZM79.859 13.2723C79.9205 12.9855 80.0434 12.6783 80.1867 12.3916C80.3301 12.1048 80.5349 11.8385 80.7602 11.5928C81.006 11.347 81.2723 11.1626 81.6205 11.0398C81.9482 10.8964 82.3374 10.8349 82.7675 10.8349C83.1976 10.8349 83.5868 10.8964 83.9145 11.0398C84.2422 11.1831 84.5289 11.3675 84.7542 11.5928C85 11.8385 85.1843 12.1048 85.3072 12.3916C85.4506 12.6783 85.553 12.9855 85.6554 13.2723H79.859Z" fill="white"/>
                <path d="M101.877 9.91324C101.447 9.36022 100.955 8.95059 100.443 8.64336C99.9313 8.35661 99.4398 8.13131 98.9892 8.00842C98.5386 7.86504 98.1289 7.8036 97.8012 7.78312C97.453 7.76263 97.2687 7.76263 97.2072 7.76263C97.1253 7.76263 96.941 7.76263 96.5928 7.78312C96.2651 7.8036 95.8759 7.88553 95.4048 8.00842C94.9542 8.15179 94.4627 8.35661 93.9506 8.64336C93.4386 8.9301 92.9675 9.36022 92.5169 9.91324C92.0868 10.4662 91.7181 11.1626 91.4313 11.9819C91.1446 12.8217 91.0012 13.8458 91.0012 15.0747V22.0181H94.3398V15.0747C94.3398 14.665 94.3807 14.2554 94.4422 13.8458C94.5241 13.4156 94.647 13.047 94.8518 12.6988C95.0566 12.3506 95.3434 12.0638 95.712 11.8385C96.0807 11.6132 96.5518 11.4903 97.1663 11.4903C97.7602 11.4903 98.2518 11.6132 98.6205 11.8385C98.9892 12.0638 99.2759 12.3506 99.4602 12.6988C99.6651 13.047 99.8084 13.4361 99.8699 13.8458C99.9518 14.2759 99.9723 14.6855 99.9723 15.0747V22.0181H103.311V15.0747C103.311 13.8458 103.167 12.8217 102.881 11.9819C102.676 11.1422 102.307 10.4662 101.877 9.91324Z" fill="white"/>
                <path d="M125.677 8.97108C126.292 8.35662 127.09 8.02891 127.951 8.02891C128.381 8.02891 128.811 8.11083 129.2 8.29517L132.539 4.95662C133.665 3.83011 133.665 1.98674 132.539 0.86023C131.412 -0.266276 129.569 -0.266276 128.442 0.86023L119.614 9.68794L116.214 6.28794C115.088 5.16144 113.245 5.16144 112.118 6.28794C111.545 6.86144 111.258 7.59879 111.258 8.33613C111.258 9.07348 111.545 9.83132 112.118 10.3843L116.317 14.5831C116.972 13.4566 118.201 12.6783 119.614 12.6783C120.29 12.6783 120.925 12.8626 121.478 13.1699L125.677 8.97108Z" fill="white"/>
                <path d="M121.253 19.9699C120.761 20.1952 120.208 20.3385 119.614 20.3385C118.304 20.3385 117.136 19.6831 116.44 18.659L106.67 28.4289C105.543 29.5554 105.543 31.3988 106.67 32.5253C107.796 33.6518 109.64 33.6518 110.766 32.5253L119.594 23.6976L122.994 27.0976C124.12 28.2241 125.964 28.2241 127.09 27.0976C127.316 26.8723 127.48 26.6265 127.623 26.3602L121.253 19.9699Z" fill="white"/>
                <path d="M135.242 25.7458L126.189 16.6928L129.794 13.0879C130.286 12.5964 130.552 11.941 130.552 11.2446C130.552 10.5482 130.286 9.89277 129.794 9.4012C129.302 8.90964 128.647 8.64337 127.951 8.64337C127.254 8.64337 126.599 8.90964 126.128 9.4012L121.99 13.4976C122.871 14.194 123.445 15.2795 123.445 16.4879C123.445 17.7988 122.789 18.9458 121.806 19.6217L131.576 29.3916C132.58 30.3952 134.239 30.3952 135.242 29.3916C136.246 28.4084 136.246 26.7494 135.242 25.7458Z" fill="white"/>
                </g>
                <defs>
                <clipPath id="clip0_286_13570">
                <rect width="136" height="33.3855" fill="white"/>
                </clipPath>
                </defs>
            </svg>
            </div>
            
            <NavBar open={open} handleClick={handleClick}/>
            {
                window.screen.width > 768 ? (
                    <div className='btn-inter'>
                        <Button variant="light">{intl.formatMessage({id: 'app.components.header.label.contact-us'})}</Button>   
                        <div className="languages">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.99995 12.6566C10.124 12.6566 12.6565 10.124 12.6565 7.00001C12.6565 3.87598 10.124 1.34344 6.99995 1.34344C3.87591 1.34344 1.34338 3.87598 1.34338 7.00001C1.34338 10.124 3.87591 12.6566 6.99995 12.6566Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M1.34338 7H12.6565" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M7.00005 1.34344C8.41492 2.89241 9.21898 4.90257 9.26268 7.00001C9.21898 9.09745 8.41492 11.1076 7.00005 12.6566C5.58519 11.1076 4.78112 9.09745 4.73743 7.00001C4.78112 4.90257 5.58519 2.89241 7.00005 1.34344V1.34344Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>

                            <div className="languages1">
                                <button onClick={()=>{handleChange('es-ES')}} className={getCookie('lang')==='es-ES'?'activo':''}>ES</button>
                            </div>/
                            <div className="languages2">
                                <button onClick={()=>{handleChange('en-US')}} className={getCookie('lang')==='en-US'?'activo':''}>EN</button>
                            </div>
                        </div>
                        
                    </div> 
                ):(
                    <div className='btn-inter'>   
                        <div className="languages">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.99995 12.6566C10.124 12.6566 12.6565 10.124 12.6565 7.00001C12.6565 3.87598 10.124 1.34344 6.99995 1.34344C3.87591 1.34344 1.34338 3.87598 1.34338 7.00001C1.34338 10.124 3.87591 12.6566 6.99995 12.6566Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M1.34338 7H12.6565" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M7.00005 1.34344C8.41492 2.89241 9.21898 4.90257 9.26268 7.00001C9.21898 9.09745 8.41492 11.1076 7.00005 12.6566C5.58519 11.1076 4.78112 9.09745 4.73743 7.00001C4.78112 4.90257 5.58519 2.89241 7.00005 1.34344V1.34344Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>

                            <div className="languages1">
                                <button onClick={()=>{handleChange('es-ES')}} className={getCookie('lang')==='es-ES'?'activo':''}>ES</button>
                            </div>/
                            <div className="languages2">
                                <button onClick={()=>{handleChange('en-US')}} className={getCookie('lang')==='en-US'?'activo':''}>EN</button>
                            </div>
                        </div>
                        <Hamburger open={open} handleClick={handleClick}/>
                    </div>
                )
            }
            
        </div>
    )
}

export default Header;