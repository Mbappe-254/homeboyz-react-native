import { FlatList } from 'react-native';
import { Avatar, ListItem} from 'react-native-elements';

const DirectoryScreen = (props) => {
      const renderDirectoryItem = ({ item: homeboyz}) => {
        return(
            <ListItem>
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
                data={props.homeboyz}
                renderItem={renderDirectoryItem}
                keyExtractor={(item) => item.id.toString()}
            />
        );
};
export default DirectoryScreen;