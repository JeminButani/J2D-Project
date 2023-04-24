import React, { useEffect, useState } from 'react'
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  WhatsappIcon,
  LinkedinIcon,
  TelegramIcon
} from 'react-share'

import {
  Paper,
  Typography,
  CircularProgress,
  Divider,
  Grid,
  Card,
  CardContent,
  CardMedia
} from '@material-ui/core/'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import { useParams, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

import CommentSection from './CommentSection'

import { getPost, getPostsBySearch } from '../../actions/posts'
import useStyles from './styles'

const PostDetails = () => {
  const { post, posts, isLoading } = useSelector(state => state.posts)
  const dispatch = useDispatch()
  const history = useNavigate()
  const classes = useStyles()
  const { id } = useParams()

  useEffect(() => {
    dispatch(getPost(id))
  }, [id])

  useEffect(() => {
    if (post) {
      dispatch(getPostsBySearch({ search: 'none', tags: post?.tags.join(',') }))
    }
  }, [post])

  if (!post) return null

  const openPost = _id => history.push(`/posts/${_id}`)

  if (isLoading) {
    return (
      <Paper elevation={6} className={classes.loadingPaper}>
        <CircularProgress size='7em' />
      </Paper>
    )
  }

  const recommendedPosts = posts.filter(({ _id }) => _id !== post._id)

  return (
    <Paper style={{ padding: '20px', borderRadius: '15px' }} elevation={6}>
      <div className={classes.card}>
        <div className={classes.section}>
          <Typography variant='h3' component='h2'>
            {post.title}
          </Typography>
          <Typography
            gutterBottom
            variant='h6'
            color='textSecondary'
            component='h2'
          >
            {post.tags.map(tag => `#${tag} `)}
          </Typography>
          <div className={classes.share}>
            <FacebookShareButton
              className={classes.shareButton}
              url={window.location.href}
              quote={post.title}
              hashtag={post.tags.map(tag => `#${tag} `)}
            >
              <FacebookIcon logoFillColor='white' round={true} size={36} />
            </FacebookShareButton>
            <LinkedinShareButton
              className={classes.shareButton}
              url={window.location.href}
              title={post.title}
              summary={post.message.split(' ').splice(0, 20).join(' ') + '...'}
            >
              <LinkedinIcon logoFillColor='white' round={true} size={36} />
            </LinkedinShareButton>
            <WhatsappShareButton
              className={classes.shareButton}
              url={window.location.href}
              title={post.title}
              separator={
                (post.title,
                post.message.split(' ').splice(0, 20).join(' ') + ' ')
              }
            >
              <WhatsappIcon logoFillColor='white' round={true} size={36} />
            </WhatsappShareButton>
            <TelegramShareButton
              className={classes.shareButton}
              url={window.location.href}
              title={post.title}
            >
              <TelegramIcon logoFillColor='white' round={true} size={36} />
            </TelegramShareButton>
          </div>
          <Typography
            gutterBottom
            variant='body1'
            component='p'
            style={{ overflowY: 'auto', maxHeight: '500px', scrollbarWidth:"thin" }}
          >
            {post.message}
          </Typography>
          <Typography variant='h6'>Created by: {post.name}</Typography>
          <Typography variant='body1'>
            {moment(post.createdAt).fromNow()}
          </Typography>
        </div>
        <div className={classes.imageSection}>
          <img
            className={classes.media}
            src={
              post.selectedFile ||
              'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'
            }
            alt={post.title}
          />
        </div>
      </div>
      <Divider style={{ margin: '20px 0' }} />
      <CommentSection post={post} />
      <Divider style={{ margin: '20px 0' }} />
      {!!recommendedPosts.length && (
        <div className={classes.section}>
          <Typography gutterBottom variant='h5'>
            You might also like:
          </Typography>
          <Divider />
          <div className={classes.recommendedPosts}>
            {recommendedPosts.map(
              ({ title, name, message, selectedFile, _id, tags }) => (
                <Grid
                  item
                  key={post._id}
                  xs={12}
                  sm={12}
                  md={6}
                  lg={3}
                  style={{ marginRight: '2%' }}
                >
                  <Card className={classes.card2} raised elevation={6}>
                    <Link
                      component='span'
                      name='test'
                      className={classes.link}
                      onClick={openPost}
                      to={`/posts/${_id}`}
                    >
                      <CardMedia
                        className={classes.media2}
                        image={
                          selectedFile ||
                          'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'
                        }
                        title={title}
                      />
                      <div className={classes.overlay}>
                        <Typography variant='h6'>{name}</Typography>
                        <Typography variant='body2'>
                          {moment(post.createdAt).fromNow()}
                        </Typography>
                      </div>

                      <div className={classes.details}>
                        <Typography
                          variant='body2'
                          color='textSecondary'
                          component='h2'
                        >
                          {tags.map(tag => `#${tag} `)}
                        </Typography>
                      </div>
                      <Typography
                        className={classes.title}
                        gutterBottom
                        variant='h5'
                        component='h2'
                      >
                        {title}
                      </Typography>
                      <CardContent>
                        <Typography
                          variant='body2'
                          color='textSecondary'
                          component='p'
                        >
                          {message.split(' ').splice(0, 20).join(' ')}...
                        </Typography>
                      </CardContent>
                    </Link>
                  </Card>
                </Grid>
              )
            )}
          </div>
        </div>
      )}
    </Paper>
  )
}

export default PostDetails
