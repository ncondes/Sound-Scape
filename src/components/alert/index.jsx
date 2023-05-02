
export const Alert = ({alertMessage, backgroundColor }) => {
    const boxStyles = `block w-full text-white ${backgroundColor} text-center font-semibold p-4 mb-3`
    return (
          <div className={boxStyles}>{alertMessage}</div>
    )
}
