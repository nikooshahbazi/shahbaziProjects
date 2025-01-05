import { TagsInput } from "react-tag-input-component";
import RHFSelect from "../../ui/RHFSelect";
import TextFied from "../../ui/TextFied";
import { useForm } from "react-hook-form";
import { useState } from "react";
import useCategories from "../Hooks/useCategoryProduct";
import useCreateProduct from "../Hooks/useCreateProduct";
import Loading from "../../ui/Loading";

function CreateProductsForm({ onClose }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const [tags, setTags] = useState([]);
    const { categories } = useCategories();
    const { createProduct, isCreating } = useCreateProduct();
    const onSubmit = (data) => {
        const newProduct = {
            ...data,
            tags,
        }; 
        console.log(data);
        createProduct(newProduct, {
            onSuccess: () => {
                onClose();
                reset();
            },
        });
    };

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
            <RHFSelect
                label="Category"
                name="category"
                register={register}
                options={categories}
                required
            />
            <div>
                <label className="mb-2 block text-secondary-700">Tag</label>
                <TagsInput value={tags} onChange={setTags} name="tags" />
            </div>
            <div className="!mt-8">
                {isCreating ? (
                    <Loading />
                ) : (
                    <button type="submit" className="btn btn--primary w-full">
                        Confirm
                    </button>
                )}
            </div>
        </form>
    );
}

export default CreateProductsForm;
