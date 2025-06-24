import { StyleSheet } from 'react-native';
import Colors from '../../theme/colors';

export const styles = StyleSheet.create({
  // Outer container that takes full screen space
  container: {
    flex: 1,
    backgroundColor: Colors.backGround,
    paddingHorizontal: 16, // horizontal padding makes content breathable on all screens
    paddingTop: 16, // some top padding for content separation
  },

  // Makes ScrollView grow only as needed, so that layout adapts based on screen height
  scrollContent: {
    flexGrow: 1, // critical for vertical scroll to work on small & landscape screens
  },

  // Title and subtitle section styling
  titleView: {
    marginBottom: 16,
    gap: 8, // consistent spacing between title and subtitle
  },

  // Main heading text
  title: {
    fontWeight: '700',
    fontSize: 24, // readable size across devices
    color: Colors.black,
  },

  // Subtitle below title
  subTitle: {
    color: Colors.subTitle,
    fontSize: 16,
  },

  // Responsive row block with border and padding
  infoRow: {
    borderRadius: 20,
    borderWidth: 2,
    borderColor: Colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16, // consistent padding that works on all screen sizes
    marginBottom: 24, // spacing below row
    backgroundColor: Colors.backGround,
  },

  // Email icon
  icon: {
    width: 50,
    height: 50,
    marginRight: 12, // spacing between icon and text
  },

  // Text section inside info row
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 1, // ensures text wraps on smaller screens instead of overflowing
  },

  // Email title label
  emailTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.black,
  },

  // Email subtitle (user email)
  emailSubTitle: {
    fontSize: 14,
    color: Colors.subTitle,
  },

  // Button placed at bottom – works well on all devices
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 16, // vertical padding for click area
    alignItems: 'center',
    borderRadius: 24,
    marginBottom: 16, // spacing from bottom edge of screen
  },

  // Submit text on button
  buttonText: {
    color: Colors.subTitle,
    fontSize: 17,
    fontWeight: '600',
  },
});
