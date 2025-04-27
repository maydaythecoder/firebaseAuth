// import React from 'react';
// import { View, StyleSheet, ScrollView, Image } from 'react-native';
// import { useRoute } from '@react-navigation/native';
// import { ThemedView } from '@/components/default/ThemedView';
// import { ThemedText } from '@/components/default/ThemedText';
// import { posts } from '@/constants/Posts';
// import { useState, useEffect } from 'react';
// import { Feed } from '@/components/Feed';

// interface RouteParams {
//   postId: number;
// }

// const PostScreen = () => {
//   const route = useRoute();
//   const { postId } = route.params as RouteParams;
//   const post = posts.find(post => post.postId === postId);
//   const imageUrl = post?.imageUrl;
//   const [Ratio, setRatio] = useState(1/2);

//   useEffect(() => {
//     if (imageUrl) {
//       Image.getSize(imageUrl, (width, height) => {
//         setRatio(width / height);
//       });
//     }
//   }, [imageUrl]);

//   return (
//     <ThemedView style={styles.container}>
//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         <ThemedView style={[styles.imageContainer, { aspectRatio: Ratio }]}>
//           <Image 
//             source={{ uri: imageUrl }} 
//             style={[styles.image, { aspectRatio: Ratio }]} 
//             resizeMode="contain" 
//           />
//         </ThemedView>
//         <ThemedView style={styles.SecondaryFeedContainer}>
//           <ThemedText style={styles.title}>Post {postId}</ThemedText>
//           <Feed />
//         </ThemedView>
//       </ScrollView>
//     </ThemedView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     width: '100%',
//     height: '100%'
//   },
//   scrollContainer: {
//     flexGrow: 1,
//     alignItems: 'center',
//   },
//   imageContainer: {
//     width: '100%',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 5,
//   },
//   image: {
//     width: '100%',
//     borderRadius: 25,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     alignSelf: 'flex-start',
//     marginLeft: 10,
//     marginTop: 5,
//   },
//   SecondaryFeedContainer: {
//     width: '100%',
//     alignItems: 'flex-start',
//   }
// });

// export default PostScreen; 