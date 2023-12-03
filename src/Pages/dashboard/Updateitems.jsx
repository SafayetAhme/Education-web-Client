import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import UseAxiosPublic from "../../hooks/UseAxiosPublic";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import { FaUtensils } from "react-icons/fa";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Updateitems = () => {
    const {category, image, title, name, price, short_description, total_enrollment, _id} = useLoaderData();

    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = UseAxiosPublic();
    const axiosSecure = UseAxiosSecure();
    const onSubmit = async (data) => {
        console.log(data)
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            const cartItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                short_description: data.short_description,
                title: data.title,
                total_enrollment: data.total_enrollment,
                image: res.data.data.display_url
            }
            const cartRes = await axiosSecure.patch(`/cart/${_id}`, cartItem);
            console.log(cartRes.data)
            if (cartRes.data.modifiedCount > 0) {
                // reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is updated to the items`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
        console.log('with image url', res.data);
    }



    return (
        <div>
            <div className="text-center py-12">
                <h1 className="text-2xl pb-2 text-green-600 font-bold">Update your Items</h1>
                <p>if you want to update you can item.</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full my-6">
                    <label className="label">
                        <span className="label-text">Items name</span>
                    </label>
                    <input
                        type="text"
                        defaultValue={name}
                        placeholder="Items name"
                        {...register('name', { required: true })}
                        required
                        className="input input-bordered w-full" />
                </div>
                <div className="flex gap-6">
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Enrollment</span>
                        </label>
                        <input
                            type="text"
                            defaultValue={total_enrollment}
                            placeholder="enrollment"
                            {...register('total_enrollment', { required: true })}
                            className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">short-descriptions</span>
                        </label>
                        <input
                            type="text"
                            defaultValue={short_description}
                            placeholder="Type here"
                            {...register('short_description', { required: true })}
                            className="input input-bordered w-full" />
                    </div>
                </div>
                <div className="flex gap-6">
                    {/* category */}
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select defaultValue={category} {...register('category', { required: true })}
                            className="select select-bordered w-full">
                            <option disabled value="default">Select a category</option>
                            <option value="Programming">Programming</option>
                            <option value="DataScience">DataScience</option>
                            <option value="GraphicDesign">GraphicDesign</option>
                            <option value="PhotoGraphy">PhotoGraphy</option>
                            <option value="DigitalMarketing">DigitalMarketing</option>
                        </select>
                    </div>

                    {/* price */}
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input
                            type="number"
                            defaultValue={price}
                            placeholder="Price"
                            {...register('price', { required: true })}
                            className="input input-bordered w-full" />
                    </div>
                </div>
                {/* recipi */}
                <label className="form-control">
                    <div className="label">
                        <span className="label-text">Recipi Details</span>
                    </div>
                    <textarea
                    defaultValue={title}
                        {...register('title', { required: true })}
                        className="textarea textarea-bordered h-24"
                        placeholder="Bio"></textarea>
                </label>

                <div className="form-control w-full my-6">
                    <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                </div>

                <div className="text-center">
                    <button className="btn w-[300px]">
                        Update items <FaUtensils className="ml-4"></FaUtensils>
                    </button>
                </div>

            </form>

        </div>
    )
}

export default Updateitems; 