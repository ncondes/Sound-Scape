import { Login } from './Login'
import { Register } from './Register'

export const AuthModal = () => {
   return (
      <div className="fixed z-10 inset-0 overflow-y-auto" id="modal">
         <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
               <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
            </div>

            {/*  this element is to trick the browser into centering the modal contents */}
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
               {/* add margin if you want to see some of the overlay behind the modal */}
               <div className="py-4 text-left px-6">
                  {/* title */}
                  <div className="flex justify-between items-center pb-4">
                     <p className="text-2xl font-bold">Your Account</p>
                     {/* modal close button */}
                     <div
                        className="modal-close cursor-pointer z-50"
                        onClick={() => console.log('TODO: close modal')}
                     >
                        <i className="fas fa-times"></i>
                     </div>
                  </div>

                  {/* <!-- tabs --> */}
                  <ul className="flex flex-wrap mb-4">
                     <li className="flex-auto text-center">
                        <a
                           className="block rounded py-3 px-4 transition"
                           href="#"
                           onClick={() => console.log('TODO: set state to login')}
                        >
                           Login
                        </a>
                     </li>
                     <li className="flex-auto text-center">
                        <a
                           className="block rounded py-3 px-4 transition"
                           href="#"
                           onClick={() => console.log('TODO: set state to register')}
                        >
                           Register
                        </a>
                     </li>
                  </ul>

                  <Login />
                  <Register />
               </div>
            </div>
         </div>
      </div>
   )
}
