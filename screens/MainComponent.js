import { useState } from 'react';
import { HOMEBOYZ } from '../shared/homeboyz';
import DirectoryScreen from './DirectoryScreen';

const Main = () => {
    const [homeboyz,setHomeboyz] = useState(HOMEBOYZ);
    return <DirectoryScreen homeboyz={homeboyz} />;

};
export default Main;