import {
    Card,
    Input,
    Button,
    Typography,
    Select,
    Option
} from "@material-tailwind/react";
// import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import categoryService from '../../services/categoryService'
import productService from '../../services/productService'


export function AddProduct() {

    const [category, setCategory] = useState("");
    const [allCategories, setAllCategories] = useState([]);
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [file, setFile] = useState("");

    useEffect(() => {
        const getAllCategories = async () => {
            const res = await categoryService.getAllCategories()
            setAllCategories(res.data);
        }
        getAllCategories();
    }, [])

    const handleSubmit = async () => {
        const res = await productService.createProduct(
            {
                name: name,
                product_sku: quantity,
                category_id: category,
                price: price,
                image_url: file
            }
        )
        if (res.sucess) {
            alert("Product Added");
            setName("");
            setCategory("");
            setQuantity("");
            setPrice("");
            setDescription("")
        }
        console.log(res);
    }

    return (
        <section className="m-8 flex justify-center gap-4">
            <div className="w-full lg:w-3/5">
                <div className="text-center">
                    <Typography variant="h2" className="font-bold mb-4">Add Product</Typography>
                    <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">Enter product details below.</Typography>
                </div>
                <form onSubmit={(e) => {
                    e.preventDefault(); // Prevent form submission
                }} className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
                    <div className="mb-1 flex flex-col gap-[20px]">
                        <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
                            Product Name
                        </Typography>
                        <Input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            size="lg"
                            placeholder="Product Name"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        {/* <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
                            Category
                        </Typography> */}
                        <Select
                            label="Select a Category"
                            // value={category}
                            size="lg"
                            onChange={(e) => setCategory(e)}
                        >
                            {/* <Option value="">
                                Choose a category
                            </Option> */}
                            {
                                allCategories.map((item) => {
                                    return (
                                        <Option value={item.category_id} key={item.category_id}>{item.category_name}</Option>
                                    )
                                })
                            }
                        </Select>
                        <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
                            Quantity
                        </Typography>
                        <Input
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            size="lg"
                            placeholder="Quantity"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
                            Price
                        </Typography>
                        <Input
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            size="lg"
                            placeholder="Price"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
                            Description
                        </Typography>
                        <Input
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            size="lg"
                            placeholder="Description"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
                            Display Picture
                        </Typography>
                        <Input
                            value={setFile}
                            onChange={(e) => setFile(e.target.files[0])}
                            type="file"
                            size="lg"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                    </div>
                    <Button onClick={handleSubmit} className="mt-6" fullWidth>
                        Add Product
                    </Button>
                </form>
            </div>
        </section>
    );
}

export default AddProduct;
