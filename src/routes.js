import {
    DashboardView,
    InfoView,
    ProfileView,
    SearchView,
    BreadView,
    KotbarView,
    MaterialView
} from './views';

import {
  Dashboard,
  HelpOutline,
  AccountCircle,
  Search,
  FreeBreakfast,
  LocalBar,
  FolderShared
} from '@material-ui/icons';

const routes = {
  dashboard: {
    path: '/',
    name: 'Dashboard',
    icon: Dashboard,
    component: DashboardView
  },
  info: {
    path: '/info',
    name: 'Info',
    icon: HelpOutline,
    component: InfoView
  },
  profile: {
    path: '/profiel',
    name: 'Profiel',
    icon: AccountCircle,
    component: ProfileView
  },
  search: {
    path: '/zoek',
    name: 'Zoek Lerkie',
    icon: Search,
    component: SearchView
  },
  bread: {
    path: '/brood',
    name: 'Brood',
    icon: FreeBreakfast,
    component: BreadView
  },
  kotbar: {
    path: '/kotbar',
    name: 'Kotbar',
    icon: LocalBar,
    component: KotbarView
  },
  material: {
    path: '/materiaal',
    name: 'Materiaal',
    icon: FolderShared,
    component: MaterialView
  }
};

export default routes;
