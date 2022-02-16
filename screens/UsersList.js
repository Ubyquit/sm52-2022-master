import React, { useEffect, useState } from 'react';
import { Button } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

import firebase from '../database/firebase';


const UsersList = (props) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        firebase.db.collection("users").onSnapshot((QuerySnapshot) => {
            const users = [];
            QuerySnapshot.docs.forEach((doc) => {
                const { name, email, phone } = doc.data();
                users.push({
                    id: doc.id,
                    name,
                    email,
                    phone,
                });
            });
            setUsers("users");
        });
    }, []);

    return (
        <ScrollView>
            <Button
                onPress={() => props.navigation.navigate("CreateUserScreen")}
                title="Create new user"
            />
            {users.map((user) => {
                return (
                    <ListItem
                        key={user.id}
                        bottomDivider
                        onPress={() => {
                            props.navigation.navigate("UserDetailScreen", {
                                userId: user.id,
                            });
                        }}
                    >

                        <ListItem.Chevron />
                        <Avatar
                            source={{
                                uri: "https://www.hola.com/imagenes/estar-bien/20210217184541/gatos-gestos-lenguaje-significado/0-922-380/gatos-gestos-e.jpg",
                            }}
                            rounded
                        />
                        <ListItem.Content>
                            <ListItem.Title>{user.name}</ListItem.Title>
                            <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                );
            })}
        </ScrollView>
    );
};

export default UsersList