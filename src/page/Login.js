import {Input} from "../components";
import {useFormik} from "formik";

import * as yup from 'yup'

import {useDispatch, useSelector} from "react-redux";
import {FETCH_SIGNIN_REQUEST} from "../../src/store/reqReducer";
import {useEffect} from "react";
import ErrorAuth from "../components/ErrorAuth";


const Login = () => {

	const dispatch = useDispatch()
	const data = useSelector(state => state.regUser)

	const handleReq = () => {
		dispatch({type: FETCH_SIGNIN_REQUEST, payload: formik.values})
		formik.setStatus(undefined)
	}

	useEffect(() => {
		formik.setStatus(data.statusError)
	}, [data.statusError])

	const validationsSchema = yup.object().shape({
		email: yup.string().required('Required'),
		password: yup.string().required('Required'),
	})

	const formik = useFormik({
		initialValues: {
			email: '', password: '',
		}, onSubmit: handleReq, validateOnBlur: true, validationSchema: validationsSchema,
	});

	return (
		<div className="form_auth">
			<form className='form' onSubmit={formik.handleSubmit}>

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

				<button className='btn_submit' type="submit">Submit</button>
			</form>
			<ErrorAuth status={formik.status}/>
		</div>
	)
}

export default Login