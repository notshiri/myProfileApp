import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ProfilePage } from '@/components/profile-page';

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f5f7fa' }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <ProfilePage />
      </ScrollView>
    </SafeAreaView>
  );
}
