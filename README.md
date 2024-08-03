# Record update App

1. created app using cmd
   $ npx react-native init record-update-app

2. you need to clone the app only
   $ git clone git@github.com:vishswati1011/react_native_todoapp.git

3. install package
   $ npm i

4. run on android
   $ npm react-native run-android

### create a button using TouchableOpacity

<TouchableOpacity style={styles.button} onPress={/_ your signup function _/}>
<Text style={styles.buttonText}>Sign up</Text>
</TouchableOpacity>

### style the button

const styles = StyleSheet.create({
// ...
button: {
padding: 10,
backgroundColor: 'blue', // Set the background color here
borderRadius: 5,
justifyContent: 'center', // Center the text vertically
},
buttonText: {
color: 'white', // Set the text color here
textAlign: 'center', // Center the text horizontally
},
// ...
});


## used Context to store todoItem 

## used nativebase for modal and form for frontend ui 

## used formik for form validation

## used react-native navigation 

## how to use react-native-vector-icons

   npm install react-native-vector-icons

   then manually link to android app

   go to android/app/build.gradle:

   apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"


   for ios go to Info.plist

   then add 

   <key>UIAppFonts</key>
   <array>
      <string>AntDesign.ttf</string>
      <string>Entypo.ttf</string>
      <string>EvilIcons.ttf</string>
      <string>Feather.ttf</string>
      <string>FontAwesome.ttf</string>
      <string>FontAwesome5_Brands.ttf</string>
      <string>FontAwesome5_Regular.ttf</string>
      <string>FontAwesome5_Solid.ttf</string>
      <string>Foundation.ttf</string>
      <string>Ionicons.ttf</string>
      <string>MaterialIcons.ttf</string>
      <string>MaterialCommunityIcons.ttf</string>
      <string>SimpleLineIcons.ttf</string>
      <string>Octicons.ttf</string>
      <string>Zocial.ttf</string>
      <string>Fontisto.ttf</string>
   </array>



## how to store token in react-native

   install pkg
   npm i @react-native-async-storage/async-storage
   AsyncStorage.setItem('token', 'loggedIn');
   AsyncStorage.getItem('token');



## how to add release key

   1. cd android and run cmd to create relase keystore file
   2. $  add 
   3. inside gradle.properties
      MYAPP_UPLOAD_STORE_FILE=record_app.keystore
      MYAPP_UPLOAD_KEY_ALIAS=my-alias
      MYAPP_UPLOAD_STORE_PASSWORD=myapp123
      MYAPP_UPLOAD_KEY_PASSWORD=myapp123

   4. android/app/build.gradle

      signingConfigs {
         
         release {
               if (project.hasProperty('MYAPP_UPLOAD_STORE_FILE')) {
                  storeFile file(MYAPP_UPLOAD_STORE_FILE)
                  storePassword MYAPP_UPLOAD_STORE_PASSWORD
                  keyAlias MYAPP_UPLOAD_KEY_ALIAS
                  keyPassword MYAPP_UPLOAD_KEY_PASSWORD
               }
         }
      }
      buildTypes {
         release {
               // ...
               signingConfig signingConfigs.release
         }
      }

5. last run 
   ./gradlew assembleRelease




