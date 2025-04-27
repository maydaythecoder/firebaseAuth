import { ThemedView } from "@/components/default/ThemedView";
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { ThemedText } from "@/components/default/ThemedText";
import { useState, useEffect } from 'react';

interface PostProps {
    imageUrl: string;
    postId: string;
}

export const Post = ({ imageUrl, postId }: PostProps) => {
    const router = useRouter();
    const [Ratio, setRatio] = useState(1/2);

    useEffect(() => {
        Image.getSize(imageUrl, (width, height) => {
            setRatio(width / height);
        });
    }, [imageUrl]);

    const handlePress = () => {
        router.push(`/post/${postId}`);
    };

    return (
      <ThemedView style={styles.MainPost}>
        <TouchableOpacity onPress={handlePress}>
        <Image 
          style={[styles.PostImage, { aspectRatio: Ratio }]} 
          source={{ uri: imageUrl }}
        />
        </TouchableOpacity>
        <ThemedText style={styles.PostText}>Post {postId}</ThemedText>
      </ThemedView>
    );
};

const styles = StyleSheet.create({
  MainPost: {
      width: '100%',
    },
    PostImage: {
      width: '100%',
      borderRadius: 16,
    },
    PostText: {
      fontWeight: 'bold',
    }
});