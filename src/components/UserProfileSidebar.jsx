import React from "react";
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import {
    UserCircleIcon,
    PowerIcon,
    InboxIcon
} from "@heroicons/react/24/solid";
import { Outlet } from "react-router-dom";

const UserProfileSidebar = ({ children }) => {

    const HandleLogout = () => {
        console.log("hi");
        localStorage.clear();
        navigate('/');
    }

    return (
        <div className="flex h-full">
            {/* Sidebar */}
            <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5" style={{ backgroundColor: '#fce2dc' }}>
                <List>
                    <ListItem>
                        <ListItemPrefix>
                            <UserCircleIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        <a href="/userProfile">Profile</a>
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>

                        </ListItemPrefix>
                        <Typography color="blue-gray" className="mr-auto font-normal">
                            <a href='/userProfile/bookings'>Bookings</a>
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <InboxIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Inbox
                        <ListItemSuffix>
                            <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
                        </ListItemSuffix>
                    </ListItem>
                    <ListItem className="bg-red-700 text-white">
                        <ListItemPrefix>
                            <PowerIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        <a onClick={HandleLogout}>Log Out</a>
                    </ListItem>
                </List>
            </Card>
            {/* Main Content (renders the Outlet for child routes) */}
            <main className="flex-1 p-6">
                <Outlet />{children}
            </main>
        </div>
    );
};

export default UserProfileSidebar;
