import React, { useState } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import Input from '../../Components/Input'
import Button from '../../Components/Button'
import { connect, useDispatch } from 'react-redux';
import { ADD_LIST, GET_LIST, ADD_LIST_LOCAL } from '../actions/types';
import { updateList } from '../actions';

import DatePicker from 'react-native-datepicker'
import { log } from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');

const CreateItem = (props) => {

    const [id, setId] = useState(props.list.length)
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [time, setTime] = useState("00.00")


    return (
        <View style={styles.container}>
            <Input placeholder={'Title'}
                value={title}
                style={{ marginTop: height * 0.05 }} onChangeText={(value) => setTitle(value)} />
            <Input placeholder={'Description'}
                value={description}
                onChangeText={(value) => setDescription(value)} />
            <DatePicker
                style={{
                    width: width * 0.9,
                    height: height * 0.08,
                    backgroundColor: 'white',
                    borderRadius: 7,
                    marginBottom: height * 0.02,
                    justifyContent: 'center'
                }}
                date={time}
                mode="time"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                showIcon="true"
                customStyles={{
                    dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                    },
                    dateInput: {
                        borderWidth: 0,
                        paddingLeft: 10,
                        fontSize: 18,
                    }
                }}
                value={time}
                onDateChange={(value) => setTime(value)}
            />

            <Button text={'Add'} style={{ marginTop: height * 0.05 }} onPress={() => {
                let isValid = true;

                if (title == undefined || description == undefined) {
                    setTitle(undefined);
                    setDescription(undefined);
                    isValid = false;
                }

                if (isValid) {
                    let obj = {
                        id,
                        title,
                        description,
                        time
                    };
                    props.updateList(obj)
                    props.navigation.pop();
                }
                else {
                    alert("Please fill all fields");
                }

            }} />
        </View>
    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
    },
});

const mapStateToProps = ({ listResponse }) => {
    const { list, id } = listResponse;
    return { list, id };
};
export default connect(mapStateToProps, { updateList })(CreateItem);

