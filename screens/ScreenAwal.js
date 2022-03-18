import React from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    StyleSheet,
} from 'react-native';
import BackImage from '../image/background/background-image.jpeg'

const ScreenAwal = ({navigation}) => {
    const [berangskuy, onChangeBerangskuy] = React.useState('');
    const [nyampe, onChangeNyampe] = React.useState('');
    const [tanggal, onChangeTanggal] = React.useState('');

    const cariData = () => {
      navigation.navigate('ScreenAkhir',{
        keberangkatan : berangskuy,
        tujuan : nyampe,
        waktu : tanggal,
      })
    }

    return (
        <ImageBackground source={BackImage} style={{flex: 1}}>
            <View style={{backgroundColor: '#5d8aa8', paddingVertical: 10, textAlign: 'center', flexDirection: "row", justifyContent: 'center'}}>
                <Text style={{fontSize: 28, fontWeight: 'bold', alignItems: 'center', textAlign: 'center', color: "white", fontFamily: "Chocin"}}>Resya.id</Text>
            </View>

            <Text style={styles.teksDiBox}>Lokasi Keberangkatan</Text>
            <TextInput 
            style={styles.inputteks} 
            placeholder='Tulis Lokasi Bandara'
            onChangeText={(text) => onChangeBerangskuy(text)}
            value={berangskuy}
            />

            <Text style={styles.teksDiBox}>Lokasi Tujuan</Text>
            <TextInput 
            style={styles.inputteks} 
            placeholder='Tulis Lokasi Bandara' 
            onChangeText={(text) => onChangeNyampe(text)}
            value={nyampe}
            />    
            
            <Text style={styles.teksDiBox}>Tanggal Keberangkatan</Text>
            <TextInput 
            style={styles.inputteks} 
            placeholder='2022-08-10 atau 2022-08-11'
            onChangeText={(text) => onChangeTanggal(text)}
            value={tanggal}
            />

            <TouchableOpacity onPress={cariData} style={{marginTop: 40, height: 35, backgroundColor: '#5d8aa8', marginHorizontal: 40, borderRadius: 25}}>
                <Text style={{justifyContent: 'center', textAlign: 'center', color: 'white', fontSize: 20}}>Simpan</Text>
            </TouchableOpacity>

            <Text style={{fontSize: 10, fontWeight: 'bold', alignItems: 'center', textAlign: 'center', color: 'white', marginTop: 350}}>Copyright by Resya Lianti 119140045</Text>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    inputteks: {
        backgroundColor: 'white', borderRadius: 3, borderWidth: 1, marginHorizontal: 40, height: 30, marginTop: 5
    },
    teksDiBox: {
        color: 'black', fontSize: 20, fontWeight: 'bold', marginLeft: 40, marginTop: 35, fontFamily: "Cochin"
    },
});

export default ScreenAwal;