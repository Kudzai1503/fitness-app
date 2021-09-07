import axios from 'axios'
import { method } from 'lodash'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import { getToken } from '../api/auth'

const CheckupScreen = () => {

    const [token, setToken] = useState()
    const api_host = 'https://sandbox-healthservice.priad.ch';
    const lang = 'en-gb';
    const format = 'json';
    const [response, setResponse] = useState()
    const [symptoms, setSymptoms] = useState(9)
    const [gender, setGender] = useState('male')
    const [year, setYear] = useState(1999)

    useEffect(() => {
        const func = () => {
            const res = getToken()
            setToken(res)
            if (res) {
                fetch(`${api_host}/symptoms?language=${lang}&format=${format}&token=${token}`, {
                    method: 'GET'
                }).then(res => {
                    setResponse(res.json())
                });
            }
        }
        func()
    }, [])

    // useEffect(()=>{
    //     const response = getToken()
        
    //     setToken(response)
    //     if (response) {
    //         axios.get(`${api_host}/symptoms?language=${lang}&format=${format}&token=${token}`)
    //         .then(function (response) {
    //             // handle success
    //             console.log(response);
    //           })
    //           .catch(function (err) {

    //             // Run into big problems when I get an error
    //             console.log("Got an error logging in, here's the message: ", err);
    //           });
    //     }
    // }, [])

    // const send_request = () =>{
    //     fetch(`https://sandbox-healthservice.priaid.ch/diagnosis?symptoms=[${symptoms}]&gender=${gender}&year_of_birth=${year}&token=${token}&format=${format}&language=${lang}`, {
    //         method: 'GET'

    //     }).then(res => {
    //         setResponse(res.json())
    //         console.log(response)
    //     });
    // }

 

    return (
        <View style={styles.container}>
            <Text>hie</Text>
            {/* <TextInput
                onChangeText={text=> setYear(text)}
                placeholder="enter year"
            />

            <Button  title="Learn More" onClick={send_request}>Send request</Button> */}
        </View>
    )
}

export default CheckupScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20
    }
})
