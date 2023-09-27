import { useState } from 'react';
import { FlatList } from 'react-native';
import { Avatar, ListItem} from 'react-native-elements';
import { HOMEBOYZ} from '../shared/homeboyz'

const DirectoryScreen = (navigation) => {
    const [homeboyz, setHomeboyz] = useState(HOMEBOYZ);

      const renderDirectoryItem = ({ item: homeboyz}) => {
        return(
            <ListItem onPress={() => navigation.navigate('HomeboyzInfo',{ homeboyz})}>
                <Avatar source={homeboyz.image} rounded />
                <ListItem.Content>
                    <ListItem.Title>{homeboyz.name}</ListItem.Title>
                    <ListItem.Subtitle>
                        {homeboyz.description}
                    </ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        );
      };
        return(
            <FlatList
                data={homeboyz}
                renderItem={renderDirectoryItem}
                keyExtractor={(item) => item.id.toString()}
            />
        );
};
export default DirectoryScreen;