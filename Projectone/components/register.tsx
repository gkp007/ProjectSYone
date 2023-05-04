import React from "react";
import { View, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { Email, Password, Facebook, Google, Twitter,Register, Profile } from "../src";

const RegisterScreen = () => {
  return (
    <>
      <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
        <Register width={400} height={150}/>
        <View style={{ paddingHorizontal: 25 }}>
          <Text
            style={{
              fontFamily: "Roboto-Mwdium",
              fontSize: 28,
              fontWeight: '800',
              color: '#333',
              marginBottom: 15,
              marginTop: 65,
            }}>
            Register
          </Text>

          <View
            style={{
              flexDirection: 'row',
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
              paddingBottom: 8,
              marginBottom: 25,
            }}>
              <Email width={20} height={25} style ={{paddingBottom: 50}} />
            <TextInput placeholder="Email ID" />
          </View>
          
          <View
            style={{
              flexDirection: 'row',
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
              paddingBottom: 8,
              marginBottom: 25,
            }}>
              <Profile width={20} height={25} style ={{paddingBottom: 50}} />
            <TextInput placeholder="Full Name" />
          </View>

          <View
            style={{
              flexDirection: 'row',
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
              paddingBottom: 8,
              marginBottom: 25,
            }}>
            <Password width={20} height={25} style ={{paddingBottom: 50}} />
            <TextInput
            
              placeholder="Password"
              style={{ flex: 1, paddingVertical: 0, }}
              secureTextEntry={true}              
            />
            <TouchableOpacity onPress={() => { }}>
              <Text style={{ color: '#AD40AF', fontWeight: '700', paddingTop: 16 }}>Forgot ?</Text>
            </TouchableOpacity>
          </View>

          <View>
          <TouchableOpacity onPress={() => {}} style={{
              backgroundColor: '#AD40AF',
              padding: 20,
              borderRadius: 10,
              marginBottom: 50
            }}>
            <Text style={{
                textAlign: 'center',
                fontWeight: '800',
                fontSize: 16,
                color:'white'                
              }}>Login</Text>
          </TouchableOpacity> 
         </View>

          <Text style={{textAlign: 'center', color:'#666', marginBottom: 30}} >Or, login with ...</Text>

          <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:30}} >
          <TouchableOpacity onPress={() => {}} style={{
              borderColor:'#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
              margin:5
            }}>
              <Google width={40} height={30}/>
            </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={{
              borderColor:'#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
              margin:5
            }}>
              <Facebook width={40} height={30} />
            </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={{
              borderColor:'#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
              margin:5
            }}>
               <Twitter width={40} height={30} />
            </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row', justifyContent:'center'}}>
            <Text>Already Registered?</Text>
            <TouchableOpacity onPress={() => { }}>
              <Text style={{ color: '#AD40AF', fontWeight: '700' }}>   Login</Text>
            </TouchableOpacity>

            </View>
            
        </View>
      </SafeAreaView>
    </>
  );
};

export default RegisterScreen;
