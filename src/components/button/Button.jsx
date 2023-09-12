export const Button = ({ variant, children, ...attributes }) => {
  let classes = ''

  switch (variant) {
    case 'contained':
      classes =
        'rounded text-white bg-gradient-to-r from-violet-500 to-indigo-400 hover:bg-gradient-to-r hover:from-violet-600 hover:to-indigo-500'
      break
    case 'outlined':
      classes =
        'rounded text-violet-500 to-indigo-400 bg-transparent border-2 border-violet-500 hover:text-violet-600 hover:border-violet-600'
      break
    case 'text':
      classes = 'text-violet-500 hover:text-violet-600'
      break
  }

  // add classes from attributes
  if (attributes.className) {
    classes += ` ${attributes.className}`
  }

  return (
    <button {...attributes} className={classes}>
      {children}
    </button>
  )
}
