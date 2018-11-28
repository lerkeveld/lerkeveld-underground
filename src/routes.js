import BreadView from './views/BreadView';
import InfoView from './views/InfoView';
import KotbarView from './views/KotbarView';
import ProfileView from './views/ProfileView';
import MaterialView from './views/MaterialView';
import SearchView from './views/SearchView';

import AccountCircle from '@material-ui/icons/AccountCircle';
import FolderShared from '@material-ui/icons/FolderShared';
import FreeBreakfast from '@material-ui/icons/FreeBreakfast';
import HelpOutline from '@material-ui/icons/HelpOutline';
import LocalBar from '@material-ui/icons/LocalBar';
import Search from '@material-ui/icons/Search';

const routes = {
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
  },
  info: {
    path: '/info',
    name: 'Info',
    icon: HelpOutline,
    component: InfoView
  }
};

export default routes;
