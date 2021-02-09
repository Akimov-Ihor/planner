import React from 'react'
import './Main.css'

const Main = () => {
   return (
      <div className="main_wrapper">
         <div className='main_wrapper_info'>
            <h2>About me</h2>
            <hr />
            <div className='main_wrapper_info_user'>
               <div className='main_user_personalInfo'>
                  <div className='main_user_personalInfo_photo'>
                     <img src="https://blacksea7.com/images/avatar2.png" alt="personal_photo"/>
                  </div>
                  <div className='main_user_personalInfo_contacts'>
                     <div>Name</div>
                     <div>Email</div>
                     <div>Number</div>
                  </div>
               </div>
               <div className='main_user_status'>
                  <div>Status</div>
                  <div>Personal Status</div>
               </div>
            </div>


         </div>
      </div>
   )
}

export default Main