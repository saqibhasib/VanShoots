import {
    AiOutlineHome,
    AiOutlineUser,
    AiOutlineUpload
} from 'react-icons/ai';
import { SidebarItem } from '../models/SidebarItem';

export const SidebarData: SidebarItem[] = [
    {
        title: 'Home',
        path: '/home',
        icon: <AiOutlineHome />,
    },
    {
        title: 'Upload',
        path: '/upload',
        icon: <AiOutlineUpload />
    },
    {
        title: 'Profile',
        path: '/profile',
        icon: <AiOutlineUser />
    },
];