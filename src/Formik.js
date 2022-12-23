import './Formik.scss'
import formik, {useFormik} from "formik";
import * as Yup from 'yup';

// const validate = (values) => {
//     const errors = {};
//
//     if (!values.name) {
//         errors.name = 'Required';
//     } else if (values.name.length < 2) {
//         errors.name = 'min 2 symbols'
//     }
//
//     if (!values.email) {
//         errors.email = 'Required';
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//         errors.email = 'Invalid email address';
//     }
//
//     return errors;
// }


const Formik = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            amount: '',
            currency: '',
            text: '',
            terms: false,
        },

        validationSchema: Yup.object({
            name: Yup.string()
                .min(2, 'Min 2 symbols!')
                .required('Required!'),
            email: Yup.string()
               .email('Invalid email address!')
               .required('Required!'),
            amount: Yup.number()
                .min(5, 'Min 5 symbols!')
                .required('Required!'),
            currency: Yup.string()
                .required('Choose currency!'),
            text: Yup.string(),
            terms: Yup.boolean()
                .required('Сonsent required')
                .oneOf([true], 'Сonsent required')


        }),
        onSubmit: values => console.log(JSON.stringify(values, null, 2)),

    });


    return (
        <form
            onSubmit={formik.handleSubmit}
            className="form">
            <h2>Отправить пожертвование</h2>
            <label htmlFor="name">Ваше имя</label>
            <input
                id="name"
                name="name"
                type="text"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />

            {formik.errors.name && formik.touched.name ? <div className={'error'}>{formik.errors.name}</div> : null}

            <label htmlFor="email">Ваша почта</label>
            <input
                id="email"
                name="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />

            {formik.errors.email && formik.touched.email  ? <div>{formik.errors.email}</div> : null}

            <label htmlFor="amount">Количество</label>
            <input
                id="amount"
                name="amount"
                type="number"
                value={formik.values.amount}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />

            {formik.errors.amount && formik.touched.amount  ? <div>{formik.errors.amount}</div> : null}

            <label htmlFor="currency">Валюта</label>
            <select
                value={formik.values.currency}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="currency"
                name="currency">
                <option value="">Выберите валюту</option>
                <option value="USD">USD</option>
                <option value="UAH">UAH</option>
                <option value="RUB">RUB</option>
            </select>

            {formik.errors.currency && formik.touched.currency  ? <div>{formik.errors.currency}</div> : null}

            <label htmlFor="text">Ваше сообщение</label>
            <textarea
                value={formik.values.text}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="text"
                name="text"
            />

            {formik.errors.text && formik.touched.text  ? <div>{formik.errors.text}</div> : null}

            <label className="checkbox">
                <input
                    value={formik.values.terms}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="terms"
                    type="checkbox"/>
                Соглашаетесь с политикой конфиденциальности?
            </label>

            {formik.errors.terms && formik.touched.terms  ? <div>{formik.errors.terms}</div> : null}

            <button type="submit">Отправить</button>
        </form>
    )
}

export default Formik;