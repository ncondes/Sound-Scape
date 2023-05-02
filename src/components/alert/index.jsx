
export const Alert = ({alertMessage }) => {

    const { message, backgroundColor } = alertMessage
    const boxStyles = `block w-full text-white ${backgroundColor} text-center font-semibold p-4 mb-3`
    return (
          <div className={boxStyles}>{message}</div>
    )
}
