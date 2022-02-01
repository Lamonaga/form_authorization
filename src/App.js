import './App.css';
import {useFormik} from "formik";
import {Input} from "./components";
import * as yup from 'yup'
import {logDOM} from "@testing-library/react";

function App() {

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
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
        validateOnBlur: true,
        validationSchema: validationsSchema,


    });


    return (<div className="App">
        <form onSubmit={formik.handleSubmit}>

            <label htmlFor={'name'}>Name</label>
            <p>
                <Input id="name"
                       name="name"
                       type="text"
                       onChange={formik.handleChange}
                       value={formik.values.name}
                />
            </p>
            {formik.touched.name && formik.errors.name && (<p>{formik.errors.name}</p>)}
            <label htmlFor="surname">Surname</label>
            <p>
                <Input
                    id="surname"
                    name="surname"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.surname}
                />
            </p>
            {formik.touched.surname && formik.errors.surname && (<p>{formik.errors.surname}</p>)}
            <label htmlFor="email">Email Address</label>
            <p>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
            </p>
            {formik.touched.email && formik.errors.email && (<p>{formik.errors.email}</p>)}
            <label htmlFor="password">Password</label>
            <p>
                <Input
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
            </p>
            {formik.touched.password && formik.errors.password && (<p>{formik.errors.password}</p>)}
            <label htmlFor="confirmPassword">ConfirmPassword</label>
            <p>
                <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.confirmPassword}
                />
            </p>
            {formik.touched.confirmPassword && formik.errors.confirmPassword && (<p>{formik.errors.confirmPassword}</p>)}
            <button type="submit">Submit</button>
        </form>
    </div>);
}

export default App;
