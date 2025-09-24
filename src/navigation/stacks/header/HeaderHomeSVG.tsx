import Icon from '@react-native-vector-icons/material-design-icons'
import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Svg, { Path } from 'react-native-svg'

const { width } = Dimensions.get('window')

const HeaderHomeSVG = () => {
  const insets = useSafeAreaInsets()
  const today = new Date().toLocaleDateString('vi-VN')

  return (
    <View>
      {/* Nền xanh vẽ bằng SVG */}
      <View style={{ height: 160 + insets.top }}>
        <Svg
          height={160 + insets.top}
          width={width}
          style={StyleSheet.absoluteFill}
        >
          <Path
            d={`
              M0,0 
              H${width} 
              V120 
              Q${width / 2},200 0,120 
              Z
            `}
            fill="#1E88E5"
          />
        </Svg>

        {/* Nội dung header */}
        <View style={[styles.content, { paddingTop: insets.top + 10 }]}>
          <View style={styles.row}>
            <Icon name="menu" size={28} color="white" />
            <Text style={styles.title}>TMS APP</Text>
            <Icon name="bell-outline" size={24} color="white" />
          </View>

          <Text style={styles.dateText}>Hôm nay {today}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    position: 'absolute',
    top: 0,
    width: '100%',
    paddingHorizontal: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  dateText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
})

export default HeaderHomeSVG
