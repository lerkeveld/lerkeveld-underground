import ContactPanel from './ContactPanel';
import ReceptionHours from './ReceptionHours';
import LostKey from './LostKey';
import Defects from './Defects';
import Cantusses from './Cantusses';
import Subrent from './Subrent';
import Calendar from './Calendar';
import Drive from './Drive';

export default [
    {
        key: "contact",
        panel: ContactPanel
    },
    {
        key: "calendar",
        panel: Calendar
    },
    {
        key: "drive",
        panel: Drive
    },
    {
        key: "reception",
        panel: ReceptionHours
    },
    {
        key: "defects",
        panel: Defects
    },
    {
        key: "lostkey",
        panel: LostKey
    },
    {
        key: "subrent",
        panel: Subrent
    },
    {
        key: "cantusses",
        panel: Cantusses
    }
];
