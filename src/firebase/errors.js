export const dictionary = {
  'Firebase: Error (auth/user-not-found).': 'Email not found.',
  'Firebase: Error (auth/wrong-password).': 'Invalid login credentials.',
  'Firebase: Error (auth/email-already-in-use).': 'Email already in use.',
}

export const getFirebaseErrorMessage = (message) => {
  return dictionary[message] ?? 'An unexpected error ocurred. Please try again later.'
}
