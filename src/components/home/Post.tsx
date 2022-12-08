import * as React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    useColorScheme
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { Divider } from 'react-native-paper';
import theme from '../../theme';
import { color } from 'react-native-reanimated';

type PostProps = {
    post: {
        id: string,
        user: [string, string],
        imageUrl: string,
        likes: number,
        caption: string,
        comments: [
            {
                id: string,
                user: string,
                comment: string
            }
        ],
        posted: string
    }
}

const Post = ({ post }: PostProps) => {

    return (
        <View style={{ marginBottom: 30 }}>
            <Divider />
            <PostHeader post={post} />
            <PostImage post={post} />
            <View style={{ marginHorizontal: 15, marginTop: 10 }}>
                <PostFooter />
            </View>
            <PostLikes post={post} />
            <PostCaption post={post} />
            <PostCommentSection post={post} />
            <PostComment post={post} />
        </View>

    );
};

// Post Header
const PostHeader = ({ post }: PostProps) => {
    const scheme = useColorScheme() === 'dark' ? theme.colors.offWhite : theme.colors.black
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 5,
            alignItems: 'center'
        }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <Image
                    source={{ uri: post.imageUrl }}
                    style={styles.story} />
                <Text
                    style={{
                        marginLeft: 5,
                        fontWeight: '700',
                        color: scheme
                    }}>
                    {post.user}
                </Text>
            </View>
            <TouchableOpacity>
                <Icon
                    style={styles.icon}
                    name="ellipsis-horizontal-outline"
                    size={20}
                    color={scheme}
                />
            </TouchableOpacity>
        </View>
    );
}

// Post Image
const PostImage = ({ post }: PostProps) => (
    <View
        style={{
            width: '99%',
            height: 450
        }}>
        <Image
            source={{ uri: post.imageUrl }}
            style={{
                height: '100%',
                resizeMode: 'cover'
            }} />
    </View>
);

// Post Footer
const PostFooter = () => {
    const scheme = useColorScheme() === 'dark' ? theme.colors.offWhite : theme.colors.black
    return (
        <View style={{ flexDirection: 'row' }}>
            <View
                style={{
                    flexDirection: 'row',
                    width: "32%",
                    justifyContent: 'space-between',

                }}>
                <TouchableOpacity>
                    <Icon
                        name="heart-outline"
                        size={25}
                        color={scheme}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon
                        name="chatbubble-outline"
                        size={25}
                        color={scheme}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon
                        style={styles.shareicon}
                        name="send-outline"
                        size={25}
                        color={scheme}
                    />
                </TouchableOpacity>
            </View>
            <View
                style={{
                    flex: 1,
                    alignItems: 'flex-end'
                }}>
                <TouchableOpacity>
                    <Icon
                        name="bookmark-outline"
                        size={25}
                        color={scheme}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}

// Post Likes
const PostLikes = ({ post }: PostProps) => {
    const scheme = useColorScheme() === 'dark' ? theme.colors.offWhite : theme.colors.black
    return (
        <View
            style={{
                flexDirection: 'row',
                marginTop: 4,
                marginLeft: 2
            }}>
            <Text
                style={{
                    fontWeight: '600',
                    marginLeft: 5,
                    color: scheme
                }}>
                {
                    post.likes.toLocaleString('en')
                }
                likes
            </Text>
        </View>
    );
}

// Post Caption
const PostCaption = ({ post }: PostProps) => {
    const scheme = useColorScheme() === 'dark' ? theme.colors.offWhite : theme.colors.black
    return (
        <View
            style={{
                flexDirection: 'row',
                marginTop: 5,
                marginLeft: 2
            }}>
            <Text
                style={{
                    flexWrap: 'wrap',
                    flex: 1,
                    color: scheme
                }}>
                <Text
                    style={{
                        fontWeight: '600'
                    }}>
                    {post.user}
                </Text>
                <Text> {post.caption} </Text>
            </Text>
        </View>
    );
}

// Post Comment Section

const PostCommentSection = ({ post }: PostProps) => {
    const scheme = useColorScheme() === 'dark' ? theme.colors.offWhite : theme.colors.black
    return (
        <View
            style={{
                flexDirection: 'row',
                marginTop: 5
            }}>
            {
                !!post.comments.length && (
                    <Text
                        style={{
                            color: scheme,
                            flexWrap: 'wrap',
                            flex: 1
                        }}>
                        {post.comments.length > 1 ? 'all' : ''}
                        {post.comments.length}
                        {post.comments.length > 1 ? 'commnets' : 'comment'}
                    </Text>
                )
            }
        </View>
    );
}

// Post Comment
const PostComment = ({ post }: PostProps) => {
    const scheme = useColorScheme() === 'dark' ? theme.colors.offWhite : theme.colors.black
    return (
        <>
            {
                post.comments.map((comment, index) => (
                    <View
                        key={index}
                        style={{
                            flexDirection: 'row',
                            marginTop: 5

                        }}>
                        <Text
                            style={{
                                flexWrap: 'wrap',
                                flex: 1,
                                color: scheme
                            }}>
                            <Text style={{ fontWeight: '600' }}>
                                {comment.user}
                            </Text>
                            <Text> {comment.comment} </Text>
                        </Text>
                    </View>
                ))
            }
        </>
    );
}

export default Post;

const styles = StyleSheet.create({
    story: {
        width: 35,
        height: 35,
        marginLeft: 6,
        borderWidth: 1.6,
        //borderColor: '#ff8501',
        borderRadius: 35,
    },
    icon: {
        width: 20,
        height: 20,
        marginLeft: 10
    },
    shareicon: {
        transform: [{
            rotate: '320deg'
        }],
        marginTop: -3,
    }
})
