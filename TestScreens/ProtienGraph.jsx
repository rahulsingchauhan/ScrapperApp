import React, { useEffect, useRef, useState } from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import dayjs from 'dayjs';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../src/theme/colors';
import PrimaryButton from '../src/components/Buttons/PrimaryButton';
import fonts from '../src/utils/fonts';

const ProtienGraph = () => {
  const [dates, setDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [data, setData] = useState([197, 267, 212]);
  const labels = ['08:00–09:00', '13:00–14:00', '17:00–18:00'];
  const chartHeight = 260;
  const maxValue = 1600;

  const scrollRef = useRef(null);

  useEffect(() => {
    const startDate = dayjs().startOf('year');
    const endDate = dayjs().endOf('year');
    const tempDates = [];

    let currentDate = startDate;
    while (currentDate.isBefore(endDate) || currentDate.isSame(endDate)) {
      tempDates.push(currentDate.format('DD MMM'));
      currentDate = currentDate.add(1, 'day');
    }

    setDates(tempDates);

    const today = dayjs().format('DD MMM');
    setSelectedDate(today);

    const todayIndex = tempDates.findIndex(d => d === today);

    setTimeout(() => {
      if (scrollRef.current && todayIndex !== -1) {
        scrollRef.current.scrollTo({
          x: todayIndex * 75,
          animated: true,
        });
      }
    }, 300);
  }, []);

  const minValue = Math.min(...data);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Title}>
        <Text style={styles.headerText}>Protein</Text>
      </View>

      <ScrollView
        ref={scrollRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scroll}
      >
        {dates.map((date, index) => (
          <View
            key={index}
            style={[
              styles.dateBox,
              selectedDate === date && styles.activeDateBox,
            ]}
          >
            <TouchableOpacity onPress={() => setSelectedDate(date)}>
              <Text
                style={[
                  styles.dateText,
                  selectedDate === date && styles.activeDateText,
                ]}
              >
                {date}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <View style={styles.ChartContainer}>
        <View style={styles.TextContainer}>
          <Text style={styles.Text1}>Protein consumption (gram)</Text>
          <Text style={styles.Text2}>
            Total Consumed Protein: <Text style={styles.boldText}>676 gram</Text>
          </Text>
        </View>

        <View style={styles.customChartContainer}>
          <View style={styles.yAxis}>
            {[1600, 1400, 1200, 1000, 800, 600, 400, 200, 0].map((val, idx) => (
              <Text key={idx} style={styles.yAxisText}>
                {val}
              </Text>
            ))}
          </View>

          <View style={styles.barsContainer}>
            {data.map((value, index) => {
              const barHeight = (value / maxValue) * chartHeight;
              const isMin = value === minValue;

              return (
                <View key={index} style={styles.singleBarWrapper}>
                  <Text style={styles.barValueText}>{value}g</Text>
                  {isMin && <View style={styles.barTopLine} />}
                  <View style={[styles.bar, { height: barHeight }]} />
                  <Text style={styles.barLabel}>{labels[index]}</Text>
                </View>
              );
            })}
          </View>
        </View>
      </View>

      <View style={styles.ButtonView}>
        <PrimaryButton title="Close" borderRadius={50} backgroundColor="#6fe0acff" />
      </View>
    </SafeAreaView>
  );
};

export default ProtienGraph;

const chartHeight = 260;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: Colors.backGround,
  },
  Title: {
    marginTop: 30,
  },
  headerText: {
    fontSize: 20,
    fontFamily: fonts.BOLD,
  },
  scroll: {
    marginTop: 20,
    height: 50,
    backgroundColor: Colors.backGround,
    paddingHorizontal: 5,
  },
  dateBox: {
    width: 65,
    height: 40,
    marginRight: 10,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: Colors.input,
    backgroundColor: Colors.backGround,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeDateBox: {
    backgroundColor: '#6fe0acff',
    borderColor: '#6fe0acff',
  },
  dateText: {
    fontSize: 13,
    fontWeight: '500',
    fontFamily: fonts.REGULAR,
    textAlign: 'center',
    includeFontPadding: false,
    color: '#000',
  },
  activeDateText: {
    color: '#fff',
    fontFamily: fonts.BOLD,
  },
  ChartContainer: {
    backgroundColor: Colors.backGround,
    paddingBottom: 250,
  },
  TextContainer: {
    marginTop: 30,
    gap: 8,
  },
  Text1: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: fonts.BOLD,
  },
  Text2: {
    fontSize: 16,
    fontFamily: fonts.REGULAR,
  },
  boldText: {
    fontFamily: fonts.BOLD,
  },
  customChartContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  yAxis: {
    height: chartHeight,
    justifyContent: 'space-between',
    marginRight: 8,
  },
  yAxisText: {
    fontSize: 12,
    color: '#000',
  },
  barsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: chartHeight,
    flex: 1,
  },
  singleBarWrapper: {
    alignItems: 'center',
    width: (Dimensions.get('window').width - 80) / 3,
    marginHorizontal: 5,
    position: 'relative',
    height: chartHeight,
    justifyContent: 'flex-end',
    borderWidth:2,
    borderRadius:10,
    borderColor:Colors.subTitle

  },
  barValueText: {
    fontSize: 12,
    marginBottom: 4,
  },
  bar: {
    width: 10,
    backgroundColor: '#6fe0acff',
    borderRadius: 5,
  },
  barTopLine: {
    position: 'absolute',
    top: 205,
    width: '320%',
    height: 1.5,
    left: 5,
    backgroundColor: '#6fe0acff',
    borderRadius: 1,
  },
  barLabel: {
    fontSize: 12,
    marginTop: 4,
    textAlign: 'center',
    fontFamily: fonts.REGULAR,
  },
  ButtonView: {
    paddingBottom: 30,
  },
});
