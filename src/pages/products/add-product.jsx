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
import bookService from "@/services/bookService";

export function AddProduct() {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [instituteName, setInstituteName] = useState('');
    const [bookNumber, setBookNumber] = useState('');
    const [images, setImages] = useState([]);
    const [shelfNumber, setShelfNumber] = useState('');
    const [sku, setSku] = useState('');

    // useEffect(() => {
    //     const getAllCategories = async () => {
    //         const res = await categoryService.getAllCategories()
    //         setAllCategories(res.data);
    //     }
    //     getAllCategories();
    // }, [])

    const handleSubmit = async () => {
        try {
            const res = await bookService.addBook(
                {
                    title,
                    author,
                    instituteName: "VIT Chennai",
                    bookNumber,
                    images: [],
                    shelfNumber,
                    sku,
                }
            )
            if (res) {
                alert("Product Added");
                setTitle("");
                setAuthor("");
                setSku("");
                setBookNumber("");
                setShelfNumber("")
            }
            console.log(res);
        }
        catch (e) {
            console.log(e)
        }

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
                            Book Title
                        </Typography>
                        <Input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            size="lg"
                            placeholder="Book Title"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        {/* <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
                            Category
                        </Typography> */}
                        <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
                            Author
                        </Typography>
                        <Input
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            size="lg"
                            placeholder="Author"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
                            Book Number
                        </Typography>
                        <Input
                            value={bookNumber}
                            onChange={(e) => setBookNumber(e.target.value)}
                            size="lg"
                            placeholder="Book Number"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
                            Shelf Number
                        </Typography>
                        <Input
                            value={shelfNumber}
                            onChange={(e) => setShelfNumber(e.target.value)}
                            size="lg"
                            placeholder="Shelf Number"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
                            Quantity
                        </Typography>
                        <Input
                            value={sku}
                            onChange={(e) => setSku(e.target.value)}
                            size="lg"
                            placeholder="Quantity"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        {/* <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
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
                        /> */}
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
