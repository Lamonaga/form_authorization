import {Input} from "../components";
import {useFormik} from "formik";

import * as yup from 'yup'
import {useDispatch, useSelector} from "react-redux";
import {FETCH_MESSAGES_REQUEST} from "../../src/store/reqReducer";


const Login = () => {

	const dispatch = useDispatch()
	const reqData = useSelector(state => state.reqData.data)

	const handleReq = () => {
		dispatch({type: FETCH_MESSAGES_REQUEST, payload: {data: {email: formik.values.email, password: formik.values.password}}})
	}

	const validationsSchema = yup.object().shape({
		email: yup.string().required('Required'),
		password: yup.string().required('Required'),
	})

	const formik = useFormik({
		initialValues: {
			email: '', password: '',
		}, onSubmit: handleReq, validateOnBlur: true, validationSchema: validationsSchema,
	});


	console.log(reqData)

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
		</div>
	)
}

export default Login