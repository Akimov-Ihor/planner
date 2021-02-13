import React from 'react'
import './Main.css'

const Main = () => {
   return (
      <div className="main_wrapper">
         <div className='main_block'>
            <h2>About me</h2>
            <hr />
            <div className='main_info'>
               <div className='main_info_user'>
                  <div className='main_info_user_photo'>
                     <img src="https://blacksea7.com/images/avatar2.png" alt="personal_photo"/>
                  </div>
                  <div className='main_info_user_contacts'>
                     <div>Name</div>
                     <div>Email</div>
                     <div>Number</div>
                  </div>
               </div>
               <div className='main_info_user_status'>
                  <div>Status</div>
                  <div>Personal Status</div>
               </div>
            </div>


         </div>
      </div>
   )
}

export default Main