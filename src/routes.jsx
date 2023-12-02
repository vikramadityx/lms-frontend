import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
  ShoppingBagIcon,
  TagIcon,
  ClipboardDocumentCheckIcon
} from "@heroicons/react/24/solid";
import { Home, Profile, Tables, Notifications } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";
import { List, AddProduct, CreateCategory } from "@/pages/products";
import { Products } from "@/layouts";
// import Products from "./pages/dashboard/products";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
        path: "/profile",
        element: <Profile />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "tables",
        path: "/tables",
        element: <Tables />,
      },
      {
        icon: <InformationCircleIcon {...icon} />,
        name: "notifications",
        path: "/notifications",
        element: <Notifications />,
      },
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ServerStackIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <RectangleStackIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
  {
    title: "Product management",
    layout: "products",
    pages: [
      {
        icon: <ShoppingBagIcon {...icon} />,
        name: "list",
        path: "/list",
        element: <List />,
      },
      {
        icon: <ClipboardDocumentCheckIcon {...icon} />,
        name: "add product",
        path: "/add-product",
        element: <AddProduct />,
      },
      {
        icon: <TagIcon {...icon} />,
        name: "create category",
        path: "/create-category",
        element: <CreateCategory />,
      }
    ],
  }
];

export default routes;
