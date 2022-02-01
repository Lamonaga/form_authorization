import './App.css';
import {useFormik} from "formik";
import { Input } from "./components";

function App() {
    const formik = useFormik({
        initialValues: {
            name: '', surname: '', email: '', password: '', confirmPassword: '',
        }, onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (<div className="App">
        <form onSubmit={formik.handleSubmit}>

            <label htmlFor={'name'}>Name</label>
            <p>
                <Input id="name"
                       name="name"
                       type="text"
                       onChange={formik.handleChange}
                       value={formik.values.name}/>
            </p>
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
            <button type="submit">Submit</button>
        </form>
    </div>);
}

export default App;
