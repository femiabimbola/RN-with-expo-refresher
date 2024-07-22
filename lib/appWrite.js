import { Account, Client, ID } from 'react-native-appwrite';

export const appwriteConfig = {
  endpoint: 'https://cloud.appwrite.io/v1',
  platform:'com.rockfortdigital.aora',
  projectId: "6668b05e00329eb9507f",
  databaseId: "666b6069002cb35d277c",
  userCollectionId: "666b623d002d4a07989b",
  videoCollectionId: "666b62e2003642a09b5c",
  storageId: "669d97e100196ea246b8"
}

// Init your React Native SDK
const client = new Client();
client
    .setEndpoint(appwriteConfig.endpoint) 
    .setProject(appwriteConfig.projectId) 
    .setPlatform(appwriteConfig.platform)
;

const account = new Account(client);

export const createUser = () => {
try {
  
} catch (error) {
  console.log(error)
  throw new Error(error)
}

}