import { useEffect, useState } from 'react'
import { Alert, View } from 'react-native'
import useUpdate from "../apis/useUpdate"
import AppInput from './AppInput'
import AppButton from './AppButton'
import AppActivityIndicator from './AppActivityIndicator'

const AppUpdateInput = ({ label, icon, user, attribute }) => {
    const [value, setValue] = useState("")
    const { error, isLoading, responseData, updateData } = useUpdate()
    const handelUpdate = () => {
        updateData(`/users/${user}/${attribute}`, { value })
    }

    useEffect(() => {
        responseData && alert(responseData.message)
        error && alert("check your internt connection")
    }, [error, responseData])

    const AppAlert = () =>
        Alert.alert('', 'Are you sure! you want to update your ' + label, [
            {
                text: 'Cancel',
                style: 'cancel',
            },
            { text: 'Yes', onPress: handelUpdate },
        ]);

    if (isLoading) {
        return (<AppActivityIndicator />)
    }
    else {
        return (
            <View className="flex justify-start items-center">
                <View className="my-2 w-full">
                    <AppInput
                        iconName={icon}
                        value={value}
                        onChangeText={e => { setValue(e) }}
                        placeholder={"change your " + label}
                    />
                </View>
                <AppButton
                    classname="w-20 flex justify-center items-center"
                    onPress={AppAlert} >
                    update
                </AppButton>
            </View>
        )
    }
}

export default AppUpdateInput