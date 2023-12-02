import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Chip,
  IconButton
} from "@material-tailwind/react";
import { EllipsisVerticalIcon, TrashIcon } from "@heroicons/react/24/outline";
import { authorsTableData, projectsTableData } from "@/data";
import bookService from "@/services/bookService";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export function List() {

  const [allBooks, setAllBooks] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const res = await bookService.getAllBooks();
      setAllBooks(res.books);
      console.log(res);
    }

    fetchData();
  }, [])

  const handleEdit = (id) => {
    navigate(`/update-product/${id}`)
  }

  const handleDelete = async (id) => {
    const tempArr = allBooks.filter(item => item._id !== id);
    setAllBooks(tempArr)

    const res = await bookService.deleteBookById(id);

    console.log(res);

  }

  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Link to="/products/add-product" >Add Product</Link>
      <Card>
        <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Authors Table
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["Book Title", "Author", "Available", "Shelf Number", "", ""].map((el, index) => (
                  <th
                    key={index}
                    className="border-b border-blue-gray-50 py-3 px-5 text-left"
                  >
                    <Typography
                      variant="small"
                      className="text-[11px] font-bold uppercase text-blue-gray-400"
                    >
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {allBooks.map(
                (item, key) => {
                  const className = `py-3 px-5 ${key === authorsTableData.length - 1
                    ? ""
                    : "border-b border-blue-gray-50"
                    }`;

                  return (
                    <tr key={item._id}>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          {/* <Avatar src={img} alt={name} size="sm" variant="rounded" /> */}
                          <div>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold"
                            >
                              {item.title}
                            </Typography>
                            <Typography className="text-xs font-normal text-blue-gray-500">
                              {item.bookNumber}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {item.author}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Chip
                          variant="gradient"
                          color={Number(item.lendedBooks) === Number(item.sku) ? "green" : "blue-gray"}
                          value={Number(item.lendedBooks) === Number(item.sku) ? "NO" : "YES"}
                          className="py-0.5 px-2 text-[11px] font-medium w-fit"
                        />
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {item.shelfNumber}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography
                          as="a"
                          href="#"
                          onClick={() => handleEdit(item._id)}
                          className="text-xs font-semibold text-blue-gray-600"
                        >
                          Edit
                        </Typography>
                      </td>
                      <td className={className}>
                        <IconButton onClick={() => handleDelete(item._id)} variant="text" color="blue-gray">
                          <TrashIcon className="h-5 w-5 text-blue-gray-500" />
                        </IconButton>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>
      {/* <Card>
          <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
            <Typography variant="h6" color="white">
              Projects Table
            </Typography>
          </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {["companies", "members", "budget", "completion", ""].map(
                    (el) => (
                      <th
                        key={el}
                        className="border-b border-blue-gray-50 py-3 px-5 text-left"
                      >
                        <Typography
                          variant="small"
                          className="text-[11px] font-bold uppercase text-blue-gray-400"
                        >
                          {el}
                        </Typography>
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {projectsTableData.map(
                  ({ img, name, members, budget, completion }, key) => {
                    const className = `py-3 px-5 ${
                      key === projectsTableData.length - 1
                        ? ""
                        : "border-b border-blue-gray-50"
                    }`;
  
                    return (
                      <tr key={name}>
                        <td className={className}>
                          <div className="flex items-center gap-4">
                            <Avatar src={img} alt={name} size="sm" />
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-bold"
                            >
                              {name}
                            </Typography>
                          </div>
                        </td>
                        <td className={className}>
                          {members.map(({ img, name }, key) => (
                            <Tooltip key={name} content={name}>
                              <Avatar
                                src={img}
                                alt={name}
                                size="xs"
                                variant="circular"
                                className={`cursor-pointer border-2 border-white ${
                                  key === 0 ? "" : "-ml-2.5"
                                }`}
                              />
                            </Tooltip>
                          ))}
                        </td>
                        <td className={className}>
                          <Typography
                            variant="small"
                            className="text-xs font-medium text-blue-gray-600"
                          >
                            {budget}
                          </Typography>
                        </td>
                        <td className={className}>
                          <div className="w-10/12">
                            <Typography
                              variant="small"
                              className="mb-1 block text-xs font-medium text-blue-gray-600"
                            >
                              {completion}%
                            </Typography>
                            <Progress
                              value={completion}
                              variant="gradient"
                              color={completion === 100 ? "green" : "gray"}
                              className="h-1"
                            />
                          </div>
                        </td>
                        <td className={className}>
                          <Typography
                            as="a"
                            href="#"
                            className="text-xs font-semibold text-blue-gray-600"
                          >
                            <EllipsisVerticalIcon
                              strokeWidth={2}
                              className="h-5 w-5 text-inherit"
                            />
                          </Typography>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </CardBody>
        </Card> */}
    </div>
  );
}

export default List;
