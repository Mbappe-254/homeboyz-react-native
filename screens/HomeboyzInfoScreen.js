import RenderHomeboyz from '../features/homeboyz/RenderHomeboyz';

const HomeboyzInfoScreen = ({ route}) => {
    const { homeboyz} = route.params;
    return <RenderHomeboyz homeboyz = {homeboyz} />;

}
export default HomeboyzInfoScreen;