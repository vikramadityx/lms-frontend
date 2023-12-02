import {
    Card,
    Input,
    Button,
    Typography,
    Select,
    Option
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import categoryService from '../../services/categoryService'

export function CreateCategory() {

    const [parentCategory, setParentCategory] = useState("");
    const [category, setCategory] = useState("");
    const [allParentCategories, setAllParentCategories] = useState([])

    useEffect(() => {
        const getAllCategories = async () => {
            const res = await categoryService.getAllCategories()
            setAllParentCategories(res.data);
        }
        getAllCategories();
    }, [])

    const handleCategorySubmit = async () => {
        const res = await categoryService.createCategory({
            name: category,
            parent_id: parentCategory,
            created_by: null
        })

        if (res.sucess) {
            alert("Category Added");
            setCategory("");
            setParentCategory("");
        }

        console.log(res);
    }

    return (
        <section className="m-8 flex justify-center gap-4">
            <div className="w-full lg:w-3/5">
                <div className="text-center">
                    <Typography variant="h2" className="font-bold mb-4">Create Category</Typography>
                    <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">Enter Category details below.</Typography>
                </div>
                <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
                    <div className="mb-1 flex flex-col gap-6">
                        <Select
                            label="Select a Category"
                            size="lg"
                            onChange={(e) => { setParentCategory(e); console.log(e) }}
                        >
                            {
                                allParentCategories.map((item) => {
                                    return (
                                        <Option value={item.category_id} key={item.category_id}>{item.category_name}</Option>
                                    )
                                })
                            }
                        </Select>
                        <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
                            Category Name
                        </Typography>
                        <Input
                            onChange={(e) => setCategory(e.target.value)}
                            size="lg"
                            placeholder="Category Name"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
                            Display Picture
                        </Typography>
                        <Input
                            type="file"
                            size="lg"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                    </div>
                    <Button onClick={handleCategorySubmit} className="mt-6" fullWidth>
                        Add Category
                    </Button>
                </form>
            </div>
        </section>
    );
}

export default CreateCategory;
