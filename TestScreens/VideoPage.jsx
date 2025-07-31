import React, { useState, useRef } from 'react';
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../src/theme/colors';
import { ImageIndex } from '../src/assets/ImageIndex';
import fonts from '../src/utils/fonts';

const videoData = [
  {
    id: '1',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    profileImage: ImageIndex.customer,
    name: 'Rahul Singh',
    inTime: 'In Time',
    date: 'Today',
    statusIcon: ImageIndex.green,
  },
  {
    id: '2',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    profileImage: ImageIndex.customer,
    name: 'Anjali Sharma',
    inTime: 'On Time',
    date: 'Yesterday',
    statusIcon: ImageIndex.green,
  },
];

const VideoPage = () => {
  const [currentVisibleId, setCurrentVisibleId] = useState(null);
  const [muted, setMuted] = useState(true);
  const [videoProgress, setVideoProgress] = useState({});
  const [videoDuration, setVideoDuration] = useState({});

  const onViewRef = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentVisibleId(viewableItems[0].item.id);
    }
  });

  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 80 });

  const toggleMute = () => {
    setMuted(prev => !prev);
  };

  const renderItem = ({ item }) => {
    const isVisible = currentVisibleId === item.id;

    const handleProgress = (data) => {
      setVideoProgress(prev => ({
        ...prev,
        [item.id]: data.currentTime,
      }));
    };

    const handleLoad = (data) => {
      setVideoDuration(prev => ({
        ...prev,
        [item.id]: data.duration,
      }));
    };

    const progressPercent =
      ((videoProgress[item.id] || 0) / (videoDuration[item.id] || 1)) * 100;

    return (
      <View style={styles.contentContainer}>
        <View style={styles.videoBox}>
          <Video
            source={{ uri: item.videoUrl }}
            style={styles.video}
            resizeMode="cover"
            repeat
            paused={!isVisible}
            muted={!isVisible || muted}
            controls={false}
            onProgress={handleProgress}
            onLoad={handleLoad}
          />

          {isVisible && (
            <TouchableOpacity style={styles.audioButton} onPress={toggleMute}>
              <Icon
                name={muted ? 'volume-mute' : 'volume-high'}
                size={24}
                color={Colors.backGround}
              />
            </TouchableOpacity>
          )}
        </View>

        {/* Progress bar visible always, progress only if visible */}
        <View style={styles.progressBarContainer}>
          <View
            style={[
              styles.progressBar,
              {
                width: `${progressPercent}%`,
              },
            ]}
          />
        </View>

        <View style={styles.customSeparator}>
          <View style={styles.iconRowRight}>
            <TouchableOpacity><Icon name="add-circle-outline" size={24} color="white" /></TouchableOpacity>
            <TouchableOpacity> <Icon name="bookmark-outline" size={24} color="white" /></TouchableOpacity>
           
          </View>
          <View style={styles.separatorLine} />
        </View>

        <View style={styles.rowContainer}>
        <TouchableOpacity> <Image source={item.profileImage} style={styles.leftIconImage} /></TouchableOpacity> 
          <View style={styles.textColumn}>
            <Text style={styles.textLine1}>{item.name}</Text>
            <Text style={styles.textLine2}>{item.inTime}</Text>
            <Text style={styles.textLine3}>{item.date}</Text>
          </View>
          <TouchableOpacity><Image source={item.statusIcon} style={styles.rightIconImage} /></TouchableOpacity>
        </View>
        <View  style={styles.commentView}>
            <Text style={styles.commentText}>Comment :</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Colors.black} barStyle="light-content" />
      <FlatList
        data={videoData}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
      />
    </SafeAreaView>
  );
};

export default VideoPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: Colors.black,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  contentContainer: {
    marginBottom: 30,
  },
  videoBox: {
    height: 220,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 10,
    position: 'relative',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  audioButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 20,
    padding: 6,
  },
  progressBarContainer: {
    height: 3,
    width: '100%',
    backgroundColor: '#444',
    borderRadius: 2,
    overflow: 'hidden',
    marginBottom: 10,
  },
  progressBar: {
    height: '100%',
    backgroundColor: 'skyblue',
  },
  customSeparator: {
    borderRadius: 10,
    marginBottom: 20,
  },
  separatorLine: {
    height: 2,
    backgroundColor: Colors.subTitle,
    marginVertical: 20,
  },
  iconRowRight: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 16,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'space-between',
    marginTop: -20,
  },
  leftIconImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  textColumn: {
    flex: 1,
    paddingHorizontal: 10,
  },
  textLine1: {
    color: Colors.backGround,
    fontSize: 16,
    fontFamily: fonts.BOLD,
  },
  textLine2: {
    color: 'skyblue',
    fontSize: 20,
    fontFamily: fonts.BOLD,
  },
  textLine3: {
    color: Colors.subTitle,
    fontSize: 14,
    fontFamily: fonts.REGULAR,
  },
  rightIconImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    transform: [{ rotate: '90deg' }],
  },
  commentText:{
    color: Colors.subTitle,
    fontSize: 18,
    fontFamily: fonts.BOLD,
  }
});
