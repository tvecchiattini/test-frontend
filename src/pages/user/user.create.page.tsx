import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { UserBase } from "../../models/user";
import { useNavigate } from "react-router-dom";

const schema = yup.object({
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    email: yup.string().email().required(),
    country: yup.string().max(2).required(),
    state: yup.string().max(2).required(),
    age: yup.number().positive().integer(),
})

function UserCreatePage() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<UserBase>({
        resolver: yupResolver(schema)
    });

    const onSubmit = async (data: UserBase) => {
        await fetch(`http://0.0.0.0:3000/users`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'content-type': 'application/json; charset=utf-8'
            }
        })
        navigate("/users")
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <p>firstname</p>
            <input {...register("firstname")} />
            <p>{errors.firstname?.message}</p>

            <p>lastname</p>
            <input {...register("lastname")} />
            <p>{errors.lastname?.message}</p>

            <p>email</p>
            <input {...register("email")} />
            <p>{errors.email?.message}</p>

            <p>country</p>
            <input {...register("country")} />
            <p>{errors.country?.message}</p>

            <p>state</p>
            <input {...register("state")} />
            <p>{errors.state?.message}</p>

            <input type="submit" />
        </form>
    );
}

export default UserCreatePage
