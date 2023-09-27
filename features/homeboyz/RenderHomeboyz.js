import { Text, View} from 'react-native';
import {Card } from 'react-native-elements';

const RenderHomeboyz = ({ homeboyz }) => {

    if(homeboyz){
        return(
            <Card containerStyle ={{ padding: 1}}>
                <Card.Image source={homeboyz.image}>
                    <View style ={{justifyContent: 'center', flex: 1}}>
                        <Text
                        style={{
                            color: 'blue',
                            textAlign: 'center',
                            fontSize: 20
                        }}
                        >
                            {homeboyz.name}
                        </Text>
                    </View>
                </Card.Image>
                <Text style={{ margin:15 }}>{homeboyz.description}</Text>
            </Card>
        );

     }
    return <View/>
}
export default RenderHomeboyz;

