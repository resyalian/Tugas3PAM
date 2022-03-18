import React from 'react';
import { useRoute } from '@react-navigation/native';
import {
  FlatList,
  StyleSheet, 
  Text, 
  View,
  SafeAreaView,
} from 'react-native';
import { BANDARA, MASKAPAI, JADWAL } from '../data/jadwal';

const ScreenAkhir = ({navigation}) => {
  const route = useRoute();
  return (
    <SafeAreaView >
        <View style={{backgroundColor: '#5d8aa8', paddingVertical: 10, textAlign: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 28, fontWeight: 'bold', alignItems: 'center', textAlign: 'center', color: "white", fontFamily: "Chocin"}}>Resya.id</Text>
            <Text style={{fontSize: 20, fontWeight: 'bold', alignItems: 'center', textAlign: 'center', color: "white"}}>Hasil Pencarian Penerbangan</Text>
        </View>
        <View style={{marginVertical: 20,marginHorizontal: 10,alignItems: 'center'}}>                  
            <SearchData/>
        </View>
    </SafeAreaView>
  )
  function UnvalidData() {
    return (        
      <Text style={{color: "red",fontSize: 15,fontWeight: "bold",paddingVertical: 150,}}>Maaf Hasil Pencarian Tidak Ditemukan</Text>  
    );
  }

  function DataGet (hasil){
    return (
        <FlatList
            data = {hasil}
            renderItem={({item}) => (
                <View style={{width: 350,height: 100,marginBottom: 40,borderRadius: 5,shadowOpacity: 0.5,shadowRadius: 15.5,backgroundColor: "white"}}>
                    <Text style={{position: 'absolute',left: 15,top: 5,fontWeight:'Bold'}}>{BANDARA.find(src => src.bandara_id == item.bandara_id_keberangkatan).bandara_nama}  {'->'}  {BANDARA.find(sub => sub.bandara_id === item.bandara_id_kedatangan).bandara_nama}</Text>
                    <Text style={{fontSize: 21,position: 'absolute',left: 40,top: 65,fontWeight:'Bold',}}>{MASKAPAI.find(src => src.maskapai_id === item.maskapai_id).maskapai_nama}</Text>
                    <Text style={{fontsize: 20,position: 'absolute',left: 237,top: 73,fontWeight: 'Bold',color: 'blue'}}>{JADWAL.find(src => src.tanggal === item.tanggal).tanggal}</Text>
                </View>
            )}
            keyExtractor={item => item.jadwal_id}
        />
    );
};


  function SearchData(){
    if (route.params.keberangkatan === '' || route.params.tujuan === '' || route.params.waktu === ''){
        return UnvalidData();
    }else{
        const brgkt = BANDARA.find(id => id.bandara_nama.toLowerCase() === route.params.keberangkatan.toLowerCase()).bandara_id;
        const tjn = BANDARA.find(id => id.bandara_nama.toLowerCase() === route.params.tujuan.toLowerCase()).bandara_id;
        const HasilFinal = JADWAL.filter(id => id.bandara_id_keberangkatan.toLowerCase() === brgkt.toLowerCase() && id.bandara_id_kedatangan.toLowerCase() === tjn.toLowerCase() && id.tanggal === route.params.waktu.toLowerCase());

        let findAll = (HasilFinal.length >= 1) ? DataGet(HasilFinal) : UnvalidData() ;

        return findAll;
        }
    }
}

export default ScreenAkhir;