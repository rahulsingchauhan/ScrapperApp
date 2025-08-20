import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Svg, Line, Rect, Circle } from 'react-native-svg';
import { SafeAreaView } from 'react-native-safe-area-context';

// Meal intervals data (time in 24hr format)
const mealData = {
  Mon: [{ start: 8, end: 22, color: '#2ecc71' }],
  Tue: [{ start: 10, end: 18, color: '#e67e22' }],
  Wed: [
    { start: 7, end: 9, color: '#e74c3c' },
    { start: 12, end: 22, color: '#2ecc71' },
  ],
  Thu: [{ start: 9, end: 17, color: '#3498db' }],
  Fri: [{ start: 8, end: 14, color: '#3498db' }],
  Sat: [{ start: 9, end: 18, color: '#2ecc71' }],
  Sun: [
    { start: 10, end: 12, color: '#e74c3c' },
    { start: 18, end: 22, color: '#e67e22' },
  ],
};

const timeLabels = [
  '22:00',
  '20:00',
  '18:00',
  '16:00',
  '14:00',
  '12:00',
  '10:00',
  '08:00',
  '06:00',
];

const MealTime = () => {
  const chartHeight = 260;
  const chartWidth = 320;
  const days = Object.keys(mealData);

  // Convert hours to Y scale (fixed mapping)
  const hourToY = (hour) => {
    const minHour = 6;
    const maxHour = 22;
    const totalRange = maxHour - minHour; // 16 hours
    return ((maxHour - hour) / totalRange) * chartHeight;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Meal time</Text>
          <Text style={styles.link}>This Week</Text>
        </View>
        <Text style={styles.avg}>
          Average time between meals:{' '}
          <Text style={styles.highlight}>6 hours</Text>
        </Text>

        {/* Chart */}
        <View style={styles.chartRow}>
          {/* Y Axis */}
          <View style={styles.yAxis}>
            {timeLabels.map((label, idx) => (
              <Text key={idx} style={styles.yLabel}>
                {label}
              </Text>
            ))}
          </View>

          {/* Bars + Background */}
          <Svg height={chartHeight} width={chartWidth}>
            {days.map((day, i) => {
              const colWidth = chartWidth / days.length;
              const xCenter = colWidth * i + colWidth / 2;

              // Intervals sorted by start time
              const intervals = mealData[day].sort((a, b) => a.start - b.start);

              if (intervals.length === 0) return null;

              // Continuous line from first start to last end
              const fullStart = intervals[0].start;
              const fullEnd = intervals[intervals.length - 1].end;

              return (
                <React.Fragment key={day}>
                  {/* Background column */}
                  <Rect
                    x={colWidth * i + 5}
                    y={0}
                    width={colWidth - 10}
                    height={chartHeight}
                    fill="#f3f3f3"
                    rx={8}
                  />

                  {/* Single continuous line */}
                  <Line
                    x1={xCenter}
                    x2={xCenter}
                    y1={hourToY(fullStart)}
                    y2={hourToY(fullEnd)}
                    stroke={intervals[0].color}
                    strokeWidth={5}
                    strokeLinecap="round"
                  />

                  {/* Start dot */}
                  <Circle
                    cx={xCenter}
                    cy={hourToY(fullStart)}
                    r={6}
                    fill="#00BFFF"
                  />

                  {/* End dot */}
                  <Circle
                    cx={xCenter}
                    cy={hourToY(fullEnd)}
                    r={6}
                    fill="#00BFFF"
                  />
                </React.Fragment>
              );
            })}
          </Svg>
        </View>

        {/* X Axis */}
        <View style={styles.xLabels}>
          {days.map((day, idx) => (
            <Text key={idx} style={styles.xLabel}>
              {day}
            </Text>
          ))}
        </View>

        {/* Legend */}
        <View style={styles.legendRow}>
          <Legend color="#2ecc71" label="8 or more hours" />
          <Legend color="#e67e22" label="4 to 6 hours" />
          <Legend color="#3498db" label="2 to 4 hours" />
          <Legend color="#e74c3c" label="Less than 2 hours" />
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

export default MealTime;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: '#f8f9fb',
  },
  card: {
    marginTop: 40,
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  title: {
    fontWeight: '700',
    fontSize: 16,
  },
  link: {
    fontSize: 16,
    color: '#80879cff',
    fontWeight: '600',
  },
  avg: {
    fontSize: 16,
    color: '#555',
    marginBottom: 16,
    
  },
  highlight: {
    color: '#3366ff',
    fontWeight: '600',
  },
  chartRow: {
    flexDirection: 'row',
    marginBottom: 8,
    marginTop: 10,

  },
  yAxis: {
    justifyContent: 'space-between',
    marginRight: 8,
    height: 260,
  },
  yLabel: {
    fontSize: 11,
    color: '#777',
    
  },
  xLabels: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    marginLeft:40
    
  },
  xLabel: {
    fontSize: 12,
    color: '#000',
    width: 40,
    textAlign: 'center',
  },
  legendRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    flexWrap: 'wrap',
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  legendDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 5,
  },
  legendLabel: {
    fontSize: 11,
    color: '#333',
  },
});
