import {Navigation} from 'react-native-navigation';

import screen1 from './screens/screen1';
import screen2 from './screens/screen2';
import screen3 from './screens/screen3';
import screen4 from './screens/screen4';
import screen5 from './screens/screen5';
import screen6 from './screens/TestBackgroundImage';


export function registerScreens(){
    Navigation.registerComponent('screen1',()=>screen1);
    Navigation.registerComponent('screen2',()=>screen2);
    Navigation.registerComponent('screen3',()=>screen3);
    Navigation.registerComponent('screen4',()=>screen4);
    Navigation.registerComponent('screen5',()=>screen5);
    Navigation.registerComponent('screen6',()=>screen6);


}

// Navigation.startTabBasedApp({
//     tabs:[
//         {
//             label:'One',
//             screen:'screen1',
//             // icon :require('./img/checkmark.png'),
//             title:'FirstScreen',
//         },
//         {
//             label:'two',
//             screen:'screen2',
//             // icon :require('./img/checkmark.png'),
//             title:'SecondScreen',
//         }
//     ]
// })