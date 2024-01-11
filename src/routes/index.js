// Layout
import { HeaderOnly } from '~/components/Layouts';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';

// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/tiktok-ui', component: Home },
    { path: '/following', component: Following },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/@:nickname', component: Profile },
];

// Private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
