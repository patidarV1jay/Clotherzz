import { View, Text } from 'react-native'
import React from 'react'
import { PropsType } from './types'
import styles from './TermsnConditionStyles'

const ConditionsCard = ({title, content}: PropsType) => {
  return (
    <View>
      <Text style={styles.largeText}>{title }</Text>
      <Text style={styles.smallText}>{content}</Text>
    </View>
  )
}

export default ConditionsCard