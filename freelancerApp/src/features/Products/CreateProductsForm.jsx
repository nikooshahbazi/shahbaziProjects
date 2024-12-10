import TextFied from "../../ui/TextFied";
import { useForm } from "react-hook-form";

function CreateProductsForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <TextFied
                label="Product Name"
                name="title"
                register={register}
                required
                validationSchema={{
                    required: "name is important",
                    minLength: {
                        value: 5,
                        message: "name length is invalid",
                    },
                }}
                errors={errors}
            />

            <TextFied
                label="Description"
                name="description"
                register={register}
                required
                validationSchema={{
                    required: "Description is important",
                    minLength: {
                        value: 15,
                        message: "Description length is invalid",
                    },
                }}
                errors={errors}
            />
            <TextFied
                label="Price"
                name="price"
                register={register}
                required
                validationSchema={{
                    required: "price is important",
                    pattern: {
                        value: /[0-9]/,
                        message: "please set a number",
                    },
                }}
                errors={errors}
            />
            <button type="submit" className="btn btn--primary w-full">
                Confirm
            </button>
        </form>
    );
}

export default CreateProductsForm;
