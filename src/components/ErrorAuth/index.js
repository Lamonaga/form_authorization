const ErrorAuth = ({status}) => {

	const error = () => {
		switch (status) {
			case 'auth/email-already-in-use':
				return (<div className='error'>This email is not registered</div>)
			case 'auth/invalid-email':
				return (<div className='error'>Please input a valid email.</div>)
			case 'auth/weak-password':
				return (<div className='error'>Password must be more than 6 characters</div>)
			case 'auth/wrong-password':
				return (<div className='error'>Incorrect email or password</div>)
			case 'auth/user-not-found':
				return (<div className='error'>Incorrect email or password</div>)
			case !null:
				return (<div className='error'>Authorisation Error</div>)
		}
	}

	return (
		<>
			{error()}
		</>
	)
}

export default ErrorAuth