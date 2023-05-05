
export const Alert = ({alertMessage, backgroundColor }) => {
    return (
       <div
          className={`block w-full text-white ${backgroundColor} text-center font-semibold p-4 mb-3`}
       >
          {alertMessage}
       </div>
    )
}
