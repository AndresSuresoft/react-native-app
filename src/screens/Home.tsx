import { View, Text, StyleSheet } from "react-native"
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import styles from './Styles'

const Home = () => {
  const insets = useSafeAreaInsets()
  return (

    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Curso de React Native 2025</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.insetInfo}>Top: {insets.top}</Text>
        <Text style={styles.insetInfo}>buttom: {insets.top}</Text>
        <Text style={styles.insetInfo}>left: {insets.top}</Text>
        <Text style={styles.insetInfo}>right: {insets.top}</Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Digital Academy 2025
        </Text>
      </View>
    </View>
  )
}

export default Home;


