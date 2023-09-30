import { ScrollView } from 'react-native-gesture-handler';
import { Card, Text, ListItem, Avatar } from 'react-native-elements';
import { PARTNERS } from '../shared/partners';
import { useState } from 'react';

const Mission = () => {
    return (
        <Card>
            <Card.Title>Policies Of The Team</Card.Title>
            <Card.Divider />
            <Text style={{ margin: 10 }}>Homeboyz FC was formed under great
            Management,Transparency and All Individuals  willing to believe
            that all of us can make it as a team and no individual has higher 
            authority than the rest of the teammates. It was also formed while 
            respecting cultural differences and all recognising that we should
            everyone equal opportunities to play ball. Individuals at our team
            have different capabilities and we should all play as a team and lose
            as a team.
            </Text>
        </Card>
    );
};

const AboutScreen = () => {
    const [partners,setPartners] = useState(PARTNERS);
    return (
        <ScrollView>
            <Mission />
            <Card>
                <Card.Title>Community Partners</Card.Title>
                <Card.Divider />
                {partners.map(( partner ) => {
            return(
                <ListItem key={partner.id}>
                    <Avatar source={partner.image} rounded />
                    <ListItem.Content>
                        <ListItem.Title>{partner.name}</ListItem.Title>
                        <ListItem.Subtitle>
                            {partner.description}
                        </ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
                );
            }
        )}
            </Card>
        </ScrollView>
    );
}
export default AboutScreen;