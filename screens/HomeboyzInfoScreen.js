import RenderHomeboyz from '../features/homeboyz/RenderHomeboyz';

const HomeboyzInfoScreen = (props) => {
    const { homeboyz} = route.params;
    return <RenderHomeboyz homeboyz = {homeboyz} />;

}
export default HomeboyzInfoScreen;