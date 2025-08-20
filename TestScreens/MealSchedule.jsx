import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackedBarChart, YAxis, XAxis } from 'react-native-svg-charts';
import { G, Line } from 'react-native-svg';
import * as scale from 'd3-scale';
import Colors from '../src/theme/colors';
import { SafeAreaView } from 'react-native-safe-area-context';

const MealSchedule = () => {
  const actualData = [
    { fat: 70, protein: 80, carbs: 240 },
    { fat: 170, protein: 200, carbs: 540 },
  ];

  const [chartData, setChartData] = useState([
    { fat: 0, protein: 0, carbs: 0 },
    { fat: 0, protein: 0, carbs: 0 },
  ]);

  const labels = ['08:00–09:00', '13:00–14:00'];
  const dataX = chartData.map((_, index) => index);
  const totalKcal = chartData.map(d => d.fat + d.protein + d.carbs);

  useEffect(() => {
    const timer = setTimeout(() => {
      setChartData(actualData);
    }, 300); // Simulated animation delay
    return () => clearTimeout(timer);
  }, []);

  const ReferenceLine = ({ y }) => (
    <G>
      <Line
        x1="0"
        x2="100%"
        y1={y(1400)}
        y2={y(1400)}
        stroke="#00bfa6"
        strokeWidth="2"
      />
    </G>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.title}>Meal schedule</Text>
          <View style={styles.pillGroup}>
            <Text style={styles.pillActive}>16/8</Text>
            <Text style={styles.pill}>18/6</Text>
            <Text style={styles.pill}>3 or more</Text>
          </View>
        </View>

        <View style={styles.chartRow}>
          <YAxis
            data={[0, 400, 800, 1200, 1600]}
            svg={{ fontSize: 11, fill: '#999' }}
            contentInset={{ top: 10, bottom: 10 }}
            numberOfTicks={8}
          />

          <View style={{ flex: 1, paddingHorizontal:50 }}>
        <StackedBarChart
  style={{ height: 260 }}
  keys={['fat', 'protein', 'carbs']}
  colors={['#ffba69', '#6fe0ac', '#94d0ff']}
  data={chartData}
  contentInset={{ top: 10, bottom: 0 }}
  gridMin={0}
  gridMax={1600}
  showGrid
  extras={[ReferenceLine]}
  spacingInner={0.95}       // 👈 bars closer
  spacingOuter={0.5}       // 👈 optional left/right padding
/>

            <View style={styles.kcalTextRow}>
              {totalKcal.map((val, idx) => (
                <Text key={idx} style={styles.kcalText}>
                  {val} kcal
                </Text>
              ))}
            </View>

<XAxis
  style={{ marginTop: 10 }}
  data={dataX}
  formatLabel={(_, idx) => labels[idx]}
  contentInset={{ left: 50, right:-50  }}
  svg={{ fontSize: 12, fill: '#000', dy: 8}} // 👈 moves time labels lower
  scale={scale.scaleBand}
/>
          </View>
        </View>

        <View style={styles.legendRow}>
          <Legend color="#6fe0ac" label="Protein" />
          <Legend color="#94d0ff" label="Carbohydrate" />
          <Legend color="#ffba69" label="Fat" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const Legend = ({ color, label }) => (
  <View style={styles.legendItem}>
    <View style={[styles.legendDot, { backgroundColor: color }]} />
    <Text style={styles.legendLabel}>{label}</Text>
  </View>
);

export default MealSchedule;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: Colors.backGround,
  },
  card: {
    marginTop: 50,
    padding: 16,
    borderRadius: 12,
    backgroundColor: Colors.backGround,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontWeight: '600',
    fontSize: 16,
  },
  pillGroup: {
    flexDirection: 'row',
    gap: 8,
  },
  pill: {
    backgroundColor: Colors.backGround,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    fontSize: 12,
  },
  pillActive: {
    backgroundColor: '#00bfa6',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    fontSize: 12,
    color: '#fff',
  },
  chartRow: {
    flexDirection: 'row',
    marginTop: 10,
  },
  kcalTextRow: {
    position: 'absolute',
    top: 10,
    left: 30,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  kcalText: {
    fontSize: 12,
    color: '#2b6cb0',
    fontWeight: '600',
  },
  legendRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
    gap: 20,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  legendDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  legendLabel: {
    fontSize: 12,
    color: '#000',
  },
});
