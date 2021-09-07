import React from 'react'
import { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import axios from 'axios'

const HealthScreen = () => {

    const [results, setResults] = useState()
    const api_url = 'https://portal.nust.ac.zw/GetContinousAssesment?searchQuery=N0125698X'

    // useEffect(()=>[
    //     axios.get(`${api_url}`).then(res=>{
    //         // save the response to state
    //         setResults(res),
    //         console.log(res)
    //     })
    // ],[])
    useEffect(() => {
        axios.get(`${api_url}`)
        .then(function (response) {
          // handle success
        //   setResults(response)
          console.log(response);
        })
    }, [])
    return (
        <View style={styles.container}>
            <Text>hie</Text>
            
        </View>
    )
}

export default HealthScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20
    }
})
