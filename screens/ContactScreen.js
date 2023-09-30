import { ScrollView } from 'react-native-gesture-handler';
import { Card,Text } from 'react-native-elements';

const ContactScreen = () =>{
  return(
  <ScrollView>
    <Card wrapperStyle={{margin: 20}}>
      <Card.Title>Contact Information</Card.Title>
      <Card.Divider/>
      <Text> 301 E Burnsville Pkwy</Text>
      <Text> Burnsville, MN 55337</Text>
      <Text style={{ marginBottom:10}}> U.S.A</Text>
      <Text>Phone: 1-612-458-7917</Text>
      <Text>Email: amatara1996@gmail.com</Text>

    </Card>
  </ScrollView>
  );
}
export default ContactScreen;