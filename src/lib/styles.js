import {Platform} from 'react-native';

// this is converted to a stylesheet internally at run time with StyleSheet.create(
export const styles = {
  // The main container
  body: {},

  // Headings
  heading1: {
    flexDirection: 'row',
    fontSize: 32,
    fontFamily: 'Hind_600SemiBold',
    lineHeight: 48,
    fontWeight: '700',
  },
  heading2: {
    flexDirection: 'row',
    fontSize: 24,
    fontFamily: 'Hind_600SemiBold',
    lineHeight: 36,
    fontWeight: '700',
  },
  heading3: {
    flexDirection: 'row',
    fontSize: 18,
    fontFamily: 'Hind_600SemiBold',
    lineHeight: 29,
    fontWeight: '700',
  },
  heading4: {
    flexDirection: 'row',
    fontSize: 16,
    fontFamily: 'Hind_500Medium',
    lineHeight: 24,
    fontWeight: '500',
  },
  heading5: {
    flexDirection: 'row',
    fontSize: 13,
    lineHeight: 20,
    fontFamily: 'Hind_500Medium',
  },
  heading6: {
    flexDirection: 'row',
    fontSize: 17,
    fontFamily: 'Hind_500Medium',
  },

  // Horizontal Rule
  hr: {
    backgroundColor: '#000000',
    height: 1,
  },

  // Emphasis
  strong: {
    fontWeight: 'bold',
    fontFamily: 'Hind_600SemiBold',
  },
  em: {
    fontStyle: 'italic',
  },
  s: {
    textDecorationLine: 'line-through',
  },

  // Blockquotes
  blockquote: {
    backgroundColor: '#F5F5F5',
    borderColor: '#CCC',
    borderLeftWidth: 4,
    marginLeft: 5,
    paddingHorizontal: 5,
  },

  // Lists
  bullet_list: {},
  ordered_list: {},
  list_item: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  // @pseudo class, does not have a unique render rule
  bullet_list_icon: {
    marginLeft: 10,
    marginRight: 10,
  },
  // @pseudo class, does not have a unique render rule
  bullet_list_content: {
    flex: 1,
  },
  // @pseudo class, does not have a unique render rule
  ordered_list_icon: {
    marginLeft: 10,
    marginRight: 10,
  },
  // @pseudo class, does not have a unique render rule
  ordered_list_content: {
    flex: 1,
  },

  // Code
  code_inline: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 4,
    ...Platform.select({
      ['ios']: {
        fontFamily: 'Hind_400Regular',
      },
      ['android']: {
        fontFamily: 'Hind_400Regular',
      },
    }),
  },
  code_block: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 4,
    ...Platform.select({
      ['ios']: {
        fontFamily: 'Hind_400Regular',
      },
      ['android']: {
        fontFamily: 'Hind_400Regular',
      },
    }),
  },
  fence: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 4,
    ...Platform.select({
      ['ios']: {
        fontFamily: 'Hind_400Regular',
      },
      ['android']: {
        fontFamily: 'Hind_400Regular',
      },
    }),
  },

  // Tables
  table: {
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 3,
  },
  thead: {},
  tbody: {},
  th: {
    flex: 1,
    padding: 5,
  },
  tr: {
    borderBottomWidth: 1,
    borderColor: '#000000',
    flexDirection: 'row',
  },
  td: {
    flex: 1,
    padding: 5,
  },

  // Links
  link: {
    fontFamily: 'Hind_600SemiBold',
    color: '#E466B5',
  },
  blocklink: {
    flex: 1,
    borderColor: '#000000',
    borderBottomWidth: 1,
  },

  // Images
  image: {
    flex: 1,
  },

  // Text Output
  text: {
    fontFamily: 'Hind_400Regular',
  },
  textgroup: {
    fontFamily: 'Hind_400Regular',
  },
  paragraph: {
    fontFamily: 'Hind_400Regular',
    marginTop: 10,
    marginBottom: 10,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
  },
  hardbreak: {
    width: '100%',
    height: 1,
  },
  softbreak: {},

  // Believe these are never used but retained for completeness
  pre: {},
  inline: {},
  span: {},
};
