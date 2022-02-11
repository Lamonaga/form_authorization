import {Input} from "../components";

import {useFormik} from "formik";

import * as yup from 'yup'
import {useDispatch, useSelector} from "react-redux";

import {FETCH_MESSAGES_REQUEST} from "../../src/store/reqReducer";


const Join = () => {
	const dispatch = useDispatch()
	const data = useSelector(state => state.regUser)

	const handleReq = () => {
		dispatch({type: FETCH_MESSAGES_REQUEST, payload: formik.values})
	}

	const validationsSchema = yup.object().shape({
		name: yup.string().required('Required'),
		surname: yup.string().required('Required'),
		email: yup.string().required('Required'),
		password: yup.string().required('Required'),
		confirmPassword: yup.string().oneOf([yup.ref('password')], 'Password mismatch').required('Required'),
	})

	const formik = useFormik({
		initialValues: {
			name: '', surname: '', email: '', password: '', confirmPassword: '',
		}, onSubmit: handleReq, validateOnBlur: true, validationSchema: validationsSchema,
	});

	return (
		<div className="form_auth">
			<form className='form' onSubmit={formik.handleSubmit}>
				<label htmlFor={'name'}>Name</label>{formik.touched.name && formik.errors.name && (
				<p className='error'>{formik.errors.name}</p>)}
				<p>
					<Input
						id="name"
						name="name"
						type="text"
						onChange={formik.handleChange}
						value={formik.values.name}
					/>
				</p>

				<label htmlFor="surname">Surname</label>{formik.touched.surname && formik.errors.surname && (
				<p className='error'>{formik.errors.surname}</p>)}
				<p>
					<Input
						id="surname"
						name="surname"
						type="text"
						onChange={formik.handleChange}
						value={formik.values.surname}
					/>
				</p>

				<label htmlFor="email">Email Address</label>{formik.touched.email && formik.errors.email && (
				<p className='error'>{formik.errors.email}</p>)}
				<p>
					<Input
						id="email"
						name="email"
						type="email"
						onChange={formik.handleChange}
						value={formik.values.email}
					/>
				</p>

				<label htmlFor="password">Password</label>{formik.touched.password && formik.errors.password && (
				<p className='error'>{formik.errors.password}</p>)}
				<p>
					<Input
						id="password"
						name="password"
						type="password"
						onChange={formik.handleChange}
						value={formik.values.password}
					/>
				</p>

				<label
					htmlFor="confirmPassword">ConfirmPassword</label>{formik.touched.confirmPassword && formik.errors.confirmPassword && (
				<p className='error'>{formik.errors.confirmPassword}</p>)}
				<p>
					<Input
						id="confirmPassword"
						name="confirmPassword"
						type="password"
						onChange={formik.handleChange}
						value={formik.values.confirmPassword}
					/>
				</p>

				<button className='btn_submit' type="submit">Submit</button>
			</form>
			{data.statusError === 'auth/email-already-in-use' ? <div className='error'>This email is not registered</div> : <></>}
			{data.statusError === 'auth/weak-password' ? <div className='error'>Password must be more than 6 characters</div> : <></>}
		</div>
	)
}

export default Join